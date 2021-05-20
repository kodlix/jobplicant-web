import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";

const ProfessionsOfInterest = ({ openCreate, openEdit, profileInfo}) => {

  const formatInterest = (interests) => {
    console.log(interests);
    return interests.join(", ");
  };

  return (
    <>
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
    </>
  );
};

export default ProfessionsOfInterest;
