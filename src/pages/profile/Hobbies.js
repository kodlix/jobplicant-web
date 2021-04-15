import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const Hobbies = (props) => {
  const openEditMode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="heart" sectionTitle="Hobbies / Likes" id="hobbyEdit" addButton="true" editButton="true" onClick={openEditMode} />
        <div className="p-card-body p-text-secondary">
          <ul className="listStyle p-grid">
            <li className="p-col-4">Hiking</li>
            <li className="p-col-4">Running</li>
            <li className="p-col-4">Swimming</li>
            <li className="p-col-4">Drawing</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hobbies;