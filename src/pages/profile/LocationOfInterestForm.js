import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Tag } from "primereact/tag";
import ModeFooter from "pages/profile/ModeFooter";
import SectionHeader from "./SectionHeader";
import { Dropdown } from "primereact/dropdown";
import { updateLOI } from "store/modules/account";

const LOIForm = ({ data, closeEditMode }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);
  const { register, handleSubmit, setValue } = useForm();

  const LOIList = [
    { name: "New York", id: "NY" },
    { name: "Rome", id: "RM" },
    { name: "London", id: "LDN" },
    { name: "Istanbul", id: "IST" },
    { name: "Paris", id: "PRS" },
    { name: "Paris11", id: "PRS11" },
    { name: "Paris22", id: "PRS22" },
  ];

  const [LOIs, setLOIs] = useState([]);
  const [currentLOI, setCurrentLOI] = useState("");

  const searchObjectArrayValues = (array, value) => {
    const LOIExists = array.filter((LOI) => LOI === value);
    return !Boolean(LOIExists.length > 0);
  };

  const handleLOIChange = (e) => {
    setCurrentLOI(e.target.value);
  };

  const handleLOIAdd = () => {
    if (LOIs.length > 2) {
      setCurrentLOI("");
      return;
    }
    if (currentLOI) {
      const { name } = currentLOI;

      if (searchObjectArrayValues(LOIs, name)) {
        setLOIs([...LOIs, name]);
        console.log(name)
        console.log(LOIs)
      }
      setValue("location", LOIs);
      setCurrentLOI("");
    }
  };
  const handleLOIDelete = (loiToRemove) => {
    // if (e.target.className === "p-tag-icon pi pi-times") {
    const newLOIArray = LOIs.filter((LOI) => LOI !== loiToRemove);
    setLOIs(newLOIArray);
    setValue("location", newLOIArray);
    // }
  };

  useEffect(() => {
    if (data?.length > 0) {
      setCurrentLOI();
      setLOIs(data);
      register("LOI");
      setValue("LOI", data);
    }
  }, [data]);

  const LOISubmit = (loiData) => {
    console.log(loiData);

    dispatch(updateLOI(loiData.location));
    return;
  };
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="briefcase" sectionTitle="Locations of Interest" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(LOISubmit)}>
            <span className="skillInput p-mb-4">
              <label htmlFor="LOIInput" className="inputLabel p-pr-3">
                Add up to 2 locations of interest
              </label>
            </span>
            {LOIs.length > 0 ? (
              LOIs.map((LOI, index) => (
                <button
                  key={index}
                  onClick={(e) => handleLOIDelete(LOI)}
                  type="button"
                  className="p-mr-2 p-p-0 tag-container"
                  id={LOI}
                >
                  <Tag value={LOI} icon="pi pi-times" className="p-p-2"></Tag>
                </button>
              ))
            ) : (
              <div>No tags</div>
            )}
            <span className="skillInput">
              <Dropdown
                value={currentLOI}
                options={LOIList}
                onChange={handleLOIChange}
                optionLabel="name"
                filter
                showClear
                filterBy="name"
                placeholder="Select LOI"
                icon="pi pi-plus"
                id="LOIInput"
              />
              <i className="pi pi-plus" onClick={handleLOIAdd}></i>
            </span>
            <ModeFooter
              id="LOIEdit"
              loading={loading}
              onCancel={closeEditMode}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default LOIForm;
