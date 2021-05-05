import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Tag } from 'primereact/tag';
import EditModeFooter from '../../../EditModeFooter';
import SectionHeader from '../../../SectionHeader';
import { Dropdown } from 'primereact/dropdown';

const LOIEdit = ({ data, closeEditMode }) => {
  const { register, handleSubmit, setValue } = useForm();

  const LOIList = [
    { name: 'New York', id: 'NY' },
    { name: 'Rome', id: 'RM' },
    { name: 'London', id: 'LDN' },
    { name: 'Istanbul', id: 'IST' },
    { name: 'Paris', id: 'PRS' },
    { name: 'Paris11', id: 'PRS11' },
    { name: 'Paris22', id: 'PRS22' }
  ];

  const [LOIs, setLOIs] = useState([]);
  const [currentLOI, setCurrentLOI] = useState();

  const searchObjectArrayValues = (array, value) => {
    const LOIExists = array.filter(LOI => LOI.id === value);
    return !Boolean(LOIExists.length > 0);
  }

  const handleLOIChange = (e) => {
    setCurrentLOI(e.target.value);
  }

  const handleLOIAdd = () => {
    if (LOIs.length === 2) {
      setCurrentLOI();
      return;
    }
    if (currentLOI && currentLOI.name) {
      if (searchObjectArrayValues(LOIs, currentLOI.id)) {
        setLOIs([...LOIs, { LOIName: currentLOI.name, id: currentLOI.id }]);
        setValue("LOI", [...LOIs, { LOIName: currentLOI.name, id: currentLOI.id }])
        setCurrentLOI();
        return;
      }
      setCurrentLOI();
    }
  }
  const handleLOIDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newLOIArray = LOIs.filter(LOI => LOI.id !== e.currentTarget.id);
      setLOIs(newLOIArray);
      setValue("LOI", newLOIArray)
    }
  }

  useEffect(() => {
    if (data?.length > 0) {
      setCurrentLOI();
      setLOIs(data);
      register("LOI");
      setValue("LOI", data);
    }
  }, [data])

  const LOISubmit = (LOI) => {
    console.log(LOI);
    return;
  }
  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="briefcase" sectionTitle="Locations of Interest" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(LOISubmit)}>
            <span className="skillInput p-mb-4">
              <label htmlFor="LOIInput" className="inputLabel p-pr-3">Add up to 2 locations of interest</label>
            </span>
            {LOIs?.map((LOI, index) => (
              <button key={index} onClick={(e) => handleLOIDelete(e)} type="button" className="p-mr-2 p-p-0 tag-container" id={LOI.id}><Tag value={LOI.LOIName} icon="pi pi-times" className="p-p-2" ></Tag>
              </button>
            ))}
            <span className="skillInput">
              <Dropdown value={currentLOI} options={LOIList} onChange={(e) => handleLOIChange(e)}
                optionLabel="name" filter showClear filterBy="name"
                placeholder="Select LOI" icon="pi pi-plus" id="LOIInput" />
              <i className="pi pi-plus" onClick={handleLOIAdd}></i>
            </span>
            <EditModeFooter id="LOIEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>);
}

export default LOIEdit;