import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const ContactInformation = ({ contactInfo }) => {
  const id = contactInfo ? "edit" : "";
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
          editLink="/userprofile/edit"
          createLink="/userprofile/create"
        />
        <div className="p-card-body p-text-secondary">
          <div><b>Phone Number:</b> {contactInfo?.phoneNo}</div>
          <div><b>Email: </b>{contactInfo?.emailAddress}</div>
          <div><b>Location: </b>{contactInfo?.address}, {contactInfo?.state.name}. {contactInfo?.country.name}</div>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;