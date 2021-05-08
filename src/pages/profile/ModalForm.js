import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Dialog } from 'primereact/dialog';
import BiographyForm from './BiographyForm';
import Experience from './Experience';
import { PROFILE } from 'constants/profile';

import './ModalForm.css';
import ExperienceForm from './Experience';
import ContactInfoForm from './ContactInformationForm';
import EducationForm from './EducationForm';
import LOIForm from './LocationOfInterestForm';
import HobbyForm from './HobbiesForm';
import LocationOfInterest from './LocationOfInterest';
import PortfolioForm from './PortfolioForm';
import SkillForm from './SkillForm';
import ProfessionsOfInterest from './ProfessionsOfInterest';

const ModalForm = ({ data, mode }) => {
    const modalName = useSelector(state => state.modal.name);
    const [name, setName] = useState("");


    useEffect(() => {
        setName(modalName);
    }, [modalName])

    return (
        <Dialog visible={name} breakpoints={{ '960px': '75vw' }} style={{ width: '50vw' }}>
            {name === PROFILE.BIOGRAPHY && <BiographyForm data={data.profile} mode={mode} />}
            {name === PROFILE.EXPERIENCE && <ExperienceForm data={data.experiences} mode={mode} />}
            {name === PROFILE.CONTACT_INFO && <ContactInfoForm data={data.contact} mode={mode} />}
            {name === PROFILE.EDUCATION && <EducationForm data={data.experiences} mode={mode} />}
            {name === PROFILE.LOCATION && <LOIForm data={data.experiences} mode={mode} />}
            {name === PROFILE.HOBBY && <HobbyForm data={data.experiences} mode={mode} />}
            {name === PROFILE.PORTFOLIO && <PortfolioForm data={data.experiences} mode={mode} />}
            {name === PROFILE.SKILL && <SkillForm data={data.experiences} mode={mode} />}
            {name === PROFILE.PROFESSION && <ProfessionsOfInterest data={data.experiences} mode={mode} />}

        </Dialog>
    );
}

export default ModalForm;