import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const ContactInformation = (props) => {
  const openEditMode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="phone" sectionTitle="Contact Information" id="contactInfoEdit" addButton="true" editButton="true" onClick={openEditMode} />
        <div className="p-card-body p-text-secondary">
          <span><b>Phone Number:</b> +23463736373</span>
          <span><b>Email: </b>+23463736373</span>
          <span><b>Location: </b>Isaac Johnson, Lagos. Nigeria</span>
        </div>
      </div>
    </>
  );
}

export default ContactInformation;