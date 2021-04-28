import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Portfolio = ({ expandImage, onClick, portfolio }) => {
  const id = portfolio ? "edit" : "";

  return (
    <>
      <div className="p-card">
      <SectionHeader
          icon="images"
          sectionTitle="Portfolio"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/userprofile/edit"
          createLink="/userprofile/create"
        />
        <div className="p-card-body p-grid p-mt-2">
          {portfolio?.map((item, index) => (
            <button key={`portfolio${index}`} onClick={(e) => expandImage(e.target.src)} className="p-md-3 p-m-2 p-p-0 portfolio-items">
              <img src={item.imageURL} alt="Portfolio Item" width="100%" height="100%" />
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;