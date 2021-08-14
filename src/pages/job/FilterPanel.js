import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Slider } from 'primereact/slider';

import "./FilterPanel.css";

const FilterPanel = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [salaryRange, setSalaryRange] = useState([0, 100]);
  const JobCategories = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const onCategoryChange = (e) => {
    setSelectedCategory(e.value);
  }


  return (
    <>
        <div className="p-card p-md-3 p-col-12 p-p-0">
          <div className="p-card-title d-flex justify-content-between card-header-filterpanel p-p-3">
            <span className="cardTitle-filterpanel">
              Filters
            </span>
            <span className="card-sidetitle-filterpanel">
              Clear all filters
            </span>
          </div>
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Job Category
            </div>
              <div className="card-sidetitle-filterpanel">
                Clear
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
                Job Type
            </div>
              <div className="card-sidetitle-filterpanel">
                Clear
            </div>
            </div>
            {/* <InputText className="w-100 formElements-filterPanel"/> */}
            <Dropdown
              options={JobCategories}
              value={selectedCategory}
              optionLabel="name"
              onChange={onCategoryChange}
              className="w-100 formElements-filterPanel"
              name="jobType"
            />
          </div>
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between align-items-center p-pb-2">
              <div className="cardSubtitle-filterpanel">
                Salary Range (₦)
            </div>
              <Button className="card-sideButton" label="Apply" type="button" />
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
          </div>
          <div className="p-card-title cardContent-filterpanel">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Experience Level
            </div>
              <div className="card-sidetitle-filterpanel">
                Clear
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
          <div className="p-card-title p-py-4 p-px-3">
            <div className="d-flex justify-content-between">
              <div className="cardSubtitle-filterpanel">
                Location
            </div>
              <div className="card-sidetitle-filterpanel">
                Clear
            </div>
            </div>
            <InputText className="w-100 formElements-filterPanel" />
          </div>
        </div>

    </>
  );
}

export default FilterPanel;