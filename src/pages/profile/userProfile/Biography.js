import React from 'react';
import SectionHeader from '../SectionHeader';
import '../UserProfile.css';

const Biography = ({ biography, onClick }) => {
  const id = biography ? "edit" : "";

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="bookmark" sectionTitle="Biography" sectionId="biographyEdit" id={id} addButton="true" editButton="true" onClick={onClick} />
        <div className="p-card-body">
          {biography}
        </div>
      </div>
    </>
  );
}

export default Biography;