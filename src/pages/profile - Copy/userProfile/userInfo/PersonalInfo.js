import { Link } from 'react-router-dom';

const PersonalInfo = ({ componentStatus, toggleEditMode }) => {
  const rating = 4.5;
  const href = '/userprofile/edit'
  const sectionTitle = 'Personal Information';

  const mode = () => {
    toggleEditMode({ sectionTitle: "personalInfoEdit", id: "personalInfoEdit" })
  }
  return (
    <>
      <h3 className="username p-mr-2">Jane Doe</h3><span>
        <div className="stars" style={{ "--rating": rating }}></div>
      </span>
      <Link to={`${href}?title=${sectionTitle}`}> <i className="pi pi-pencil p-pr-3 personalInfo-edit" id="personalInfoEdit" onClick={mode}>&nbsp;<u>(Edit Personal Info)</u></i></Link>

    </>
  );
}

export default PersonalInfo;