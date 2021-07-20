import { PROFILE } from "constants/profile";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProfileInfo, updateProfilePicture } from "store/modules/account";

const PersonalInfo = ({ openCreate, openEdit }) => {
  const rating = 4.5;
  const dispatch = useDispatch();
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const loading = useSelector((state) => state.account.loading);

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  console.log('profileInfo', profileInfo.imageUrl)

  useEffect(() => {
    dispatch(loadProfileInfo());
  }, []);

  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);



    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile, loading]);

  const uploadProfilePicture = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }
    let selectedFile = e.target.files[0];

    setSelectedFile(selectedFile);
    setTimeout(() => {
      const confirmation = window.confirm(
        "Do you want to upload this image as avatar?"
      );

      if (confirmation) {
        console.log(selectedFile);
        var formData = new FormData();
        var extension = selectedFile.type.replace(/(.*)\//g, "");
        let filename = `${profileInfo.id}.${extension}`;
        // console.log(filename)
        formData.append("image", selectedFile, filename);
        //   //dispatch to the service
        dispatch(updateProfilePicture(formData));

        return;
      }
    }, 2000);
  };



  return (
    <div className="userProfile-header">
      <span className="profilePic-container">
        {selectedFile ? (<img
          src={preview}
          alt="User Image"
          width="130"
          height="130"
          className="profile-picture"
        />) :
          (<img src={profileInfo.imageUrl}
            alt="User Image"
            width="130"
            height="130"
            className="profile-picture"
          />)
        }
        <label className="profilePic-label" htmlFor="upload-button">
          {loading ? (
            <i className="pi pi-spin pi-spinner" style={{ color: "black" }}>
              {" "}
            </i>
          ) : (
            <i className="pi pi-camera"></i>
          )}
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
        {profileInfo.experiences.length && <div>{profileInfo.experiences[0].jobTitle} at {profileInfo.experiences[0].company}</div>}

        <span>
          <div className="stars" style={{ "--rating": rating }}></div>
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
