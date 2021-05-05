import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const Portfolio = (props) => {
  const expandImage = (e) => {
    props.expandImage(e.target.src);
  }
  const mode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card">
        <SectionHeader icon="images" sectionTitle="Portfolio" id="portfolioEdit" addButton="true" editButton="true" onClick={mode} />
        <div className="p-card-body p-grid p-mt-2">
          <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
            <img src="../../assets/images/breadcrumb/breadcrumb-bg.jpg" alt="Portfolio Item" width="100%" height="100%" />
          </button>
          <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
            <img src="../../assets/logo.png" alt="Portfolio Item" width="100%" height="100%" />
          </button>
          <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
            <img src="../../assets/images/hero/hero-image.png" alt="Portfolio Item" width="100%" height="100%" />
          </button>
          <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
            <img src="../../assets/images/hero/home-page4.jpg" alt="Portfolio Item" width="100%" height="100%" />
          </button>
          <button onClick={expandImage} className="p-md-3 p-m-2 p-p-0 portfolio-items">
            <img src="../../assets/logo.png" alt="Portfolio Item" width="100%" height="100%" />
          </button>
        </div>
      </div>
    </>
  );
}

export default Portfolio;