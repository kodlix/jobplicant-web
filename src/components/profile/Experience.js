import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";

import "./UserProfile.css";
import { deleteExperience } from "store/modules/account";
import { useDispatch } from "react-redux";

const Experience = ({ openCreate, openEdit, profileInfo, formatDate, isViewApplicant }) => {
  const dispatch = useDispatch();
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
          isViewApplicant={isViewApplicant}
        />
        {profileInfo.experiences.map((item, index) => (
          <div key={index}>
            <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
              <span>
                <b>{item.jobTitle}</b>&nbsp; at &nbsp;
                <b className="experienceCompany">{item.company}</b>
              </span>
              <span>
                <i
                  className="pi pi-pencil icon-edit mr-3"
                  onClick={() => openEdit(PROFILE.EXPERIENCE, item)}
                  id="experienceEdit"
                ></i>
                <i
                  style={{ cursor: "pointer" }}
                  className="pi pi-times"
                  onClick={() => {
                    var confirmation = window.confirm(
                      "Action is irreversible, are you sure you want to delete?"
                    );
                    if (confirmation) {
                      dispatch(deleteExperience(item.id));
                    }
                  }}
                  id="educationEdit"
                ></i>
              </span>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default Experience;
