import React from 'react';
import Biography from './Biography';
import Education from './Education';
import EditMode from './EditMode';
import Experience from './Experience';
import Skills from './Skills';
import Hobbies from './Hobbies';
import ProfessionsOfInterest from './ProfessionsOfInterest';
import LocationOfInterest from './LocationOfInterest';
import ContactInformation from './ContactInformation';

const InfoComponent = (props) => {
  const componentStatus = props.componentStatus;
  const toggleEditMode = (event) => {
    props.toggleEditMode(event);
  }
  return (
    <>
      {
        !Object.values(componentStatus).includes(true) && <div className="content-body">
          <Biography onClick={toggleEditMode} />
          <div className="p-grid">
            <div className="p-col-12 p-md-8 content-leftPanel">
              <Experience onClick={toggleEditMode} />
              <Education onClick={toggleEditMode} />
            </div>
            <div className="p-col-12 content-rightPanel p-md-4">
              <Skills onClick={toggleEditMode} />
              <Hobbies onClick={toggleEditMode} />
              <ProfessionsOfInterest onClick={toggleEditMode} />
              <LocationOfInterest onClick={toggleEditMode} />
              <ContactInformation onClick={toggleEditMode} />
            </div>
          </div>
        </div>
      }
      <EditMode componentStatus={componentStatus} onClick={toggleEditMode} />
    </>
  );
}

export default InfoComponent;