import React from "react";
import { useParams } from "react-router";
import agentService from "services/agent.service";

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
  hide = false
}) => {

  const loggedInUserId = agentService.Auth.current().id
  const ApplicantId = useParams().id;

  return (
    <div className="sectionHeader">
      <div className="p-card-title">
        <span>
          <i className={`pi pi-${icon}`}></i>
          {sectionTitle}
        </span>
        {!hide && <span>
          {showAddButton && !hasData && (
            <i className="pi pi-plus" onClick={openModalOnCreate}></i>
          )}
          {showEditButton && hasData && (
            <i className="pi pi-pencil" onClick={openModalOnEdit} id={id}></i>
          )}
          {showDeleteButton && (
            <i className="pi pi-trash" onClick={deleteItem} id={id}></i>
          )}
        </span>}
      </div>
    </div>
  );
};

export default SectionHeader;
