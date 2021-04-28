import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Hobbies = ({ hobbies, onClick }) => {
  const id = hobbies ? "edit" : ""

  return (
    <>
      <div className="p-card p-mt-2">
      <SectionHeader
          icon="heart"
          sectionTitle="Hobbies / Likes"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/userprofile/edit"
          createLink="/userprofile/create"
        />
        <div className="p-card-body p-text-secondary">
          <ul className="listStyle p-grid">
            {hobbies?.map((hobby) => (<li className="p-col-4" key={hobby.split(' ').join('')}>{hobby}</li>))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Hobbies;