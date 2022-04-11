import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Tag } from "primereact/tag";
import ModeFooter from "./ModeFooter";
import SectionHeader from "./SectionHeader";
import { Dropdown } from "primereact/dropdown";
import { updateLOI } from "store/modules/account";
import { loadStates } from "store/modules/location";

const LOIList = [
  { name: "New York", id: "NY" },
  { name: "Rome", id: "RM" },
  { name: "London", id: "LDN" },
  { name: "Istanbul", id: "IST" },
  { name: "Paris", id: "PRS" },
  { name: "Paris11", id: "PRS11" },
  { name: "Paris22", id: "PRS22" },
];

const LOIForm = ({ data, closeEditMode }) => {
  console.log('Loi data', data)
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.account.loading);

  const [LOIs, setLOIs] = useState([]);
  const [currentLOI, setCurrentLOI] = useState({});

  const searchObjectArrayValues = (array, value) => {
    console.log('LOIS TEST AGAIN', array)
    const LOIExists = array.filter((LOI) => LOI.name === value);
    return !Boolean(LOIExists.length > 0);
  };
  const handleLOIChange = (e) => {
    const value = e.target.value;
    setCurrentLOI(value);
  };

  const handleLOIAdd = () => {
    if (LOIs.length > 2) {
      console.log('loi is greater than 2');
    }else{
      const { name } = currentLOI;
   
      if (searchObjectArrayValues(LOIs, name)) {
        setLOIs([...LOIs, name]);
        setValue("locations", LOIs);
        setCurrentLOI("");
      }
    }
  };
  const handleLOIDelete = (loiToRemove) => {
    // if (e.target.className === "p-tag-icon pi pi-times") {
    const newLOIArray = LOIs.filter((LOI) => LOI !== loiToRemove);
    setLOIs(newLOIArray);
    setValue("locations", newLOIArray);
    // }
  };

  const states = useSelector(state => state.location.states)
  const fetchingStates = useSelector(state => state.location.fetchingStates)

  useEffect(() => {
    dispatch(loadStates(1))
  }, [])

  useEffect(() => {
    if (data?.length > 0) {
      setLOIs(data);
      register("LOI");
      setValue("LOI", data);
    }
  }, []);

  const LOISubmit = (loiData) =>{
    console.log('data to post', LOIs)
     dispatch(updateLOI({"locations": LOIs}));
    }

  return (
    <>
      <div className="p-mt-2">
        <SectionHeader icon="briefcase" sectionTitle="Locations of Interest" />
        <div className="">
          <form onSubmit={handleSubmit(LOISubmit)}>
            <span className="skillInput p-mb-4">
              <label htmlFor="LOIInput" className="inputLabel p-pr-3">
                Add up to 3 locations of interest
              </label>
            </span>
        
            { LOIs.map((LOI, index) => 
                <button
                  key={index}
                  onClick={(e) => handleLOIDelete(LOI)}
                  type="button"
                  className="p-mr-2 p-p-0 tag-container"
                  id={LOI.id}
                >
                  <Tag
                    value={LOI}
                    icon="pi pi-times"
                    className="p-p-2"
                  ></Tag>
                </button>
              )}
            
             
            <span className="skillInput">
              <Dropdown
                value={currentLOI}
                options={states}
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
