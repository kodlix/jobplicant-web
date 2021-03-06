import React, { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import InstantHeader from "pages/instant-job-hire/instant-header";
import { Button } from "primereact/button";
import { applyInstantJob, fetchAllInstantJobs } from "store/modules/instantJob";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { confirmDialog } from "primereact/confirmdialog";

import "./Instant-Jobs.css";
import RecentInstantJobs from "./Recent_instant_Jobs";
import { Tag } from "primereact/tag";
import agent from "../../services/agent.service";

const InstantJobs = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [take, setTake] = useState(10);
  const toast = useRef(null);
  const [isApplied, setIsApplied] = useState(false);
  const allInstantJobs = useSelector(
    (state) => state.instantJob.allCurrentInstantJobs
  );
  const applicants = useSelector((state) => state.instantJob.applicants);

  const requestedId = agent.Auth.current().id;

  useEffect(() => {
    dispatch(fetchAllInstantJobs(page, take));
  }, [dispatch]);

  useEffect(() => {
    // dispatch(loadApplicants())
  }, [dispatch]);

  const handleApply = (id, i) => {
    confirmDialog({
      message: "You are about to apply for this job?",
      header: "Confirmation",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        dispatch(applyInstantJob(id));
        const element = document.getElementById(i);
        const element2 = document.getElementById(`${i}_int`);

        element.hidden = false;
        element2.hidden = true;
      },
      reject: () => {
        return;
      },
    });
  };

  return (
    <div className="background">
      <div className="instant">
        <div className="content-container">
          <div className="p-grid">
            <div className="p-col-12 p-md-9">
              <div className="card card-size-list">
                <InstantHeader
                  title="All Instant Jobs"
                  showCreateButton={false}
                  count={allInstantJobs?.length}
                  showSearchBar={true}
                />
                {allInstantJobs &&
                  allInstantJobs.length > 0 &&
                  allInstantJobs.map((instantjob, i) => (
                    <div className="">
                      <div className="panel-login text-center"></div>
                      <div className="highlight-card p-p-2">
                        <div
                          className="row"
                          style={{ flexWrap: "nowrap !important" }}
                        >
                          <div className="col-2">
                            {instantjob.poster !== undefined ? (
                              <img
                                src={instantjob.poster?.imageUrl}
                                className="img-fluid rounded-circle"
                                alt="user-image"
                                style={{ width: "70px", height: "70px" }}
                              />
                            ) : (
                              <img
                                src="../assets/images/logo/applogo.jpeg"
                                className="img-fluid rounded-circle"
                                alt="user-image"
                                style={{ width: "70px", height: "70px" }}
                              />
                            )}
                          </div>
                          {/* <div className="p-2" ></div> */}
                          <div className="col-10">
                            <small className="p-text-secondary">
                              {/* <Link className="p-text-secondary" to={'#'}> */}

                              <p className="font-weight-bold ">
                                Services :{" "}
                                <span
                                  className="app-color text-capitalize"
                                  style={{ fontSize: 15 }}
                                >
                                  {" "}
                                  {instantjob.service}
                                </span>
                              </p>
                              <p>
                                <span className="font-weight-bold text-capitalize">
                                  Location :{" "}
                                </span>
                                <span>{instantjob.location}</span>{" "}
                              </p>
                              <p>
                                <span className="font-weight-bold text-capitalize">
                                  Description :{" "}
                                </span>{" "}
                                {instantjob.description}
                              </p>
                              <p>
                                <span className="font-weight-bold">
                                  Phone Number :{" "}
                                </span>{" "}
                                {instantjob.phoneNumber}
                              </p>
                              <div className="p-grid">
                                <div className="p-col-4">
                                  <span className="font-weight-bold">
                                    Start Date:{" "}
                                  </span>{" "}
                                  {moment(instantjob.startDate).format(
                                    "MMMM DD, YYYY"
                                  )}{" "}
                                </div>
                                <div className="p-col-6">
                                  <span className="font-weight-bold">
                                    End Date:{" "}
                                  </span>{" "}
                                  {moment(instantjob.endDate).format(
                                    "MMMM DD, YYYY"
                                  )}
                                </div>
                              </div>
                              {/* </Link> */}
                              <div
                                className="p-grid p-pt-2"
                                id={`${i}_int`}
                                hidden={false}
                              >
                                <div className="offset-md-5 p-pr-2 d-flex">
                                  {requestedId !== instantjob.accountId && (
                                    <p>
                                      {" "}
                                      <span className="font-weight-bold app-color p-mt-2 interest-tx">
                                        {" "}
                                        Interested ? &nbsp;{" "}
                                      </span>{" "}
                                    </p>
                                  )}
                                </div>
                                {requestedId !== instantjob.accountId && (
                                  <div>
                                    <Button
                                      label="Yes"
                                      id="saveButton"
                                      className="p-button-sm"
                                      onClick={() =>
                                        handleApply(instantjob.id, i)
                                      }
                                    />
                                  </div>
                                )}
                                <div className="p-pr-1 px-2">
                                  {" "}
                                  <Link
                                    to={`/instant-hire/view/${instantjob.id}`}
                                  >
                                    <Button
                                      label="View"
                                      id="reject"
                                      className="p-button-sm"
                                    />{" "}
                                  </Link>
                                </div>
                              </div>
                              <p className="p-pt-2 float-right">
                                {" "}
                                {moment(instantjob.createdAt).fromNow()}{" "}
                              </p>

                              <div
                                className="p-grid p-pt-2"
                                id={`${i}`}
                                hidden={true}
                              >
                                <Tag>
                                  {" "}
                                  <span>Waiting to be accepted...</span>
                                </Tag>
                              </div>

                              {/* {applicant.accepted && <div className="p-grid p-pl-5 p-pb-2">
                                                            <div className="p-pr-2">
                                                                <Tag> <span >Accepted</span></Tag>
                                                            </div>
                                                        </div>} */}
                            </small>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </div>
                  ))}
              </div>
            </div>
            <RecentInstantJobs />
          </div>
        </div>
      </div>
      <div className="p-grid">
        <div className="col-12">
          <div className="pagination center p-mb-1">
            <Button label="Load more" className="p-button-sm" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstantJobs;
