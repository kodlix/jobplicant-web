import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const LocationOfInterest = (props) => {
  const mode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="map-marker" sectionTitle="Location of Interest" id="LOIEdit" addButton="true" editButton="true" onClick={mode} />
        <div className="p-card-body p-text-secondary">
          Germany
        </div>
      </div>
    </>
  );
}

export default LocationOfInterest;