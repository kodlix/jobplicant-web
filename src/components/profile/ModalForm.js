import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dialog } from "primereact/dialog";
import BiographyForm from "./BiographyForm";
import { PROFILE } from "constants/profile";

import "./ModalForm.css";
import ExperienceForm from "./ExperienceForm";
import ContactInfoForm from "./ContactInformationForm";
import EducationForm from "./EducationForm";
import LOIForm from "./LocationOfInterestForm";
import HobbyForm from "./HobbiesForm";
import PortfolioForm from "./PortfolioForm";
import SkillForm from "./SkillForm";
import ProfessionsOfInterestForm from "./ProfessionsOfInterestForm";
import { loadProfileInfo } from "store/modules/account";
import PersonalInfoForm from "./PersonalInfoForm";
import PortfolioModal from "./PortfolioModal";

const ModalForm = ({ data, itemToEdit, mode }) => {
  const modalName = useSelector((state) => state.modal.name);
  const visible = useSelector((state) => state.modal.visible);
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    setName(modalName);
  }, [modalName]);

  const onHide = () => dispatch(loadProfileInfo());

  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      breakpoints={{ "960px": "75vw" }}
      style={{ width: "50vw" }}
    >
      {name === PROFILE.BIOGRAPHY && (
        <BiographyForm data={data.profile} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.PERSONAL_INFO && (
        <PersonalInfoForm data={data} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.EXPERIENCE && (
        <ExperienceForm data={data.experiences} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.CONTACT_INFO && (
        <ContactInfoForm data={data.contact} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.EDUCATION && (
        <EducationForm data={data.experiences} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.LOCATION && (
        <LOIForm data={data.locations} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.HOBBY && (
        <HobbyForm data={data.hobbies} itemToEdit={itemToEdit} mode={mode} />
      )}
      {name === PROFILE.SKILL && (
        <SkillForm data={data.skills} itemToEdit={itemToEdit} mode={mode} />
        )}
      {name === PROFILE.PROFESSION && (
        <ProfessionsOfInterestForm
        data={data.interests}
        itemToEdit={itemToEdit}
        mode={mode}
        />
        )}
      {name === PROFILE.PORTFOLIO && (
          <PortfolioForm data={data.portfolios} itemToEdit={itemToEdit} mode={mode} />
        )}
      {name === PROFILE.PORTFOLIO_MODAL && (
        <PortfolioModal data={data.portfolios} itemToEdit={itemToEdit} mode={mode} />
      )}
    </Dialog>
  );
};

export default ModalForm;
