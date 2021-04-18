import React, { useState, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { Tag } from 'primereact/tag';
import { Dropdown } from 'primereact/dropdown';
import { RadioButton } from 'primereact/radiobutton';
import { OverlayPanel } from 'primereact/overlaypanel';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';
import SectionHeader from './SectionHeader';
import './UserProfile.css';

const EditMode = (props) => {
  const ref = useRef({});
  const skillsList = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];
  const { register, handleSubmit, errors, setValue, watch, trigger, control, getValues, setError, clearErrors } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const componentStatus = props.componentStatus;
  const [dates, setDates] = useState([]);
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [currentSkill, setCurrentSkill] = useState();
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [POIs, setPOIs] = useState([]);
  const [gender, setGender] = useState("");
  const toast = useRef(null);

  const searchObjectArrayValues = (array, value) => {
    const skillExists = array.filter(skill => skill.name === value);
    return !Boolean(skillExists.length > 0);
  }

  const closeEditMode = (event) => {
    setSkills([]);
    setCurrentSkill({});
    setHobbies([]);
    setPOIs([]);
    props.onClick(event);
  }
  const handleDelete = () => {
    const itemToDeleteId = Object.keys(componentStatus).find(key => componentStatus[key] === true)
    console.log(itemToDeleteId);
  }

  const handleSkillChange = (e) => {
    setCurrentSkill(e.target.value);
  }

  const handleSkillAdd = () => {
    console.log(currentSkill);
    if (skills.length === 10) {
      setCurrentSkill();
      console.log(currentSkill);

      return;
    }
    if (currentSkill && currentSkill.name) {
      if (searchObjectArrayValues(skills, currentSkill.name)) {
        setSkills([...skills, currentSkill]);
        setCurrentSkill();
        console.log(currentSkill);

        return;
      }
      console.log(currentSkill);

      setCurrentSkill();
    }
  }

  const handleSkillDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newSkillArray = skills.filter(skill => skill.name !== e.currentTarget.id);
      setSkills(newSkillArray);
    }
  }

  const handleHobbyAdd = () => {
    const hobby = document.getElementById("hobbyInput").value;

    if (hobbies.includes(hobby.trim())) {
      return;
    }
    if (hobby.trim() && (hobbies.length < 5)) {
      setHobbies([...hobbies, hobby.trim()]);
    }
  }

  const handleHobbyDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newHobbyArray = hobbies.filter(hobby => hobby !== e.currentTarget.id);
      setHobbies(newHobbyArray);
    }
  }

  const handlePOIAdd = () => {
    const POI = document.getElementById("POIInput").value;
    if (POIs.includes(POI.trim())) {
      return;
    }
    if (POI.trim() && (POIs.length < 2)) {
      setPOIs([...POIs, POI.trim()]);
    }
  }

  const handlePOIDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newPOIArray = POIs.filter(POI => POI !== e.currentTarget.id);
      setPOIs(newPOIArray);
    }
  }


  const deletePortfolio = (e) => {
    const newPortfolioArray = portfolioItems.filter(item => item.id !== e.target.id);
    setPortfolioItems(newPortfolioArray);
  }

  const addPortfolio = e => {
    if (e.target.files.length) {
      const preview = URL.createObjectURL(e.target.files[0]);
      const newPortfolioArray = [...portfolioItems];
      newPortfolioArray.unshift({ imageURL: preview, id: "p" + (portfolioItems.length + 1) })
      setPortfolioItems(newPortfolioArray);
    }
  };


  // Submit buttons
  const biographySubmit = (biography) => {
    console.log(biography);
    return
    // setError("biography", {
    //   type: "manual",
    //   message: "Error message"
    // });
    // console.log(biography);
  }


  return (
    <>
      {componentStatus.biographyEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="bookmark" sectionTitle="Edit Biography" deleteButton="true" onDelete={handleDelete} />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(biographySubmit)}>
              <label htmlFor="biographyInput" className="inputLabel">Give a short descripiton of your career history
              {/* {errors.biography && <span className="text-danger font-weight-bold">{errors.biography.message}</span>} */}
              </label>

              <InputTextarea name="biography" {...register('biography', {
                required: "required"
              })}
                id="biographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." />
              <EditModeFooter id="biographyEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.experienceEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader deleteButton="true" onDelete={handleDelete} icon="star-o" sectionTitle="Edit Experience" />
          <div className="p-card-body">
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Job Title</label>
                <InputText id="firstname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Company Name</label>
                <InputText id="lastname6" type="text" />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="jobDateRange">Start Date -  End Date</label>
                <Calendar selectionMode="range" value={dates} onChange={(e) => setDates(e.value)} dateFormat="dd/mm/yy" id="jobDateRange"></Calendar>
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Job Category</label>
                <InputText id="firstname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Location</label>
                <InputText id="lastname6" type="text" />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="address">Description</label>
                <InputTextarea id="address" type="text" rows="4" />
              </div>
            </div>
            <EditModeFooter id="experienceEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
      {componentStatus.educationEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader deleteButton="true" onDelete={handleDelete} icon="book" sectionTitle="Edit Education" />
          <div className="p-card-body">
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Certificate Title</label>
                <InputText id="firstname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Certificate Name</label>
                <InputText id="lastname6" type="text" />
              </div>
              <div className="p-field p-col-12">
                year of graduation
                  <Calendar selectionMode="range" value={dates} onChange={(e) => setDates(e.value)} dateFormat="dd/mm/yy"></Calendar>
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="firstname6">Institution Name</label>
                <InputText id="firstname6" type="text" />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="lastname6">Country</label>
                <InputText id="lastname6" type="text" />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="address">Address</label>
                <InputTextarea id="address" type="text" rows="4" />
              </div>
            </div>
            <EditModeFooter id="educationEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
      {componentStatus.skillEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="tag" sectionTitle="Edit Skills" />
          <div className="p-card-body">
            <label htmlFor="skillInput" className="inputLabel p-pr-3">Add up to 10 skills</label>
            {skills.map((skill, index) => (
              <button key={index} onClick={(e) => handleSkillDelete(e)} type="button" className="p-mr-2 tag-container" id={skill.name}><Tag value={skill.name} icon="pi pi-times" className="p-p-2" ></Tag>
              </button>
            ))}
            <span className="skillInput">
              <Dropdown value={currentSkill} options={skillsList} onChange={(e) => handleSkillChange(e)}
                optionLabel="name" filter showClear filterBy="name"
                placeholder="Select Skill" icon="pi pi-plus" />
              <i className="pi pi-plus" onClick={handleSkillAdd}></i>
            </span>
            <EditModeFooter id="skillEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
      {componentStatus.hobbyEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="heart" sectionTitle="Edit Hobbies / Likes" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4">
                <div>
                  <label htmlFor="hobbyInput" className="inputLabel p-pr-3">Add up to 5 hobbies</label>
                  <InputText id="hobbyInput" type="text" placeholder="Add a hobby..." />
                  <i className="pi pi-plus" onClick={(e) => handleHobbyAdd(e)}> Add</i>
                </div>
              </span>
              <div>
                {hobbies.map((hobby, index) => (
                  <button key={index} onClick={(e) => handleHobbyDelete(e)} type="button" className="p-mr-2 tag-container" id={hobby}><Tag value={hobby} icon="pi pi-times" className="p-p-2" ></Tag>
                  </button>
                ))}
              </div>
              <EditModeFooter id="hobbyEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.POIEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="briefcase" sectionTitle="Edit Professions of Interest" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4">
                <div>
                  <label htmlFor="POIInput" className="inputLabel p-pr-3">Add up to 2 professions of interest</label>
                  <InputText id="POIInput" type="text" placeholder="Add a POI..." />
                  <i className="pi pi-plus" onClick={handlePOIAdd}> Add</i>
                </div>
              </span>
              <div>
                {POIs.map((POI, index) => (
                  <button key={index} onClick={(e) => handlePOIDelete(e)} type="button" className="p-mr-2 tag-container" id={POI}><Tag value={POI} icon="pi pi-times" className="p-p-2" ></Tag>
                  </button>
                ))}
              </div>
              <EditModeFooter id="POIEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.LOIEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader deleteButton="true" onDelete={handleDelete} icon="map-marker" sectionTitle="Edit Location of Interest" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4">
                <div>
                  <label htmlFor="LOIInput" className="inputLabel p-pr-3">Add a location of interest</label>
                  <InputText id="LOIInput" type="text" placeholder="Location" />
                </div>
              </span>
              <div>
              </div>
              <EditModeFooter id="LOIEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.contactInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="phone" sectionTitle="Edit Contact Information" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="phoneNumber" className="inputLabel p-pr-3">Phone Number</label>
                  <InputText id="phoneNumber" type="text" placeholder="Phone Number" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="emailAdress" className="inputLabel p-pr-3">Email Address</label>
                  <InputText id="emailAdress" placeholder="Email Address" type="email" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="LGA" className="inputLabel p-pr-3">LGA</label>
                  <InputText id="LGA" type="text" placeholder="LGA" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="state" className="inputLabel p-pr-3">State</label>
                  <InputText id="state" type="text" placeholder="State" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="country" className="inputLabel p-pr-3">Country</label>
                  <InputText id="country" type="text" placeholder="Country" />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2" >
                  <label htmlFor="postalCode" className="inputLabel p-pr-3">Postal Code</label>
                  <InputText id="postalCode" type="text" placeholder="Postal Code" />
                </div>
                <div className="p-field p-col-12 p-md-8">
                  <label htmlFor="address" className="inputLabel">Address</label>
                  <InputTextarea id="address" type="text" rows="1" className="inputField" placeholder="Address" />
                </div>
              </span>
              <div>
              </div>
              <EditModeFooter id="contactInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.personalInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader icon="user" sectionTitle="Edit Personal Information" />
          <div className="p-card-body">
            <form>
              <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="firstName" className="inputLabel">First Name</label>
                  <InputText id="firstName" type="text" placeholder="First Name" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="lastName" className="inputLabel">Last Name</label>
                  <InputText id="lastName" type="text" placeholder="Last Name" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="otherNames" className="inputLabel">Other Names</label>
                  <InputText id="otherNames" type="text" placeholder="Other Names" />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="lastName" className="inputLabel p-pr-3">Date Of Birth</label>
                  <InputText id="lastName" type="text" value="March 19th, 1982" placeholder="Last Name" disabled />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <span className="inputLabel p-pr-3">Gender</span>
                  <div className="p-formgroup-inline">
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city7" name="gender" value="female" onChange={(e) => setGender(e.value)} checked={gender === 'female'} />
                      <label htmlFor="city7">Female</label>
                    </div>
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city8" name="gender" value="male" onChange={(e) => setGender(e.value)} checked={gender === 'male'} />
                      <label htmlFor="city8">Male</label>
                    </div>
                    <div className="p-field-checkbox">
                      <RadioButton inputId="city8" name="gender" value="other" onChange={(e) => setGender(e.value)} checked={gender === 'other'} />
                      <label htmlFor="city8">Other</label>
                    </div>
                  </div>
                </div>
              </span>
              <div>
              </div>
              <EditModeFooter id="personalInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
      {componentStatus.portfolioEdit &&
        <div className="p-card p-mt-2">
          <Toast ref={toast} />
          <SectionHeader icon="images" sectionTitle="Edit Portfolio" />
          <div className="p-card-body">
            <span className="width-100 p-mb-4">
              <div className="p-grid">
                <div className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3">
                  <div className="p-mx-2">
                    <label htmlFor="addPortfolioItem">
                      <i className="pi pi-plus-circle portfolioItem-add">
                      </i>
                    </label>
                    <input
                      type="file"
                      id="addPortfolioItem"
                      style={{ display: "none" }}
                      onChange={addPortfolio}
                      onClick={(e) => e.target.value = null}
                    />

                  </div>
                </div>
                {portfolioItems.map((item, index) => (
                  <span className="p-sm-6 p-md-3 p-col-12 editPortfolio-container p-p-0 p-mb-3" key={item.id + index}>
                    <div className="p-mx-2">
                      <img src={item.imageURL} alt="Portfolio Item" />
                      <span className="portfolioItem-icons">
                        <Button type="button" icon="pi pi-ellipsis-h" onClick={(e) => ref.current[item.id].toggle(e)} />
                        <OverlayPanel ref={element => (ref.current[item.id] = element)} >
                          <div className="p-py-2 p-px-3" onClick={deletePortfolio} id={item.id}><i className="pi pi-trash p-pr-2"></i> Delete Image</div>
                        </OverlayPanel>
                      </span>
                    </div>
                  </span>
                ))}
              </div>
            </span>
            <div>
            </div>
            <EditModeFooter id="portfolioEdit" onCancel={closeEditMode} />
          </div>
        </div>
      }
    </>
  );
}

const EditModeFooter = (props) => {
  return (
    <>
      <div className="editMode-footer">
        <Button icon="pi pi-times" iconPos="left" label="Cancel" id={props.id} onClick={props.onCancel} type="button" />
        <Button icon="pi pi-check" iconPos="left" label="Save" id="saveButton" type="submit" />
      </div>
    </>
  );
}

export default EditMode;