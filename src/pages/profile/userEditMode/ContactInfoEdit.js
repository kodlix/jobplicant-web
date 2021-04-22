import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import EditModeFooter from './EditModeFooter';
import SectionHeader from '../SectionHeader';
import { Dropdown } from 'primereact/dropdown';

const ContactInfoEdit = ({ componentStatus, closeEditMode, contactInfoArray }) => {
  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const [contactInfo, setContactInfo] = useState({});
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
  const LGAList = [
    { name: 'Ikeja', id: 'NY3' },
    { name: 'Rome', id: 'RM3' },
    { name: 'London', id: 'LDN3' },
    { name: 'Istanbul', id: 'IST3' },
    { name: 'Paris', id: 'PRS3' },
    { name: 'Paris11', id: 'PRS113' },
    { name: 'Paris22', id: 'PRS223' }

  ];

  useEffect(() => {
    if (contactInfoArray) {
      for (const [key, value] of Object.entries(contactInfoArray)) {
        if (key !== "id") {
          if (key === "startDate" || "endDate") {
            setValue(key, new Date(value));
          }
          setValue(key, value);
        }
      }
      const contactInfoFromDb = Object.assign({}, contactInfoArray);
      contactInfoFromDb.endDate = new Date(contactInfoFromDb.endDate);
      contactInfoFromDb.startDate = new Date(contactInfoFromDb.startDate);
      setContactInfo(contactInfoFromDb);
    }
    else {
      for (const [key] of Object.entries(contactInfo)) {
        if (key !== "id") {
          setValue(key, null);
        }
      }
      setContactInfo({})
    }
    clearErrors();
  }, [componentStatus.contactInfoEdit]);

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "pend") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "pend") ? e.value : e.target.value;
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
    if (inputName === "phoneNo" && !inputValue) {
      trigger("phoneNo");
    }
    else if (inputName === "emailAddress" && !inputValue) {
      trigger("emailAddress");
    }
    else if (inputName === "phoneNo" || "emailAddress") {
      trigger();
    }
    const updatedContactInfoObject = Object.assign({}, contactInfo);
    updatedContactInfoObject[inputName] = inputValue;
    setContactInfo(updatedContactInfoObject);

  }

  const contactInfoSubmit = (data) => {
    console.log(data);
    return;
  }

  return (
    <>
      {componentStatus.contactInfoEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="phone" sectionTitle="Contact Information" />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(contactInfoSubmit)}>
              <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label htmlFor="phoneNo" className="inputLabel p-pr-3">Phone Number
                  {errors.phoneNo && <small className="text-danger font-weight-bold">&nbsp; {errors.phoneNo.message}</small>}
                  </label>
                  <InputText name="phoneNo" id="phoneNo" type="number"
                    {...register("phoneNo",
                      { validate: value => value?.length > 0 || contactInfo.emailAddress?.length > 0 || "* Phone Number or Email is required" }
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
                        validate: value => value?.length > 0 || contactInfo.phoneNo?.length > 0 || "* Email or Phone Number is required",
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
                  <label htmlFor="LGA" className="inputLabel p-pr-3">LGA *
                  {errors.LGA && <small className="text-danger font-weight-bold">&nbsp; {errors.LGA.message}</small>}
                  </label>
                  <Dropdown options={LGAList}
                    optionLabel="name" filter showClear filterBy="name"
                    icon="pi pi-plus" id="LGA" name="LGA" value={contactInfo.LGA}
                    {...register("LGA",
                      {
                        required: ` LGA is required`
                      }
                    )} onChange={(e) => inputChange(e)} />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="state" className="inputLabel p-pr-3">State *
                  {errors.state && <small className="text-danger font-weight-bold">&nbsp; {errors.state.message}</small>}
                  </label>
                  <Dropdown options={stateList}
                    optionLabel="name" filter showClear filterBy="name"
                    icon="pi pi-plus" id="state" name="state" value={contactInfo.state}  {...register("state",
                      {
                        required: ` State is required`
                      }
                    )} onChange={(e) => inputChange(e)} />
                </div>
                <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                  <label htmlFor="country" className="inputLabel p-pr-3">Country *
                  {errors.country && <small className="text-danger font-weight-bold">&nbsp; {errors.country.message}</small>}
                  </label>
                  <Dropdown options={countryList}
                    optionLabel="name" filter showClear filterBy="name"
                    icon="pi pi-plus" id="country" name="country" value={contactInfo.country}  {...register("country",
                      {
                        required: ` Country is required`
                      }
                    )} onChange={(e) => inputChange(e)} />
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
              <EditModeFooter id="contactInfoEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
    </>);
}

export default ContactInfoEdit;