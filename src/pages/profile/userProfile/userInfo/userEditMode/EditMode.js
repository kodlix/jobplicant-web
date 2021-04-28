import React from 'react';
import '../../../UserProfile.css';
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
import editNameMap from './editNameMap.json';

const EditMode = ({ dataFromBack, componentStatus, title, data, onClose }) => {
  const experienceObject = componentStatus && componentStatus.hasOwnProperty('experienceEdit') && dataFromBack.experience ? dataFromBack.experience.filter(exp => (exp.id === componentStatus.experienceEdit)) : "";
  const educationObject =  componentStatus && componentStatus.hasOwnProperty('educationEdit') && dataFromBack.education ? dataFromBack.education.filter(edu => (edu.id === componentStatus.educationEdit)) : "";
  
  if (title === editNameMap.biography) {
    return <BiographyEdit
      closeEditMode={onClose}
      data={data}
    />
  }

  if (title === editNameMap.skills) {
    return <SkillEdit
      closeEditMode={onClose}
      data={data}
    />
  }

  if (title === editNameMap.hobbies) {
    return <HobbyEdit
      closeEditMode={onClose}
      data={data}
    />
  }  

  if (title === editNameMap.POI) {
    return <POIEdit
      closeEditMode={onClose}
      data={data}
    />
  } 
  
  if (title === editNameMap.LOI) {
    return <LOIEdit
      closeEditMode={onClose}
      data={data}
    />
  }  

  if (title === editNameMap.contactInfo) {
    return <ContactInfoEdit
      closeEditMode={onClose}
      data={data}
    />
  }  

  if (title === editNameMap.portfolio) {
    return <PortfolioEdit
      closeEditMode={onClose}
      data={data}
    />
  }  

  if (title === editNameMap.personalInfo) {
    return <PersonalInfoEdit
      closeEditMode={onClose}
      data={data}
    />
  }  
  return (
    <>
    </>
  );
}

export default EditMode;