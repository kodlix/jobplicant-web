import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { InputTextarea } from 'primereact/inputtextarea';
import { InputText } from 'primereact/inputtext';
import ModeFooter from 'pages/profile/ModeFooter';
import SectionHeader from './SectionHeader';
import { Dropdown } from 'primereact/dropdown';



const ExperienceForm = ({ experienceObject, componentStatus, data, closeEditMode }) => {
  const locationList = [
    { name: 'New York', id: 'NY' },
    { name: 'Rome', id: 'RM' },
    { name: 'London', id: 'LDN' },
    { name: 'Istanbul', id: 'IST' },
    { name: 'Paris', id: 'PRS' },
    { name: 'Paris11', id: 'PRS11' },
    { name: 'Paris22', id: 'PRS22' }

  ];
  const jobCategoryList = [
    { name: 'Networking', id: 'NY1' },
    { name: 'Retail Manager', id: 'RM1' },
    { name: 'Life Coach', id: 'LDN1' },
    { name: 'Graphic Designer', id: 'IST1' },
    { name: 'Teacher', id: 'PRS1' },

  ];
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const [experience, setExperience] = useState({})

  useEffect(() => {    
      const experienceFromDb = Object.assign({}, experienceObject);
      experienceFromDb.endDate = new Date(experienceFromDb.endDate);
      experienceFromDb.startDate = new Date(experienceFromDb.startDate);
      setExperience(experienceFromDb);
    
  }, []);

  const onEditCancel = (e) => {
    clearErrors();
    closeEditMode(e.target.id);
  }

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "startDate" || "endDate") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "startDate" || "endDate") ? e.value : e.target.value;
    const updatedExperienceObject = Object.assign({}, experience);
    updatedExperienceObject[inputName] = inputValue;
    setExperience(updatedExperienceObject);
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
  }

  const handleDelete = (e) => {
    console.log(e.target.id);
  }

  const experienceSubmit = (data) => {
    data.endDate = (new Date(data.endDate)).toISOString();
    data.startDate = (new Date(data.startDate)).toISOString();
    console.log(data);
    return;
  }
  return (
    <>
      
        <div className="p-card p-mt-2">
          <SectionHeader  deleteButton="true" onDelete={handleDelete} icon="star-o" sectionTitle="Job Experience" id={experience.id} />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(experienceSubmit)}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="jobTitle">Job Title
                    {errors.jobTitle && <span className="text-danger font-weight-bold">&nbsp; {errors.jobTitle.message}</span>}
                  </label>
                  <InputField id="jobTitle" inputLabel="Job Title" register={register} inputChange={inputChange} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="companyName">Company Name
                    {errors.companyName && <span className="text-danger font-weight-bold">&nbsp; {errors.companyName.message}</span>}
                  </label>
                  <InputField id="companyName" inputLabel="Company Name" register={register} inputChange={inputChange} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="startDate">Start Date
                  {errors.startDate && <span className="text-danger font-weight-bold">&nbsp; {errors.startDate.message}</span>}
                  </label>
                  <Calendar id="startDate" value={experience.startDate} onSelect={(e) => { inputChange(e, "startDate") }} dateFormat="dd/mm/yy" name="startDate" {...register("startDate",
                    {
                      required: `* Start Date is required`
                    }
                  )} maxDate={experience.endDate} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="endDate"> End Date
                  {errors.endDate && <span className="text-danger font-weight-bold">&nbsp; {errors.endDate.message}</span>}
                  </label>
                  <Calendar id="endDate" value={experience.endDate} onSelect={(e) => { inputChange(e, "endDate") }} dateFormat="dd/mm/yy" name="endDate" {...register("endDate",
                    {
                      required: `* End Date is required`
                    }
                  )} minDate={experience.startDate} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="jobCategory">Job Category
                  {errors.jobCategory && <span className="text-danger font-weight-bold">&nbsp; {errors.jobCategory.message}</span>}
                  </label>
                  <Dropdown options={jobCategoryList}
                    optionLabel="name" filter showClear filterBy="name"
                    icon="pi pi-plus" id="jobCategory" name="jobCategory" value={experience.jobCategory}  {...register("jobCategory",
                      {
                        required: `* Job Category is required`
                      }
                    )} onChange={(e) => inputChange(e)} />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="lastname6">Location
                  {errors.location && <span className="text-danger font-weight-bold">&nbsp; {errors.location.message}</span>}
                  </label>
                  <Dropdown options={locationList}
                    optionLabel="name" filter showClear filterBy="name"
                    icon="pi pi-plus" id="location" name="location" value={experience.location}  {...register("location",
                      {
                        required: `* Location is required`
                      }
                    )} onChange={(e) => inputChange(e)} />
                </div>
                <div className="p-field p-col-12">
                  <label className="inputLabel" htmlFor="address">Description
                  {errors.description && <span className="text-danger font-weight-bold">&nbsp; {errors.description.message}</span>}
                  </label>
                  <InputTextarea id="address" type="text" rows="4" {...register("description",
                    {
                      required: `* Description is required`
                    }
                  )} name="description" onChange={(e) => inputChange(e)} value={experience.description} />
                </div>
              </div>
              <ModeFooter id="experienceEdit" onCancel={onEditCancel} />
            </form>
          </div>
        </div>
    </>
  );
}

const InputField = ({ id, inputLabel, register, inputChange }) => {
  return (<InputText id={id} type="text" name={id} {...register(id,
    {
      required: `* ${inputLabel} is required`
    }
  )}
    onChange={(e) => {
      inputChange(e)
    }} />)
}

export default ExperienceForm;