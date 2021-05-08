import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { Tag } from 'primereact/tag';
import ModeFooter from 'pages/profile/ModeFooter';
import SectionHeader from './SectionHeader';
import { updateUserHobies } from 'store/modules/account';
import { useDispatch } from 'react-redux';


const HobbyForm = ({ data, closeEditMode }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });

  const [hobbies, setHobbies] = useState([]);


  const handleHobbyAdd = () => {
    const hobby = document.getElementById("hobbyInput").value;
    if (hobbies?.includes(hobby.trim())) {
      return;
    }
    if (hobby.trim() && (hobbies.length < 5)) {
      setHobbies([...hobbies, hobby.trim()]);
      setValue("hobbies", [...hobbies, hobby.trim()]);
    }
  }

  const handleHobbyDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newHobbyArray = hobbies.filter(hobby => hobby !== e.currentTarget.id);
      setHobbies(newHobbyArray);
      setValue("hobbies", newHobbyArray);
    }
  }

  useEffect(() => {
    if (data?.length > 0) {
      register("hobbies");
      setValue("hobbies", data);
      setHobbies(data)
    }
  }, [data]);

  const hobbySubmit = (hobby) => {
    console.log(hobby);
    dispatch(updateUserHobies(hobby))
    return;
  }

  const componentStatus = { skills: 'add' };
  if (data?.length > 0) {
    componentStatus.skills = 'edit';
  }


  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader componentStatus={componentStatus} icon="heart" sectionTitle="Hobbies" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(hobbySubmit)}>
            <span className="skillInput p-mb-4">
              <div>
                <label htmlFor="hobbyInput" className="inputLabel p-pr-3">Add up to 5 hobbies</label>
                <InputText
                  id="hobbyInput"
                  type="text"
                  // name="hobbies"
                  placeholder="Add a hobby..."
                // {...register("hobbies", {})}
                />
                <i className="pi pi-plus" onClick={(e) => handleHobbyAdd(e)}> Add</i>
              </div>
            </span>
            <div>
              {hobbies?.map((hobby, index) => (
                <button key={index} onClick={(e) => handleHobbyDelete(e)} type="button" className="p-mr-2 p-p-0 tag-container" id={hobby}><Tag value={hobby} icon="pi pi-times" className="p-p-2" ></Tag>
                </button>
              ))}
            </div>
            <ModeFooter id="hobbyEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>);
}

export default HobbyForm;