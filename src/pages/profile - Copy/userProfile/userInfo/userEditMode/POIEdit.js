import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Tag } from 'primereact/tag';
import ModeFooter from '../../../../profile/ModeFooter';
import SectionHeader from '../../../SectionHeader';
import { Dropdown } from 'primereact/dropdown';

const POIEdit = ({ data, componentStatus, closeEditMode }) => {
  const { register, handleSubmit, setValue } = useForm();

  const POIList = [
    { name: 'Networking', id: 'NY' },
    { name: 'Retail Manager', id: 'RM' },
    { name: 'Life Coach', id: 'LDN' },
    { name: 'Graphic Designer', id: 'IST' },
    { name: 'Teacher', id: 'PRS' },

  ];

  const [POIs, setPOIs] = useState(data);
  const [currentPOI, setCurrentPOI] = useState([]);

  const searchObjectArrayValues = (array, value) => {
    const POIExists = array?.filter(POI => POI.id === value);
    return !Boolean(POIExists?.length > 0);
  }

  const handlePOIChange = (e) => {
    setCurrentPOI(e.target.value);
  }

  const handlePOIAdd = () => {
    console.log(currentPOI);
    if (POIs?.length === 2) {
      setCurrentPOI();
      console.log(currentPOI);
      return;
    }
    if (currentPOI && currentPOI.name) {
      if (searchObjectArrayValues(POIs, currentPOI.id)) {
        if (!POIs) {
          setPOIs([{ POIName: currentPOI.name, id: currentPOI.id }]);
          setValue("POI", [{ POIName: currentPOI.name, id: currentPOI.id }]);
          return;
        }
        setPOIs([...POIs, { POIName: currentPOI.name, id: currentPOI.id }]);
        setValue("POI", [...POIs, { POIName: currentPOI.name, id: currentPOI.id }])
        setCurrentPOI();
        return;
      }
      setCurrentPOI();
    }
  }
  const handlePOIDelete = (e) => {
    if (e.target.className === "p-tag-icon pi pi-times") {
      const newPOIArray = POIs.filter(POI => POI.id !== e.currentTarget.id);
      setPOIs(newPOIArray);
      setValue("POI", newPOIArray)
    }
  }

  useEffect(() => {
    if (data?.length > 0) {
      setCurrentPOI();
      setPOIs(data);
      register("POI");
      setValue("POI", data);
    }
  }, [data])

  const POISubmit = (POI) => {
    console.log(POI);
    return;
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader componentStatus={componentStatus} icon="briefcase" sectionTitle="Professions of Interest" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(POISubmit)}>
            <span className="skillInput p-mb-4">
              <label htmlFor="POIInput" className="inputLabel p-pr-3">Add up to 2 professions of interest</label>
            </span>
            {POIs?.map((POI, index) => (
              <button key={index} onClick={(e) => handlePOIDelete(e)} type="button" className="p-mr-2 p-p-0 tag-container" id={POI.id}><Tag value={POI.POIName} icon="pi pi-times" className="p-p-2" ></Tag>
              </button>
            ))}
            <span className="skillInput">
              <Dropdown value={currentPOI} options={POIList} onChange={(e) => handlePOIChange(e)}
                optionLabel="name" filter showClear filterBy="name"
                placeholder="Select POI" icon="pi pi-plus" id="POIInput" />
              <i className="pi pi-plus" onClick={handlePOIAdd}></i>
            </span>
            <ModeFooter id="POIEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>);
}

export default POIEdit;