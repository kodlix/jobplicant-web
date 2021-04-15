import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const CompanyDetails = (props) => {
  const openEditMode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="chart-bar" sectionTitle="Company Information" id="companyDetailsEdit" addButton="true" editButton="true" onClick={openEditMode} />
        <div className="p-ml-3 p-pb-3 p-grid">
          <div className="p-col-12 p-md-6"><b>Industry: </b>Web Development</div>
          <div className="p-col-12 p-md-6"><b>Year of Establishment: </b>2020</div>
          <div className="p-col-12 p-md-6"><b>Number of Employees: </b>40</div>
          <div className="p-col-12 p-md-6"><b>Contact Person: </b>Jane Doe</div>
          <div className="p-col-12 p-md-6"><b>Registration Number: </b>40</div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;