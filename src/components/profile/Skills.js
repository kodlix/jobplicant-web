import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";
import { Badge } from "primereact/badge";
import { Tag } from "primereact/tag";
/**skills.map((skill, index) => (
            <span key={index} className="skilltag">
              <i className=""></i>
              {skill.name}
            </span>
          )) */
const Skills = ({ openEdit, openCreate, profileInfo, isViewApplicant }) => {
  const formatSkills = (skills) => {
    console.log(skills);
    const skillTemp =
      skills.length > 0
        ? skills.map((skill, i) => <span key={i}><Tag>{skill}</Tag>&nbsp;&nbsp;</span>)
        : "";
    return skillTemp;
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="tag"
          sectionTitle="Skills"
          id="skillEdit"
          showAddButton="true"
          showEditButton="true"
          openModalOnCreate={() => openEdit(PROFILE.SKILL)}
          openModalOnEdit={() => openCreate(PROFILE.SKILL)}
          isViewApplicant={isViewApplicant}
        // onClick={mode}
        />
        <div className="p-card-body"><strong>{formatSkills(profileInfo?.skills)}</strong></div>
      </div>
    </>
  );
};

export default Skills;
