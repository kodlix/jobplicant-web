import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loadProfileInfo } from "store/modules/account";
import { openModal } from "store/modules/modal";
import Biography from "components/profile/Biography";
import Experience from "components/profile/Experience";
import Education from "components/profile/Education";
import Skills from "components/profile/Skills";
import Hobbies from "components/profile/Hobbies";
import ProfessionsOfInterest from "components/profile/ProfessionsOfInterest";
import LocationOfInterest from "components/profile/LocationOfInterest";
import ContactInformation from "components/profile/ContactInformation";
import ModalForm from 'components/profile/ModalForm';
import agentService from 'services/agent.service';
import Spinner from 'components/spinner/spinner.component';
import { loadCountry } from 'store/modules/location';
import { ACCOUNT_TYPE } from 'constants/accountType';
import { Skeleton } from 'primereact/skeleton'

import CustomError from "pages/error-page/CustomError";
import { ErrorBoundary } from "react-error-boundary";

import { fetchCountries } from "store/modules/util";
import { getQualifications } from "store/modules/admin";
import ExperienceSkeleton from 'components/skeletons/ExperienceSkeleton';
import EducationSkeleton from 'components/skeletons/EducationSkeleton';
import ContactInfoSkeleton from 'components/skeletons/ContactInfoSkeleton';
import SkillSkeleton from 'components/skeletons/SkillSkeleton';
import HobbiesSkeleton from 'components/skeletons/HobbiesSkeleton';
import ProfessionOfInterestSkeleton from 'components/skeletons/ProfessionOfInterestSkeleton';
import LocationOfInterestSkeleton from 'components/skeletons/LocationOfInterestSkeleton';
import BiographySkeleton from 'components/skeletons/BiographySkeleton';

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
    dispatch(loadProfileInfo());
    dispatch(loadCountry());

  }, [educationUpdatedOrDeleted, userSkillUpdatedOrDeleted, experienceUpdatedOrDeleted]);

  useEffect(() => {
    dispatch(fetchCountries());
    dispatch(getQualifications())
  }, []);

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

  // if (loading)
  //   return <Spinner />

  return (
    <ErrorBoundary
      FallbackComponent={CustomError}
      onReset={() => {
        //reset the state of your app state
        console.log('reset the app state')
      }}
    >
      <>
        {loading ? <BiographySkeleton /> : <Biography
          openCreate={openCreate}
          openEdit={openEdit}
          profileInfo={profileInfo}
        />}
        <div className="p-grid">
          <div className="p-col-12 p-md-8 content-leftPanel">
            {/* experience */}
            {loading ? <ExperienceSkeleton /> : <Experience
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
              formatDate={formatDate}
            />}
            {loading ? <EducationSkeleton /> : <Education
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
              formatDate={formatDate}
            />}
          </div>
          <div className="p-col-12 content-rightPanel p-md-4">
            {/* contact information */}
            {loading ? <ContactInfoSkeleton /> : <ContactInformation
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />}
            {/* skills */}
            {loading ? <SkillSkeleton /> : <Skills
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />}
            {/* hobbies */}
            {loading ? <HobbiesSkeleton /> : accountType !== ACCOUNT_TYPE.ARTISAN && <Hobbies
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />}
            {/* profession of interest */}
            {loading ? <ProfessionOfInterestSkeleton /> : accountType !== ACCOUNT_TYPE.ARTISAN && <ProfessionsOfInterest
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />}
            {/* location of interest */}
            {loading ? <LocationOfInterestSkeleton /> : <LocationOfInterest
              openCreate={openCreate}
              openEdit={openEdit}
              profileInfo={profileInfo}
            />}

          </div>
        </div>
        <ModalForm
          data={profileInfo}
          mode={mode}
          itemToEdit={itemToEdit}
        />
      </>
    </ErrorBoundary>
  );
}

export default InfoTab;