import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";

const Hobbies = ({ openCreate, openEdit, profileInfo }) => {
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
    </>
  );
};

export default Hobbies;
