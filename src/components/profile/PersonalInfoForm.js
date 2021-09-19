import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import InputField from "components/InputField";
import ModeFooter from "./ModeFooter";
import { updatePersonalProfile } from "store/modules/account";
import SectionHeader from "./SectionHeader";
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { loadCountry, loadLga, loadStates } from "store/modules/location";


const PersonalInfoForm = ({ data, closeEditMode }) => {
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
  const loading = useSelector((state) => state.account.submitting);
  const countries = useSelector(state => state.location.countries);
  const states = useSelector(state => state.location.states);
  const lgas = useSelector(state => state.location.lgas);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const [countryObj, setCountryObj] = useState(null)
  const [stateObj, setStateObj] = useState(null)
  const [lgaObj, setLgaObj] = useState(null)

  useEffect(() => {
    dispatch(loadCountry())
  }, [])

  useEffect(() => {
    
    if(countries){
      
      
      const countryObj = data.country ? countries.find(country => country.name === data.country) : null;
    
      dispatch(loadStates(countryObj?.id));
      setPersonalProfile({
        ...personalProfile,
        dateOfBirth: data.dateOfBirth === null ? null : new Date(data.dateOfBirth),
        country: countryObj
      })
      setValue("country", countryObj?.name);
      // setCountryObj(countryObj)
  
      
      // // setCountryId(countryId)
      
      // console.log('come on', data, countryObj)
    }
  }, [countries]);

  useEffect(() => {
    if (states) {
      const stateObj = data.state ? states.find(state => state.name === data.state) : null
      
      setPersonalProfile({
        ...personalProfile,
        state: stateObj
      })
      setValue("state", stateObj?.name)
      setStateObj(stateObj)
      dispatch(loadLga(stateObj?.id))
    }
  }, [ states])

  useEffect(() => {
    if (lgas) {
      const lgaObj = data.lga ? lgas.find(lga => lga.name === data.lga) : null;
      setPersonalProfile({ ...personalProfile, lga: lgaObj });
      setValue('lga', lgaObj?.name);
      setLgaObj(lgaObj)
    }
  }, [lgas])

  useEffect(() => {
    if (data !== null) {
      setPersonalProfile({
        ...personalProfile,
        firstName: data.firstName,
        lastName: data.lastName,
        otherName: data.otherName || "Berner" ,
        dateOfBirth: new Date(data.dateOfBirth),
        city: data.city,
        country: countries.find(country => country.name === data.country),
        state: states.find(state => state.name === data.state),
        lga: lgas.find(lga => lga.name === data.lga),
        address: data.address,
      });

      setValue("firstName", data.firstName);
      setValue("lastName", data.lastName);
      setValue("otherName", data.otherName|| "Berner");
      setValue("dateOfBirth", data.dateOfBirth);
      setValue("city", data.city);
      setValue("state", data.state);
      setValue("country", data.country);
      setValue("lga", data.country);
      setValue("address", data.address || '');

    }
  }, [data]);

  const handleCountryChange = (e) => {
    if (e.target.value) {
      let conuntryId = e.target.value.id;
      dispatch(loadStates(conuntryId));
    }
  }

  const handleStateChange = (e) => {
    if (e.target.value) {
      let stateId = e.target.value.id;
      dispatch(loadLga(stateId));
    }
  }


  const handleChange = (e) => {
    const { name, value } = e.target;

    setPersonalProfile({ ...personalProfile, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  const personalInfoSubmit = (personal) => dispatch(updatePersonalProfile(personalProfile));

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
                  First Name *
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.firstName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p>{errors.firstName.message}</p>
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
                  value={personalProfile.firstName}
                  inputChange={handleChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="inputLabel p-mb-2">
                  Last Name *
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.lastName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p>{errors.lastName.message})</p>
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
                  value={personalProfile.lastName}
                  inputChange={handleChange}
                  register={register}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="otherName" className="inputLabel p-mb-2">
                  Other Name *
                </label>
                <label htmlFor="biographyInput" className="">
                  {errors?.otherName?.type === "required" && (
                    <span className="text-danger font-weight-bold">
                      {" "}
                      <p>{errors.otherName.message})</p>
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
                  value={personalProfile.otherName}
                  register={register}
                  inputChange={handleChange}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="startDate">
                  Date Of Birth *
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
                  dateFormat='dd/mm/yy'
                  name="dateOfBirth"
                  {...register("dateOfBirth", {
                    required: `Date of birth is required`,
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
                  Country *
                  {errors.country && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.country.message}
                    </span>
                  )}
                </label>

                <Dropdown
                  options={countries}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="country"
                  name="country"
                  value={personalProfile.country}
                  {...register("country",
                    {
                      required: `Country is required`
                    }
                  )}
                  onChange={(e) => {
                    handleChange(e)
                    handleCountryChange(e);
                  }}
                  className="form-control"
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="city">
                  State *
                  {errors.state && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.state.message}
                    </span>
                  )}
                </label>

                <Dropdown
                  options={states}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="stateList"
                  name="state"
                  value={personalProfile.state}
                  {...register("state",
                    {
                      required: `State is required`
                    }
                  )}
                  onChange={(e) => {
                    handleChange(e);
                    handleStateChange(e);
                  }}
                  className="form-control"
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="state">
                  LGA *
                  {errors.lga && (
                    <span className="text-danger font-weight-bold">
                      &nbsp; {errors.lga.message}
                    </span>
                  )}
                </label>

                <Dropdown
                  options={lgas}
                  optionLabel="name"
                  filter
                  showClear
                  filterBy="name"
                  icon="pi pi-plus"
                  id="lgaList"
                  name="lga"
                  value={personalProfile.lga}
                  {...register("lga",
                    {
                      required: `LGA is required`
                    }
                  )}
                  onChange={(e) => {
                    handleChange(e)
                  }}
                  className="form-control"
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="country">
                  City *
                  {errors.city && (
                    <span className="text-danger font-weight-bold">
                      {errors.city.message}
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
              <div className="col-md-12">
                <label className="inputLabel" htmlFor="address">
                  Address *
                  {errors.address && (
                    <span className="text-danger font-weight-bold">
                      {errors.address.message}
                    </span>
                  )}
                </label>
                <InputTextarea
                  id="address"
                  type="text"
                  rows="4"
                  className="inputField"
                  {...register("address", {
                    required: `Address is required`,
                  })}
                  name="address"
                  onChange={handleChange}
                  value={personalProfile.address || ''}
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
