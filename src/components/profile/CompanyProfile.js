import React, { useState } from 'react';
import Biography from './Biography';
import CompanyEditMode from './CompanyEditMode';
import CompanyDetails from './CompanyDetails';
import CompanyContactInformation from './CompanyContactInformation';
import './UserProfile.css';

const UserProfile = () => {
  const [componentStatus, setComponentStatus] = useState({});
  const uploadProfilePicture = () => {
    console.log("profile");
  }
  console.log(componentStatus);

  const toggleEditMode = (e) => {
    let currentStatus = componentStatus[e.currentTarget.id] === true ? false : true;
    setComponentStatus({ [e.currentTarget.id]: currentStatus });
  }

  return (
    <>
      <div className="pattern"></div>
      <div className="background">
        <div className="content-container">
          <div className="userProfile-header">
            <span className="profilePic-container">
              <img src="../../assets/logo.png" alt="User Image" width="130" height="130" className="profile-picture" />
              <label className="profilePic-label" htmlFor="upload-button"><i className="pi pi-camera"></i></label>
            </span>
            <input
              type="file"
              id="upload-button"
              style={{ display: "none" }}
              onChange={uploadProfilePicture}
            />
            <div>
              <h3 className="username p-mr-2">RightClicks</h3>
              {!componentStatus.personalInfoEdit && <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={toggleEditMode}>&nbsp;<u>(should this be company name only or include contact person details)</u></i>}
              <div>Nigeria</div>
            </div>
          </div>
          <div>
            <div className="content-tab">
              <button>
                <i className="pi pi-info-circle"></i>
                <div className="tab-titles">Info</div>
              </button>
              <button>
                <i className="pi pi-briefcase"></i>
                <div className="tab-titles">Jobs</div>
              </button>
              <button>
                <i className="pi pi-user"></i>
                <div className="tab-titles">Contacts</div>
              </button>
              <button>
                <i className="pi pi-users"></i>
                <div className="tab-titles">Groups</div>
              </button>
            </div>
            {
              !Object.values(componentStatus).includes(true) && <div className="content-body">
                <Biography onClick={toggleEditMode} />
                <div className="p-grid">
                  <div className="p-col-12 p-md-8 content-leftPanel">
                    <CompanyDetails onClick={toggleEditMode} />
                  </div>
                  <div className="p-col-12 content-rightPanel p-md-4">
                    <CompanyContactInformation onClick={toggleEditMode} />
                  </div>
                </div>
              </div>
            }
            {
              <CompanyEditMode componentStatus={componentStatus} onClick={toggleEditMode} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
