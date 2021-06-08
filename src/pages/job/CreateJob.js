import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import AppNavBar from "components/AppNavBar";
import InputField from "components/InputField";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import BackgroundImage from '../../assets/bg.png'
import avatarImage from '../../assets/avatar.png'

const CreateJob = () => {
  // const loading = useSelector((state) => state.job.loading);
  // const id = useSelector((state) => state.account.profileInfo.id);
  const dispatch = useDispatch();
  const [editorHtml, setEditorHtml] = useState("");
  const [companyInfo, setCompanyInfo] = useState({});
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyInfo({ ...companyInfo, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

  const onSubmit = () => {
    console.log({ ...companyInfo, description: editorHtml })
  };

  return (
    <>
      <div className="d-flex flex-column">
        {/* <AppNavBar /> */}
        <div
          style={{
            height: "100px",
            backgroundImage: `url(${BackgroundImage})`,
            width: "100%",
            position: "relative",
          }}
        >
          <img
            src={avatarImage}
            style={{
              width: "100px",
              height: "100px",
              position: "absolute",
              bottom: "-25px",
              left: "100px",
              borderRadius: "50%",
            }}
          />
        </div>

        <div className="background">
          <div className="content-container">
            {/*  */}
            <div className="p-grid">
              <div className="p-col-12 p-md-9 content-smallscreen">
                <div className="content-body">
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-sm btn-primary">
                      <i className="pi pi-back-arrow"></i> Back
                    </button>
                  </div>
                  <div className="p-2"></div>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {/* company info */}
                    <div className="card bg-white">
                      <div className="container">
                        <div className="p-4">
                          <h5>Company Information</h5>
                          <div className="p-2"></div>
                          <div className="row">
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Company's Name
                                {errors.companyName && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.companyName.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="companyName"
                                name="name"
                                inputLabel="Company Name"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Industry
                                {errors.industry && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.industry.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="Industry"
                                name="industry"
                                inputLabel="Industry"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Address
                                {errors.address && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.address.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="address"
                                name="address"
                                inputLabel="Address"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Phone Number
                                {errors.phoneNumber && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.phoneNumber.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="phoneNumber"
                                name="phoneNumber"
                                inputLabel="Phone Number"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Email
                                {errors.email && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.email.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="email"
                                name="email"
                                inputLabel="Email"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Website
                                {errors.website && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.website.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="website"
                                name="website"
                                inputLabel="Website"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ./company info */}
                    <div className="p-2"></div>
                    {/* job info */}
                    <div className="card bg-white">
                      <div className="container">
                        <div className="p-4">
                          <h5>Job Information</h5>
                          <div className="p-2"></div>
                          <div className="row">
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Job Title
                                {errors.jobTitle && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.jobTitle.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="jobTitle"
                                name="jobTitle"
                                inputLabel="Job Title"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Contract Type
                                {errors.contractType && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.contractType.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="contractType"
                                name="contractType"
                                inputLabel="Contract Type"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Job Location
                                {errors.jobLocation && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.jobLocation.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="jobLocation"
                                name="jobLocation"
                                inputLabel="Job Location"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Minimum Qualification
                                {errors.minQualification && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.minQualification.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="minQualification"
                                name="minQualification"
                                inputLabel="Minimum Qualification"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="course">
                                Minimum Salary
                                {errors.minSalary && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.minSalary.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="minSalary"
                                name="minSalary"
                                inputLabel="Minimum Salary"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="maxSalary">
                                Maximum Salary
                                {errors.maxSalary && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.maxSalary.message}
                                  </span>
                                )}
                              </label>
                              <InputField
                                id="maxSalary"
                                name="maxSalary"
                                inputLabel="Maximum Salary"
                                register={register}
                                inputChange={handleChange}
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ./job info */}
                    <div className="p-2"></div>
                    {/* job description */}
                    <div className="card bg-white">
                      <div className="container">
                        <div className="p-4">
                          <h5>Job Description</h5>
                          <div className="p-2"></div>
                          <div className="row">
                            <div className="p-field p-col-12 p-md-12 p-sm-12">
                              {errors.jobTitle && (
                                <span className="text-danger font-weight-bold">
                                  &nbsp; {errors.jobTitle.message}
                                </span>
                              )}
                              <div style={{ height: "200px" }} id="description">
                                {/* Editor */}
                                <ReactQuill
                                  style={{ height: '100%' }}
                                  bounds={document.querySelector('#description')}
                                  theme="snow"
                                  onChange={(html) => {
                                    setEditorHtml(html);

                                  }}
                                  value={editorHtml}

                                  modules={editorModules}
                                  formats={editorFormats}
                                  placeholder="Write something..."
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  ./job description */}
                    <div className="p-2"></div>
                    {/* job vacancy */}
                    <div className="card bg-white">
                      <div className="container">
                        <div className="p-4">
                          <h5>Job Vacancy Duration</h5>
                          <div className="p-2"></div>
                          <div className="row">
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="startDate">
                                Start Date
                                {errors.startDate && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.startDate.message}
                                  </span>
                                )}
                              </label>
                              <Calendar
                                id="startDate"
                                view="month"
                                dateFormat="mm/yy"
                                yearNavigator
                                yearRange="2010:2030"
                                value={new Date(companyInfo.startDate)}
                                onSelect={(e) => {
                                  const value = new Date(e.value).toISOString();

                                  setCompanyInfo({
                                    ...companyInfo,
                                    startDate: value,
                                  });
                                  setValue("startDate", value, {
                                    shouldValidate: true,
                                  });
                                }}
                                name="startDate"
                                {...register("startDate", {
                                  required: `* Start date is required`,
                                })}
                                style={{ width: "100%" }}
                              />
                            </div>
                            <div className="p-field p-col-6 p-md-6 p-sm-12">
                              <label className="inputLabel" htmlFor="startDate">
                                End Date
                                {errors.endDate && (
                                  <span className="text-danger font-weight-bold">
                                    &nbsp; {errors.endDate.message}
                                  </span>
                                )}
                              </label>
                              <Calendar
                                id="endDate"
                                view="month"
                                dateFormat="mm/yy"
                                yearNavigator
                                yearRange="2010:2030"
                                value={new Date(companyInfo.endDate)}
                                onSelect={(e) => {
                                  const value = new Date(e.value).toISOString();

                                  setCompanyInfo({
                                    ...companyInfo,
                                    endDate: value,
                                  });
                                  setValue("endDate", value, {
                                    shouldValidate: true,
                                  });
                                }}
                                name="startDate"
                                {...register("endDate", {
                                  required: `* End date is required`,
                                })}
                                style={{ width: "100%" }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* ./job vacancy */}
                    <div className="p-2"></div>
                    <div className="d-flex justify-content-end">
                      <Button
                        icon="pi pi-check"
                        iconPos="left"
                        label="Create"
                        id="saveButton"
                        type="submit"
                      />
                    </div>
                    {/* button */}
                  </form>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

const editorModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

const editorFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default CreateJob;