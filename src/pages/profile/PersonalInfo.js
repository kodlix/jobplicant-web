import { PROFILE } from "constants/profile";

const PersonalInfo = ({ openCreate, openEdit, profileInfo}) => {
  const rating = 4.5;

  const uploadProfilePicture = e => {

  }

  return (
    <div className="userProfile-header">
      <span className="profilePic-container">
        <img
          src="../../assets/logo.png"
          alt="User Image"
          width="130"
          height="130"
          className="profile-picture"
        />
        <label className="profilePic-label" htmlFor="upload-button">
          <i className="pi pi-camera"></i>
        </label>
      </span>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={uploadProfilePicture}
      />
      <div>
        <h3 className="username p-mr-2">
          {profileInfo?.firstName} {profileInfo?.lastName}
        </h3>
        <i
          className="pi pi-pencil p-pr-3 personalInfo-edit"
          id="personalInfoEdit"
          onClick={() => openEdit(PROFILE.PERSONAL_INFO, profileInfo)}
        >
          &nbsp;<u>(Edit Personal Info)</u>
        </i>
        <div>Photographer at UNICEF</div>
        <span>
          <div className="stars" style={{ "--rating": rating }}></div>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo