import React from 'react';
import { Link } from 'react-router-dom';

const SectionHeaderAddIcon = () => <i className="pi pi-plus" />;
const SectionHeaderEditIcon = () => <i className="pi pi-pencil" />;


const SectionHeaderAdd = (props) => {
  const { show, type, onClick, href, sectionTitle, ...attributes } = props;
  if (show) {
    const createLink = `${href}?title=${sectionTitle}`;
    return <Link to={createLink} {...attributes}><SectionHeaderAddIcon /></Link>
  }

  return null;
}

const SectionHeaderEdit = (props) => {
  const { show, type, onClick, href, sectionTitle, ...attributes } = props;
  if (show) {
    const editLink = `${href}?title=${sectionTitle}`;
    return <Link to={editLink} {...attributes}><SectionHeaderEditIcon /></Link>
  }

  return null;
}

const SectionHeader = ({ onClick, onDelete, sectionTitle, sectionId, icon, id, addButton = false, editButton = false, deleteButton = false, componentStatus, ...props }) => {
  const actionType = !componentStatus ? "" : (Object.values(componentStatus).includes('add') ? "Add" : "Edit");
  const { createLink, editLink, editType = 'button' } = props;

  return (
    <>
      <div className="p-card-title">
        <span>
          <i className={`pi pi-${icon}`} ></i>
          {actionType} {sectionTitle}
        </span>
        <span>
          <SectionHeaderAdd
            id={id}
            href={createLink}
            type={editType}
            show={addButton && !id}
            sectionTitle={encodeURI(sectionTitle)}
          />
          <SectionHeaderEdit
            id={id}
            href={editLink}
            type={editType}
            show={editButton && id}
            sectionTitle={encodeURI(sectionTitle)}
          />
          {deleteButton && id && <i className="pi pi-trash" onClick={onDelete} id={id}></i>}
        </span>
      </div>
    </>
  );
}

export default SectionHeader;