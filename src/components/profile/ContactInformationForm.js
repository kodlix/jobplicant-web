import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { useDispatch, useSelector } from "react-redux";
import ModeFooter from './ModeFooter';
import { loadCountry } from 'store/modules/location';
import { updateContactInfo } from 'store/modules/account';
import SectionHeader from './SectionHeader';
import { Dropdown } from 'primereact/dropdown';

const ContactInfoForm = ({ closeEditMode, data }) => {
  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const dispatch = useDispatch();
  const countries = useSelector(state => state.location.countries);
  const states = useSelector(state => state.location.states);


  const [contactInfo, setContactInfo] = useState({
    phoneNumber: '',
    country: "",
    email: "",
    city: "",
    postalCode: "",
    address: ""
  });
  const profileInfo = useSelector(state => state.account.profileInfo);
  const loading = useSelector(state => state.account.submitting);
  const [selectCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    dispatch(loadCountry());
  }, []);

  useEffect(() => {

    if (profileInfo) {
      console.log('profileinfo', profileInfo)
      setContactInfo({
        ...profileInfo,
        country: profileInfo.country ? countries.find(c => c.name === profileInfo.country) : countries[0].name,
        phoneNumber: profileInfo.contactPhoneNumber || "",
        email: profileInfo.email || "",
        city: profileInfo.city || "",
        postalCode: profileInfo.postalCode || "",
        address: profileInfo.address || ""
      });

      for (const [key, value] of Object.entries(profileInfo)) {
        setValue(key, value);
      }
      setValue('phoneNumber', profileInfo.contactPhoneNumber); //`contactPhoneNumber` is variable to bind to `phoneNumber`
      setValue('country', profileInfo.country);
      console.log('country in console', profileInfo.country, 'country to update', countries[0].name)
    }

  }, [profileInfo, countries]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    const contactData = { ...contactInfo, [name]: value };

    setContactInfo(contactData);
    setValue(name, value)
  }

  const contactInfoSubmit = (data) => dispatch(updateContactInfo(contactInfo));

  const { phoneNumber, email, country, city, postalCode, address } = contactInfo;
  return (
    <>
      <div className="p-mt-2">
        <SectionHeader icon="phone" sectionTitle="Contact Information" />
        <div className="">
          <form onSubmit={handleSubmit(contactInfoSubmit)}>
            <span className="skillInput p-mb-4 p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="phoneNumber" className="inputLabel p-pr-3">Phone Number
                  {errors?.phoneNumber?.type === 'required' && <small className="text-danger font-weight-bold">&nbsp; {errors.phoneNumber.message}</small>}
                </label>
                <InputText
                  id="phoneNumber"
                  name="phoneNumber"
                  {...register("phoneNumber",
                    {
                      required: 'Phone number is required',
                      validate: value => value?.length > 0 || email?.length > 0 || "* Phone Number is required"
                    }
                  )}
                  onChange={handleChange}
                  value={phoneNumber}
                />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label htmlFor="email" className="inputLabel p-pr-3">Email Address
                  {errors?.email?.type === 'required' && <small className="text-danger font-weight-bold">&nbsp;
                    {errors?.email?.message}</small>}
                </label>
                <InputText
                  name="email"
                  id="email"
                  type="email"
                  {...register("email",
                    {
                      required: 'email is required',
                      validate: value => value?.length > 0 || phoneNumber?.length > 0 || "* Email is required",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "* Entered value does not match email format"
                      }
                    })}
                  onChange={handleChange}
                  value={email}
                />
              </div>

              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="country" className="inputLabel p-pr-3">Country *
                  {errors?.country?.type === 'required' && <small className="text-danger font-weight-bold">&nbsp; {errors.country.message}</small>}
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
                  {...register("country", { required: 'Country is required' })}
                  value={country}
                  onChange={handleChange}

                />
              </div>

              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2">
                <label htmlFor="city" className="inputLabel p-pr-3">City *
                  {errors?.city?.type === 'required' && <small className="text-danger font-weight-bold">&nbsp; {errors.city.message}</small>}
                </label>
                <InputText
                  icon="pi pi-plus"
                  id="city"
                  name="city"
                  placeholder="City"
                  {...register("city", { required: ` City is required` })}
                  value={city}
                  onChange={handleChange}
                />
              </div>

              <div className="p-field p-col-12 p-md-4 p-py-0 p-pl-2 p-pr-2" >
                <label htmlFor="postalCode" className="inputLabel p-pr-3">Postal Code *
                  {errors?.postalCode?.type === 'required' && <span className="text-danger font-weight-bold">&nbsp; {errors.postalCode.message}</span>}
                </label>
                <InputText
                  id="postalCode"
                  name="postalCode"
                  placeholder="Postal Code"
                  {...register("postalCode", { required: "Postal code is required" })}
                  onChange={handleChange}
                  value={postalCode}
                />
              </div>

              <div className="p-field p-col-12 p-md-12">
                <label htmlFor="address" className="inputLabel">Address *
                  {errors?.address?.type === "required" && <span className="text-danger font-weight-bold">&nbsp; {errors.address.message}</span>}
                </label>
                <InputTextarea
                  id="address"
                  name="address"
                  type="text"
                  rows="2"
                  className="inputField"
                  placeholder="Address"
                  {...register("address", {
                    required: `Address is required`,
                  })}
                  value={address}
                  onChange={e => {
                    setContactInfo({ ...contactInfo, address: e.target.value });
                    setValue('address', e.target.value);
                  }}
                />
              </div>
            </span>
            <div>
            </div>
            <ModeFooter id="contactInfoEdit" loading={loading} onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>);
}

export default ContactInfoForm;