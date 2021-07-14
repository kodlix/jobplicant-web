import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { loadProfileInfo } from "store/modules/account";
import { openModal } from "store/modules/modal";

import Biography from "../Biography";
import Experience from "../Experience";
import Education from "../Education";
import Skills from "../Skills";
import Hobbies from "../Hobbies";
import ProfessionsOfInterest from "../ProfessionsOfInterest";
import LocationOfInterest from "../LocationOfInterest";
import ContactInformation from "../ContactInformation";
import ModalForm from '../ModalForm';
import agentService from 'services/agent.service';
import Spinner from 'components/spinner/spinner.component';

const InfoTab = () => {

  const dispatch = useDispatch();
  const loading = useSelector(state => state.account.loading);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const accountType = agentService.Auth.current().accountType;

  /**
   * This state allows keep track of the changes in state either updating or deleting a data in the education
   * redux file, in other to update the UI accordingly
   */
  const educationUpdatedOrDeleted = useSelector(
    (state) => state.education.updatedOrDeleted
  );
  const userSkillUpdatedOrDeleted = useSelector(
    (state) => state.userSkill.updatedOrDeleted
  );
  const experienceUpdatedOrDeleted = useSelector(state => state.experience.updatedOrDeleted);

  const [mode, setMode] = useState("create");
  const [itemToEdit, setItemToEdit] = useState({});

  //formatted entries
  const [LOI, setLOI] = useState(null);
  const [interests, setInterests] = useState(null);

  useEffect(() => {
    console.log("change must happen");
    dispatch(loadProfileInfo());
  }, [educationUpdatedOrDeleted, userSkillUpdatedOrDeleted, experienceUpdatedOrDeleted]);

  const expandImage = () => { };

  const openCreate = (name) => {
    setMode("create");
    setItemToEdit({});
    dispatch(openModal(name));
  };

  const openEdit = (name, data) => {
    setMode("edit");
    setItemToEdit(data);
    dispatch(openModal(name));
  };

  const uploadProfilePicture = (e) => {
    console.log("files");
    console.table(e.target.files);
  };

  const formatDate = (date) => {
    let year = date.getFullYear();
    let month = (1 + date.getMonth()).toString().padStart(2, "0");
    let day = date.getDate().toString().padStart(2, "0");

    return year + "/" + month + "/" + day;
  };
  console.log('loading', loading)
  if (loading)
    return <Spinner />

  return (
    <>
      <Biography
        openCreate={openCreate}
        openEdit={openEdit}
        profileInfo={profileInfo}
      />
      <div className="p-grid">
        <div className="p-col-12 p-md-8 content-leftPanel">
          {/* experience */}
          <Experience
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
            formatDate={formatDate}
          />
          <Education
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
            formatDate={formatDate}
          />
        </div>
        <div className="p-col-12 content-rightPanel p-md-4">
          {/* contact information */}
          <ContactInformation
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
          />
          {/* skills */}
          <Skills
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
          />
          {/* hobbies */}
          {accountType !== "Artisan" && <Hobbies
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
          />}
          {/* profession of interest */}
          {accountType !== "Artisan" && <ProfessionsOfInterest
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
          />}
          {/* location of interest */}
          <LocationOfInterest
            openCreate={openCreate}
            openEdit={openEdit}
            profileInfo={profileInfo}
          />

        </div>
      </div>
      <ModalForm data={profileInfo} mode={mode} itemToEdit={itemToEdit} />
    </>
  );
}

export default InfoTab;