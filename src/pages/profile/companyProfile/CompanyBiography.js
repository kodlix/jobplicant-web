import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const CompanyBiography = ({ companyBiography, onClick }) => {
  const id = companyBiography ? "edit" : "";

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="bookmark" sectionTitle="Biography" sectionId="companyBiographyEdit" id={id} addButton="true" editButton="true" onClick={onClick} />
        <div className="p-card-body">
          {companyBiography}
        </div>
      </div>
    </>
  );
}

export default CompanyBiography;