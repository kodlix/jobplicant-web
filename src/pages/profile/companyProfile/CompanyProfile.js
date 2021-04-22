import React, { useState } from 'react';
import CompanyEditMode from '../companyEditMode/CompanyEditMode';
import CompanyInfoComponent from './CompanyInfoComponent';

import '../UserProfile.css';

const UserProfile = () => {
  const dataFromBack = {
    companyBiography: "companyLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.",
    companyDetails: { industry: "Softaware development", dateOfEstablishment: "2012-10-05T14:48:00.000Z", numberOfEmployees: "23", contactPerson: "Jane Doe", regNo: "hfg-2222" },
    companyContactInfo: { phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", city: "ikeja", state: { name: 'Lagos', id: 'NY2' }, country: { name: 'Nigeria', id: 'NY1' }, companyURL: "www.example.com", address: "No. 4, Isaac John Street" }
    // experience: [
    //   { jobTitle: "software developer1", id: "experience1", companyName: "Google1", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" },
    //   { jobTitle: "software developer2", id: "experience2", companyName: "Google2", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" },
    //   { jobTitle: "software developer3", id: "experience3", companyName: "Google3", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" }],
    // education: [{ certificateName: "Arts and Craft1", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education1" }, { certificateName: "Arts and Craft2", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education2" }, { certificateName: "Arts and Craft3", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education3" }],
    // skills: [{ id: "skill1", skillName: "CSS" }, { id: "skill2", skillName: "HTML" }, { id: "skill3", skillName: "DevOps" }, { id: "skill4", skillName: "RESTAPI" }, { id: "skill5", skillName: "ReactJS" }],
    // hobbies: ["hiking", "running", "dancing"],
    // POI: [{ id: "Soft", POIName: "Software Developer" }],
    // LOI: [{ id: "NY", LOIName: "New York" }],
    // contactInfo: { phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", LGA: { name: 'Ikeja', id: 'NY3' }, state: { name: 'Lagos', id: 'NY2' }, country: { name: 'Nigeria', id: 'NY1' }, postalCode: "100213", address: "No. 4, Isaac John Street" },
    // portfolio: [{ id: "portfolio1", imageURL: "../../assets/images/breadcrumb/breadcrumb-bg.jpg" }, { id: "portfolio2", imageURL: "../../assets/images/hero/hero-image.png" }, { id: "portfolio3", imageURL: "../../assets/images/hero/home-page4.jpg" }],
    // personalInfo: { firstName: "Jane", lastName: "Doe", otherNames: "Scott", dateOfBirth: "1984-10-05T14:48:00.000Z", gender: "female" }
  }
  const [componentStatus, setComponentStatus] = useState({});
  const uploadProfilePicture = () => {
    console.log("profile");
  }

  const toggleEditMode = (infoFromChild) => {
    let currentStatus = componentStatus[infoFromChild.id] === infoFromChild.id ? "" : infoFromChild.id;
    if (currentStatus) {
      setComponentStatus({ [infoFromChild.sectionTitle]: currentStatus })
    }
    else {
      setComponentStatus({})
    }
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
            <CompanyInfoComponent toggleEditMode={toggleEditMode} componentStatus={componentStatus} dataFromBack={dataFromBack} />
            {
              <CompanyEditMode componentStatus={componentStatus} onClick={toggleEditMode} dataFromBack={dataFromBack} />
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
