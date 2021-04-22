import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const CompanyDetails = ({ onClick, companyDetails }) => {
  const id = companyDetails ? "edit" : "";

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="chart-bar" sectionTitle="Company Information" id={id} sectionId="companyDetailsEdit" addButton="true" editButton="true" onClick={onClick} />
        <div className="p-ml-3 p-pb-3 p-grid">
          <div className="p-col-12 p-md-6"><b>Industry: </b>{companyDetails.industry}</div>
          <div className="p-col-12 p-md-6"><b>Year of Establishment: </b>{new Date(companyDetails.dateOfEstablishment).getFullYear()}</div>
          <div className="p-col-12 p-md-6"><b>Number of Employees: </b>{companyDetails.numberOfEmployees}</div>
          <div className="p-col-12 p-md-6"><b>Contact Person: </b>{companyDetails.contactPerson}</div>
          <div className="p-col-12 p-md-6"><b>Registration Number: </b>{companyDetails.regNo}</div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;