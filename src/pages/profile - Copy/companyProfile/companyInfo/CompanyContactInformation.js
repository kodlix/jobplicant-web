import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const CompanyContactInformation = ({ companyContactInfo }) => {
  const id = companyContactInfo ? "edit" : "";
  console.log(companyContactInfo);

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="phone"
          sectionTitle="Contact Information"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/companyprofile/edit"
          createLink="/companyprofile/create"
        />
        <div className="p-card-body p-text-secondary">
          <div className="p-mb-2"><b>Phone Number:</b> {companyContactInfo.phoneNo}</div>
          <div className="p-mb-2"><b>Email: </b>{companyContactInfo.emailAddress}</div>
          <div className="p-mb-2"><b>Website:</b> <a href={companyContactInfo.companyURL} className="companyURL" target="_blank">{companyContactInfo.companyURL}</a></div>
          <div className="p-mb-2"><b>Location: </b>{companyContactInfo.address}, {companyContactInfo.city}. {companyContactInfo.state.name}. {companyContactInfo.country.name}</div>
        </div>
      </div>
    </>
  );
}

export default CompanyContactInformation;