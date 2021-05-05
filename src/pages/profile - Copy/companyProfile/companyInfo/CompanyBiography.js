import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const CompanyBiography = ({ companyBiography, onClick }) => {
  const id = companyBiography ? "edit" : "";

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="bookmark"
          sectionTitle="Biography"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/companyprofile/edit"
          createLink="/companyprofile/create"
        />
        <div className="p-card-body">
          {companyBiography}
        </div>
      </div>
    </>
  );
}

export default CompanyBiography;