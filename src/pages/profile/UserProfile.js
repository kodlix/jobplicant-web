import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNavBar from "components/AppNavBar";
import SectionHeader from "./SectionHeader";
import ModalForm from "./ModalForm";
import { loadProfileInfo } from "store/modules/account";
import { openModal } from "store/modules/modal";

import Biography from "./Biography";
import Experience from "./Experience";
import Education from "./Education";
import Skills from "./Skills";
import Hobbies from "./Hobbies";
import ProfessionsOfInterest from "./ProfessionsOfInterest";
import LocationOfInterest from "./LocationOfInterest";
import ContactInformation from "./ContactInformation";
import Portfolio from "./Portfolio";
import ProfileTab from "./ProfileTab";
import PersonalInfo from "./PersonalInfo";

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState("info");
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.account.profileInfo);
  /**
   * This state allows keep track of the changes in state either updating or deleting a data in the education
   * redux file, in other to update the UI accordingly
   */
  const educationUpdatedOrDeleted = useSelector(
    (state) => state.education.updatedOrDeleted
  );
  const userSkillUpdatedOrDeleted = useSelector(
    (state) => state.userSkill.updatedOrDeleted
  );
  const experienceUpdatedOrDeleted = useSelector(state => state.experience.updatedOrDeleted);

  const [mode, setMode] = useState("");
  const [itemToEdit, setItemToEdit] = useState({});

  //formatted entries
  const [LOI, setLOI] = useState(null);
  const [interests, setInterests] = useState(null);

  useEffect(() => {
    console.log("change must happen");
    dispatch(loadProfileInfo());
<<<<<<< HEAD
  }, [educationUpdatedOrDeleted, userSkillUpdatedOrDeleted,experienceUpdatedOrDeleted]);
=======
  }, []);

  useEffect(() => {
    if (profileInfo) {
      console.log('change must happen');
    }
  }, [profileInfo]);
