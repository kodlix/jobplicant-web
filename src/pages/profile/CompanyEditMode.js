import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { RadioButton } from 'primereact/radiobutton';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const CompanyEditMode = (props) => {
  const componentStatus = props.componentStatus;
  const [yearOfEstablishment, setYearOfEstablishment] = useState([]);
  const [gender, setGender] = useState("");


  const closeEditMode = (event) => {
    props.onClick(event);
  }

  const handleDelete = () => {
    const itemToDeleteId = Object.keys(componentStatus).find(key => componentStatus[key] === true)
    console.log(itemToDeleteId);
  }
  return (
    <>
      {componentStatus.biographyEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="bookmark" sectionTitle="Biography" deleteButton="true" onDelete={handleDelete} />
          <div className="p-card-body">
            <label htmlFor="biographyInput" className="inputLabel p-mb-2">Give a short descripiton of your company</label>
            <InputTextarea id="biographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." />
            <ModeFooter id="biographyEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
      {componentStatus.companyDetailsEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader deleteButton="true" onDelete={handleDelete} icon="chart-bar" sectionTitle="Company Information" />
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
            <ModeFooter id="companyDetailsEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
      {componentStatus.contactInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="phone" sectionTitle="Contact Information" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="phoneNumber" className="inputLabel p-pr-3">Phone Number</label>
                  <InputText id="phoneNumber" type="text" placeholder="Phone Number" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="emailAdress" className="inputLabel p-pr-3">Email Address</label>
                  <InputText id="emailAdress" placeholder="Email Address" type="email" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="city" className="inputLabel p-pr-3">City</label>
                  <InputText id="city" type="text" placeholder="City" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="state" className="inputLabel p-pr-3">State</label>
                  <InputText id="state" type="text" placeholder="State" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="country" className="inputLabel p-pr-3">Country</label>
                  <InputText id="country" type="text" placeholder="Country" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="companyURL" className="inputLabel p-pr-3">Company Website</label>
                  <InputText id="companyURL" type="text" placeholder="Company Website" />
                </div>
                <div className="p-field p-col-12 p-md-8 p-pr-2">
                  <label htmlFor="address" className="inputLabel">Address</label>
                  <InputTextarea id="address" type="text" rows="1" className="inputField" placeholder="Address" />
                </div>
              </span>
              <div>
              </div>
              <ModeFooter id="contactInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.personalInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="user" sectionTitle="Personal Information" />
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
              <ModeFooter id="personalInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

const ModeFooter = (props) => {
  return (
    <>
      <div className="editMode-footer">
        <Button icon="pi pi-times" iconPos="left" label="Cancel" id={props.id} onClick={props.onCancel} type="button" />
        <Button icon="pi pi-check" iconPos="left" label="Save" id="saveButton" type="submit" />
      </div>
    </>
  );
}

export default CompanyEditMode;