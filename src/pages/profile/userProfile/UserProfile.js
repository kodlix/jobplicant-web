import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';
import InfoComponent from './userInfo/InfoComponent';
import Portfolio from './userInfo/Portfolio';
import TabComponent from './TabComponent';
import '../UserProfile.css';
import PersonalInfo from './userInfo/PersonalInfo';
import AppNavBar from 'components/AppNavBar';

const UserProfile = () => {
  const [componentStatus, setComponentStatus] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const [activeIndex, setActiveIndex] = useState();


  const uploadProfilePicture = () => {
    console.log("profile");
  }

  const handleImageExpansion = (propSrc) => {
    const src = imageSrc ? "" : propSrc;
    setImageSrc(src);
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

  const dataFromBack = {
    biography: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor aliquam felis, nec condimentum ipsum commodo id. Vivamus sit amet augue nec urna efficitur tincidunt. Vivamus consectetur aliquam lectus commodo viverra. Nunc eu augue nec arcu efficitur faucibus. Aliquam accumsan ac magna convallis bibendum. Quisque laoreet augue eget augue fermentum scelerisque. Vivamus dignissim mollis est dictum blandit. Nam porta auctor neque sed congue. Nullam rutrum eget ex at maximus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vestibulum lorem.",
    experience: [
      { jobTitle: "software developer1", id: "experience1", companyName: "Google1", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" },
      { jobTitle: "software developer2", id: "experience2", companyName: "Google2", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" },
      { jobTitle: "software developer3", id: "experience3", companyName: "Google3", startDate: "2011-10-05T14:48:00.000Z", endDate: "2012-10-05T14:48:00.000Z", jobCategory: { name: 'Networking', id: 'NY1' }, location: { name: "Rome", id: "RM" }, description: "In charge of google maps API" }],
    education: [{ certificateName: "Arts and Craft1", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education1" }, { certificateName: "Arts and Craft2", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education2" }, { certificateName: "Arts and Craft3", certificateTitle: { name: 'Bsc', id: 'bsc' }, yearOfGraduation: "2012-10-05T14:48:00.000Z", institutionName: "University of Lagos", country: { name: 'Nigeria', id: 'NG' }, address: "Akoka, Lagos", id: "education3" }],
    skills: [{ id: "skill1", skillName: "CSS" }, { id: "skill2", skillName: "HTML" }, { id: "skill3", skillName: "DevOps" }, { id: "skill4", skillName: "RESTAPI" }, { id: "skill5", skillName: "ReactJS" }],
    hobbies: ["hiking", "running", "dancing"],
    POI: [{ id: "Soft", POIName: "Software Developer" }],
    LOI: [{ id: "NY", LOIName: "New York" }],
    contactInfo: { phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", LGA: { name: 'Ikeja', id: 'NY3' }, state: { name: 'Lagos', id: 'NY2' }, country: { name: 'Nigeria', id: 'NY1' }, postalCode: "100213", address: "No. 4, Isaac John Street" },
    portfolio: [{ id: "portfolio1", imageURL: "../../assets/images/breadcrumb/breadcrumb-bg.jpg" }, { id: "portfolio2", imageURL: "../../assets/images/hero/hero-image.png" }, { id: "portfolio3", imageURL: "../../assets/images/hero/home-page4.jpg" }],
    personalInfo: { firstName: "Jane", lastName: "Doe", otherNames: "Scott", dateOfBirth: "1984-10-05T14:48:00.000Z", gender: "female" }
  }

  return (
    <div className="container">
      {/* <div className="pattern"> */}
        <AppNavBar />
      {/* </div> */}
      {imageSrc &&
        <>
          <div className="portfolioItem-container">
            <img src={imageSrc} alt="Portfolio Item" width="100%" height="40%" className="portfolioItem-expanded" />
          </div>
          <div className="portfolioItem-overlay" onClick={handleImageExpansion}>
          </div>
        </>}
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
              accept="image/*"
            />
            <div>
              <PersonalInfo toggleEditMode={toggleEditMode} componentStatus={componentStatus} />
              <div>Photographer at UNICEF</div>
            </div>
          </div>
          <div className="p-grid">
            <div className="p-col-12 p-md-9 content-smallscreen">
              <TabComponent />
            </div>
            {
              !componentStatus.portfolioEdit && <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel"><Portfolio expandImage={handleImageExpansion} onClick={toggleEditMode} portfolio={dataFromBack.portfolio} /></div>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
