import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const CompanyContactInformation = ({ onClick, companyContactInfo }) => {
  const id = companyContactInfo ? "edit" : "";

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="phone" sectionTitle="Contact Information" sectionId="companyContactInfoEdit" id={id} addButton="true" editButton="true" onClick={onClick} />
        <div className="p-card-body p-text-secondary">
          <div className="p-mb-2"><b>Phone Number:</b> +23463736373</div>
          <div className="p-mb-2"><b>Email: </b>rightclicks@gmail.com</div>
          <div className="p-mb-2"><b>Website:</b> <a href="#" className="companyURL">Rightclicks.com</a></div>
          <div className="p-mb-2"><b>Location: </b>Isaac Johnson, Lagos. Nigeria</div>
        </div>
      </div>
    </>
  );
}

export default CompanyContactInformation;