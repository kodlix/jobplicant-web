import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const ProfessionsOfInterest = (props) => {
  const mode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="briefcase" sectionTitle="Professions of Interest" id="POIEdit" addButton="true" editButton="true" onClick={mode} />
        <div className="p-card-body p-text-secondary">
          <ul className="listStyle">
            <li>Astronomy</li>
            <li>Graphic Design</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default ProfessionsOfInterest;