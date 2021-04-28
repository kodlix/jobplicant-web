import React, { useState } from 'react';
import Biography from './Biography';
import Education from './Education';
import EditMode from './userEditMode/EditMode';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import ProfessionsOfInterest from './ProfessionsOfInterest';
import LocationOfInterest from './LocationOfInterest';
import ContactInformation from './ContactInformation';

const InfoComponent = () => {
  const toggleEditMode = (infoFromChild) => {
    // let currentStatus = componentStatus[infoFromChild.id] === infoFromChild.id ? "" : infoFromChild.id;
    // if (currentStatus) {
    //   setComponentStatus({ [infoFromChild.sectionTitle]: currentStatus })
    // }
    // else {
    //   setComponentStatus({})
    // }

  }

  const [componentStatus, setComponentStatus] = useState({});

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
    <>
      <div className="content-body">
        <Biography biography={dataFromBack?.biography} />
        <div className="p-grid">
          <div className="p-col-12 p-md-8 content-leftPanel">
            <Experience onClick={toggleEditMode} experiences={dataFromBack.experience} />
            <Education onClick={toggleEditMode} educations={dataFromBack.education} />
          </div>
          <div className="p-col-12 content-rightPanel p-md-4">
            <Skills skills={dataFromBack?.skills} />
            <Hobbies hobbies={dataFromBack?.hobbies} />
            <ProfessionsOfInterest POIs={dataFromBack?.POI} />
            <LocationOfInterest LOIs={dataFromBack?.LOI} />
            <ContactInformation contactInfo={dataFromBack?.contactInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default InfoComponent;