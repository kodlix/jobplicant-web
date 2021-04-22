import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import SectionHeader from '../SectionHeader';
import EditModeFooter from '../userEditMode/EditModeFooter';

import '../UserProfile.css';

const CompanyDetails = ({ componentStatus, companyDetailsFromBack, closeEditMode }) => {
  console.log(companyDetailsFromBack);
  const [yearOfEstablishment, setYearOfEstablishment] = useState([]);

  const handleDelete = () => {
    const itemToDeleteId = Object.keys(componentStatus).find(key => componentStatus[key] === true)
    console.log(itemToDeleteId);
  }

  return (
    <>
      {componentStatus.companyDetailsEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="chart-bar" sectionTitle="Company Information" />
          <div className="p-card-body">
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Industry</label>
                <InputText id="firstname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Year of Establishment</label>
                <Calendar value={yearOfEstablishment} onChange={(e) => setYearOfEstablishment(e.value)} dateFormat="yy" pattern="MM/yyyy" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Number of Employees</label>
                <InputText id="firstname6" type="number" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Contact Person</label>
                <InputText id="lastname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Registration Number</label>
                <InputText id="firstname6" type="text" />
              </div>
            </div>
            <EditModeFooter id="companyDetailsEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
    </>
  );
}

export default CompanyDetails;