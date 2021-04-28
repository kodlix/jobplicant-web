import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Experience = ({ experiences, id, onClick }) => {
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="star-o"
          sectionTitle="Experience"
          id={id}
          addButton
          editType="link"
          createLink="/userprofile/create"
        />
        {experiences && experiences.map((experience) => (
          <div key={experience.id}>
            <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle"><span><b>{experience.jobTitle}</b> at <b className="experienceCompany">{experience.companyName}</b></span><Link to={`/userprofile/edit?title=Experience&id=${experience.id}`}><i className="pi pi-pencil icon-edit" onClick={() => onClick(
              { sectionTitle: "experienceEdit", id: experience.id })} id={experience.id}></i></Link></div>
            <div className="p-card-subtitle p-ml-3"><b><small>({new Date(experience.startDate).getFullYear()} - {new Date(experience.endDate).getFullYear()})</small></b></div>
            <div className="p-card-body p-text-secondary">{experience.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;