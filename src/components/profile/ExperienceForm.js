import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { InputText } from "primereact/inputtext";
import ModeFooter from "./ModeFooter";
import SectionHeader from "./SectionHeader";
import { Dropdown } from "primereact/dropdown";
import { createExperience, updateExperience } from "store/modules/experience";
import { Calendar } from "primereact/calendar";
import InputField from "components/InputField";

import { Checkbox } from 'primereact/checkbox';
import LimitedTextarea from "../LimitedTextarea";

const jobCategoryList = [
  { name: "Networking", id: "NY1" },
  { name: "Retail Manager", id: "RM1" },
  { name: "Life Coach", id: "LDN1" },
  { name: "Graphic Design", id: "IST1" },
  { name: "Teaching", id: "PRS1" },
  { name: "Legal Services", id: "PRS3" },
];
const ExperienceForm = ({ closeEditMode, itemToEdit, mode }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const loading = useSelector(state => state.experience.requesting);
  const [experience, setExperience] = useState({});
  const [checkedCurrent, setCheckedCurrent] = useState(false)

  useEffect(() => {
    if (itemToEdit !== null) {
      setExperience({
        ...experience,
        jobCategory: jobCategoryList.find(
          (j) => j.name == itemToEdit.jobCategoryName
        ),
        startDate: new Date(itemToEdit.startDate),
        endDate: new Date(itemToEdit.endDate),
        location: itemToEdit.location,
        description: itemToEdit.description,
        jobTitle: itemToEdit.jobTitle,
        company: itemToEdit.company,
      });

      setValue("description", itemToEdit.description);
      setValue("startDate", itemToEdit.startDate);
      setValue("endDate", itemToEdit.endDate);
      setValue("location", itemToEdit.location);
      setValue("description", itemToEdit.description);
      setValue("jobTitle", itemToEdit.jobTitle);
      setValue("jobCategory", jobCategoryList.find((j) => j.name == itemToEdit.jobCategoryName));
      setValue("company", itemToEdit.company);
       
    }
  }, [itemToEdit]);

  const onEditCancel = (e) => {
    clearErrors();
    closeEditMode(e.target.id);
  };

  const inputChange = (e, inputId) => {
    const inputName =
      inputId && (inputId === "startDate" || "endDate")
        ? inputId
        : e.target.name;
    const inputValue =
      inputId && (inputId === "startDate" || "endDate")
        ? e.value
        : e.target.value;

    const updatedExperienceObject = Object.assign({}, experience);
    updatedExperienceObject[inputName] = inputValue;
    setExperience({ ...experience, ...updatedExperienceObject });
    setValue(inputName, inputValue, { shouldValidate: true });

  };

  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  const experienceSubmit = (formData) => {
    formData.endDate = new Date(formData.endDate).toISOString();
    formData.startDate = new Date(formData.startDate).toISOString();
    formData.jobCategoryName = formData.jobCategory.name;
    formData.jobCategoryId = formData.jobCategory.id;

    if (mode === 'create')
      dispatch(createExperience(formData));
    else
      dispatch(updateExperience(itemToEdit.id, formData));

  };

  return (
    <>
      <div className="p-mt-2">
        <SectionHeader
          deleteButton="true"
          onDelete={handleDelete}
          icon="star-o"
          sectionTitle="Job Experience"
          id={experience.id}
        />
        <div className="">
          <form onSubmit={handleSubmit(experienceSubmit)}>
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="jobTitle">
                  Job Title
                  {errors.jobTitle && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.jobTitle.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="jobTitle"
                  inputLabel="Job Title"
                  register={register}
                  inputChange={inputChange}
                  defaultValue={experience.jobTitle}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="company">
                  Company Name
                  {errors.company && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.company.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="company"
                  inputLabel="Company Name"
                  register={register}
                  inputChange={inputChange}
                  name="company"
                  defaultValue={experience.company}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="startDate">
                  Start Date
                  {errors.startDate && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.startDate.message}
                    </span>
                  )}
                </label>
                <Calendar
                  id="startDate"
                  type="date"
                  value={experience.startDate}
                  // dateFormat='dd/mm/yy'
                  name="startDate"
                  {...register("startDate", {
                    required: `* Start Date is required`,
                  })}
                  onSelect={(e) => {
                    const inputName = "startDate";
                    const value = new Date(e.value).toISOString();

                    setValue(inputName, value, { shouldValidate: true });
                  }}
                  name="startDate"
                  {...register("startDate", {
                    required: `* Start date is required`,
                  })}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="endDate">
                  {" "}
                  End Date
                  {errors.endDate && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.endDate.message}
                    </span>
                  )}
                </label>
                <Calendar
                  id="endDate"
                  type="date"
                  value={experience.endDate}
                  // dateFormat='dd/mm/yy'
                  name="endDate"
                  {...register("endDate", {
                    required: `* End Date is required`,
                  })}
                  onSelect={(e) => {
                    const inputName = "endDate";
                    const value = e.value.toISOString();
                    setValue(inputName, value, { shouldValidate: true });
                  }}
                  name="endDate"
                  {...register("endDate", {
                    required: `* End date is required`,
                  })}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="jobCategory">
                  Job Category
                  {errors.jobCategory && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.jobCategory.message}
                    </span>
                  )}
                </label>
                <Dropdown
                  options={jobCategoryList}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="jobCategory"
                  name="jobCategory"
                  value={experience.jobCategory}
                  {...register("jobCategory", {
                    required: `* Job Category is required`,
                  })}
                  onChange={(e) => inputChange(e)}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="address">
                  Location
                  {errors.location && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.location.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="location"
                  inputLabel="Location"
                  register={register}
                  inputChange={inputChange}
                  defaultValue={experience.location}
                />
              </div>
              <div className="p-field p-col-12">
                <label className="inputLabel" htmlFor="address">
                  Description
                  {errors.description && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.description.message}
                    </span>
                  )}
                </label>

                <LimitedTextarea
                  value={experience?.description}
                  limit={500}
                  register={register}
                />
              </div>
              <div className="p-field p-col-12">
                <label htmlFor="current">
                  <Checkbox
                    name="current"
                    onChange={e => {
                      setCheckedCurrent(e.checked);
                      // console.log(e)
                      setExperience({ ...experience, [e.target.name]: e.checked });
                      setValue(e.target.name, e.checked, { shouldValidate: true });
                    }} checked={checkedCurrent}></Checkbox>
                  Set as current
                </label>
              </div>
            </div>
            {loading && <i className="fa fa-spin fa-spinner"></i>}
            <ModeFooter id="experienceEdit" onCancel={onEditCancel} loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
};


export default ExperienceForm;
