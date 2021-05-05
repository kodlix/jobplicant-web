import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CompanyEditMode from './companyInfo/companyEditMode/CompanyEditMode';
import CompanyInfoComponent from './companyInfo/CompanyInfoComponent';
import CompanyPersonalInfo from './companyInfo/CompanyPersonalInfo';
import CompanyTabComponent from './CompanyTabComponent';
import '../UserProfile.css';

const CompanyProfile = () => {
  const dataFromBack = {
    companyBiography: "companyLorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.",
    companyDetails: { industry: { name: 'Networking', id: 'NY1' }, dateOfEstablishment: "2012-10-05T14:48:00.000Z", numberOfEmployees: 23, contactPerson: "Jane Doe", regNo: "hfg-2222" },
    companyContactInfo: { phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", city: "ikeja", state: { name: 'Lagos', id: 'NY2' }, country: { name: 'Nigeria', id: 'NY1' }, companyURL: "www.example.com", address: "No. 4, Isaac John Street" },
    companyPersonalInfo: { nothing: "yet" }
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
              <CompanyPersonalInfo toggleEditMode={toggleEditMode} componentStatus={componentStatus} />
            </div>
          </div>
          <div>
            <CompanyTabComponent
              toggleEditMode={toggleEditMode}
              componentStatus={componentStatus}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyProfile;
