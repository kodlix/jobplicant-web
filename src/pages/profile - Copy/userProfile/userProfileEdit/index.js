import React from 'react';
import { withRouter } from 'react-router';
import { push } from "connected-react-router";
import { useDispatch } from "react-redux";
import EditMode from '../userInfo/userEditMode/EditMode';
import editNameMap from '../userInfo/userEditMode/editNameMap.json';


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
  contactInfo: {
    phoneNo: "08124685807", emailAddress: "JaneDoe@google.com", LGA: { id: 3, name: "Arochukwu", stateId: 1 }, state: { id: 1, code: "ABI", name: "Abia State", countryId: 1 }, country: {
      capital: "Abuja",
      code: "NGA",
      id: 1,
      name: "Nigeria"
    }, postalCode: "100213", address: "No. 4, Isaac John Street"
  },
  portfolio: [{ id: "portfolio1", imageURL: "../../assets/images/breadcrumb/breadcrumb-bg.jpg" }, { id: "portfolio2", imageURL: "../../assets/images/hero/hero-image.png" }, { id: "portfolio3", imageURL: "../../assets/images/hero/home-page4.jpg" }],
  personalInfo: { firstName: "Jane", lastName: "Doe", otherNames: "Scott", dateOfBirth: "1984-10-05T14:48:00.000Z", gender: "female" }
}


const UserProfileEdit = (props) => {
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(props.location.search);
  const title = decodeURI(searchParams.get('title'));
  let data = null;

  if (title === editNameMap.biography) {
    data = dataFromBack.biography;
  }

  if (title === editNameMap.skills) {
    data = dataFromBack.skills;
  }

  if (title === editNameMap.hobbies) {
    data = dataFromBack.hobbies;
  }

  if (title === editNameMap.POI) {
    data = dataFromBack.POI;
  }

  if (title === editNameMap.LOI) {
    data = dataFromBack.LOI;
  }

  if (title === editNameMap.contactInfo) {
    data = dataFromBack.contactInfo;
  }

  if (title === editNameMap.portfolio) {
    data = dataFromBack.portfolio;
  }

  if (title === editNameMap.personalInfo) {
    data = dataFromBack.personalInfo;
  }
  return <EditMode title={title} onClose={() => dispatch(push("./userinformation"))} data={data} />;
}

export default withRouter(UserProfileEdit);
