import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";


import "./UserProfile.css";

const Biography = ({ openCreate, openEdit, profileInfo }) => {
  return (
    <>
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
    </>
  );
};

export default Biography;
