import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";

const ContactInformation = ({ openCreate, openEdit, profileInfo }) => {
  
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="phone"
          sectionTitle="Contact Information"
          id="contactInfoEdit"
          showAddButton="true"
          showEditButton="true"
          showAddButton="true"
          showEditButton="true"
          openModalOnCreate={() => openEdit(PROFILE.CONTACT_INFO)}
          openModalOnEdit={() => openCreate(PROFILE.CONTACT_INFO)}
          hasData={profileInfo?.profile}
        />
        <div className="p-card-body p-text-secondary">
          <span>
            <b>Phone Number:</b>
            {profileInfo.contactPhoneNumber}
          </span><br/>
          <span>
            <b>Email: </b>
            {profileInfo.contactEmail}
          </span><br/>
          <span>
            <b>Location: </b>
            {profileInfo.address}
          </span>
        </div>
      </div>
    </>
  );
};

export default ContactInformation;
