import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from "react-redux";
import ModeFooter from './ModeFooter';
import SectionHeader from './SectionHeader';
import { Dropdown } from 'primereact/dropdown';
import { loadCountry, loadStates, loadLga } from 'store/modules/location';
import { updateCompanyContactInfo } from 'store/modules/account';

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


  useEffect(() => {
    dispatch(loadCountry());
  }, [dispatch]);

  const handleCountryChange = (e) => {
    let conuntryId = e.target.value.id;
    dispatch(loadStates(conuntryId));
  }

  const handleStateChange = (e) => {
    let stateId = e.target.value.id;
    dispatch(loadLga(stateId));
  }


  // useEffect(() => {
  //   setContactInfo(d)
  // },[])

  // useEffect(() => {
  //   if (data) {
  //     dispatch(loadStates(data.country.id));
  //     dispatch(loadLga(data.state.id));
  //     for (const [key, value] of Object.entries(data)) {
  //       setValue(key, value);
  //     }
  //     setContactInfo(data);
  //   }
  //   else {
  //     for (const [key] of Object.entries(contactInfo)) {
  //       setValue(key, null);
  //     }
  //     setContactInfo({})
  //   }
  //   clearErrors();
  // }, [data]);



  // const inputChange = (e) => {
  //   const { name, value } = e.target;
  //   setContactInfo({ ...contactInfo, [name]: value ?? JSON.parse(value) });
  // }

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "pend") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "pend") ? e.value : e.target.value;
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
    // if (inputName === "country" && e.target.value) {
    //   //check if country is empty to empty states array in redux
    //   dispatch(loadStates(e.target.value.id));
    //}
    // if (inputName === "state" && e.target.value) {
    //   //check if state is empty to empty lga array in redux
    //   dispatch(loadLga(e.target.value.id));
    // }
    if (inputName === "phoneNo" && !inputValue) {
      trigger("phoneNo");
    }
    else if (inputName === "email" && !inputValue) {
      trigger("email");
    }
    else if (inputName === "phoneNo" || "email") {
      trigger();
    }
    const updatedContactInfoObject = Object.assign({}, contactInfo);
    updatedContactInfoObject[inputName] = inputValue;
    setContactInfo(updatedContactInfoObject);
  }

  const contactInfoSubmit = (data) => {
    data.lga = "Ifako";
    data.country = data.country.name;
    data.state = data.state.name
    console.log(data);
    dispatch(updateCompanyContactInfo(data));
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
                    { validate: value => value?.length > 0 || contactInfo.emailAddress?.length > 0 || "* Phone Number or Email is required" }
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
                <InputText name="email" id="email" type="email" value={contactInfo.email}
                  {...register("email",
                    {
                      validate: value => value?.length > 0 || contactInfo.phoneNo?.length > 0 || "* Email or Phone Number is required",
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
                <label htmlFor="lga" className="inputLabel p-pr-3">LGA *
                  {errors.lga && <small className="text-danger font-weight-bold">&nbsp; {errors.LGA.message}</small>}
                </label>
                <Dropdown options={lgas}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="lga" name="lga" value={contactInfo.lga}
                  {...register("lga", {})}
                  onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="state" className="inputLabel p-pr-3">State *
                  {errors.state && <small className="text-danger font-weight-bold">&nbsp; {errors.state.message}</small>}
                </label>
                <Dropdown options={states}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="state" name="state" value={contactInfo.state}  {...register("state",
                    {
                      required: ` State is required`
                    }
                  )} onChange={(e) => { inputChange(e, "state"); handleStateChange(e) }} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="country" className="inputLabel p-pr-3">Country *
                  {errors.country && <small className="text-danger font-weight-bold">&nbsp; {errors.country.message}</small>}
                </label>
                <Dropdown options={countries}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="country" name="country" value={contactInfo.country}  {...register("country",
                    {
                      required: ` Country is required`
                    }
                  )} onChange={(e) => { inputChange(e, "country"); handleCountryChange(e) }} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2" >
                <label htmlFor="postalCode" className="inputLabel p-pr-3">Postal Code *
                  {errors.postalCode && <span className="text-danger font-weight-bold">&nbsp; {errors.postalCode.message}</span>}
                </label>
                <InputText id="postalCode" type="text" placeholder="Postal Code"
                  {...register("postalCode",
                    {
                      required: ` Postal Code is required`
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-8">
                <label htmlFor="address" className="inputLabel">Address *
                  {errors.address && <span className="text-danger font-weight-bold">&nbsp; {errors.address.message}</span>}
                </label>
                <InputTextarea id="address" type="text" rows="1" className="inputField" placeholder="Address" name="address" value={contactInfo.address}
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