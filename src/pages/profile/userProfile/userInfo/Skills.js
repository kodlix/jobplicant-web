import React from 'react';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Skills = ({ skills, onClick }) => {
  const id = skills ? "edit" : ""

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="tag"
          sectionTitle="Skills"
          id={id}
          addButton
          editButton
          editType="link"
          editLink="/userprofile/edit"
        />
        <div className="p-card-body">
          {skills && skills.map((skill) => (<span className="skilltag" key={skill.id}><i className=""></i>{skill.skillName}</span>))}
        </div>
      </div>
    </>
  );
}

export default Skills;