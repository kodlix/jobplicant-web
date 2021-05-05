import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Calendar } from 'primereact/calendar';
import ModeFooter from '../../../../profile/ModeFooter';
import SectionHeader from '../../../SectionHeader';
const PersonalInfoEdit = ({ data, closeEditMode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (key === "dateOfBirth") {
          setValue(key, new Date(value));
        }
        setValue(key, value);
      }
      const personalInfoFromDb = Object.assign({}, data);
      personalInfoFromDb.dateOfBirth = new Date(personalInfoFromDb.dateOfBirth);
      setPersonalInfo(personalInfoFromDb);
    }
    else {
      for (const [key] of Object.entries(personalInfo)) {
        setValue(key, null);
      }
      setPersonalInfo({})
    }
    clearErrors();
  }, [data]);

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "dateOfBirth") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "dateOfBirth") ? e.value : e.target.value;
    const updatedPersonalInfo = Object.assign({}, personalInfo);
    updatedPersonalInfo[inputName] = inputValue;
    setPersonalInfo(updatedPersonalInfo);
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
  }

  const onEditCancel = (e) => {
    setPersonalInfo({});
    closeEditMode(e.target.id);
  }

  const personalInfoSubmit = (data) => {
    data.dateOfBirth = (new Date(data.dateOfBirth)).toISOString();
    console.log(data);
    return;
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="user" sectionTitle="Personal Information" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(personalInfoSubmit)}>
            <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="firstName" className="inputLabel">First Name *
                  {errors.firstName && <span className="text-danger font-weight-bold">&nbsp; {errors.firstName.message}</span>}
                </label>
                <InputText id="firstName" type="text" placeholder="First Name" name="firstName"
                  {...register("firstName",
                    {
                      required: ` First Name is required`
                    })
                  }
                  onChange={(e) => {
                    inputChange(e)
                  }} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="lastName" className="inputLabel">Last Name *
                  {errors.lastName && <span className="text-danger font-weight-bold">&nbsp; {errors.lastName.message}</span>}
                </label>
                <InputText id="lastName" type="text" placeholder="Last Name"
                  name="lastName"
                  {...register("lastName",
                    {
                      required: ` Last Name is required`
                    })
                  }
                  onChange={(e) => {
                    inputChange(e)
                  }} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="otherNames" className="inputLabel">Other Names</label>
                <InputText id="otherNames" type="text" placeholder="Other Names"
                  name="otherNames"
                  {...register("otherNames")
                  }
                  onChange={(e) => {
                    inputChange(e)
                  }}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="dateOfBirth" className="inputLabel p-pr-3">Date Of Birth *
                {errors.dateOfBirth && <small className="text-danger font-weight-bold">&nbsp; {errors.dateOfBirth.message}</small>}
                </label>
                <Calendar id="dateOfBirth" value={personalInfo.dateOfBirth} onSelect={(e) => { inputChange(e, "dateOfBirth") }} dateFormat="dd/mm/yy" name="dateOfBirth" {...register("dateOfBirth",
                  {
                    required: `Date Of Birth is required`
                  }
                )} maxDate={new Date()} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <span className="inputLabel p-pr-3 p-mb-2">Gender</span>
                <div className="p-formgroup-inline">
                  <div className="p-field-checkbox">
                    <RadioButton inputId="city7" name="gender" value="female" onChange={(e) => inputChange(e)} checked={personalInfo.gender === 'female'} />
                    <label htmlFor="city7">Female</label>
                  </div>
                  <div className="p-field-checkbox">
                    <RadioButton inputId="city8" name="gender" value="male" onChange={(e) => inputChange(e)} checked={personalInfo.gender === 'male'} />
                    <label htmlFor="city8">Male</label>
                  </div>
                  <div className="p-field-checkbox">
                    <RadioButton inputId="city8" name="gender" value="other" onChange={(e) => inputChange(e)} checked={personalInfo.gender === 'other'} />
                    <label htmlFor="city8">Other</label>
                  </div>
                </div>
              </div>
            </span>
            <div>
            </div>
            <ModeFooter id="personalInfoEdit" onCancel={onEditCancel} />
          </form>
        </div>
      </div>
    </>
  );
}

export default PersonalInfoEdit;