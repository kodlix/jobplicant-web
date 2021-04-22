import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const ContactInformation = ({ contactInfo, onClick }) => {
  const id = contactInfo ? "edit" : "";
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="phone" sectionTitle="Contact Information" addButton="true" editButton="true" sectionId="contactInfoEdit" id={id} onClick={onClick} />
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