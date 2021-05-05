import React, { useState } from 'react';
import CompanyBiographyEdit from './CompanyBiographyEdit';
import CompanyDetailsEdit from './CompanyDetailsEdit';
import CompanyContactInfoEdit from './CompanyContactInfoEdit';
import CompanyPersonalInfoEdit from './CompanyPersonalInfoEdit';
import companyEditNameMap from './companyEditNameMap.json';
import '../../../UserProfile.css';

const CompanyEditMode = ({ title, data, onClose }) => {
  if (title === companyEditNameMap.companyBiography) {
    return <CompanyBiographyEdit
      closeEditMode={onClose}
      data={data}
    />
  }
  if (title === companyEditNameMap.companyDetails) {
    return <CompanyDetailsEdit
      closeEditMode={onClose}
      data={data}
    />
  }
  if (title === companyEditNameMap.companyContactInfo) {
    return <CompanyContactInfoEdit
      closeEditMode={onClose}
      data={data}
    />
  }
  return (
    <></>
  );
}

export default CompanyEditMode;