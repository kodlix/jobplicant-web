import React from 'react';
import '../UserProfile.css';
import BiographyEdit from './BiographyEdit';
import ExperienceEdit from './ExperienceEdit';
import EducationEdit from './EducationEdit';
import POIEdit from './POIEdit';
import LOIEdit from './LOIEdit';
import SkillEdit from './SkillEdit';
import HobbyEdit from './HobbyEdit';
import PortfolioEdit from './PortfolioEdit';
import PersonalInfoEdit from './PersonalInfoEdit';
import ContactInfoEdit from './ContactInfoEdit';

const EditMode = ({ dataFromBack, componentStatus, onClick }) => {
  const experienceObject = componentStatus.hasOwnProperty('experienceEdit') && dataFromBack.experience ? dataFromBack.experience.filter(exp => (exp.id === componentStatus.experienceEdit)) : "";
  const educationObject = componentStatus.hasOwnProperty('educationEdit') && dataFromBack.education ? dataFromBack.education.filter(edu => (edu.id === componentStatus.educationEdit)) : "";
  return (
    <>
      <BiographyEdit componentStatus={componentStatus} closeEditMode={onClick} biographyFromBack={dataFromBack.biography} />
      <ExperienceEdit componentStatus={componentStatus} closeEditMode={onClick} experienceObject={experienceObject[0]} />
      <EducationEdit componentStatus={componentStatus} closeEditMode={onClick} educationObject={educationObject[0]} />
      <SkillEdit componentStatus={componentStatus} closeEditMode={onClick} skillArray={dataFromBack.skills} />
      <HobbyEdit componentStatus={componentStatus} closeEditMode={onClick} hobbiesArray={dataFromBack.hobbies} />
      <POIEdit componentStatus={componentStatus} closeEditMode={onClick} POIArray={dataFromBack.POI} />
      <LOIEdit componentStatus={componentStatus} closeEditMode={onClick} LOIArray={dataFromBack.LOI} />
      <ContactInfoEdit componentStatus={componentStatus} closeEditMode={onClick} contactInfoArray={dataFromBack.contactInfo} />
      <PortfolioEdit componentStatus={componentStatus} closeEditMode={onClick} portfolioFromBack={dataFromBack.portfolio} />
      <PersonalInfoEdit componentStatus={componentStatus} closeEditMode={onClick} personalInfoFromBack={dataFromBack.personalInfo} />     
    </>
  );
}

export default EditMode;