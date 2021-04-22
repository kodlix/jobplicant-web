import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import EditModeFooter from './EditModeFooter';
import SectionHeader from '../SectionHeader';


const HobbyEdit = ({ hobbiesArray, componentStatus, closeEditMode }) => {
  const { register, handleSubmit, setValue } = useForm();
  const [hobbies, setHobbies] = useState(hobbiesArray);


  const handleHobbyAdd = () => {
    const hobby = document.getElementById("hobbyInput").value;

    if (hobbies.includes(hobby.trim())) {
      return;
    }
    if (hobby.trim() && (hobbies.length < 5)) {
      setHobbies([...hobbies, hobby.trim()]);
      setValue("hobby", [...hobbies, hobby.trim()]);
    }
  }

  const handleHobbyDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newHobbyArray = hobbies.filter(hobby => hobby !== e.currentTarget.id);
      setHobbies(newHobbyArray);
      setValue("hobby", newHobbyArray);
    }
  }

  useEffect(() => {
    setHobbies(hobbiesArray);
    register("hobby");
    setValue("hobby", hobbiesArray);
  }, [componentStatus.hobbyEdit])

  const hobbySubmit = (hobby) => {
    console.log(hobby);
    return;
  }
  return (
    <>
      {componentStatus.hobbyEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="heart" sectionTitle="Hobbies / Likes" />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(hobbySubmit)}>
              <span className="skillInput p-mb-4">
                <div>
                  <label htmlFor="hobbyInput" className="inputLabel p-pr-3">Add up to 5 hobbies</label>
                  <InputText id="hobbyInput" type="text" placeholder="Add a hobby..." />
                  <i className="pi pi-plus" onClick={(e) => handleHobbyAdd(e)}> Add</i>
                </div>
              </span>
              <div>
                {hobbies?.map((hobby, index) => (
                  <button key={index} onClick={(e) => handleHobbyDelete(e)} type="button" className="p-mr-2 tag-container" id={hobby}><Tag value={hobby} icon="pi pi-times" className="p-p-2" ></Tag>
                  </button>
                ))}
              </div>
              <EditModeFooter id="hobbyEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
    </>);
}

export default HobbyEdit;