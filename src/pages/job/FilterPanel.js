import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';

import "./FilterPanel.css";
import { useDispatch, useSelector } from 'react-redux';
import { loadStates } from 'store/modules/location';
import { getQualifications } from 'store/modules/admin';
import { useForm } from 'react-hook-form';
import { allJobsFilter } from 'store/modules/job';
import { loadIndustries } from 'store/modules/industry';
import { experienceLevel, ContractTypes } from './dummyData';

const FilterPanel = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });

  const allStates = useSelector(state => state.location.states);
  const industries = useSelector(state => state.industry.industries)?.data;
  const allQualifications = useSelector(state => state.admin.qualifications);
  const [location, setLocation] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [level, setLevel] = useState(null)
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [states, setStates] = useState(null);
  const [industry, setIndustry] = useState(null);
  const [qualification, setQualification] = useState(null);

  useEffect(() => {
    if (allStates) {
      setStates(allStates);
    }
    if (allQualifications) {
      setQualification(allQualifications);
    }
  }, [allStates, allQualifications])

  useEffect(() => {
    dispatch(loadStates(1));
    dispatch(getQualifications());
    dispatch(loadIndustries())
  }, []);


  const handleClearAllField = () => {
    setValue("industry", setIndustry(null));
    setValue("contractType", setSelectedContract(null));
    setValue("state", setLocation(null));
    setValue("level", setLevel(null));
  }

  const onSubmit = (data) => {
    let params = "";
    data.industry = industry?.name || "";
    data.location = location?.name || "";
    data.contractType = selectedContract?.name || "";
    data.level = level?.name || "";

    if (data.industry) {
      params = `industry=${data.industry || ""}&`
    }
    if (data.location) {
      params = params + `location=${data.location || ""}&`
    }
    if (data.level) {
      params = params + `level=${data.level || ""}&`
    }
    if (data.contractType) {
      params = params + `contractType=${data.contractType || ""}&`
    }
    dispatch(allJobsFilter(params))
  }


  return (
    <>
      <div className="p-card p-md-3 p-col-12 p-p-0 rounded">
        <div className="p-card-title d-flex justify-content-between card-header-filterpanel p-p-3 rounded">
          <span className="cardTitle-filterpanel ">
            Filters
          </span>
          <span className="card-sidetitle-filterpanel" onClick={() => handleClearAllField()}>
            Clear all filters
          </span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Industry
              </div>
            </div>
            <Dropdown
              options={industries}
              optionLabel="name"
              filter
              showClear
              filterBy="name"
              id="industry"
              name="industry"
              value={industry}
              {...register("industry")}
              className="w-100 formElements-filterPanel"
              onChange={(e) => setIndustry(e.value)} />
          </div>
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Contract Type
              </div>
            </div>
            {/* <InputText className="w-100 formElements-filterPanel"/> */}
            <Dropdown
              options={ContractTypes}
              value={selectedContract}
              filter
              showClear
              filterBy="name"
              optionLabel="name"
              className="w-100 formElements-filterPanel"
              name="contractType"
              {...register("contractType")}
              onChange={(e) => setSelectedContract(e.value)} />
          </div>
          <div className="p-card-title p-py-1 p-px-3">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Location
              </div>
            </div>
            <Dropdown
              options={states}
              value={location}
              filter
              showClear
              filterBy="name"
              optionLabel="name"
              className="w-100 formElements-filterPanel"
              name="state"
              {...register("state")}
              onChange={(e) => setLocation(e.value)} />
          </div>
          {/* <div className="p-card-title cardContent-filterpanel">
          <div className="d-flex justify-content-between align-items-center p-pb-2">
            <div className="cardSubtitle-filterpanel">
              Salary Range (₦)
            </div>
          </div>
          <div>
            <div className="d-flex">
              <InputNumber
                inputId="integeronly"
                value={salaryRange[0]}
                min={0}
                max={salaryRange[1] && 100}
                onChange={(e) => setSalaryRange([e.value, salaryRange[1]])}
                className="salaryRange-filterPanel formElements-filterPanel"
              />
              <span className="p-mx-1"> - </span>
              <InputNumber
                inputId="integeronly"
                value={salaryRange[1]}
                min={salaryRange[0] && 0}
                max={100}
                onChange={(e) => setSalaryRange([salaryRange[0], e.value])}
                className="salaryRange-filterPanel formElements-filterPanel"
              />
            </div>
          </div>
          <Slider
            range
            min={0}
            max={100}
            value={salaryRange}
            onChange={(e) => setSalaryRange(e.value)}
            className="formElements-filterPanel p-mt-3" />
        </div> */}
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Experience Level
              </div>
            </div>
            <Dropdown
              options={experienceLevel}
              value={level}
              filter
              showClear
              filterBy="name"
              optionLabel="name"
              className="w-100 formElements-filterPanel"
              name="level"
              {...register("level")}
              onChange={(e) => setLevel(e.value)} />
          </div>

          <div className="pr-3" align="right">
            <Button type="submit" className="card-sideButton" label="Apply" />
          </div>
        </form>
      </div>

    </>
  );
}

export default FilterPanel;