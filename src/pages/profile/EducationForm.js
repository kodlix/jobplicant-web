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
import { fetchCountries } from "store/modules/util";

const EducationForm = ({ educationObject, componentStatus, closeEditMode, itemToEdit, mode }) => {
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

  console.log('mode', mode)

  const loading = useSelector((state) => state.education.submitting);
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
  const countryList = useSelector(state => state.util.countries);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [fetchCountries]);

  // useEffect(() => {
  //   if (educationObject) {
  //     for (const [key, value] of Object.entries(educationObject)) {
  //       if (key !== "id") {
  //         if (key === "yearOfGraduation") {
  //           setValue(key, new Date(value));
  //         }
  //         setValue(key, value);
  //       }
  //     }
  //     const educationFromDb = Object.assign({}, educationObject);
  //     educationFromDb.yearOfGraduation = new Date(
  //       educationFromDb.yearOfGraduation
  //     );
  //     setEducation(educationFromDb);
  //   }
  // }, [componentStatus?.educationEdit]);

  useEffect(() => {
    if (Object.values(itemToEdit).length >= 1) {
      console.log('item edit', itemToEdit)
      setEducation({
        ...education,
        institution: itemToEdit.institution,
        qualification: qualificationList.find(q => q.name == itemToEdit.qualification),
        course: itemToEdit.course,

        country: countryList.find(c => c.name == itemToEdit.country),
        city: itemToEdit.city,
        address: itemToEdit.address,
      });
      const newDate = new Date(itemToEdit.yearOfGraduation).toISOString();
      setYearOfGraduation(new Date(itemToEdit.yearOfGraduation));

      setValue('institution', itemToEdit.institution);
      setValue('qualification', itemToEdit.qualification);
      setValue('course', itemToEdit.course);
      setValue('city', itemToEdit.city);
      setValue('country', itemToEdit.country);
      setValue('yearOfGraduation', newDate);
      setValue('address', itemToEdit.address);

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
    data.qualification = data.qualification.name;
    if (mode === 'create') {
      dispatch(createEducation(data));
    } else {
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
                  Qualification
                  {errors.qualification && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.qualification.message}
                    </span>
                  )}
                </label>
                <Dropdown
                  options={qualificationList}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="qualification"
                  name="qualification"
                  value={education.qualification}
                  {...register("qualification", {
                    required: `* Qualification is required`,
                  })}
                  onChange={handleChange}
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
                  inputLabel="course"
                  register={register}
                  inputChange={handleChange}
                />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="yearOfGraduation">
                  Year of Graduation
                  {errors.yearOfGraduation && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.yearOfGraduation.message}
                    </span>
                  )}
                </label>
                <Calendar
                  id="yearOfGraduation"
                  view="month"
                  dateFormat="yy"
                  yearNavigator
                  yearRange="2010:2030"
                  value={yearOfGraduation}
                  onSelect={(e) => {
                    if (e.value) {
                      const inputName = "yearOfGraduation";
                      const value = new Date(e.value).toISOString();

                      setYearOfGraduation(e.value);
                      setValue(inputName, value, { shouldValidate: true });
                    }
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
