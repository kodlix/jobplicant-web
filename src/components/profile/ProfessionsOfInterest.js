import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";
import { Tag } from "primereact/tag";

const ProfessionsOfInterest = ({ openCreate, openEdit, profileInfo, isViewApplicant }) => {

  const formatInterest = (interests) => <strong>{interests.map((interest, i) => <span key={i}><Tag>{interest}</Tag>&nbsp;&nbsp;</span>)}</strong>;

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
          isViewApplicant={isViewApplicant}
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
