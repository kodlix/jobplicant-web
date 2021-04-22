const PersonalInfo = ({ componentStatus, toggleEditMode }) => {
  const rating = 4.5;

  const openEditMode = () => {
    toggleEditMode({ sectionTitle: "personalInfoEdit", id: "personalInfoEdit" })
  }
  return (
    <>
      <h3 className="username p-mr-2">Jane Doe</h3><span>
        <div className="stars" style={{ "--rating": rating }}></div>
      </span>
      {!componentStatus?.personalInfoEdit && <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={openEditMode}>&nbsp;<u>(Edit Personal Info)</u></i>}

    </>
  );
}

export default PersonalInfo;