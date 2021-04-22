import React from 'react';

const SectionHeader = ({ onClick, onDelete, sectionTitle, sectionId, icon, id, addButton = false, editButton = false, deleteButton = false, componentStatus }) => {
  // const urlParams = new URLSearchParams(window.location.search);
  // const myParam = urlParams.get('id');
  // console.log(myParam);
  const actionType = !componentStatus ? "" : (Object.values(componentStatus).includes('add') ? "Add" : "Edit");
  const handleClick = (e) => {
    if (e.target.id === "add") {
      onClick(
        { sectionTitle: sectionId, id: "add" })
    }
    else {
      onClick(
        { sectionTitle: sectionId, id: id })
    }
  }


  return (
    <>
      <div className="p-card-title">
        <span>
          <i className={`pi pi-${icon}`} ></i>
          {actionType} {sectionTitle}
        </span>
        <span>
          {addButton && !id && <i className="pi pi-plus" id="add" onClick={handleClick} ></i>}
          {editButton && id && <i className="pi pi-pencil" onClick={handleClick} id={id} ></i>}
          {deleteButton && id && <i className="pi pi-trash" onClick={onDelete} id={id}></i>}
        </span>
      </div>
    </>
  );
}

export default SectionHeader;