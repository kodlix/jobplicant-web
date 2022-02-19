import React from 'react';
import ProgressTrackerBar from './ProgressTrackerBar';
import DataTableComponent from './DataTableComponent';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Dashboard</h3>
      <h6 className="p-mb-4">Activities on Jobplicant so far</h6>
      {/* <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2 text-center">
            <div className="p-card-title p-px-3 p-pt-4">Welcome Jane Doe!</div>
            <div className="p-card-body svgimage p-pt-0">
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1 p-py-0">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-title cardtitle">Recent Activity</div>
            <div className="p-card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-title cardtitle">Progress Tracker</div>
            <div className="p-card-body p-pt-0">
              <div className="progressBar-title">
                <span>
                  Profile Completion
                </span>
                <span>
                  20%
                </span>
              </div>
              <ProgressTrackerBar value={20} className="progressBar progressBar1" />
              <div className="progressBar-title">
                <span>
                  Profile Completion
                </span>
                <span>
                  40%
                </span>
              </div>
              <ProgressTrackerBar value={40} className="progressBar progressBar2" />
              <div className="progressBar-title">
                <span>
                  Profile Completion
                </span>
                <span>
                  60%
                </span>
              </div>
              <ProgressTrackerBar value={60} className="progressBar progressBar3" />
              <div className="progressBar-title">
                <span>
                  Profile Completion
                </span>
                <span>
                  80%
                </span>
              </div>
              <ProgressTrackerBar value={80} className="progressBar progressBar4" />
              <div className="progressBar-title">
                <span>
                  Profile Completion
                </span>
                <span>
                  Complete!
                </span>
              </div>
              <ProgressTrackerBar value={100} className="progressBar progressBar5" />
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-grid p-mx-0">
        <div className="p-col-12 p-lg-3 p-md-6 p-px-1 p-py-0 p-pb-md-2 p-pt-lg-2">
          <div className="p-card p-mt-2 p-p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-4">
                <i className="pi pi-user"></i>
              </div>
              <div className="col-8">
                <div className="font-size-xs text-uppercase font-weight-semi-bold">Artisans
                </div>
                <h2 className="mt-4 font-weight-bold mb-0">
                  45
                </h2>
              </div>
            </div>
            {/* <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div> */}
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-px-1 p-py-0 p-pb-md-2 p-pt-lg-2">
          <div className="p-card p-mt-2 p-p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-4">
                <i className="pi pi-user"></i>
              </div>
              <div className="col-8">
                <div className="font-size-xs text-uppercase font-weight-semi-bold">Corporate
                </div>
                <h2 className="mt-4 font-weight-bold mb-0">
                  10
                </h2>
              </div>
            </div>
            {/* <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div> */}
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-px-1 p-py-0 p-pb-md-2 p-pt-lg-2">
          <div className="p-card p-mt-2 p-p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-4">
                <i className="pi pi-user"></i>
              </div>
              <div className="col-8">
                <div className="font-size-xs text-uppercase font-weight-semi-bold">Job Seeker
                </div>
                <h2 className="mt-4 font-weight-bold mb-0">
                  67
                </h2>
              </div>
            </div>
            {/* <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div> */}
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-px-1 p-py-0 p-pb-md-2 p-pt-lg-2">
          <div className="p-card p-mt-2 p-p-3">
            <div className="d-flex align-items-center justify-content-between">
              <div className="col-4">
                <i className="pi pi-user"></i>
              </div>
              <div className="col-8">
                <div className="font-size-xs text-uppercase font-weight-semi-bold">Artisans
                </div>
                <h2 className="mt-4 font-weight-bold mb-0">
                  36
                </h2>
              </div>
            </div>
            {/* <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="p-grid p-mx-0">
        <div className="p-col-12 p-py-0 p-lg-6 p-px-1">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle">
              Earning Breakdown
            </div>
            <div className="p-card-body p-p-0">
              <LineChart />
            </div>
          </div>
        </div>
        <div className="p-col-12 p-pt-0 p-lg-6 p-px-1">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle">
              Monthly Revenue
            </div>
            <div className="p-card-body p-p-0">
              <BarChart />
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="">
        <div className="p-card p-mt-2">
          <div className="p-card-title cardtitle"> */}
      {/* Personnel Management */}
      {/* </div> */}
      <div className="p-grid p-mx-0 p-px-1 datatable-container">
        <div className="p-col-12 p-card p-px-0 p-py-0 p-mt-2 datatable-content">
          <DataTableComponent />
          {/* </div>
        </div> */}
        </div>
      </div>
      <div className="p-grid p-mx-0 p-px-1 datatable-container p-my-1">
        <div className="p-col-12 p-card p-px-0 p-py-0 p-mt-2 datatable-content">
          <DataTableComponent />
          {/* </div>
        </div> */}
        </div>
      </div>
    </div>

  );
}

export default EmployeeDashboard;