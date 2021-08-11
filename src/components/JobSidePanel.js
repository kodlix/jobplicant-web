import React from 'react';
import { Link } from 'react-router-dom';
import { formatter } from 'helpers/converter';
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
          <div className="p-pb-4">
            {
               data?.map((job) =>
                <Link to={`/jobs/view/${job.id}`} className="p-card-body p-card-body-JobPanelComponent p-px-3 p-pb-3" key={job.id} id={job.id}>
                  <div className="p-card-title cardsubtitle-JobPanelComponent">
                    <div> {job.title} </div>
                    <div>{`~${formatter.toMoney((job.minSalary + job.maxSalary) / 2)}`}</div>
                  </div>
                  <div className="p-card-body p-px-0 p-py-0 p-mb-2 jobDescription-JobPanelComponent" dangerouslySetInnerHTML={{ __html: job.description }} />
                  <small className="seemore-JobPanelComponent">See more...</small>
                </Link>
              )
            }
            {
              !data &&
              <h6 className="p-px-3 p-pt-3 p-mb-6 p-pb-6">
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