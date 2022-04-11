import CorporateJob from 'components/CorporateJob';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs } from 'store/modules/job';
import { TabView, TabPanel } from 'primereact/tabview';
import { deleteInstantJob, loadInstantJobs, loadJobsApplied } from 'store/modules/instantJob';

import './JobTab.css';
import { confirmDialog } from 'primereact/confirmdialog';
// import InstantHeader from 'pages/instant-job-hire/instant-header';

import { Link } from 'react-router-dom';
import moment from 'moment';
import { Tag } from 'primereact/tag';

const JobsTab = () => {

  const dispatch = useDispatch();

  const instantJobs = useSelector(state => state.instantJob.instantjobs);
  const appliedJobs = useSelector(state => state.instantJob.appliedJobs);
  const allJobs = useSelector(state => state.job.allJobs);

  const [limit, setLimit] = useState("")
  const [page, setPage] = useState("")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")


  // const [appliedJobs, setAppliedJobs] = useState([]);

  useEffect(() => {
    dispatch(loadJobs())
  }, []);

  useEffect(() => {
    dispatch(loadInstantJobs());
    dispatch(loadJobsApplied(page, limit, search, sort));
    // if (allJobsAppliedFor) {
    //   setAppliedJobs(allJobsAppliedFor)
    // }
  }, [])

  const deleteRequest = (id) => {
    return confirmDialog({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(deleteInstantJob(id));
        dispatch(loadInstantJobs());
      },
      reject: () => {
        return;
      }
    });
  }

  return (
    <>
      <div className="card p-mt-1 p-py-2">
        <TabView>
          <TabPanel header="Jobs Applied">
            <div className="p-col-12 p-md-9">
              <div className="card-size-list">
                {appliedJobs && appliedJobs.length > 0 && appliedJobs.map((jobApplied, index) =>
                  <div className='d-flex' key={index}>
                    <div>
                      {/* <Link to=""> */}
                      <small className="p-text-secondary">
                        <div className="d-flex justify-content-between w-100">
                          <div className='w-50'>
                            <p className="font-weight-bold app-color text-capitalize">Service : {jobApplied.service} </p>
                          </div>
                          <div>
                            <p className="font-weight-bold app-color text-capitalize">Status : {jobApplied.accepted ? <Tag className='sec-color'> Accepted</Tag> : <Tag className='bg-warning'>Waiting to be accepted</Tag>} </p>
                          </div>
                        </div>

                        <p><span className="font-weight-bold app-color text-capitalize">Location : </span> {jobApplied.location}</p>
                        <p><span className="font-weight-bold app-color text-capitalize">Description : </span> {jobApplied.description} </p>
                        <div className="p-grid">
                          <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {moment(jobApplied.startDate).format('MMMM DD, YYYY')} </div>
                          <div className="p-col-6"><span className="font-weight-bold app-color">End Date: </span> {moment(jobApplied.endDate).format('MMMM DD, YYYY')}</div>
                        </div>
                      </small>
                      {/* </Link> */}
                      <hr />
                    </div>
                  </div>
                )}
                {
                  appliedJobs?.length === 0 && <strong className="mx-auto">You are yet to apply for a job</strong>
                }
              </div>
            </div>
          </TabPanel>
          <TabPanel header="Instant Hires Created">
            <div className="p-col-12 p-md-9">
              <div className="card-size-list">
                {instantJobs && instantJobs.length > 0 && instantJobs.map(instantjob =>
                  <div className='d-flex' key={instantjob.id}>
                    <div>
                      <Link to={`/instant-hire-applicants/${instantjob.id}`}>
                        <small className="p-text-secondary">
                          <p className="font-weight-bold app-color text-capitalize">Service :  <Tag className='sec-color'> {instantjob.service}</Tag> </p>
                          <p><span className="font-weight-bold app-color text-capitalize">Location : </span> {instantjob.location}</p>
                          {/* <p><span className="font-weight-bold app-color">Time : </span>{instantjob.time} </p> */}
                          <p><span className="font-weight-bold app-color text-capitalize">Address : </span>{instantjob.address} </p>
                          <p><span className="font-weight-bold app-color text-capitalize">Phone Number : </span>{instantjob.phoneNumber} </p>
                          <p><span className="font-weight-bold app-color text-capitalize">Description : </span> {instantjob.description} </p>
                          <div className="p-grid">
                            <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {moment(instantjob.startDate).format('MMMM DD, YYYY')} </div>
                            <div className="p-col-6"><span className="font-weight-bold app-color">End Date: </span> {moment(instantjob.endDate).format('MMMM DD, YYYY')}</div>
                          </div>
                        </small></Link>
                    </div>
                    <div className="d-flex">
                      <Link to={`/instant-hire/edit/${instantjob.id}`}> <span><i className="pi pi-pencil" ></i></span></Link>
                      <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.2rem' }} onClick={() => deleteRequest(instantjob.id)}></i>
                    </div>
                    <hr />
                  </div>
                )}
                {
                  instantJobs?.length === 0 && <strong className="mx-auto">No Instant Job Created</strong>
                }
              </div>
            </div>
          </TabPanel>
        </TabView>
      </div>
      <div className="mt-3">
        <CorporateJob />
      </div>
    </>
  );
}

export default JobsTab;