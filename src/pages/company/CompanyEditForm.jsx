import InputField from "components/InputField";
import moment from "moment";
import { useHistory } from "react-router-dom";
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
import { loadCountry, loadLga, loadStates } from "store/modules/location";
import JobplicantAvatar from "components/profile/jobplicant-avatar";

const CompanyEditForm = ({ countryId, stateId, lgaId }) => {
  const history = useHistory();
  const loading = useSelector((state) => state.company.requestLoading);
  const uploading = useSelector((state) => state.account.loading);
  const id = useSelector((state) => state.account.profileInfo.id);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const successEditMode = useSelector((state) => state.company.isEditMode); //Edit mode from redux...

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.location.countries);
  const states = useSelector((state) => state.location.states);
  const lgas = useSelector((state) => state.location.lgas);
  const [companyInfo, setCompanyInfo] = useState({
    companyName: "",
    yearOfEstablishment: null,
  });

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [editMode, setEditMode] = useState(true);

  console.log("company button loading", loading);

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

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCompanyInfo({ ...companyInfo, [name]: value });
    setValue(name, value, { shouldValidate: true });
  };

  useEffect(() => {
    if (profileInfo !== null) {
      console.log("profile info change", profileInfo);
      setCompanyInfo({
        ...companyInfo,
        yearOfEstablishment: profileInfo.yearOfEstablishment
          ? new Date(profileInfo.yearOfEstablishment)
          : null,
        companyName: profileInfo.companyName,

        city: profileInfo.city,
        noOfEmployees: profileInfo.noOfEmployees,
        phoneNumber: profileInfo.contactPhoneNumber,
        website: profileInfo.website,
        address: profileInfo.address,
      });
      // console.log(
      //   "profileInfo.yearOfEstablishment)",
      //   profileInfo.yearOfEstablishment
      // );
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

  const handleEditMode = () => {
    setEditMode(!editMode);
    if (editMode) {
      history.push({
        search: "mode=edit",
      });
      return;
    }
    history.replace({ search: "" });
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // id=123
    let mode = params.get("mode"); // 123
    if (mode === "edit") {
      setEditMode(false);
    }

    dispatch(loadCountry());
  }, []);

  useEffect(() => {
    if (countries.length && profileInfo) {
      const countryObject = countries.find(
        (c) => c.name === profileInfo.country
      );
      if (countryObject) {
        dispatch(loadStates(countryObject.id));
        setCompanyInfo({
          ...companyInfo,
          country: countryObject,
        });
        setValue("country", countryObject.name);
      }
    }
  }, [profileInfo, countries.length]);

  useEffect(() => {
    if (states.length && profileInfo) {
      const stateObject = states.find((s) => s.name === profileInfo.state);
      if (stateObject) {
        dispatch(loadLga(stateObject.id));
        setCompanyInfo({
          ...companyInfo,
          state: stateObject,
        });
        setValue("state", stateObject.name);
      }
    }
  }, [states.length, profileInfo]);

  useEffect(() => {
    if (lgas.length && profileInfo) {
      const lgaObject = lgas.find(
        (l) => l.name.toLowerCase() === profileInfo.lga.toLowerCase()
      );
      if (lgaObject) {
        setCompanyInfo({
          ...companyInfo,
          lga: lgaObject,
        });
        setValue("lga", lgaObject.name);
      }
    }
  }, [lgas.length, profileInfo]);

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
        console.log(selectedFile);
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
    let countryId = e.target.value.id;
    dispatch(loadStates(countryId));
  };

  const handleStateChange = (e) => {
    let stateId = e.target.value.id;
    dispatch(loadLga(stateId));
  };

  const handleLgaChange = (e) => {
    //< == for now the function does nothing...
    let lgaId = e.target.value.id;
    //todo
  };

  const onSubmit = (data) => {
    const obj = {
      ...data,
      countryId: companyInfo.country.id,
      countryName: companyInfo.country.name,
      stateId: companyInfo.state.id,
      stateName: companyInfo.state.name,
      lga: companyInfo.lga,
      lgaId: companyInfo.lga.id,
      lgaName: companyInfo.lga.name,
      phonenumber: data.phoneNumber,
      contactPhoneNumber: data.phoneNumber,
    };
    // // console.log(`id: ${id}, company info: `, obj)
    // console.log(obj);
    dispatch(updateCompanyInfo(obj));
  };

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
                    // onClick={() => setEditMode(false)}
                    onClick={handleEditMode}
                  ></i>
                )}
                {!editMode && (
                  <i
                    className="pi pi-times"
                    // onClick={() => setEditMode(true)}
                    onClick={handleEditMode}
                  ></i>
                )}
              </div>
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
                      {editMode ? (
                        <p className="pi-text">{profileInfo.companyName}</p>
                      ) : (
                        <InputField
                          id="companyName"
                          name="companyName"
                          inputLabel="Company Name"
                          register={register}
                          inputChange={handleChange}
                          className="form-control"
                        />
                      )}
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
                          name="yearOfEstablishment"
                          value={new Date(profileInfo.yearOfEstablishment)}
                          onSelect={(e) => {
                            const value = new Date(e.value).toISOString();

                            // setCompanyInfo({
                            //   ...companyInfo,
                            //   yearOfEstablishment: value,
                            // });
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
                    <div className="p-field p-col-6 p-md-6">
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

                    <div className="p-field p-col-6 p-md-6">
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
                <div className="col-md-3 text-center p-mt-4">
                  <span className="profilePic-container">
                    {/* {selectedFile ? (<img
                      src={preview}
                      alt="User Image"
                      width="160"
                      height="160"
                      className="profile-picture"
                      style={{ border: '4px solid #eee' }}
                    />) :
                      (<img src={profileInfo.imageUrl}
                        alt="User Image"
                        width="130"
                        height="130"
                        className="profile-picture"
                      />)
                    } */}
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

              <div className="row">
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    Country<span className="text-red">*</span>
                    {errors.country && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.country.message}
                      </span>
                    )}
                  </label>

                  {editMode ? (
                    <p className="pi-text">
                      {companyInfo.country && companyInfo.country.name}
                    </p>
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
                <div className="p-field p-col-6 p-md-6">
                  <label className="inputLabel" htmlFor="course">
                    State<span className="text-red">*</span>
                    {errors.state && (
                      <span className="text-danger font-weight-bold">
                        &nbsp; {errors.state.message}
                      </span>
                    )}
                  </label>

                  {editMode ? (
                    <p className="pi-text">
                      {companyInfo.state && companyInfo.state.name}
                    </p>
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

                  {editMode ? (
                    <p className="pi-text">
                      {companyInfo.lga && companyInfo.lga.name}
                    </p>
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
                        handleLgaChange(e);
                      }}
                      className="form-control"
                    />
                  )}
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
                  {editMode ? (
                    <p className="pi pi-text">{profileInfo.address}</p>
                  ) : (
                    <textarea
                      id="address"
                      name="address"
                      onChange={(e) => {
                        register("address");
                        handleChange(e);
                      }}
                      className="form-control"
                      defaultValue={profileInfo.address}
                    ></textarea>
                  )}
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
                  disabled={loading}
                  icon="pi pi-check"
                  iconPos="left"
                  label={loading ? "please wait..." : "Save"}
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
