import React, { useState } from "react";
import AppNavBar from "components/AppNavBar";

import Portfolio from "components/profile/Portfolio";
import ProfileTab from "components/profile/ProfileTab";
import InfoTab from "./tabs/InfoTab";
import { Route } from "react-router";
import JobsTab from "./tabs/JobsTab";
import ContactsTab from "./tabs/ContactsTab";
import GroupsTab from "./tabs/GroupsTab";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "store/modules/modal";
import PersonalInfo from "components/profile/PersonalInfo";
import CustomBreadCrumb from "helpers/BreadCrumb";
import agentService from "services/agent.service";
import ChatContainer from "components/chat/ChatContainer";
import ChatContent from "components/chat/ChatContent";

// import BreadCrumbPane from 'helpers/BreadCrumb';


const UserProfile = ({ match }) => {
  const [contact, setContact] = React.useState(null)
  const profileInfo = useSelector((state) => state.account.profileInfo);

  const dispatch = useDispatch();
  const [, setMode] = useState("");
  const [] = useState({});
  const accountType = agentService.Auth.current().accountType;


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
          <div className="pl-5">
          <CustomBreadCrumb />
          </div>
          <div className="content-container">
            
            {/* personal info */}
            <PersonalInfo
              openCreate={openCreate}
              openEdit={openEdit} 
              data={profileInfo}
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
              {accountType === "Artisan" && <Portfolio openCreate={openCreate} openEdit={openEdit} />}
            </div>
          </div>
        <ChatContainer setContact={setContact} selectedContact={contact} />
        {contact !== null && <ChatContent setContact={setContact} contact={contact} />}
        </div>
        
    </>
  );
};

export default UserProfile;
