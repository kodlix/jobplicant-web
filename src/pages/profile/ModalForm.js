import React, {useState, useEffect} from 'react';
import { useSelector}  from 'react-redux';
import { Dialog } from 'primereact/dialog';
import BiographyForm from './BiographyForm';
import {PROFILE} from 'constants/profile';

import './ModalForm.css';
import ExperienceForm from './ExperienceForm';
import ContactInfoForm from './CompanyContactInfoForm';
import EducationForm from './EducationForm';
import LOIForm from './LocationOfInterestForm';
import HobbyForm from './HobbiesForm';
import PortfolioForm from './PortfolioForm';
import SkillForm from './SkillForm';
import ProfessionsOfInterest from './ProfessionsOfInterest';

const ModalForm = ({data, itemToEdit}) => {
    const modalName = useSelector(state => state.modal.name);
    const [name, setName] = useState("");
  

  useEffect(() => {
      setName(modalName);
  }, [modalName])
  
    return ( 
        <Dialog  visible={name} breakpoints={{'960px': '75vw'}} style={{width: '50vw'}}>
            {name === PROFILE.BIOGRAPHY && <BiographyForm  data={data.profile} itemToEdit={itemToEdit} />}
            {name === PROFILE.EXPERIENCE && <ExperienceForm  data={data.experiences} itemToEdit={itemToEdit}/>} 
            {name === PROFILE.CONTACT_INFO && <ContactInfoForm  data={data.contact} itemToEdit={itemToEdit}/>}
            {name === PROFILE.EDUCATION && <EducationForm  data={data.experiences} itemToEdit={itemToEdit}/>}
            {name === PROFILE.LOCATION && <LOIForm  data={data.experiences} itemToEdit={itemToEdit}/>}
            {name === PROFILE.HOBBY && <HobbyForm  data={data.experiences} itemToEdit={itemToEdit}/>}
            {name === PROFILE.PORTFOLIO && <PortfolioForm  data={data.experiences} itemToEdit={itemToEdit}/>}
            {name === PROFILE.SKILL && <SkillForm  data={data.experiences} itemToEdit={itemToEdit}/>}
            {name === PROFILE.PROFESSION && <ProfessionsOfInterest  data={data.experiences} itemToEdit={itemToEdit}/>}

        </Dialog>
     );
}
 
export default ModalForm;  