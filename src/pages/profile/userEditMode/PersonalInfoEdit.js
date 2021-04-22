import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import EditModeFooter from './EditModeFooter';
import SectionHeader from '../SectionHeader';
const PersonalInfoEdit = ({ componentStatus, personalInfoFromBack, closeEditMode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const [personalInfo, setPersonalInfo] = useState({});

  useEffect(() => {
    if (personalInfoFromBack) {
      for (const [key, value] of Object.entries(personalInfoFromBack)) {
        setValue(key, value);
      }
      setPersonalInfo(personalInfoFromBack);
    }
    else {
      for (const [key] of Object.entries(personalInfo)) {
        setValue(key, null);
      }
      setPersonalInfo({})
    }
    clearErrors();
  }, [componentStatus.personalInfoEdit]);

  const inputChange = (e) => {
    const updatedPersonalInfo = Object.assign({}, personalInfo);
    updatedPersonalInfo[e.target.name] = e.target.value;
    setPersonalInfo(updatedPersonalInfo);
    setValue(e.target.name, e.target.value,
      { shouldValidate: true }
    )
  }

  const onEditCancel = (e) => {
    setPersonalInfo({});
    closeEditMode(e.target.id);
  }

  const personalInfoSubmit = (data) => {
    console.log(data);
    return;
  }

  return (
    <>

      {componentStatus.personalInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="user" sectionTitle="Personal Information" />
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
                  <label htmlFor="lastName" className="inputLabel p-pr-3">Date Of Birth</label>
                  <InputText id="lastName" type="text" value={personalInfo.dateOfBirth} placeholder="Last Name" disabled />
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
              <EditModeFooter id="personalInfoEdit" onCancel={onEditCancel} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default PersonalInfoEdit;