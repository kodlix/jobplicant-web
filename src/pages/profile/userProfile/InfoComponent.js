import React from 'react';
import Biography from './Biography';
import Education from './Education';
import EditMode from '../userEditMode/EditMode';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import ProfessionsOfInterest from './ProfessionsOfInterest';
import LocationOfInterest from './LocationOfInterest';
import ContactInformation from './ContactInformation';

const InfoComponent = ({ componentStatus, toggleEditMode, dataFromBack }) => {
  return (
    <>
      {
        !Object.keys(componentStatus).length && <div className="content-body">
          <Biography onClick={toggleEditMode} id={dataFromBack.biography?.id || ""} biography={dataFromBack.biography} />
          <div className="p-grid">
            <div className="p-col-12 p-md-8 content-leftPanel">
              <Experience onClick={toggleEditMode} experiences={dataFromBack.experience} id={dataFromBack.experience?.id} />
              <Education onClick={toggleEditMode} educations={dataFromBack.education} id={dataFromBack.education?.id} />
            </div>
            <div className="p-col-12 content-rightPanel p-md-4">
              <Skills onClick={toggleEditMode} skills={dataFromBack.skills} id={dataFromBack.skills?.id} />
              <Hobbies onClick={toggleEditMode} hobbies={dataFromBack.hobbies} id={dataFromBack.hobbies?.id} />
              <ProfessionsOfInterest onClick={toggleEditMode} POIs={dataFromBack.POI} id={dataFromBack.POI?.id} />
              <LocationOfInterest onClick={toggleEditMode} onClick={toggleEditMode} LOIs={dataFromBack.LOI} id={dataFromBack.LOI?.id} />
              <ContactInformation onClick={toggleEditMode} contactInfo={dataFromBack.contactInfo} id={dataFromBack.contactInfo?.id} />
            </div>
          </div>
        </div>
      }
      <EditMode componentStatus={componentStatus} onClick={toggleEditMode} dataFromBack={dataFromBack} />
    </>
  );
}

export default InfoComponent;