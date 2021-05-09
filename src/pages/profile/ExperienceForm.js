import React, { useState, useEffect } from 'react'
import {useDispatch}  from 'react-redux';
import { useForm } from 'react-hook-form'
import { Calendar } from 'primereact/calendar'
import { InputTextarea } from 'primereact/inputtextarea'
import { InputText } from 'primereact/inputtext'
import ModeFooter from 'pages/profile/ModeFooter'
import SectionHeader from './SectionHeader'
import { Dropdown } from 'primereact/dropdown'
import { updateExperience, createExperience} from 'store/modules/experience'


const ExperienceForm = ({
  closeEditMode,
  itemToEdit = null,
}) => {
  const dispatch = useDispatch();
  const jobCategoryList = [
    { name: 'Networking', id: 'NY1' },
    { name: 'Retail Manager', id: 'RM1' },
    { name: 'Life Coach', id: 'LDN1' },
    { name: 'Graphic Design', id: 'IST1' },
    { name: 'Teaching', id: 'PRS1' },
    { name: 'Legal Services', id: 'PRS3' }
  ]
const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: {
        errors
    }
} = useForm({mode: 'onChange', reValidateMode: 'onChange'});


  const [experience, setExperience] = useState({})

  useEffect(() => {
    if(itemToEdit){
      setExperience(itemToEdit)
      experience.endDate = new Date(itemToEdit.endDate)
      experience.startDate = new Date(itemToEdit.startDate)
    }   
  }, [itemToEdit])

  const onEditCancel = e => {
    clearErrors()
    closeEditMode(e.target.id)
  }

  const inputChange = (e, inputId) => {
    const inputName =
      inputId && (inputId === 'startDate' || 'endDate')
        ? inputId
        : e.target.name
    const inputValue =
      inputId && (inputId === 'startDate' || 'endDate')
        ? e.value
        : e.target.value
    const updatedExperienceObject = Object.assign({}, experience)
     updatedExperienceObject[inputName] = inputValue
    setExperience({...experience, ...updatedExperienceObject})
    setValue(inputName, inputValue, { shouldValidate: true })
  }

  const handleDelete = e => {
    console.log(e.target.id)
  }

  const experienceSubmit = data => {
    data.endDate = new Date(data.endDate).toISOString()
    data.startDate = new Date(data.startDate).toISOString()
    data.jobCategoryName = data.jobCategory.name;
    data.jobCategoryId = data.jobCategory.id;
    console.log(data)
    dispatch(createExperience(data));

  }
  return (
    <>
      <div className='p-card p-mt-2'>
        <SectionHeader
          deleteButton='true'
          onDelete={handleDelete}
          icon='star-o'
          sectionTitle='Job Experience'
          id={experience.id}
        />
        <div className='p-card-body'>
          <form onSubmit={handleSubmit(experienceSubmit)}>
            <div className='p-fluid p-formgrid p-grid'>
              <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='jobTitle'>
                  Job Title
                  {errors.jobTitle && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.jobTitle.message}
                    </span>
                  )}
                </label>
                <InputField
                  id='jobTitle'
                  inputLabel='Job Title'
                  register={register}
                  inputChange={inputChange}
                  defaultValue={itemToEdit && itemToEdit.jobTitle}
                />
              </div>
              <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='company'>
                  Company Name
                  {errors.company && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.company.message}
                    </span>
                  )}
                </label>
                <InputField
                  id='company'
                  inputLabel='Company Name'
                  register={register}
                  inputChange={inputChange}
                  defaultValue={itemToEdit && itemToEdit.company}
                />
              </div>
               <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='startDate'>
                  Start Date
                  {errors.startDate && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.startDate.message}
                    </span>
                  )}
                </label>
                <input
                  id='startDate'
                  type="date"
                  value={experience.startDate}
                  onChange={e => {
                    inputChange(e, 'startDate')
                  }}
                  // dateFormat='dd/mm/yy'
                  name='startDate'
                  {...register('startDate', {
                    required: `* Start Date is required`
                  })}
                  // maxDate={experience?.endDate}
                />
              </div> 
              <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='endDate'>
                  {' '}
                  End Date
                  {errors.endDate && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.endDate.message}
                    </span>
                  )}
                </label>
                <input
                  id='endDate'
                  type="date"
                  value={experience?.endDate}
                  onChange={e => {
                    inputChange(e, 'endDate')
                  }}
                  // dateFormat='dd/mm/yy'
                  name='endDate'
                  {...register('endDate', {
                    required: `* End Date is required`
                  })}
                  // minDate={experience.startDate}
                />
              </div>
              <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='jobCategory'>
                  Job Category
                  {errors.jobCategory && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.jobCategory.message}
                    </span>
                  )}
                </label>
                <Dropdown
                  options={jobCategoryList}
                  optionLabel='name'
                  filter
                  showClear
                  filterBy='name'
                  icon='pi pi-plus'
                  id='jobCategory'
                  name='jobCategory'
                  value={experience.jobCategory}
                  {...register('jobCategory', {
                    required: `* Job Category is required`
                  })}
                  onChange={e => inputChange(e)}
                />
              </div>
              <div className='p-field p-col-12 p-md-6'>
                <label className='inputLabel' htmlFor='address'>
                  Location
                  {errors.location && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.location.message}
                    </span>
                  )}
                </label>
                <InputField
                  id='location'
                  inputLabel='Location'
                  register={register}
                  inputChange={inputChange}
                />
              </div>
              <div className='p-field p-col-12'>
                <label className='inputLabel' htmlFor='address'>
                  Description
                  {errors.description && (
                    <span className='text-danger font-weight-bold'>
                      &nbsp; {errors.description.message}
                    </span>
                  )}
                </label>
                <InputTextarea
                  id='address'
                  type='text'
                  rows='4'
                  {...register('description', {
                    required: `* Description is required`
                  })}
                  name='description'
                  onChange={e => inputChange(e)}
                  value={experience.description}
                />
              </div>
            </div>
            <ModeFooter id='experienceEdit' onCancel={onEditCancel} />
          </form>
        </div>
      </div>
    </>
  )
}

const InputField = ({ id, inputLabel, register, inputChange, defaultValue }) => {
  return (
    <InputText
      id={id}
      type='text'
      name={id}
      defaultValue={defaultValue}
      {...register(id, {
        required: `* ${inputLabel} is required`
      })}
      onChange={e => {
        inputChange(e)
      }}
    />
  )
}

export default ExperienceForm
