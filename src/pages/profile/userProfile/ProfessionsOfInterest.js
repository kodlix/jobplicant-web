import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const ProfessionsOfInterest = ({ POIs, onClick }) => {
  const id = POIs ? "edit" : ""

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="briefcase" sectionTitle="Professions of Interest" sectionId="POIEdit" id={id} addButton="true" editButton="true" onClick={onClick} />
        <div className="p-card-body p-text-secondary">
          <ul className="listStyle">
            {POIs?.map((POI) => (
              <li key={POI.id}>{POI.POIName}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfessionsOfInterest;