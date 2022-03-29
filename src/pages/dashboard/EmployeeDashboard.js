import React, { useEffect, useState } from 'react';
import ProgressTrackerBar from './ProgressTrackerBar';
import './Dashboard.css'
import agentService from 'services/agent.service';
import { UserPostCount, UserContact, UserJob, UserActivities } from 'store/modules/dashboard';
import { useDispatch, useSelector } from 'react-redux';


const EmployeeDashboard = () => {

  const dispatch = useDispatch();
  const id = agentService.Auth.current().id;
  const name = agentService.Auth.current().name;
  const userPost = useSelector(state => state.dashboard.userPost);
  const userContact = useSelector(state => state.dashboard.userContact);
  const userJob = useSelector(state => state.dashboard.userJob);
  const activities = useSelector(state => state.dashboard.userActivities);
  const userActivities = activities.data

  useEffect(() => {
    dispatch(UserPostCount(id));
    dispatch(UserContact());
    dispatch(UserJob());
    dispatch(UserActivities());
  }, [])

  console.log("activity", userActivities)
  // console.log("activities", activities.data)

  return (
    <div className="dashboard-container">
      <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Dashboard</h3>
      <h6 className="p-mb-4">Welcome {name}, check the activities on Jobplicant so far</h6>
      <div className="row">
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-comment" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Posts</h5>
                  <h4 className="font-weight-medium font-size-24 dashboard-item">{userPost?.data}</h4>
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
                <p className="mb-0 mt-1 h6">Since last month</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-md-6 p-mb-2">
          <div className="card mini-stat">
            <div className="card-body dashboard-item">
              <div className="mb-4">
                <div className="float-left mini-stat-img mr-4 col-3">
                  <i className="pi pi-user-plus" style={{ fontSize: "2rem" }}></i>
                </div>
                <div>
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Connections</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">{userContact?.data}</h4>
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
                  <h5 className="font-size-16 text-uppercase mt-0 dashboard-item">Applied Jobs</h5>
                  <h4 className="font-weight-medium dashboard-item font-size-24">{userJob?.data}</h4>
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
      </div>

      <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
        <div className="p-col-12 p-lg-4 p-p-lg-1 p-py-0">
          <div className="p-card h-100 p-mt-2 p-rounded-lg">
            <div className="p-card-title cardtitle">Recent Activity</div>
            {userActivities && userActivities.length > 0 && userActivities.map(activity =>
              <div className="p-card-body p-card-body-Activity p-px-3">
                <span>{activity.message}</span>
              </div>
            )}
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