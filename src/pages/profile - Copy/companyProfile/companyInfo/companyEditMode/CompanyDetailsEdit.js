import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import { Dropdown } from 'primereact/dropdown';
import SectionHeader from '../../../SectionHeader';
import ModeFooter from '../../../../profile/ModeFooter';

import '../../../UserProfile.css';

const CompanyDetails = ({ data, closeEditMode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const [companyDetails, setCompanyDetails] = useState({});
  const industryList = [
    { name: 'Networking', id: 'NY1' },
    { name: 'Retail Manager', id: 'RM1' },
    { name: 'Life Coach', id: 'LDN1' },
    { name: 'Graphic Designer', id: 'IST1' },
    { name: 'Teacher', id: 'PRS1' },

  ];

  useEffect(() => {
    register("numberOfEmployees", { required: " Number of Employees is required" })
  }, [register])

  useEffect(() => {
    if (data) {
      for (const [key, value] of Object.entries(data)) {
        if (key === "dateOfEstablishment") {
          setValue(key, new Date(value));
        }
        else {
          setValue(key, value);
        }
      }
      const companyDetailsFromDb = Object.assign({}, data);
      companyDetailsFromDb.dateOfEstablishment = new Date(companyDetailsFromDb.dateOfEstablishment);
      setCompanyDetails(companyDetailsFromDb);
    }
    else {
      for (const [key] of Object.entries(companyDetails)) {
        setValue(key, null);
      }
      setCompanyDetails({})
    }
    clearErrors();
  }, [data]);

  const inputChange = (e, inputId) => {
    const inputName = inputId && (inputId === "numberOfEmployees" || "dateOfEstablishment") ? inputId : e.target.name;
    const inputValue = inputId && (inputId === "numberOfEmployees" || "dateOfEstablishment") ? e.value : e.target.value;
    const updatedCompanyDetails = Object.assign({}, companyDetails);
    updatedCompanyDetails[inputName] = inputValue;
    setCompanyDetails(updatedCompanyDetails);
    setValue(inputName, inputValue,
      { shouldValidate: true }
    )
  }

  const onEditCancel = (e) => {
    for (const [key] of Object.entries(companyDetails)) {
      setValue(key, null);
      setCompanyDetails({})
    }
    clearErrors();
    closeEditMode(e.target.id);
  }

  const contactDetailsSubmit = (data) => {
    data.dateOfEstablishment = (new Date(data.dateOfEstablishment)).toISOString();
    console.log(data);
    return;
  }

  const componentStatus = { companyDetails: 'add' };
  if (data) {
    componentStatus.companyDetails = 'edit';
  }


  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader componentStatus={componentStatus} icon="chart-bar" sectionTitle="Company Information" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(contactDetailsSubmit)}>
            <div className="p-fluid p-formgrid p-grid">
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="industry">Industry *
                {errors.industry && <span className="text-danger font-weight-bold">&nbsp; {errors.industry.message}</span>}
                </label>
                <Dropdown options={industryList}
                  optionLabel="name" filter showClear filterBy="name"
                  icon="pi pi-plus" id="industry" name="industry" value={companyDetails.industry}  {...register("industry",
                    {
                      required: ` Industry is required`
                    }
                  )} onChange={(e) => inputChange(e)} />
              </div>
              <div className="p-field p-col-12 p-md-6">
                <label className="inputLabel" htmlFor="dateOfEstablishment">Date of Establishment *
                {errors.dateOfEstablishment && <span className="text-danger font-weight-bold">&nbsp; {errors.dateOfEstablishment.message}</span>}
                </label>
                <Calendar id="dateOfEstablishment" view="month" dateFormat="mm/yy" yearNavigator yearRange="2010:2030" value={companyDetails.dateOfEstablishment} onSelect={(e) => { inputChange(e, "dateOfEstablishment") }} name="dateOfEstablishment"
                  {...register("dateOfEstablishment",
                    {
                      required: ` Date of Establishment is required`,
                    }
                  )} maxDate={new Date()} />
              </div>
              <div className="p-field p-col-12 p-md-4 p-pl-2 p-pr-2 p-pr-md-0">
                <label className="inputLabel" htmlFor="numberOfEmployees">Number of Employees *
                {errors.numberOfEmployees && <span className="text-danger font-weight-bold">&nbsp; {errors.numberOfEmployees.message}</span>}
                </label>
                <InputNumber id="numberOfEmployees" value={companyDetails.numberOfEmployees} name="numberOfEmployees" onChange={(e) => { inputChange(e, "numberOfEmployees") }} showButtons buttonLayout="horizontal" step={1}
                  decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success" incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus" min={0}
                />
              </div>
              <div className="p-field p-col-12 p-md-4 p-pr-2 p-pr-md-0">
                <label className="inputLabel" htmlFor="contactPerson">Contact Person * </label>
                <InputText id="contactPerson" type="text" value={companyDetails.contactPerson} disabled />
              </div>
              <div className="p-field p-col-12 p-md-4 p-pr-2">
                <label className="inputLabel" htmlFor="regNo">Registration Number *
                {errors.regNo && <span className="text-danger font-weight-bold">&nbsp; {errors.regNo.message}</span>}
                </label>
                <InputField id="regNo" inputLabel="Registration Number" register={register} inputChange={inputChange} />
              </div>
            </div>
            <ModeFooter id="companyDetailsEdit" onCancel={onEditCancel} />
          </form>
        </div>
      </div>
    </>
  );
}

const InputField = ({ id, inputLabel, register, inputChange }) => {
  return (<InputText id={id} type="text" name={id} {...register(id,
    {
      required: `${inputLabel} is required`
    }
  )}
    onChange={(e) => {
      inputChange(e)
    }} />)
}

export default CompanyDetails;