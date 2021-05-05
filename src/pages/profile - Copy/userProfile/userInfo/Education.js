import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeader from '../../SectionHeader';
import '../../UserProfile.css';

const Education = ({ educations, id }) => {
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="book"
          sectionTitle="Education"
          id={id}
          addButton
          editType="link"
          createLink="/userprofile/create"
        />
        {educations?.map((education) => (
          <div key={education.id}>
            <div className="p-card-subtitle p-ml-3 p-mb-0 mainTitle"><span><b>{education.certificateTitle.name}</b> in <b className="experienceCompany">{education.certificateName}</b></span><Link to={`/userprofile/edit?title=Education&id=${education.id}`}><i className="pi pi-pencil" id={education.id} ></i></Link></div>
            <div className="p-card-subtitle p-ml-3 p-mb-0"><b><small>Graduated {new Date(education.yearOfGraduation).getFullYear()}</small></b></div>
            <div className="p-card-subtitle p-ml-3 p-mb-2"><b><small>{education.institutionName}</small></b></div>
            <div className="p-card-body p-text-secondary">{education.address}. {education.country.name}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Education;