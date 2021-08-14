import React from "react";

const SectionHeader = ({
  openModalOnEdit,
  openModalOnCreate,
  deleteItem,
  hasData,
  sectionTitle,
  icon,
  id,
  showAddButton = false,
  showEditButton = false,
  showDeleteButton = false,
}) => {
  return (
    <div className="sectionHeader">
      <div className="p-card-title">
        <span>
          <i className={`pi pi-${icon}`}></i>
          {sectionTitle}
        </span>
        <span>
          {showAddButton && !hasData && (
            <i className="pi pi-plus" onClick={openModalOnCreate}></i>
          )}
          {showEditButton && hasData && (
            <i className="pi pi-pencil" onClick={openModalOnEdit} id={id}></i>
          )}
          {showDeleteButton && (
            <i className="pi pi-trash" onClick={deleteItem} id={id}></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;
