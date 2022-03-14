import React from 'react';
import ProgressTrackerBar from './ProgressTrackerBar';
import DataTableComponent from './DataTableComponent';
import BarChart from 'pages/dashboard/BarChart';
import LineChart from 'pages/dashboard/LineChart';

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="p-pb-2 p-mt-5"><i className="pi pi-chart-line p-pr-2"></i>Dashboard</h3>
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
      <div className="row">
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Corporate</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">197</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Artisans</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">285</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Job Seekers</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">156</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Clients</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">85</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat bg-primary text-white">
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4">
                  <img src="public/assets/images/services-icon/03.png" alt />
                </div>
                <h5 className="font-size-16 text-uppercase mt-0 text-white-50">Job Seekers</h5>
                <h4 className="font-weight-medium font-size-24">15.8 <i className="mdi mdi-arrow-up text-success ml-2" />
                </h4>
                <div className="mini-stat-label bg-info">
                  <p className="mb-0"> 00%</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5" /></a>
                </div>
                <p className="text-white-50 mb-0 mt-1">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat bg-primary text-white">
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4">
                  <img src="public/assets/images/services-icon/04.png" alt />
                </div>
                <h5 className="font-size-16 text-uppercase mt-0 text-white-50">Product Sold</h5>
                <h4 className="font-weight-medium font-size-24">2436 <i className="mdi mdi-arrow-up text-success ml-2" />
                </h4>
                <div className="mini-stat-label bg-warning">
                  <p className="mb-0">+ 84%</p>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#" className="text-white-50"><i className="mdi mdi-arrow-right h5" /></a>
                </div>
                <p className="text-white-50 mb-0 mt-1">Since last month</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      <div className="row  p-mt-3">
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comments" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Total Posts</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">187</h4>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Total Jobs</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">90</h4>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#"><i className="pi pi-chevron-right mt-1 dashboard-item" /></a>
                </div>
                <p className="dashboard-item mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Job seeker</h5>
                  <h4 className="font-weight-medium text-white font-size-24">156</h4>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#" className="text-white"><i className="pi pi-chevron-right mt-1" /></a>
                </div>
                <p className="text-white mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Clients</h5>
                  <h4 className="font-weight-medium text-white font-size-24">85</h4>
                </div>
              </div>
              <div className="pt-2">
                <div className="float-right">
                  <a href="#" className="text-white"><i className="pi pi-chevron-right mt-1" /></a>
                </div>
                <p className="text-white mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>

  );
}

export default EmployeeDashboard;