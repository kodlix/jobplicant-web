import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";

import { Carousel } from "primereact/carousel";

import "./UserProfile.css";
import { useSelector } from "react-redux";

const Portfolio = ({ openCreate, openEdit, isViewApplicant }) => {
  const profileInfo = useSelector((state) => state.account.profileInfo);


  const expandImage = (index) => {
    openEdit(PROFILE.PORTFOLIO_MODAL);
  };

  return (
    <>
      <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel">
        <div className="p-card">
          <SectionHeader
            icon="images"
            sectionTitle="Work samples"
            id="portfolioEdit"
            showAddButton="true"
            showEditButton="true"
            openModalOnCreate={() => openCreate(PROFILE.PORTFOLIO)}
            openModalOnEdit={() => openEdit(PROFILE.PORTFOLIO)}
            isViewApplicant={isViewApplicant}
          />
          <div className="p-card-body p-grid p-mt-2">
            {profileInfo?.portfolios &&
              profileInfo.portfolios.map((portfolio, index) => (
                <button
                  key={index}
                  onClick={() => expandImage(index)}
                  className="p-md-3 p-m-2 p-p-0 portfolio-items"
                >
                  <img
                    src={portfolio}
                    alt="Portfolio Item"
                    width="100%"
                    height="100%"
                  />
                </button>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
