import React, { useEffect, useState, useRef } from "react";

import { Toast } from "primereact/toast";
import SectionHeader from "./SectionHeader";
import ModeFooter from "pages/profile/ModeFooter";
import { Carousel } from "primereact/carousel";
import { useSelector } from "react-redux";

const images = [
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
  "https://source.unsplash.com/random/800x600",
];

const PortfolioModal = ({ data, closeEditMode }) => {
  const toast = useRef(null);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [portfolioImages, setPortfolioImages] = useState(profileInfo.portfolios);
  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "600px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "480px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  const imageTemplate = (portfolio) => {
    return (
      <div className="product-item">
        <div className="product-item-content">
          <div className="p-mb-3" style={{height: "340px"}}>
            <img
              src={portfolio}
              onError={(e) => (e.target.src = `${portfolio}`)}
              alt="portfolio image"
              className="product-image"
              style={{height: "100%", width: "100%"}}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <Toast ref={toast} />
        <SectionHeader icon="images" sectionTitle="Portfolio" />
        <div className="p-card-body">
          <Carousel
            value={portfolioImages}
            numVisible={1}
            numScroll={1}
            orientation="horizontal"
            verticalViewPortHeight="352px"
            itemTemplate={imageTemplate}
          
            style={{ maxWidth: "100%", height: "400px", }}
          />

          <ModeFooter id="portfolioEdit" onCancel={closeEditMode} />
        </div>
      </div>
    </>
  );
};

export default PortfolioModal;
