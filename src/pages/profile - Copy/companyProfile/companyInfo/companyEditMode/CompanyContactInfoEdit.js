import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { loadCountry, loadStates, loadLga } from 'store/modules/location';
import SectionHeader from '../../../SectionHeader';
import ModeFooter from '../../../../profile/ModeFooter';
import { Dropdown } from 'primereact/dropdown';

const CompanyContactInfo = ({ closeEditMode, data }) => {
  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const [companyContactInfo, setCompanyContactInfo] = useState({});
  const dispatch = useDispatch();
  const countries = useSelector(state => state.location.countries);
  const states = useSelector(state => state.location.states);
  const lgas = useSelector(state => state.location.lgas);

  useEffect(() => {
    dispatch(loadCountry());
  }, [dispatch]);

  const countryList = [
    { name: 'Nigeria', id: 'NY1' },
    { name: 'Rome', id: 'RM1' },
    { name: 'London', id: 'LDN1' },
    { name: 'Istanbul', id: 'IST1' },
    { name: 'Paris', id: 'PRS1' },
    { name: 'Paris11', id: 'PRS111' },
    { name: 'Paris22', id: 'PRS221' }

  ];
  const stateList = [
    { name: 'Lagos', id: 'NY2' },
    { name: 'Rome', id: 'RM2' },
    { name: 'London', id: 'LDN2' },
    { name: 'Istanbul', id: 'IST2' },
    { name: 'Paris', id: 'PRS2' },
    { name: 'Paris11', id: 'PRS112' },
    { name: 'Paris22', id: 'PRS222' }

  ];

  useEffect(() => {
    if (data) {
      dispatch(loadStates(data.country.id));
      dispatch(loadLga(data.state.id));
      for (const [key, value] of Object.entries(data)) {
        setValue(key, new Date(value));
        setValue(key, value);
      }
      const companyContactInfoFromDb = Object.assign({}, data);
      companyContactInfoFromDb.endDate = new Date(companyContactInfoFromDb.endDate);
      companyContactInfoFromDb.startDate = new Date(companyContactInfoFromDb.startDate);
      setCompanyContactInfo(companyContactInfoFromDb);
    }
    else {
      for (const [key] of Object.entries(companyContactInfo)) {
        setValue(key, null);
      }
      setCompanyContactInfo({})
    }
    clearErrors();
  }, [data]);

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "pend") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "pend") ? e.value : e.target.value;
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
    if (inputName === "country" && e.target.value) {
      //check if country is empty to empty states array in redux
      dispatch(loadStates(e.target.value.id));
    }
    if (inputName === "state" && e.target.value) {
      //check if state is empty to empty lga array in redux
      dispatch(loadLga(e.target.value.id));
    }
    if (inputName === "phoneNo" && !inputValue) {
      trigger("phoneNo");
    }
    else if (inputName === "emailAddress" && !inputValue) {
      trigger("emailAddress");
    }
    else if (inputName === "phoneNo" || "emailAddress") {
      trigger();
    }
    const updatedContactInfoObject = Object.assign({}, companyContactInfo);
    updatedContactInfoObject[inputName] = inputValue;
    setCompanyContactInfo(updatedContactInfoObject);
  }

  const companyContactInfoSubmit = (data) => {
    console.log(data);
    return;
  }

  const componentStatus = { companyContactInfo: 'add' };
  if (data) {
    componentStatus.companyContactInfo = 'edit';
  }


  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader componentStatus={componentStatus} icon="phone" sectionTitle="Contact Information" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(companyContactInfoSubmit)}>
            <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="phoneNo" className="inputLabel p-pr-3">Phone Number
                  {errors.phoneNo && <small className="text-danger font-weight-bold">&nbsp; {errors.phoneNo.message}</small>}
                </label>
                <InputText name="phoneNo" id="phoneNo" type="number"
                  {...register("phoneNo",
                    { validate: value => value?.length > 0 || companyContactInfo.emailAddress?.length > 0 || "* Phone Number or Email is required" }
                  )}
                  onChange={(e) => {
                    inputChange(e, "phoneNo");
                  }} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="emailAddress" className="inputLabel p-pr-3">Email Address
                  {errors.emailAddress && <small className="text-danger font-weight-bold">&nbsp;
                  {errors?.emailAddress?.message}</small>}
                </label>
                <InputText name="emailAddress" id="emailAddress" type="email"
                  {...register("emailAddress",
                    {
                      validate: value => value?.length > 0 || companyContactInfo.phoneNo?.length > 0 || "* Email or Phone Number is required",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "* Entered value does not match email format"
                      }
                    })}
                  onChange={(e) => {
                    inputChange(e, "emailAddress")
                  }} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="city" className="inputLabel p-pr-3">City *
                  {errors.city && <span className="text-danger font-weight-bold">&nbsp; {errors.city.message}</span>}
                </label>
                <InputText id="city" type="text"
                  {...register("city",
                    {
                      required: ` City is required`
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="state" className="inputLabel p-pr-3">State *
                  {errors.state && <small className="text-danger font-weight-bold">&nbsp; {errors.state.message}</small>}
                </label>
                <Dropdown options={states}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="state" name="state" value={companyContactInfo.state}  {...register("state",
                    {
                      required: ` State is required`
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="country" className="inputLabel p-pr-3">Country *
                  {errors.country && <small className="text-danger font-weight-bold">&nbsp; {errors.country.message}</small>}
                </label>
                <Dropdown options={countries}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="country" name="country" value={companyContactInfo.country}  {...register("country",
                    {
                      required: ` Country is required`
                    }
                  )} onChange={(e) => inputChange(e)} />

              </div>
              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="companyURL" className="inputLabel p-pr-3">Company Website
                  {errors.companyURL && <small className="text-danger font-weight-bold">&nbsp; {errors.companyURL.message}</small>}
                </label>
                <InputText id="companyURL" type="text" placeholder="Company Website" name="companyURL"
                  {...register("companyURL",
                    {
                      pattern: {
                        value: /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-]*)?\??(?:[-\+=&;%@.\w]*)#?(?:[\w]*))?)/,
                        message: "Website format is invalid"
                      }
                    })}
                />
              </div>
              <div className="p-field p-col-12 p-md-8 p-pr-2">
                <label htmlFor="address" className="inputLabel">Address *
                  {errors.address && <span className="text-danger font-weight-bold">&nbsp; {errors.address.message}</span>}
                </label>
                <InputTextarea id="address" type="text" rows="1" className="inputField" placeholder="Address" name="address" value={companyContactInfo.address}
                  {...register("address",
                    {
                      required: ` Address is required`,
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
            </span>
            <div>
            </div>
            <ModeFooter id="companyContactInfoEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>
  );
}

export default CompanyContactInfo;