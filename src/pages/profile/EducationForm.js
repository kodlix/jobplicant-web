import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import ModeFooter from "pages/profile/ModeFooter";
import SectionHeader from "pages/profile/SectionHeader";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { updateEducation } from "store/modules/education";

const EducationForm = ({ educationObject, componentStatus, closeEditMode }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "all",
  });
  const loading = useSelector(state => state.education.loading);
  const dispatch = useDispatch();
  const [education, setEducation] = useState({
    certificateTitle: '',
    qualification: '',
    yearOfGraduation: '',
    institution: '',
    country: '',
    address: ''
  });

  let todayDate = new Date();

  const certificateTitleList = [
    { name: "Bsc", id: "bsc" },
    { name: "Msc", id: "Msc" },
    { name: "Phd", id: "Phd" },
    { name: "OND", id: "OND" },
    { name: "HND", id: "HND" },
  ];

  const countryList = [
    { name: "Nigeria", id: "NG" },
    { name: "Ghana", id: "GH" },
    { name: "Germany", id: "GER" },
    { name: "Canada", id: "CND" },
    { name: "USA", id: "USA" },
  ];

  useEffect(() => {
    if (educationObject) {
      for (const [key, value] of Object.entries(educationObject)) {
        if (key !== "id") {
          if (key === "yearOfGraduation") {
            setValue(key, new Date(value));
          }
          setValue(key, value);
        }
      }
      const educationFromDb = Object.assign({}, educationObject);
      educationFromDb.yearOfGraduation = new Date(
        educationFromDb.yearOfGraduation
      );
      setEducation(educationFromDb);
    }
  }, [componentStatus?.educationEdit]);

  // const inputChange = (e, name) => {
  //   const inputName =
  //     name && name === "yearOfGraduation" ? name : e.target.name;
  //   const inputValue =
  //     name && name === "yearOfGraduation" ? e.value : e.target.value;
  //   const updatedEducationObject = Object.assign({}, education);
  //   updatedEducationObject[inputName] = inputValue;
  //   setEducation(updatedEducationObject);
  //   setValue(inputName, inputValue, { shouldValidate: true });
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setEducation({ ...education, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  const onEditCancel = (e) => {
    for (const [key] of Object.entries(education)) {
      if (key !== "id") {
        setValue(key, null);
      }
    }
    setEducation({});
    clearErrors();
    closeEditMode(e.target.id);
  };

  const educationSubmit = (data) => {
    // data.yearOfGraduation = new Date(data.yearOfGraduation).toISOString();
    console.log(data);
    // dispatch(updateEducation(data));
    return;
  };

  return (
    <>
      {/* {componentStatus?.educationEdit?.length > 0 && */}
      <div className="p-card p-mt-2">
        <SectionHeader
          componentStatus={componentStatus}
          deleteButton="true"
          onDelete={handleDelete}
          icon="book"
          sectionTitle="Education"
          id={education.id}
        />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(educationSubmit)}>
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="certificateTitle">
                  Certificate Title
                  {errors.certificateTitle && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.certificateTitle.message}
                    </span>
                  )}
                </label>
                <Dropdown
                  options={certificateTitleList}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="certificateTitle"
                  name="certificateTitle"
                  value={education.certificateTitle}
                  {...register("certificateTitle", {
                    required: `* Certificate Title is required`,
                  })}
                  onChange={e => {
                    const value = e.target.value.name;
                    setEducation({ ...education, ['certificateTitle']: value});
                    setValue('certificateTitle', value, { shouldValidate: true });
                  }}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="certificateName">
                  Certificate Name
                  {errors.certificateName && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.certificateName.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="certificateName"
                  name="qualification"
                  inputLabel="Certificate Name"
                  register={register}
                  inputChange={handleChange}
                />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="yearOfGraduation">
                  Date of Graduation
                  {errors.yearOfGraduation && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.yearOfGraduation.message}
                    </span>
                  )}
                </label>
                <Calendar
                  id="yearOfGraduation"
                  view="month"
                  dateFormat="mm/yy"
                  yearNavigator 
                  yearRange="2010:2030"
                  value={education.yearOfGraduation}
                  onSelect={(e) => {
                    const inputName = 'yearOfGraduation';
                    const value = new Date(e.value).toISOString();
                
                    setEducation({ ...education, yearOfGraduation: value});
                    setValue(inputName, value, { shouldValidate: true });
                  }}
                  name="yearOfGraduation"
                  {...register("yearOfGraduation", {
                    required: `* Year of Graduation is required`,
                  })}
                  maxDate={todayDate}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="institution">
                  Institution Name
                  {errors.institution && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.institution.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="institution"
                  inputLabel="Institution Name"
                  register={register}
                  name="institution"
                  inputChange={handleChange}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="country">
                  Country
                  {errors.country && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.country.message}
                    </span>
                  )}
                </label>
                <Dropdown
                  options={countryList}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="country"
                  name="country"
                  value={education.country}
                  {...register("country", {
                    required: `* Country is required`,
                  })}
                  onChange={e => {
                
                    const value = e.target.value.name;
                    console.log(value);
                    setEducation({...education, ['country']: value});
                    setValue('country', value, { shouldValidate: true });
                  }}
                />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="address">
                  Address
                  {errors.address && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.address.message}
                    </span>
                  )}
                </label>
                <InputTextarea
                  id="address"
                  type="text"
                  rows="4"
                  {...register("address", {
                    required: `* Address is required`,
                  })}
                  name="address"
                  onChange={handleChange}
                  value={education.address}
                />
              </div>
            </div>
            <ModeFooter loading={loading} id="educationEdit" onCancel={onEditCancel} />
          </form>
        </div>
      </div>
      {/* } */}
    </>
  );
};

const InputField = ({ id, inputLabel, register, inputChange }) => {
  return (
    <InputText
      id={id}
      type="text"
      name={id}
      {...register(id, {
        required: `* ${inputLabel} is required`,
      })}
      onChange={inputChange}
    />
  );
};

export default EducationForm;
