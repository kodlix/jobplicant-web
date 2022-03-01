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

const FilterPanel = () => {
  const dispatch = useDispatch();

  const { register, handleSubmit, setValue, trigger, clearErrors, formState: { errors } } = useForm({
    mode: "onChange",
    reValidateMode: "all"
  });
  const allStates = useSelector(state => state.location.states);
  const allQualifications = useSelector(state => state.admin.qualifications);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedContract, setSelectedContract] = useState(null);
  const [selectedQua, setSelectedQua] = useState(null);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const [states, setStates] = useState(null);
  const [qualification, setQualification] = useState(null);

  const JobCategories = [
    { name: 'Telecommunication', code: 'TC' },
    { name: 'Agriculturer', code: 'AR' },
    { name: 'Medical', code: 'MC' },
    { name: 'Technology', code: 'TY' },
    { name: 'Accountant', code: 'AT' }
  ];

  const ContractTypes = [
    { name: 'Full Time', code: 'FT' },
    { name: 'Part Time', code: 'PT' },
    { name: 'Contract', code: 'CT' },
  ];

  const onCategoryChange = (e) => {
    setSelectedCategory(e.value);
  }

  const onStateChange = (e) => {
    setSelectedState(e.value)
  }

  const onContractChange = (e) => {
    setSelectedContract(e.value)
  }

  const onQualificationChange = (e) => {
    setSelectedQua(e.value)
  }

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
  }, []);


  const handleClearAllField = () => {
    setValue("jobCategory", setSelectedCategory(null));
    setValue("contractType", setSelectedContract(null));
    setValue("location", setSelectedState(null));
    setValue("experience", setSelectedQua(null));
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
        <div className="p-card-title cardContent-filterpanel">
          <div className="d-flex justify-content-between">
            <div className="cardSubtitle-filterpanel">
              Job Industry
            </div>
          </div>
          <Dropdown
            options={JobCategories}
            value={selectedCategory}
            optionLabel="name"
            onChange={onCategoryChange}
            className="w-100 formElements-filterPanel"
            name="jobCategory"
          />
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
            optionLabel="name"
            onChange={onContractChange}
            className="w-100 formElements-filterPanel"
            name="contractType"
          />
        </div>
        <div className="p-card-title p-py-1 p-px-3">
          <div className="d-flex justify-content-between">
            <div className="cardSubtitle-filterpanel">
              Location
            </div>
          </div>
          <Dropdown
            options={states}
            value={selectedState}
            optionLabel="name"
            onChange={onStateChange}
            className="w-100 formElements-filterPanel"
            name="location"
          />
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
            options={qualification}
            value={selectedQua}
            optionLabel="name"
            onChange={onQualificationChange}
            className="w-100 formElements-filterPanel"
            name="experience"
          />
        </div>

        <div className="pr-3" align="right">
          <Button className="card-sideButton" label="Apply" type="button" />
        </div>
      </div>

    </>
  );
}

export default FilterPanel;