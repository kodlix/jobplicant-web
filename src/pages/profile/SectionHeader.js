import React from 'react';

const SectionHeader = (props) => {
  const { sectionTitle, icon, id, addButton = false, editButton = false, deleteButton = false } = props;
  const openEditMode = (event) => {
    props.onClick(event);
  }

  const deleteItem = (event) => {
    props.onDelete(event);
  }
  return (
    <>
      <div className="p-card-title">
        <span>
          <i className={`pi pi-${icon}`} ></i>
          {sectionTitle}
        </span>
        <span>
          {addButton && <i className="pi pi-plus"></i>}
          {editButton && <i className="pi pi-pencil" onClick={openEditMode} id={id}></i>}
          {deleteButton && <i className="pi pi-trash" onClick={deleteItem} id={id}></i>}
        </span>
      </div>
    </>
  );
}

export default SectionHeader;