import React from 'react';
// import LineChart from './LineChart';
// import BarChart from './BarChart';
import ProgressTrackerBar from './ProgressTrackerBar';
import DataTableComponent from './DataTableComponent';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 style={{ }} className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Dashboard</h3>
      <h6 style={{}} className="p-mb-4">Account activity on Jobplicant so far</h6>
      <div className="p-grid">
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2 text-center">
            <div className="p-card-title p-px-3 p-pt-4">Welcome Jane Doe!</div>
            <div className="p-card-body svgimage p-pt-0">
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-title cardtitle p-pt-2">Recent Activity</div>
            <div className="p-card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt
              quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!
              </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-title cardtitle p-pt-1">Progress Tracker</div>
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
      </div>
      <div className="p-grid">
        <div className="p-col-12 p-lg-3 p-md-6 p-pb-1 p-px-lg-3">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle p-px-3 p-pt-3 d-flex justify-content-between">
              <span>
                <p>Earnings(Monthly)</p>
                <p>$40,000</p>
              </span>
              <i className="pi pi-dollar"></i>
            </div>
            <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-pb-1 p-px-lg-3">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle p-px-3 p-pt-3 d-flex justify-content-between">
              <span>
                <p>Earnings(Monthly)</p>
                <p>$40,000</p>
              </span>
              <i className="pi pi-dollar"></i>
            </div>
            <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-pb-1 p-px-lg-3">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle p-px-3 p-pt-3 d-flex justify-content-between">
              <span>
                <p>Earnings(Monthly)</p>
                <p>$40,000</p>
              </span>
              <i className="pi pi-dollar"></i>
            </div>
            <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-3 p-md-6 p-pb-1 p-px-lg-3">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle p-px-3 p-pt-3 d-flex justify-content-between">
              <span>
                <p>Earnings(Monthly)</p>
                <p>$40,000</p>
              </span>
              <i className="pi pi-dollar"></i>
            </div>
            <div className="p-card-body d-flex justify-content-between p-py-2">
              <h6>View Report</h6>
              <i className="pi pi-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="p-grid">
        <div className="p-col-12 p-lg-6">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle">
              Earning Breakdown
            </div>
            <div className="p-card-body">
              {/* <LineChart /> */}
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-6">
          <div className="p-card p-mt-2">
            <div className="p-card-title cardtitle">
              Monthly Revenue
            </div>
            <div className="p-card-body">
              {/* <BarChart /> */}
            </div>
          </div>
        </div>
      </div>
      <div className="p-col-12">
        <div className="p-card p-mt-2">
          <div className="p-card-title cardtitle">
            Personal Management
            </div>
          <div className="p-card-body">
            <DataTableComponent />
          </div>
        </div>
      </div>
    </div>

  );
}

export default EmployeeDashboard;