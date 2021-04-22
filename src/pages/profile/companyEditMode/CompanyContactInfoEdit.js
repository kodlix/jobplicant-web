import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import SectionHeader from '../SectionHeader';
import EditModeFooter from '../userEditMode/EditModeFooter';

import { Dropdown } from 'primereact/dropdown';
const CompanyContactInfo = ({ componentStatus, closeEditMode, contactInfoArray }) => {
  return (
    <>
      {componentStatus.companyContactInfoEdit&&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="phone" sectionTitle="Contact Information" />
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
              <EditModeFooter id="contactInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default CompanyContactInfo;