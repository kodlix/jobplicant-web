import React from 'react';
import { Link } from 'react-router-dom';
import { formatter } from 'helpers/converter';
import { Tag } from 'primereact/tag';
import { Skeleton } from 'primereact/skeleton'

import "./JobSidePanel.css";


const JobSidePanel = ({ data }) => {
  return (
    <>
      <div className="p-col-12 p-md-3 p-pr-0 p-py-md-2 p-pl-md-2 p-pl-0 p-pt-0">
        <div className="p-card">
          <div className="p-card-title cardtitle-JobPanelComponent">
            Recent Jobs
          </div>
          <div className="p-pb-2 w-100">
            {
              data?.map((job) =>
                <Link to={`/jobs/view/${job.id}`} className="p-card-body p-card-body-JobPanelComponent p-px-3" key={job.id} id={job.id}>
                  <div className="p-card-title cardbody-JobPanelComponent">
                    <div className="d-flex justify-content-between">
                      <div className="cardsubtitle-JobPanelComponent">{job.title}</div>
                      <Tag className="p-mr-2" severity="success" value={job?.contractType}></Tag>
                    </div>
                    {
                      !job.hideCompanyName &&
                      <div>
                        <i className="align-text-bottom pi  pi-briefcase p-mr-1" />
                        <b className="p-pr-1">Company:</b>
                        <span className="jobdetails-JobPanelComponent">{job.companyName}</span>
                      </div>
                    }
                    <div>
                      <i className="align-text-bottom pi pi-map-marker p-mr-1" />
                      <b className="p-pr-1">Location:</b>
                      <span className="jobdetails-JobPanelComponent">
                        {job.location}
                      </span>
                    </div>
                    <div>
                      <i className="align-text-bottom pi pi-money-bill p-mr-1" />
                      <b className="p-pr-1">Salary:</b>
                      <span className="jobdetails-JobPanelComponent">
                        {`~${formatter.toMoney((job.minSalary + job.maxSalary) / 2)}`}
                      </span>
                    </div>
                  </div>
                </Link>
              )
            }
            {
              !data.length &&
              <h6 className="p-px-3 p-pt-3 p-mb-6 p-pb-6 cardsubtitle-JobPanelComponent">
                No Recent Jobs available at the moment
              </h6>
            }
          </div>
        </div>
      </div>

    </>
  );
}

export default JobSidePanel;