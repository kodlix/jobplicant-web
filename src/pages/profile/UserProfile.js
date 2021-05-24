import React, { useState } from "react";
import AppNavBar from "components/AppNavBar";

import Portfolio from "./Portfolio";
import ProfileTab from "./ProfileTab";
import PersonalInfo from "./PersonalInfo";
import InfoTab from "./tabs/InfoTab";
import { Route } from "react-router";
import JobsTab from "./tabs/JobsTab";
import ContactsTab from "./tabs/ContactsTab";
import GroupsTab from "./tabs/GroupsTab";
import { useDispatch } from "react-redux";
import { openModal } from "store/modules/modal";

const UserProfile = ({ match }) => {
  
  const dispatch = useDispatch();
  const [mode, setMode] = useState("");
  const [itemToEdit, setItemToEdit] = useState({});

  //formatted entries
  const [LOI, setLOI] = useState(null);
  const [interests, setInterests] = useState(null);

  useEffect(() => {
    console.log("change must happen");
    dispatch(loadProfileInfo());
  }, [educationUpdatedOrDeleted, userSkillUpdatedOrDeleted,experienceUpdatedOrDeleted]);

  const expandImage = () => { };

  const openCreate = (name) => {
    setMode("create");
    dispatch(openModal(name));
  };

  const openEdit = (name, data) => {
    setMode("edit");
    // setItemToEdit(data);
    dispatch(openModal(name));
  };

  const uploadProfilePicture = (e) => {
    console.log("files");
    console.table(e.target.files);
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return year + "/" + month + "/" + day;
  };

  return (
    <>
      <div className="d-flex flex-column">
        <AppNavBar />

        <div className="background">
          <div className="content-container">
            {/* personal info */}
            <PersonalInfo
              openCreate={openCreate}
              openEdit={openEdit}
            />

            <div className="p-grid">
              <div className="p-col-12 p-md-9 content-smallscreen">
                <div className="content-tab">
                  {/* ProfileTab */}
                  <ProfileTab activeTab={activeTab} />
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
                      {/* hobbies */}
                      <Hobbies
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
                      {/* profession of interest */}
                      <ProfessionsOfInterest
                        openCreate={openCreate}
                        openEdit={openEdit}
                        profileInfo={profileInfo}
                      />
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
                  <ProfileTab  />
                </div>
                <div className="content-body">
                  {/* biography */}
                  
                  <Route path={`${match.path}/`} exact component={InfoTab} />
                  <Route path={`${match.path}/info`} component={InfoTab} />
                  <Route path={`${match.path}/jobs`} component={JobsTab} />
                  <Route path={`${match.path}/contacts`} component={ContactsTab} />
                  <Route path={`${match.path}/groups`} component={GroupsTab} />
                </div>
              </div>
              {/* portfolio */}
              <Portfolio openCreate={openCreate} openEdit={openEdit}/>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default UserProfile;
