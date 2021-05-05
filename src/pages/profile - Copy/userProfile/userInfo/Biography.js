import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Biography = ({ biography }) => {
  const id = biography ? "edit" : "";
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="bookmark"
          sectionTitle="Biography"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/userprofile/edit"
          createLink="/userprofile/create"
        />
        <div className="p-card-body">
          {biography}
        </div>
      </div>
    </>
  );
}

export default Biography;