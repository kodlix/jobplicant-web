import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";
import { Tag } from "primereact/tag";

const Hobbies = ({ openCreate, openEdit, profileInfo, isViewApplicant }) => {
  console.log(profileInfo.hobbies)

  return (
    <>
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
          isViewApplicant={isViewApplicant}
        />
        <div className="p-card-body p-text-secondary">
          <ul className="listStyle p-grid">
            {profileInfo.hobbies !== null
              ? (profileInfo?.hobbies.map(hobby => <span><Tag>{hobby}</Tag>&nbsp;&nbsp;</span>))
              : "No hobbies"}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hobbies;
