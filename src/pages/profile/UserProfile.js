import React, { useState } from "react";
import AppNavBar from "components/AppNavBar";

import Portfolio from "./Portfolio";
import ProfileTab from "./ProfileTab";
import InfoTab from "./tabs/InfoTab";
import { Route } from "react-router";
import JobsTab from "./tabs/JobsTab";
import ContactsTab from "./tabs/ContactsTab";
import GroupsTab from "./tabs/GroupsTab";
import { useDispatch } from "react-redux";
import { openModal } from "store/modules/modal";
import PersonalInfo from "./PersonalInfo";
// import BreadCrumbPane from 'helpers/BreadCrumb';


const UserProfile = ({ match }) => {

  const dispatch = useDispatch();
  const [, setMode] = useState("");
  const [] = useState({});


  const openCreate = (name) => {
    setMode("create");
    dispatch(openModal(name));
  };

  const openEdit = (name) => {
    setMode("edit");
    // setItemToEdit(data);
    dispatch(openModal(name));
  };

  return (
    <>
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
                  <ProfileTab />
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
              <Portfolio openCreate={openCreate} openEdit={openEdit} />
            </div>
          </div>
        </div>
    </>
  );
};

export default UserProfile;
