import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import InputField from "components/InputField";
import ModeFooter from "pages/profile/ModeFooter";
import { updatePersonalProfile } from "store/modules/account";
import SectionHeader from "./SectionHeader";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";

const countryList = [
  { name: "Nigeria", id: "NG" },
  { name: "Ghana", id: "GH" },
  { name: "Germany", id: "GER" },
  { name: "Canada", id: "CND" },
  { name: "USA", id: "USA" },
];

const PersonalInfoForm = ({ closeEditMode, itemToEdit = null }) => {
  const [personalProfile, setPersonalProfile] = useState({
    firstName: "",
    lastName: "",
    otherName: "",
    imageUrl: "",
    dateOfBirth: "",
    address: "",
    country: "",
    state: "",
    city: "",
    lga: "",
  });
  const loading = useSelector((state) => state.account.loading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  useEffect(() => {
    if (itemToEdit) {
      setPersonalProfile({
        ...personalProfile,
        firstName: itemToEdit.firstName,
        lastName: itemToEdit.lastName,
        otherName: itemToEdit.otherName,
        dateOfBirth: new Date(itemToEdit.dateOfBirth),
        city: itemToEdit.city,
        state: itemToEdit.state,
        country: countryList.find(country => country.name ===  itemToEdit.country),
        lga: itemToEdit.lga,
        address: itemToEdit.address,
      });
      
      setValue("firstName", itemToEdit.firstName);
      setValue("lastName", itemToEdit.lastName);
      setValue("otherName", itemToEdit.lastName);
      setValue("dateOfBirth", itemToEdit.dateOfBirth);
      setValue("city", itemToEdit.city);
      setValue("state", itemToEdit.state);
      setValue("country", itemToEdit.country);
      setValue("lga", itemToEdit.country);
      setValue("address", itemToEdit.address);

    }
  }, [itemToEdit]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalProfile({ ...personalProfile, [name]: value });
    console.log(personalProfile);
    setValue(name, value, { shouldValidate: true });
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  const personalInfoSubmit = (personal) => {
    dispatch(updatePersonalProfile(personal));
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          id="personal"
          icon="person"
          sectionTitle="Personal"
          onDelete={handleDelete}
        />

        <div className="p-card-body">
          <form onSubmit={handleSubmit(personalInfoSubmit)}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="firstName" className="inputLabel p-mb-2">
                  First Name
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.firstName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p> &nbsp;(*{errors.firstName.message})</p>
                    </span>
                  )}
                </label>
                <InputField
                  name="firstName"
                  register={register}
                  id="firstName"
                  type="text"
                  rows="12"
                  inputLabel="First Name"
                  className="inputField"
                  placeholder="First Name"
                  defaultValue={personalProfile.firstName}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="inputLabel p-mb-2">
                  Last Name
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.lastName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p> &nbsp;(*{errors.lastName.message})</p>
                    </span>
                  )}
                </label>
                <InputField
                  name="lastName"
                  register={register}
                  id="lastName"
                  type="text"
                  rows="6"
                  inputLabel="Last Name"
                  className="inputField"
                  placeholder="Last Name"
                  defaultValue={personalProfile.lastName}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="otherName" className="inputLabel p-mb-2">
                  Other Name
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.otherName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p> &nbsp;(*{errors.otherName.message})</p>
                    </span>
                  )}
                </label>
                <InputField
                  name="otherName"
                  register={register}
                  id="otherName"
                  type="text"
                  rows="12"
                  inputLabel="Other Name"
                  className="inputField"
                  placeholder="Other Name"
                  defaultValue={personalProfile.otherName}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="startDate">
                  Date Of Birth
                  {errors.dateOfBirth && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.dateOfBirth.message}
                    </span>
                  )}
                </label>
                <Calendar
                  id="dateOfBirth"
                  type="date"
                  value={personalProfile.dateOfBirth}
                  className="inputField"
                  // dateFormat='dd/mm/yy'
                  name="dateOfBirth"
                  {...register("dateOfBirth", {
                    required: `* Date of birth is required`,
                  })}
                  onSelect={(e) => {
                    const inputName = "dateOfBirth";
             
                    const value = new Date(e.value).toISOString();

                    setPersonalProfile({
                      ...personalProfile,
                      [inputName]: e.value,
                    });
                    setValue(inputName, value, { shouldValidate: true });
                  }}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="city">
                  LGA
                  {errors.lga && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.lga.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="lga"
                  inputLabel="LGA"
                  register={register}
                  name="lga"
                  inputChange={handleChange}
                  rows="12"
                  className="inputField" 
                  defaultValue={personalProfile.lga}
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
                  className="inputField" 
                  defaultValue={personalProfile.city}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="state">
                  State
                  {errors.state && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.state.message}
                    </span>
                  )}
                </label>
                <InputField
                  id="state"
                  inputLabel="State"
                  register={register}
                  name="state"
                  inputChange={handleChange}
                  className="inputField" 
                  defaultValue={personalProfile.state}
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
                  value={personalProfile.country}
                  {...register("country", {
                    required: `* Country is required`,
                  })}
                  onChange={(e) => {
                    setPersonalProfile({
                      ...personalProfile,
                      ["country"]: e.target.value,
                    });
                    const value = e.target.value.name;
                    setValue("country", value, { shouldValidate: true });
                  }}
                  className="inputField"
                />
              </div>
              <div className="col-md-12">
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
                  className="inputField"
                  {...register("address", {
                    required: `* Address is required`,
                  })}
                  name="address"
                  onChange={handleChange}
                  value={personalProfile.address}
                />
              </div>
            </div>
            <ModeFooter id="personalProfileForm" loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
};

export default PersonalInfoForm;
