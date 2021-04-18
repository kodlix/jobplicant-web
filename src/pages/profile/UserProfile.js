import React, { useState } from 'react';
<<<<<<< HEAD
import Biography from './Biography';
import Education from './Education';
import EditMode from './EditMode';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import ProfessionsOfInterest from './ProfessionsOfInterest';
import LocationOfInterest from './LocationOfInterest';
import ContactInformation from './ContactInformation';
=======
import { TabView, TabPanel } from 'primereact/tabview';
import InfoComponent from './InfoComponent';
>>>>>>> origin/alex/add-user-profile-and-edit-forms
import Portfolio from './Portfolio';
import './UserProfile.css';

const UserProfile = () => {
  const rating = 4.5;
  const [componentStatus, setComponentStatus] = useState({});
  const [imageSrc, setImageSrc] = useState("");
<<<<<<< HEAD
=======
  const [activeIndex, setActiveIndex] = useState();


>>>>>>> origin/alex/add-user-profile-and-edit-forms
  const uploadProfilePicture = () => {
    console.log("profile");
  }

  const handleImageExpansion = (propSrc) => {
    const src = imageSrc ? "" : propSrc;
    setImageSrc(src);
  }

  const toggleEditMode = (e) => {
    let currentStatus = componentStatus[e.currentTarget.id] === true ? false : true;
    setComponentStatus({ [e.currentTarget.id]: currentStatus });
  }

  return (
    <>
      {imageSrc &&
        <>
          <div className="portfolioItem-container">
            <img src={imageSrc} alt="Portfolio Item" width="100%" height="40%" className="portfolioItem-expanded" />
          </div>
          <div className="portfolioItem-overlay" onClick={handleImageExpansion}>
          </div>
        </>}
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
              <h3 className="username p-mr-2">Jane Doe</h3>
              {!componentStatus.personalInfoEdit && <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={toggleEditMode}>&nbsp;<u>(Edit Personal Info)</u></i>}
              <div>Photographer at UNICEF</div>
              <span>
                <div className="stars" style={{ "--rating": rating }}></div>
              </span>
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-9 content-smallscreen">
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
                <button className="tab-portfolio">
                  <i className="pi pi-images"></i>
                  <div className="tab-titles">Portfolio</div>
                </button>
              </div>
<<<<<<< HEAD
              {
                !Object.values(componentStatus).includes(true) && <div className="content-body">
                  <Biography onClick={toggleEditMode} />
                  <div className="p-grid">
                    <div className="p-col-12 p-md-8 content-leftPanel">
                      <Experience onClick={toggleEditMode} />
                      <Education onClick={toggleEditMode} />
                    </div>
                    <div className="p-col-12 content-rightPanel p-md-4">
                      <Skills onClick={toggleEditMode} />
                      <Hobbies onClick={toggleEditMode} />
                      <ProfessionsOfInterest onClick={toggleEditMode} />
                      <LocationOfInterest onClick={toggleEditMode} />
                      <ContactInformation onClick={toggleEditMode} />
                    </div>
                  </div>
                </div>
              }
              <EditMode componentStatus={componentStatus} onClick={toggleEditMode} />
=======
              <TabView activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Header I">
                  Content I
                </TabPanel>
                <TabPanel header="Header II">
                  Content II
                  </TabPanel>
                <TabPanel header="Header III">
                  Content III
                </TabPanel>
              </TabView>
              <InfoComponent toggleEditMode={toggleEditMode} componentStatus={componentStatus} />
>>>>>>> origin/alex/add-user-profile-and-edit-forms
            </div>
            {
              !componentStatus.portfolioEdit && <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel"><Portfolio expandImage={handleImageExpansion} onClick={toggleEditMode} /></div>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
