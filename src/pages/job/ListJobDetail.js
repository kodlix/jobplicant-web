import Spinner from "components/spinner/spinner.component";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import {
  apply,
  applyJob,
  applyWithCV,
  loadAppliedJobs,
  viewJob,
} from "store/modules/job";
import BackgroundImage from "../../assets/bg.png";
import parser from "html-react-parser";
import { SplitButton } from "primereact/splitbutton";
import { fetchCV } from "store/modules/cv";
import JobCvModal from "./JobCvModal";

const ListJobDetail = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [file, setFile] = React.useState(null);
  const dispatch = useDispatch();
  const history = useHistory();
  const param = useParams();
  const fileUploadRef = useRef(null);
  const splitButtonRef = useRef(null);

  const jobDetail = useSelector((state) => state.job.jobDetail);
  const jobApplicationRequest = useSelector(
    (state) => state.job.jobApplicationRequest
  );
  const jobApplicationResponse = useSelector(
    (state) => state.job.jobApplicationResponse
  );
  const uploadCvRequest = useSelector((state) => state.job.uploadCvRequest);
  const loading = useSelector((state) => state.job.loading);
  const appliedJobs = useSelector((state) => state.job.appliedJobs);

  const cvData = useSelector((state) => state.cv.data);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const onHide = () => setShowModal(false);

  // console.log("job detail ", jobDetail);
  useEffect(() => {
    console.log("confirm job detail id", param.jobListId);
    dispatch(viewJob(param.jobListId));

    dispatch(loadAppliedJobs());
  }, []);

  React.useEffect(() => {
    if (profileInfo) {
      const id = profileInfo.id;
      dispatch(fetchCV(id));
    }
  }, [profileInfo]);

  React.useEffect(() => {
    if (cvData) {
      console.log("cv data", cvData);
    }
  }, [cvData]);

  const isAppliedForJob = (jobId) => {
    const result = appliedJobs.filter((job) => job.jobId === jobId);
    return result.length > 0;
  };

  const formatValue = (value) =>
    new Intl.NumberFormat("en-US", {}).format(value);

  const options = [
    {
      label: "Generate CV from profile",
      icon: "pi pi-refresh",
      command: (e) => {
        history.push("/howtostart");
      },
    },
    {
      label: "Upload CV",
      icon: "pi pi-upload",
      command: (e) => {
        fileUploadRef.current.click();
      },
    },
  ];

  const optionsWithCVData = [
    {
      label: "Use CV to apply",
      icon: "pi pi-refresh",
      command: (e) => {
        setShowModal(true);
      },
    },
    {
      label: "Upload CV",
      icon: "pi pi-upload",
      command: (e) => {
        fileUploadRef.current.click();
      },
    },
  ];

  const handleFileChanged = (e) => {
    // console.log("file changed", e.target.files[0]);
    const selectedFile = e.target.files[0];
    if (selectedFile === null) return;

    setFile(e.target.files[0]);
  };

  const handleApplyForJob = (id) => {
    if (file !== null) {
      const formData = new FormData();
      formData.append("file", file);

      dispatch(applyWithCV(id, formData));
      return;
    }
    dispatch(apply(id, { jobId: id }));
  };

  if (jobDetail === null) return <Spinner />;

  return (
    <>
      <JobCvModal
        showModal={showModal}
        setShowModal={setShowModal}
        cvData={cvData}
        jobId={jobDetail.id}
      />
      <div style={styles.container}>
        <div className="container">
          <div className="d-flex" style={styles.topBarContainer}>
            <div className="company-logo">
              <img
                src="https://source.unsplash.com/random/100x100"
                alt="company-logo"
                style={{
                  borderRadius: "50%",
                  height: "75px",
                  justifyContent: "center",
                }}
              />
            </div>
            <div className="company-caption" style={styles.topBarTextContainer}>
              <h4 style={styles.topBarHeaderTextStyle}>{jobDetail?.title}</h4>
              <p style={styles.topBarSubHeaderTextStyle}>
                {jobDetail?.companyName}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row mt-4 mb-5">
          <div className="col-md-9">
            <div className="d-flex justify-content-end">
              <button
                onClick={() => history.goBack()}
                className="btn btn-primary"
                style={{
                  backgroundColor: "#5B2946",
                  border: "none",
                  padding: "8px 24px",
                }}
              >
                <i className="pi pi-arrow-left"></i> Back
              </button>
            </div>
            <div className="p-card p-4 mt-2">
              <h4 className="p-title">Job Description</h4>
              <p className="mt-3">
                {jobDetail.description === null
                  ? ""
                  : parser(jobDetail?.description)}
              </p>
            </div>
            {/* <div className="p-card p-4 mt-3">
              <h4 className="p-title">Skills and Qualification</h4>
              <div className="mt-3">
                <ul>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Aenean eu diam vulputate, efficitur tellus et, lacinia
                    massa.
                  </li>
                  <li>
                    Etiam condimentum risus vitae orci tincidunt, non venenatis
                    tortor dictum.
                  </li>
                  <li>Quisque a elit eget mi fringilla gravida.</li>
                  <li>Integer eleifend dui sed tristique varius.</li>
                  <li>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </li>
                  <li>
                    Aenean eu diam vulputate, efficitur tellus et, lacinia
                    massa.
                  </li>
                  <li>
                    Etiam condimentum risus vitae orci tincidunt, non venenatis
                    tortor dictum.
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Skills and Qualification</h4>
                            <div className="mt-3">
                                <ul>
                                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Aenean eu diam vulputate, efficitur tellus et, lacinia massa.</li>
                                    <li>Etiam condimentum risus vitae orci tincidunt, non venenatis tortor dictum.</li>
                                    <li>Quisque a elit eget mi fringilla gravida.</li>
                                    <li>Integer eleifend dui sed tristique varius.</li>
                                </ul>
                            </div>
                        </div> */}
            {file !== undefined && file !== null && (
              <div
                style={{
                  border: "1px dashed #aaa",
                  borderRadius: "0px",
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "8px",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}
              >
                <div>
                  <p>{file.name}</p>
                  <p>{file.size}</p>
                </div>
                <div className="p-as-center" style={{ width: "40%" }}>
                  <div className="p-d-flex justify-content-end">
                    <button
                      disabled={uploadCvRequest}
                      className="btn btn-sm btn-primary"
                      onClick={() => handleApplyForJob(jobDetail.id)}
                    >
                      {uploadCvRequest ? "Uploading..." : "Apply with CV"}
                    </button>
                  </div>
                  <div className="mt-2 text-center p-d-flex justify-content-end">
                    {" "}
                    <i
                      class="pi pi-times"
                      style={{ cursor: "pointer" }}
                      onClick={() => setFile(null)}
                    ></i>
                  </div>
                </div>
              </div>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileUploadRef}
              onChange={handleFileChanged}
              accept="pdf, docx"
            />
            {isAppliedForJob(jobDetail.id) ? (
              <div className="py-3 p-d-flex p-jc-center">
                <h4>You already applied for this job!</h4>
              </div>
            ) : (
              <SplitButton
                ref={splitButtonRef}
                label={`Apply`}
                loading={jobApplicationRequest}
                onClick={() => splitButtonRef.current.onDropdownButtonClick()}
                model={cvData !== null ? optionsWithCVData : options}
                className="btn btn-block"
                style={styles.btn}
              ></SplitButton>
            )}
            {/* <button onClick={() => handleApplyForJob(jobDetail.id)} className="btn btn-block" style={styles.btnApply}>{jobApplicationRequest ? <span><i className="pi pi-spin pi-spinner"></i> Please wait...</span> : `Apply`}</button> */}
          </div>
          <div className="col-md-3">
            <div className="p-card p-4 mt-3">
              <h4 className="p-title">Overview</h4>
              <hr />
              <div className="overview-list">
                <div className="overview-list-item" style={styles.overListItem}>
                  <p style={styles.overviewListHeader}>Offered Salary</p>
                  <p style={styles.overviewListText}>
                    &#x20A6;{formatValue(jobDetail?.minSalary)} - &#x20A6;
                    {formatValue(jobDetail?.maxSalary)}
                  </p>
                </div>
                <div className="overview-list-item" style={styles.overListItem}>
                  <p style={styles.overviewListHeader}>Industry</p>
                  <p style={styles.overviewListText}>{jobDetail?.industry}</p>
                </div>
                <div className="overview-list-item" style={styles.overListItem}>
                  <p style={styles.overviewListHeader}>Experience</p>
                  <p style={styles.overviewListText}>
                    {jobDetail?.minYearOfExperience} year(s)
                  </p>
                </div>
                <div className="overview-list-item" style={styles.overListItem}>
                  <p style={styles.overviewListHeader}>Qualification</p>
                  <p style={styles.overviewListText}>
                    {jobDetail?.minQualification}
                  </p>
                </div>
                <div className="overview-list-item" style={styles.overListItem}>
                  <p style={styles.overviewListHeader}>Job Location</p>
                  <p style={styles.overviewListText}>{jobDetail?.location}</p>
                </div>
              </div>
            </div>
            {!jobDetail.hideCompanyName && (
              <div className="p-card p-4 mt-3">
                <h4 className="p-title">Company Address</h4>
                <hr />
                <ul className="overview-list">
                  <li style={styles.contactItem}>{jobDetail?.address}</li>
                  <li style={styles.contactItem}>{jobDetail?.contactPhone}</li>
                  <li style={styles.contactItem}>{jobDetail?.email}</li>
                  <li style={styles.contactItem}>{jobDetail?.jobUrl}</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  container: {
    backgroundImage: `url(${BackgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "160px",
    position: "relative",
  },
  topBarContainer: {
    width: "600px",
    marginTop: "30px",
  },
  topBarTextContainer: {
    alignSelf: "center",
  },
  topBarHeaderTextStyle: {
    fontSize: "22px",
    fontWeight: "500",
    marginLeft: "8px",
    marginBottom: "4px",
  },
  topBarSubHeaderTextStyle: {
    color: "black",
    fontSize: "16px",
    fontWeight: "500",
    marginLeft: "8px",
  },
  btnApply: {
    backgroundColor: "#5B2946",
    color: "white",
    padding: "12px 0",
    marginTop: "10px",
    fontSize: "18px",
    fontWeight: 500,
  },
  overListItem: {
    marginBottom: "16px",
  },
  overviewListHeader: {
    fontSize: "18px",
    fontWeight: 500,
  },
  overviewListText: {
    fontSize: "16px",
    fontWeight: "normal",
  },
  contactItem: {
    marginBottom: "10px",
    fontSize: "16px",
    fontWeight: 500,
  },
  btn: {
    padding: ".375rem 0",
  },
};

export default ListJobDetail;
