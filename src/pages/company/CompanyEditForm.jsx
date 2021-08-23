/* eslint-disable react-hooks/exhaustive-deps */
import InputField from "components/InputField";
import moment from "moment";
import ModeFooter from "components/profile/ModeFooter";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { updateProfilePicture } from "store/modules/account";
import { updateCompanyInfo } from "store/modules/company";
import {
  loadAllLga,
  loadAllStates,
  loadCountry,
  loadLga,
  loadStates,
} from "store/modules/location";
import JobplicantAvatar from "components/profile/jobplicant-avatar";

const CompanyEditForm = () => {
  const dispatch = useDispatch();
  // const loading = useSelector((state) => state.company.loading);
  const uploading = useSelector((state) => state.account.loading);
  const isSubmitting = useSelector((state) => state.company.submit);

  const id = useSelector((state) => state.account.profileInfo.id);
  const profileInfo = useSelector((state) => state.account.profileInfo);

  const countries = useSelector((state) => state.location.countries);
  const states = useSelector((state) => state.location.states);
  const lgas = useSelector((state) => state.location.lgas);
  const [companyInfo, setCompanyInfo] = useState({});

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editMode, setEditMode] = useState(true);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "all",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyInfo({ ...companyInfo, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

  useEffect(() => {
    console.log("profileINfo", typeof profileInfo, profileInfo);
    if (typeof profileInfo === "object" && profileInfo !== null) {
      dispatch(loadCountry());
      dispatch(loadAllStates());
      dispatch(loadAllLga());
      setCompanyInfo({
        ...companyInfo,
        yearOfEstablishment: new Date(profileInfo.yearOfEstablishment),
        address: profileInfo.address,
        country: countries.find(
          (country) => country.name === profileInfo.country
        ),
        state: states.find((state) => state.name === profileInfo.state),
        lga: lgas.find((lga) => lga.name === profileInfo.lga),
      });

      setValue("companyName", profileInfo.companyName);
      setValue("yearOfEstablishment", profileInfo.yearOfEstablishment);
      setValue("phoneNumber", profileInfo.contactPhoneNumber);
      setValue("website", profileInfo.website);

      setValue("city", profileInfo.city);
      setValue("noOfEmployees", profileInfo.noOfEmployees);
      setValue("address", profileInfo.address);
    }
  }, [profileInfo]);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, uploading]);

  useEffect(() => {
    if (countries) {
      console.log("country called");
      setCompanyInfo({
        ...companyInfo,

        country: countries.find(
          (country) => country.name === profileInfo.country
        ),
      });
      setValue(
        "country",
        countries.find((country) => country.name === profileInfo.country)
      );
    }
    if (states) {
      console.log("state called");
      setCompanyInfo({
        ...companyInfo,
        state: states.find((state) => state.name === profileInfo.state),
      });
    }
    if (lgas) {
      console.log("lga called");
      setCompanyInfo({
        ...companyInfo,
        lga: lgas.find((lga) => lga.name === profileInfo.lga),
      });
    }
  }, [countries]);

  const uploadProfilePicture = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    let selectedFile = e.target.files[0];

    setSelectedFile(selectedFile);
    setTimeout(() => {
      const confirmation = window.confirm(
        "Do you want to upload this image as company logo?"
      );

      if (confirmation) {
        var formData = new FormData();
        var extension = selectedFile.type.replace(/(.*)\//g, "");
        let filename = `${id}.${extension}`;
        // console.log(filename)
        formData.append("image", selectedFile, filename);
        //   //dispatch to the service
        dispatch(updateProfilePicture(formData));

        return;
      }
    }, 2000);
  };

  const handleCountryChange = (e) => {
    let conuntryId = e.target.value.id;
    dispatch(loadStates(conuntryId));
  };

  const handleStateChange = (e) => {
    let stateId = e.target.value.id;
    dispatch(loadLga(stateId));
  };

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
      contactPhoneNumber: companyInfo.phoneNumber,
      city: companyInfo.city,
    };
    // console.log(`id: ${id}, company info: `, obj)
    // console.log(obj)
    dispatch(updateCompanyInfo(obj));
  };

  console.log("submit for button", isSubmitting);
  return (
    <>
      <div className="card bg-white">
        <div className="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4">
              <div className="d-flex justify-content-between">
                <h4>Edit Profile</h4>
                {editMode && (
                  <i
                    className="pi pi-pencil"
                    onClick={() => setEditMode(false)}
                  ></i>
                )}
                {!editMode && (
                  <i
                    className="pi pi-times"
                    onClick={() => setEditMode(true)}
                  ></i>
                )}
              </div>
              <div className="p-2"></div>
              <div className="p-grid p-formgrid">
                <div className="p-md-9 order-1 order-sm-12">
                  <div className="p-field p-grid">
                    <div className="p-field p-col-12 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Company's Name
                        {errors.companyName && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.companyName.message}
                          </span>
                        )}
                      </label>
                      {editMode ? (
                        <p className="pi-text">{profileInfo.companyName}</p>
                      ) : (
                        <InputField
                          id="companyName"
                          name="name"
                          inputLabel="Company Name"
                          register={register}
                          inputChange={handleChange}
                          className="form-control"
                        />
                      )}
                    </div>

                    <div className="p-field p-col-12 p-md-6">
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
                      {editMode ? (
                        <p className="pi-text">
                          {moment(profileInfo.yearOfEstablishment).format(
                            "yyyy"
                          )}
                        </p>
                      ) : (
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
                      )}
                    </div>
                  </div>
                  <div className="row">
                    <div className="p-field p-col-12 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Phone Number<span className="text-red">*</span>
                        {errors.phoneNumber && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.phoneNumber.message}
                          </span>
                        )}
                      </label>
                      {editMode ? (
                        <p className="pi-text">
                          {profileInfo.contactPhoneNumber}
                        </p>
                      ) : (
                        <InputField
                          id="phoneNumber"
                          name="phoneNumber"
                          inputLabel="phoneNumber"
                          register={register}
                          inputChange={handleChange}
                          className="form-control"
                        />
                      )}
                    </div>

                    <div className="p-field p-col-12 p-md-6">
                      <label className="inputLabel" htmlFor="course">
                        Website
                        {errors.website && (
                          <span className="text-danger font-weight-bold">
                            &nbsp; {errors.website.message}
                          </span>
                        )}
                      </label>
                      {editMode ? (
                        <p className="pi-text">{profileInfo.website}</p>
                      ) : (
                        <InputField
                          id="website"
                          name="website"
                          inputLabel="website"
                          register={register}
                          inputChange={handleChange}
                          className="form-control"
                        />
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-md-3 order-12 order-sm-1 text-center p-mt-4">
                  <span className="profilePic-container">
                    
                    <JobplicantAvatar
                      width={165}
                      height={165}
                      preview={preview}
                      data={profileInfo}
                    />
                    {!editMode && (
                      <label
                        className="profilePic-label"
                        htmlFor="upload-button"
                      >
                        {uploading ? (
                          <i
                            className="pi pi-spin pi-spinner"
                            style={{ color: "black" }}
                          >
                            {" "}
                          </i>
                        ) : (
                          <i className="pi pi-camera"></i>
                        )}
                      </label>
                    )}
                  </span>
                  <input
                    type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                    onChange={uploadProfilePicture}
                  />
                  <input
                    type="hidden"
                    name="logo"
                    register="true"
                    value={companyInfo.logo}
                  />
                </div>
              </div>

              <div className="p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Country<span className="text-red">*</span>
                    {errors.country && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.country.message}
                      </span>
                    )}
                  </label>

                  {editMode ? (
                    <p className="pi-text">{profileInfo.country}</p>
                  ) : (
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
                      {...register("country", {
                        required: ` Country is required`,
                      })}
                      onChange={(e) => {
                        handleChange(e);
                        handleCountryChange(e);
                      }}
                      className="form-control"
                    />
                  )}
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    State<span className="text-red">*</span>
                    {errors.state && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.state.message}
                      </span>
                    )}
                  </label>

                  {editMode ? (
                    <p className="pi-text">{profileInfo.state}</p>
                  ) : (
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
                      {...register("state", {
                        required: ` State is required`,
                      })}
                      onChange={(e) => {
                        handleChange(e);
                        handleStateChange(e);
                      }}
                      className="form-control"
                    />
                  )}
                </div>
              </div>
              <div className="p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    LGA<span className="text-red">*</span>
                    {errors.lga && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.lga.message}
                      </span>
                    )}
                  </label>

                  {editMode ? (
                    <p className="pi-text">{profileInfo.lga}</p>
                  ) : (
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
                      {...register("lga", {
                        required: ` LGA is required`,
                      })}
                      onChange={(e) => {
                        handleChange(e);
                        handleChange(e);
                      }}
                      className="form-control"
                    />
                  )}
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    City<span className="text-red">*</span>
                    {errors.city && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.city.message}
                      </span>
                    )}
                  </label>
                  {editMode ? (
                    <p className="pi pi-text">{profileInfo.city}</p>
                  ) : (
                    <InputField
                      id="city"
                      name="city"
                      inputLabel="city"
                      register={register}
                      inputChange={handleChange}
                      className="form-control"
                    />
                  )}
                </div>
              </div>
              <div className="p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Address<span className="text-red">*</span>
                    {errors.address && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.address.message}
                      </span>
                    )}
                  </label>
                  {editMode ? (
                    <p className="pi pi-text">{profileInfo.address}</p>
                  ) : (
                    <InputTextarea
                      id="address"
                      name="address"
                      onChange={(e) => {
                        register("address");
                        handleChange(e);
                      }}
                      className="form-control"
                      {...register('address', {
                        required: `* address is required`,
                      })}
                      
                    />
                  )}
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Number of Employees<span className="text-red">*</span>
                    {errors.numberOfEmployees && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.numberOfEmployees.message}
                      </span>
                    )}
                  </label>
                  {editMode ? (
                    <p className="pi pi-text">{profileInfo.noOfEmployees}</p>
                  ) : (
                    <InputField
                      id="noOfEmployees"
                      name="noOfEmployees"
                      inputLabel="noOfEmployees"
                      register={register}
                      inputChange={handleChange}
                      className="form-control"
                      type="number"
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              id="personalProfileForm"
              className="editMode-footer p-d-flex align-item-end flex-row-reverse"
            >
              {!editMode && (
                <Button
                  disabled={isSubmitting}
                  icon="pi pi-check"
                  iconPos="left"
                  label={isSubmitting ? "please wait..." : "Save"}
                  id="saveButton"
                  type="submit"
                />
              )}
            </div>
            <div className="pb-4"></div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CompanyEditForm;
