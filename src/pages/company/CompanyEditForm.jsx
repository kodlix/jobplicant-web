import InputField from "components/InputField";
import ModeFooter from "pages/profile/ModeFooter";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateCompanyInfo } from "store/modules/company";
import { loadCountry, loadLga, loadStates } from "store/modules/location";

// const countryList = [
//   { name: "Nigeria", id: "NG" },
//   { name: "Ghana", id: "GH" },
//   { name: "Germany", id: "GER" },
//   { name: "Canada", id: "CND" },
//   { name: "USA", id: "USA" },
// ];

const CompanyEditForm = () => {
  const loading = useSelector((state) => state.company.loading);
  const id = useSelector((state) => state.account.profileInfo.id);
  const dispatch = useDispatch();
  const countries = useSelector(state => state.location.countries);
  const states = useSelector(state => state.location.states);
  const lgas = useSelector(state => state.location.lgas);
  const [companyInfo, setCompanyInfo] = useState({});
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

  const uploadProfilePicture = e => { }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyInfo({ ...companyInfo, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

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

  const onSubmit = () => {
    const obj = {
      ...companyInfo,
      countryId: companyInfo.country.id,
      countryName: companyInfo.country.name,
      stateId: companyInfo.state.id,
      stateName: companyInfo.state.name,
      lga: companyInfo.lga,
      lgaId: companyInfo.lga.id,
      lgaName: companyInfo.lga.name,
      noOfEmployees: parseInt(companyInfo.noOfEmployees),
    }
    // console.log(`id: ${id}, company info: `, obj)

    dispatch(updateCompanyInfo(id, obj))
  };

  return (
    <>
      <div className="card bg-white">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <h3>Edit Profile</h3>
              <div className="p-2"></div>
              <div className="row">
                <div className="col-md-9">
                  <div className="row">
                    <div className="p-field p-col-6 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Company's Name
                        {errors.companyName && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.companyName.message}
                          </span>
                        )}
                      </label>
                      <InputField
                        id="companyName"
                        name="name"
                        inputLabel="Company Name"
                        register={register}
                        inputChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="p-field p-col-6 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Year Of Establishment
                        {errors.yearOfEstablishment && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.yearOfEstablishment.message}
                          </span>
                        )}
                      </label>
                      {/* <InputField
                        id="yearOfEstablishment"
                        name="yearOfEstablishment"
                        inputLabel="yearOfEstablishment"
                        register={register}
                        inputChange={handleChange}
                        className="form-control"
                      /> */}
                      <Calendar
                        id="yearOfEstablishment"
                        view="month"
                        dateFormat="yy"
                        yearNavigator 
                        yearRange="2010:2030"
                        value={new Date(companyInfo.yearOfEstablishment)}
                        onSelect={(e) => {
                          const value = new Date(e.value).toISOString();

                          setCompanyInfo({
                            ...companyInfo,
                            yearOfEstablishment: value,
                          });
                          setValue("yearOfEstablishment", value, {
                            shouldValidate: true,
                          });
                        }}
                        name="yearOfEstablishment"
                        {...register("yearOfEstablishment", {
                          required: `* Year of establishment is required`,
                        })}
                        style={{ width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="p-field p-col-6 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Phone Number<span className="text-red">*</span>
                        {errors.phoneNumber && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.phoneNumber.message}
                          </span>
                        )}
                      </label>
                      <InputField
                        id="phoneNumber"
                        name="phoneNumber"
                        inputLabel="phoneNumber"
                        register={register}
                        inputChange={handleChange}
                        className="form-control"
                      />
                    </div>

                    <div className="p-field p-col-6 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Website
                        {errors.website && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.website.message}
                          </span>
                        )}
                      </label>
                      <InputField
                        id="website"
                        name="website"
                        inputLabel="website"
                        register={register}
                        inputChange={handleChange}
                        className="form-control"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-3 text-center">

                  <span className="profilePic-container">
                    <img
                      src="../../assets/logo.png"
                      alt="User Image"
                      width="180"
                      height="180"
                      className="profile-picture"
                      style={{ border: '4px solid #eee' }}
                    />
                    <label className="profilePic-label" htmlFor="upload-button">
                      <i className="pi pi-camera"></i>
                    </label>
                  </span>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={uploadProfilePicture}
                  />
                  <input type="hidden" name="logo" register="true" value={companyInfo.logo} />
                </div>
              </div>

              <div className="row">
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Country<span className="text-red">*</span>
                    {errors.phoneNumber && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.phoneNumber.message}
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
                    value={companyInfo.country}
                    {...register("country",
                      {
                        required: ` Country is required`
                      }
                    )}
                    onChange={(e) => {
                      handleChange(e)
                      handleCountryChange(e);
                    }} 
                    className="form-control"
                  />
                </div>
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    State<span className="text-red">*</span>
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
                    value={companyInfo.state}
                    {...register("state",
                      {
                        required: ` State is required`
                      }
                    )}
                    onChange={(e) => {
                      handleChange(e);
                      handleStateChange(e);
                    }} 
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    LGA<span className="text-red">*</span>
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
                    value={companyInfo.lga}
                    {...register("lga",
                      {
                        required: ` LGA is required`
                      }
                    )}
                    onChange={(e) => {
                      handleChange(e);
                      handleChange(e)
                    }} 
                    className="form-control"
                  />
                </div>
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    City<span className="text-red">*</span>
                    {errors.city && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.city.message}
                      </span>
                    )}
                  </label>
                  <InputField
                    id="city"
                    name="city"
                    inputLabel="city"
                    register={register}
                    inputChange={handleChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="row">
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Address<span className="text-red">*</span>
                    {errors.address && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.address.message}
                      </span>
                    )}
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    onChange={(e) => {
                      register("address");
                      handleChange(e);
                    }}
                    className="form-control"
                  ></textarea>
                </div>
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Number of Employees<span className="text-red">*</span>
                    {errors.numberOfEmployees && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.numberOfEmployees.message}
                      </span>
                    )}
                  </label>
                  <InputField
                    id="noOfEmployees"
                    name="noOfEmployees"
                    inputLabel="noOfEmployees"
                    register={register}
                    inputChange={handleChange}
                    className="form-control" 
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div id="personalProfileForm" className="editMode-footer p-d-flex align-item-end">
              <Button disabled={loading} icon="pi pi-check" iconPos="left" label={loading ? 'please wait...' : 'Save'} id="saveButton" type='submit' />
            </div>
            <div className="pb-4"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyEditForm;
