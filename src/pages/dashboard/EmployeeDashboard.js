import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import ProgressTrackerBar from './ProgressTrackerBar';
import DataTableComponent from './DataTableComponent';
import { Link } from 'react-router-dom';
import './Dashboard.css'

const EmployeeDashboard = () => {
  return (
    <div className="dashboard-container">
      <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Dashboard</h3>
      <h6 className="p-mb-4">Welcome Paul, check the activities on Jobplicant so far</h6>
      {/*   ARTISAN DASHBOARD     */}
      <h6>Shown only if loggedInUser === Artisan</h6>
      <div className="row">
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comment" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Posts</h5>
                  <h4 className="font-weight-medium text-white font-size-24">19</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Clients</h5>
                  <h4 className="font-weight-medium text-white font-size-24">20</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-check" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Job Completed</h5>
                  <h4 className="font-weight-medium text-white font-size-24">28</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user-plus" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Connections</h5>
                  <h4 className="font-weight-medium text-white font-size-24">15</h4>
                </div>
                {/* <div className="mini-stat-label bg-secondary col-3 float-right">
                  <p className="mb-0">+ 12%</p>
                  <i className="pi pi-arrow-up text-white ml-2" />
                </div> */}
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
      </div>
      {/*   CORPORATE DASHBOARD     */}
      <div className="row  p-mt-3">
        <h6>Shown only if loggedInUser === Corporate</h6>
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comment" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Posts</h5>
                  <h4 className="font-weight-medium text-white font-size-24">25</h4>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Jobs</h5>
                  <h4 className="font-weight-medium text-white font-size-24">28</h4>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Applicants</h5>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user-plus" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Connections</h5>
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
        </div>
      </div>
      {/*   JOB APPLICANT DASHBOARD     */}
      <div className="row  p-mt-3">
        <h6>Shown only if loggedInUser === Job Applicant</h6>
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comment" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Posts</h5>
                  <h4 className="font-weight-medium text-white font-size-24">25</h4>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Applications</h5>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user-plus" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Connections</h5>
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
        </div>
      </div>
      {/*   CLIENT DASHBOARD     */}
      <div className="row  p-mt-3">
        <h6>Shown only if loggedInUser === Service Request</h6>
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comment" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Posts</h5>
                  <h4 className="font-weight-medium text-white font-size-24">25</h4>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-briefcase" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Job Completed</h5>
                  <h4 className="font-weight-medium text-white font-size-24">28</h4>
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
        <div className="col-xl-3 col-md-6">
          <div className="card mini-stat text-white" style={{ backgroundColor: "green", opacity: "0.8" }}>
            <div className="card-body">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user-plus" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 text-white">Connections</h5>
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
        </div>
      </div>


      <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
        {/* <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2 text-center p-rounded-lg">
            <div className="p-card-title p-px-3 p-pt-4">Welcome Jane Doe! Check the activities on Jobplicant so far</div>
            <div className="p-card-body svgimage p-pt-0">
            </div>
          </div>
        </div> */}
        <div className="p-col-12 p-lg-4 p-p-lg-1 p-py-0">
          <div className="p-card h-100 p-mt-2 p-rounded-lg">
            <div className="p-card-title cardtitle">Recent Activity</div>
            <div className="p-card-body p-card-body-Activity p-px-3">
              <span>Someone checked your profile</span>
            </div>
            <div className="p-card-body p-card-body-Activity p-px-3">
              <span>User 1223 re your profile</span>
            </div>
            <div className="p-card-body p-card-body-Activity p-px-3">
              <span>Someone checked your profile</span>
            </div>
            <div className="p-card-body p-card-body-Activity p-px-3">
              <span>Someone checked your profile</span>
            </div>
            <div className="p-card-body p-card-body-Activity p-px-3">
              <span>Someone checked your profile</span>
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2 p-rounded-lg">
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
      </div>
    </div>

  );
}

export default EmployeeDashboard;