>>>>>>> origin/instant-hire-module-May18

  const expandImage = () => { };

  const openCreate = (name) => {
    setMode("create");
    dispatch(openModal(name));
  };

  const openEdit = (name, data) => {
    setMode("edit");
    setItemToEdit(data);
    dispatch(openModal(name));
  };

  const uploadProfilePicture = (e) => {
    console.log("files");
    console.table(e.target.files);
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
<<<<<<< HEAD
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return year + "/" + month + "/" + day;
=======
    let month = (1 + date.getMonth()).toString().padStart(2, '0');
    let day = date.getDate().toString().padStart(2, '0');

    return year + '/' + month + '/' + day;
  }


  const formatSkills = (skills) => {
    console.log(skills);
    const skillTemp =
      skills.length > 0
        ? skills.map((skill, index) => (
          <span key={index} className="skilltag">
            <i className=""></i>
            {skill.name}
          </span>
        ))
        : "No skill";
    return skillTemp;
>>>>>>> origin/instant-hire-module-May18
  };

  return (
    <>
      <div className="d-flex flex-column">
        <AppNavBar />

        <div className="background">
          <div className="content-container">
<<<<<<< HEAD
            {/* personal info */}
            <PersonalInfo
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />

            <div className="p-grid">
              <div className="p-col-12 p-md-9 content-smallscreen">
                <div className="content-tab">
                  {/* ProfileTab */}
                  <ProfileTab activeTab={activeTab} />
=======
            <div className="userProfile-header">
              <span className="profilePic-container">
                <img
                  src="../../assets/logo.png"
                  alt="User Image"
                  width="130"
                  height="130"
                  className="profile-picture"
                />
                <label className="profilePic-label" htmlFor="upload-button">
                  <i className="pi pi-camera"></i>
                </label>
              </span>
              <input
                type="file"
                id="upload-button"
                style={{ display: "none" }}
                onChange={uploadProfilePicture}
              />
              <div>
                <h3 className="username p-mr-2">
                  {profileInfo.firstName} {profileInfo.lastName}
                </h3>
                <i
                  className="pi pi-pencil p-pr-3 personalInfo-edit"
                  id="personalInfoEdit"
                // onClick={toggleEditMode}
                >
                  &nbsp;<u>(Edit Personal Info)</u>
                </i>
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
                    <i className="pi pi-info-circle text-white"></i>
                    <div className="tab-titles">Info</div>
                  </button>
                  <button>
                    <i className="pi pi-briefcase text-white"></i>
                    <div className="tab-titles">Jobs</div>
                  </button>
                  <button>
                    <i className="pi pi-user text-white"></i>
                    <div className="tab-titles">Contacts</div>
                  </button>
                  <button>
                    <i className="pi pi-users text-white"></i>
                    <div className="tab-titles">Groups</div>
                  </button>
                  <button className="tab-portfolio text-white">
                    <i className="pi pi-images"></i>
                    <div className="tab-titles">Portfolio</div>
                  </button>
>>>>>>> origin/instant-hire-module-May18
                </div>
                <div className="content-body">
                  {/* biography */}
                  <Biography
                    openCreate={openCreate}
                    openEdit={openEdit}
                    profileInfo={profileInfo}
                  />
                  <div className="p-grid">
                    <div className="p-col-12 p-md-8 content-leftPanel">
                      {/* experience */}
<<<<<<< HEAD
                      <Experience
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                        formatDate={formatDate}
                      />
                      <Education
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                        formatDate={formatDate}
                      />
                    </div>
                    <div className="p-col-12 content-rightPanel p-md-4">
                      {/* skills */}
                      <Skills
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
=======
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="star-o"
                          sectionTitle="Experience"
                          id="experienceEdit"
                          showAddButton="true"
                          openModalOnCreate={() =>
                            openCreate(PROFILE.EXPERIENCE)
                          }
                          openModalOnEdit={() => openEdit(PROFILE.EXPERIENCE)}
                        />
                        {profileInfo.experiences.map((item, index) => (
                          <span key={index}>
                            <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
                              <span>
                                <b>{item.jobTitle}</b>&nbsp; at &nbsp;
                                <b className="experienceCompany">
                                  {item.company}
                                </b>
                              </span>
                              <i
                                className="pi pi-pencil icon-edit"
                                onClick={() =>
                                  openEdit(PROFILE.EXPERIENCE, item)
                                }
                                id="experienceEdit"
                              ></i>
                            </div>
                            <div className="p-card-subtitle p-ml-3">
                              <b>
                                <small>
                                  ({formatDate(new Date(item.startDate))} -{" "}
                                  {formatDate(new Date(item.endDate)) || "present"})
                                </small>
                              </b>
                            </div>
                            <div className="p-card-body p-text-secondary">
                              {item.description}
                            </div>
                          </span>
                        ))}
                      </div>
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="book"
                          sectionTitle="Education"
                          id="educationEdit"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() => openEdit(PROFILE.EDUCATION)}
                          openModalOnEdit={() => openCreate(PROFILE.EDUCATION)}
                        />
                        {profileInfo.educations.length > 0 ? profileInfo.educations.map((education, index) => <div key={index}>
                          <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle" >
                            <span>
                              <b>{education.qualification}</b> in{" "}
                              <b className="experienceCompany">
                                {education.course}
                              </b>
                            </span>
                            <span>
                              <i
                                className="pi pi-pencil"
                                onClick={() => openEdit(PROFILE.EDUCATION, education)}
                                id="educationEdit"
                              ></i>
                              {" "}
                              <i style={{ cursor: 'pointer' }}
                                className="pi pi-times"
                                onClick={() => {
                                  var confirmation = window.confirm('Action is irreversible, are you sure you want to delete?');
                                  if (confirmation) {
                                    dispatch(deleteEducation(education.id));

                                  }
                                }}
                                id="educationEdit"
                              ></i>
                            </span>
                          </div>
                          <div className="p-card-subtitle p-ml-3 p-mb-0">
                            <b>
                              <small>Graduation ({formatDate(new Date(education.yearOfGraduation))})</small>
                            </b>
                          </div>
                          <div className="p-card-subtitle p-ml-3 p-mb-2">
                            <b>
                              <small>{education.institution}</small>
                            </b>
                          </div>
                          <div className="p-card-body p-text-secondary">{education.address} </div>
                        </div>) : <span></span>}

                      </div>
                    </div>
                    <div className="p-col-12 content-rightPanel p-md-4">
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="tag"
                          sectionTitle="Skills"
                          id="skillEdit"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() => openEdit(PROFILE.SKILL)}
                          openModalOnEdit={() => openCreate(PROFILE.SKILL)}
                        // onClick={mode}
                        />
                        <div className="p-card-body">
                          {formatSkills(profileInfo.skills)}
                        </div>
                      </div>
>>>>>>> origin/instant-hire-module-May18
                      {/* hobbies */}
                      <Hobbies
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
                      {/* profession of interest */}
<<<<<<< HEAD
                      <ProfessionsOfInterest
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
=======
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="briefcase"
                          sectionTitle="Professions of Interest"
                          id="POIEdit"
                          showAddButton="true"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() => openEdit(PROFILE.PROFESSION)}
                          openModalOnEdit={() => openCreate(PROFILE.PROFESSION)}
                        // onClick={mode}
                        />
                        <div className="p-card-body p-text-secondary">
                          <ul className="listStyle">
                            {formatInterest(profileInfo.interests)}
                            {/* {interests !== null ?
                              interests?.map((interest, index) => (
                                <li key={index}>{interest}</li>
                              )) : <div>No interests</div>} */}
                          </ul>
                        </div>
                      </div>
>>>>>>> origin/instant-hire-module-May18
                      {/* location of interest */}
                      <LocationOfInterest
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
                      {/* contact information */}
                      <ContactInformation
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio */}
              <Portfolio
                openCreate={openCreate}
                openEdit={openEdit}
                profileInfo={profileInfo}
              />
            </div>
          </div>
        </div>
      </div>
      <ModalForm data={profileInfo} mode={mode} itemToEdit={itemToEdit} />
    </>
  );
};

export default UserProfile;
