import React, { useState } from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";

import { Carousel } from 'primereact/carousel';

import "./UserProfile.css";

const Portfolio = ({ openCreate, openEdit, profileInfo }) => {
  const [portfolios, setPortfolios] = useState([]);

  const expandImage = (e) => {
    openEdit(PROFILE.PORTFOLIO_MODAL);
  };

  return (
    <>
      <div className="p-col-12 p-md-3 p-pt-2 portfolio-panel">
        <div className="p-card">
          <SectionHeader
            icon="images"
            sectionTitle="Portfolio"
            id="portfolioEdit"
            showAddButton="true"
            showEditButton="true"
            openModalOnCreate={() => openEdit(PROFILE.PORTFOLIO)}
            openModalOnEdit={() => openCreate(PROFILE.PORTFOLIO)}
          />
          <div className="p-card-body p-grid p-mt-2">
            <button
              onClick={expandImage}
              className="p-md-3 p-m-2 p-p-0 portfolio-items"
            >
              <img
                src="../../assets/images/breadcrumb/breadcrumb-bg.jpg"
                alt="Portfolio Item"
                width="100%"
                height="100%"
              />
            </button>
            <button
              onClick={expandImage}
              className="p-md-3 p-m-2 p-p-0 portfolio-items"
            >
              <img
                src="../../assets/logo.png"
                alt="Portfolio Item"
                width="100%"
                height="100%"
              />
            </button>
            <button
              onClick={expandImage}
              className="p-md-3 p-m-2 p-p-0 portfolio-items"
            >
              <img
                src="../../assets/images/hero/hero-image.png"
                alt="Portfolio Item"
                width="100%"
                height="100%"
              />
            </button>
            <button
              onClick={expandImage}
              className="p-md-3 p-m-2 p-p-0 portfolio-items"
            >
              <img
                src="../../assets/images/hero/home-page4.jpg"
                alt="Portfolio Item"
                width="100%"
                height="100%"
              />
            </button>
            <button
              onClick={expandImage}
              className="p-md-3 p-m-2 p-p-0 portfolio-items"
            >
              <img
                src="../../assets/logo.png"
                alt="Portfolio Item"
                width="100%"
                height="100%"
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
