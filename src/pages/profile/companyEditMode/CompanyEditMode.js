import React, { useState } from 'react';
import CompanyBiographyEdit from './CompanyBiographyEdit';
import CompanyDetailsEdit from './CompanyDetailsEdit';
import CompanyContactInfoEdit from './CompanyContactInfoEdit';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const CompanyEditMode = ({ onClick, componentStatus, dataFromBack }) => {
  const [gender, setGender] = useState("");
  return (
    <>
     <CompanyBiographyEdit componentStatus={componentStatus} closeEditMode={onClick} companyBiographyFromBack={dataFromBack.companyBiography} />
     <CompanyDetailsEdit componentStatus={componentStatus} closeEditMode={onClick} companyDetailsFromBack={dataFromBack.companyDetails} />
     <CompanyContactInfoEdit componentStatus={componentStatus} closeEditMode={onClick} companyContactInfoFromBack={dataFromBack.companyContactInfo} />
      {componentStatus.personalInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="user" sectionTitle="Personal Information" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="firstName" className="inputLabel">First Name</label>
                  <InputText id="firstName" type="text" placeholder="First Name" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="lastName" className="inputLabel">Last Name</label>
                  <InputText id="lastName" type="text" placeholder="Last Name" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="otherNames" className="inputLabel">Other Names</label>
                  <InputText id="otherNames" type="text" placeholder="Other Names" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="lastName" className="inputLabel p-pr-3">Date Of Birth</label>
                  <InputText id="lastName" type="text" value="March 19th, 1982" placeholder="Last Name" disabled />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <span className="inputLabel p-pr-3">Gender</span>
                  <div className="p-formgroup-inline">
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city7" name="gender" value="female" onChange={(e) => setGender(e.value)} checked={gender === 'female'} />
                      <label htmlFor="city7">Female</label>
                    </div>
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city8" name="gender" value="male" onChange={(e) => setGender(e.value)} checked={gender === 'male'} />
                      <label htmlFor="city8">Male</label>
                    </div>
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city8" name="gender" value="other" onChange={(e) => setGender(e.value)} checked={gender === 'other'} />
                      <label htmlFor="city8">Other</label>
                    </div>
                  </div>
                </div>
              </span>
              <div>
              </div>
              <EditModeFooter id="personalInfoEdit" onCancel={onClick} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

const EditModeFooter = ({ id, onCancel }) => {
  return (
    <>
      <div className="editMode-footer">
        <Button icon="pi pi-times" iconPos="left" label="Cancel" id={id} onClick={onCancel} type="button" />
        <Button icon="pi pi-check" iconPos="left" label="Save" id="saveButton" type="submit" />
      </div>
    </>
  );
}

export default CompanyEditMode;