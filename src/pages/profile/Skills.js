import React from 'react';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const Skills = (props) => {
  const mode = (event) => {
    props.onClick(event);
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="tag" sectionTitle="Skills" id="skillEdit" addButton="true" editButton="true" onClick={mode} />
        <div className="p-card-body">
          <span className="skilltag"><i className=""></i>CSS</span>
          <span className="skilltag"><i className=""></i>Photosop</span>
          <span className="skilltag"><i className=""></i>Adobe</span>
          <span className="skilltag"><i className=""></i>CSS</span>
        </div>
      </div>
    </>
  );
}

export default Skills;