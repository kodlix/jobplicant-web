const CompanyPersonalInfo = ({ componentStatus, toggleEditMode }) => {
  const rating = 4.5;

  const mode = () => {
    toggleEditMode({ sectionTitle: "companyPersonalInfoEdit", id: "companyPersonalInfoEdit" })
  }
  return (
    <>
      <h3 className="username p-mr-2">RightClicks</h3>
      {!componentStatus.personalInfoEdit && <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={mode}>&nbsp;<u>(should this be company name only or include contact person details)</u></i>}
      <div>Nigeria</div>
      {/* <h3 className="username p-mr-2">Jane Doe</h3><span>
        <div className="stars" style={{ "--rating": rating }}></div>
      </span>
      {!componentStatus?.personalInfoEdit && <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={mode}>&nbsp;<u>(Edit Personal Info)</u></i>} */}

    </>
  );
}

export default CompanyPersonalInfo;