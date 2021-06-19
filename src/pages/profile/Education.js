import React from "react";
import { deleteEducation } from "store/modules/account";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";
import { useDispatch } from "react-redux";

const Education = ({ openCreate, openEdit, profileInfo, formatDate }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="book"
          sectionTitle="Education"
          id="educationEdit"
          showAddButton="true"
          showEditButton="true"
          openModalOnCreate={() => openCreate(PROFILE.EDUCATION)}
          openModalOnEdit={() => openEdit(PROFILE.EDUCATION)}
        />
        {profileInfo?.educations.length > 0 ? (
          profileInfo?.educations.map((education, index) => (
            <div key={index}>
              <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle">
                <span>
                  <b>{education.qualification}</b> in{" "}
                  <b className="experienceCompany">{education.course}</b>
                </span>
                <span>
                  <i
                    className="pi pi-pencil"
                    onClick={() => openEdit(PROFILE.EDUCATION, education)}
                    id="educationEdit"
                  ></i>{" "}
                  <i
                    style={{ cursor: "pointer" }}
                    className="pi pi-times"
                    onClick={() => {
                      var confirmation = window.confirm(
                        "Action is irreversible, are you sure you want to delete?"
                      );
                      if (confirmation) {
                        dispatch(deleteEducation(education.id));
                      }
                    }}
                    id="educationEdit"
                  ></i>
                </span>
              </div>
              <div className="p-card-subtitle p-ml-3 p-mb-0">
                <b>
                  <small>
                    Graduation (
                    {formatDate(new Date(education.yearOfGraduation))})
                  </small>
                </b>
              </div>
              <div className="p-card-subtitle p-ml-3 p-mb-2">
                <b>
                  <small>{education.institution}</small>
                </b>
              </div>
              <div className="p-card-body p-text-secondary">
                {education.address}{" "}
              </div>
            </div>
          ))
        ) : (
          <span></span>
        )}
      </div>
    </>
  );
};

export default Education;
