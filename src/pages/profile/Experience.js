import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";

import "./UserProfile.css";

const Experience = ({ openCreate, openEdit, profileInfo, formatDate }) => {

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="star-o"
          sectionTitle="Experience"
          id="experienceEdit"
          showAddButton="true"
          openModalOnCreate={() => openCreate(PROFILE.EXPERIENCE)}
          openModalOnEdit={() => openEdit(PROFILE.EXPERIENCE)}
        />
        {profileInfo.experiences.map((item, index) => (
          <span key={index}>
            <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
              <span>
                <b>{item.jobTitle}</b>&nbsp; at &nbsp;
                <b className="experienceCompany">{item.company}</b>
              </span>
              <i
                className="pi pi-pencil icon-edit"
                onClick={() => openEdit(PROFILE.EXPERIENCE, item)}
                id="experienceEdit"
              ></i>
            </div>
            <div className="p-card-subtitle p-ml-3">
              <b>
                <small>
                  ({formatDate(new Date(item.startDate))} -{" "}
                  {formatDate(new Date(item.endDate)) || "present"})
                </small>
              </b>
            </div>
            <div className="p-card-body p-text-secondary">
              {item.description}
            </div>
          </span>
        ))}
      </div>
    </>
  );
};

export default Experience;
