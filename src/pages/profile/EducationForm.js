import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ModeFooter from "pages/profile/ModeFooter";
import SectionHeader from "pages/profile/SectionHeader";
import { InputTextarea } from "primereact/inputtextarea";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { updateEducation, createEducation } from "store/modules/education";

const EducationForm = ({ educationObject, componentStatus, closeEditMode, itemToEdit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "all",
  });
  

  const loading = useSelector((state) => state.education.loading);
  const dispatch = useDispatch();
  const [yearOfGraduation, setYearOfGraduation] = useState(null);
  const [education, setEducation] = useState({
    institution: "",
    qualification: "",
    course: "",

    country: "",
    city: "",
    address: "",
  });

  let todayDate = new Date();

  const qualificationList = [
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

  useEffect(() => {
   if(itemToEdit){
    const newDate = new Date(itemToEdit.yearOfGraduation).toISOString();

     setEducation({ 
       ...education, 
       institution: itemToEdit.institution,
       qualification: qualificationList.find(q => q.name == itemToEdit.qualification),
       course: itemToEdit.course,
       
       country: countryList.find(c => c.name == itemToEdit.country),
       city: itemToEdit.city,
       address: itemToEdit.address,
      });
      setYearOfGraduation(new Date(itemToEdit.yearOfGraduation));
      
      setValue('institution', itemToEdit.institution);
      setValue('qualification', itemToEdit.qualification);
      setValue('course', itemToEdit.course);
      setValue('city', itemToEdit.city);
      setValue('country', itemToEdit.country);
      setValue('yearOfGraduation', newDate);
      setValue('address', itemToEdit.address);
      
   }else{
     reset();
     console.log('cear form')
   }
  }, [itemToEdit])


  const handleChange = (e) => {
    const { name, value } = e.target;
    
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
    console.log(data);
    if(itemToEdit == null){
      dispatch(createEducation(data));
    }else{
      dispatch(updateEducation(itemToEdit.id, data));
    }
   
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
                  options={countryList}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="qualification"
                  name="qualification"
                  value={education?.qualification}
                  {...register("qualification", {
                    required: `* Qualification is required`,
                  })}
                  onChange={(e) => {
                    setEducation({
                      ...education,
                      ["qualification"]: e.target.value,
                    });
                    const value = e.target.value.name;
                    setValue("qualification", value, { shouldValidate: true });
                  }}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="course">
                  Course
                  {errors.course && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.course.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="course"
                  name="course"
                  inputLabel="Course Name"
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
                  value={yearOfGraduation}
                  onSelect={(e) => {
                    const inputName = "yearOfGraduation";
                    const value = new Date(e.value).toISOString();

                    setYearOfGraduation(value);
                    setValue(inputName, value, { shouldValidate: true });
                  }}
                  name="yearOfGraduation"
                  {...register("yearOfGraduation", {
                    required: `* Year of Graduation is required`,
                  })}
                  maxDate={todayDate}
                />
              </div>
              <div className="p-field p-col-12 p-md-12">
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
                <label className="inputLabel" htmlFor="city">
                  City
                  {errors.city && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.city.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="city"
                  inputLabel="City"
                  register={register}
                  name="city"
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
                  onChange={(e) => {
                    setEducation({ ...education, ["country"]: e.target.value });
                    const value = e.target.value.name; 
                    setValue("country", value, { shouldValidate: true });
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
            <ModeFooter
              loading={loading}
              id="educationEdit"
              onCancel={onEditCancel}
            />
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
