import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from "react-redux";
import ModeFooter from 'pages/profile/ModeFooter';
import { Dropdown } from 'primereact/dropdown';
import { loadCountry, loadStates, loadLga } from 'store/modules/location';
import { updateContactInfo } from 'store/modules/account';
import SectionHeader from './SectionHeader';

const ContactInfoForm = ({ closeEditMode, data }) => {
  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const dispatch = useDispatch();
  const countries = useSelector(state => state.location.countries);
  const states = useSelector(state => state.location.states);
  const lgas = useSelector(state => state.location.lgas);
  const [contactInfo, setContactInfo] = useState({});
  const profileInfo = useSelector(state => state.account.profileInfo);
  const [selectCountry, setSelectedCountry] = useState("null");



  useEffect(() => {
    dispatch(loadCountry());
  }, [dispatch]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setSelectedCountry({ ...selectCountry, [name]: value ?? JSON.parse(value) });
  }

  useEffect(() => {
    if (profileInfo) {
      for (const [key, value] of Object.entries(profileInfo)) {
        setValue(key, value);
        setValue('phoneNumber', profileInfo.contactPhoneNumber);
        setValue('country', profileInfo.country);


      }
      setContactInfo(profileInfo);
    }
    else {
      for (const [key] of Object.entries(contactInfo)) {
        setValue(key, null);
      }
      setContactInfo({})
    }
    clearErrors();
  }, [profileInfo]);



  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "pend") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "pend") ? e.value : e.target.value;
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
    // if (inputName === "country" && e.target.value) {
    //   //check if country is empty to empty states array in redux
    //   dispatch(loadStates(e.target.value.id));
    // }
    if (inputName === "phoneNumber" && !inputValue) {
      trigger("phoneNumber");
    }
    else if (inputName === "email" && !inputValue) {
      trigger("email");
    }
    else if (inputName === "phoneNumber" || "email") {
      trigger();
    }
    const updatedContactInfoObject = Object.assign({}, contactInfo);
    updatedContactInfoObject[inputName] = inputValue;
    setContactInfo(updatedContactInfoObject);
  }

  const contactInfoSubmit = (data) => {

    data.country = data.country.name;
    dispatch(updateContactInfo(data))
    return;
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="phone" sectionTitle="Contact Information" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(contactInfoSubmit)}>
            <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="phoneNumber" className="inputLabel p-pr-3">Phone Number
                  {errors.phoneNumber && <small className="text-danger font-weight-bold">&nbsp; {errors.phoneNumber.message}</small>}
                </label>
                <InputText name="phoneNumber" id="phoneNumber" type="number"
                  {...register("phoneNumber",
                    { validate: value => value?.length > 0 || contactInfo.emailAddress?.length > 0 || "* Phone Number is required" }
                  )}
                  onChange={(e) => {
                    inputChange(e, "phoneNumber");
                  }} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="email" className="inputLabel p-pr-3">Email Address
                  {errors.email && <small className="text-danger font-weight-bold">&nbsp;
                  {errors?.email?.message}</small>}
                </label>
                <InputText name="email" id="email" type="email"
                  {...register("email",
                    {
                      validate: value => value?.length > 0 || contactInfo.phoneNo?.length > 0 || "* Email is required",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "* Entered value does not match email format"
                      }
                    })}
                  onChange={(e) => {
                    inputChange(e, "email")
                  }} />
              </div>

              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="country" className="inputLabel p-pr-3">Country *
                  {errors.country && <small className="text-danger font-weight-bold">&nbsp; {errors.country.message}</small>}
                </label>

                <select id="country"
                  className="form-control"
                  name="country"
                  value={selectCountry?.country}
                  // onChange={(e) => handleOnChange(e)}
                  onChange={(e) => inputChange(e, "country")}
                  {...register("country", { required: true })}

                >
                  <option value="">Select Country</option>
                  {countries.map(country =>
                    <option key={country.name} value={country.name}>{country.name}
                    </option>)}

                </select>

                {/* <Dropdown options={countries}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="country" name="country" value={contactInfo.country}  {...register("country",
                    {
                      required: ` Country is required`
                    }
                  )} onChange={(e) => inputChange(e, "country")} /> */}
              </div>



              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="city" className="inputLabel p-pr-3">City *
                  {errors.city && <small className="text-danger font-weight-bold">&nbsp; {errors.city.message}</small>}
                </label>
                <InputText options={states}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="city" name="city" value={contactInfo.city}
                  placeholder="City"
                  {...register("city", { required: ` City is required` })}
                  onChange={(e) => inputChange(e, "city")} />
              </div>

              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2" >
                <label htmlFor="postalCode" className="inputLabel p-pr-3">Postal Code *
                  {errors.postalCode && <span className="text-danger font-weight-bold">&nbsp; {errors.postalCode.message}</span>}
                </label>
                <InputText id="postalCode" type="text" placeholder="Postal Code"
                  {...register("postalCode", {})} onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-12">
                <label htmlFor="address" className="inputLabel">Address *
                  {errors.address && <span className="text-danger font-weight-bold">&nbsp; {errors.address.message}</span>}
                </label>
                <InputTextarea id="address" type="text" rows="2" className="inputField" placeholder="Address" name="address" value={contactInfo.address}
                  {...register("address",
                    {
                      required: ` Address is required`,
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
            </span>
            <div>
            </div>
            <ModeFooter id="contactInfoEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>);
}

export default ContactInfoForm;