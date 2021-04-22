import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const LocationOfInterest = ({ LOIs, onClick }) => {
  const id = LOIs ? "edit" : ""
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="map-marker" sectionTitle="Location of Interest" sectionId="LOIEdit" id={id} addButton="true" editButton="true" onClick={onClick} />
        <div className="p-card-body p-text-secondary">
          {LOIs?.map((LOI) => (
            <div key={LOI.id}>
              {LOI.LOIName}
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default LocationOfInterest;