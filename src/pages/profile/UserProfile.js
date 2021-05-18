import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AppNavBar from "components/AppNavBar";
import SectionHeader from "./SectionHeader";
import ModalForm from "./ModalForm";
import { loadProfileInfo } from "store/modules/account";
import { openModal } from "store/modules/modal";
import { PROFILE } from "constants/profile";
import { deleteEducation } from "store/modules/education";

const UserProfile = () => {
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const rating = 4.5;
  const [mode, setMode] = useState("");
  const [itemToEdit, setItemToEdit] = useState({});

  //formatted entries
  const [LOI, setLOI] = useState(null);
  const [interests, setInterests] = useState(null);

  useEffect(() => {
    dispatch(loadProfileInfo());
  }, []);

  useEffect(() => {
    if (profileInfo) {
      console.log('change must happen');
    }
  }, [profileInfo]);

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

  const uploadProfilePicture = () => {
    console.log("profile");
  };

  const formatLocation = (profileLocation) => {
    console.log(profileLocation);
    return profileLocation;
    // return profileLocation.map(location => location.LOIName).join(", ");
  };

  const formatInterest = (interests) => {
    console.log(interests);
    return interests.join(", ");
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
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
  };

  return (
    <>
      <div className="d-flex flex-column">
        <AppNavBar />

        <div className="background">
          <div className="content-container">
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
                </div>
                <div className="content-body">
                  {/* biography */}
                  <div className="p-card p-mt-2">
                    <SectionHeader
                      icon="bookmark"
                      sectionTitle="Biography"
                      id="biographyEdit"
                      showAddButton="true"
                      showEditButton="true"
                      openModalOnCreate={() => openEdit(PROFILE.BIOGRAPHY)}
                      openModalOnEdit={() => openCreate(PROFILE.BIOGRAPHY)}
                      hasData={profileInfo?.profile}
                    />
                    <div className="p-card-body">{profileInfo.profile}</div>
                  </div>
                  <div className="p-grid">
                    <div className="p-col-12 p-md-8 content-leftPanel">
                      {/* experience */}
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
                      {/* hobbies */}
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="heart"
                          sectionTitle="Hobbies"
                          id="hobbyEdit"
                          showAddButton="true"
                          showEditButton="true"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() => openEdit(PROFILE.HOBBY)}
                          openModalOnEdit={() => openCreate(PROFILE.HOBBY)}
                          hasData={profileInfo?.profile}
                        />
                        <div className="p-card-body p-text-secondary">
                          <ul className="listStyle p-grid">
                            {profileInfo.hobbies &&
                              profileInfo.hobbies.length > 0 &&
                              profileInfo.hobbies.map((hobby, index) => (
                                <li key={index} className="p-col-4">
                                  {hobby}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                      {/* profession of interest */}
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
                      {/* location of interest */}
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="map-marker"
                          sectionTitle="Location of Interest"
                          id="LOIEdit"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() => openEdit(PROFILE.LOCATION)}
                          openModalOnEdit={() => openCreate(PROFILE.LOCATION)}
                        />
                        <div className="p-card-body p-text-secondary">
                          {profileInfo.location !== null
                            ? formatLocation(profileInfo.location)
                            : "locations"}
                        </div>
                      </div>
                      {/* contact information */}
                      <div className="p-card p-mt-2">
                        <SectionHeader
                          icon="phone"
                          sectionTitle="Contact Information"
                          id="contactInfoEdit"
                          showAddButton="true"
                          showEditButton="true"
                          showAddButton="true"
                          showEditButton="true"
                          openModalOnCreate={() =>
                            openEdit(PROFILE.CONTACT_INFO)
                          }
                          openModalOnEdit={() =>
                            openCreate(PROFILE.CONTACT_INFO)
                          }
                          hasData={profileInfo?.profile}
                        />
                        <div className="p-card-body p-text-secondary">
                          <span>
                            <b>Phone Number:</b>
                            {profileInfo.contactPhoneNumber}
                          </span>
                          <span>
                            <b>Email: </b>
                            {profileInfo.contactEmail}
                          </span>
                          <span>
                            <b>Location: </b>
                            {profileInfo.address}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* portfolio */}
              <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel">
                <div className="p-card">
                  <SectionHeader
                    icon="images"
                    sectionTitle="Portfolio"
                    id="portfolioEdit"
                    showAddButton="true"
                    showEditButton="true"
                    openModalOnCreate={() => openEdit(PROFILE.PORTFOLIO)}
                    openModalOnEdit={() => openCreate(PROFILE.PORTFOLIO)}
                  />
                  <div className="p-card-body p-grid p-mt-2">
                    <button
                      onClick={expandImage}
                      className="p-md-3 p-m-2 p-p-0 portfolio-items"
                    >
                      <img
                        src="../../assets/images/breadcrumb/breadcrumb-bg.jpg"
                        alt="Portfolio Item"
                        width="100%"
                        height="100%"
                      />
                    </button>
                    <button
                      onClick={expandImage}
                      className="p-md-3 p-m-2 p-p-0 portfolio-items"
                    >
                      <img
                        src="../../assets/logo.png"
                        alt="Portfolio Item"
                        width="100%"
                        height="100%"
                      />
                    </button>
                    <button
                      onClick={expandImage}
                      className="p-md-3 p-m-2 p-p-0 portfolio-items"
                    >
                      <img
                        src="../../assets/images/hero/hero-image.png"
                        alt="Portfolio Item"
                        width="100%"
                        height="100%"
                      />
                    </button>
                    <button
                      onClick={expandImage}
                      className="p-md-3 p-m-2 p-p-0 portfolio-items"
                    >
                      <img
                        src="../../assets/images/hero/home-page4.jpg"
                        alt="Portfolio Item"
                        width="100%"
                        height="100%"
                      />
                    </button>
                    <button
                      onClick={expandImage}
                      className="p-md-3 p-m-2 p-p-0 portfolio-items"
                    >
                      <img
                        src="../../assets/logo.png"
                        alt="Portfolio Item"
                        width="100%"
                        height="100%"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalForm data={profileInfo} mode={mode} itemToEdit={itemToEdit} />
    </>
  );
};

export default UserProfile;
