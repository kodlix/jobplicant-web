import { ACCOUNT_TYPE } from "constants/accountType";
import { PROFILE } from "constants/profile";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import agentService from "services/agent.service";
import { updateProfilePicture } from "store/modules/account";
import JobplicantAvatar from "./jobplicant-avatar";

import { Skeleton } from 'primereact/skeleton'
import PersonalInfoSkeleton from "components/skeletons/PersonalInfoSkeleton";

const PersonalInfo = ({ openCreate, openEdit, data, isViewApplicant }) => {
  const rating = 4.5;
  const dispatch = useDispatch();
  // const profileInfo = useSelector((state) => state.account.profileInfo);
  const profileInfo = data;

  const loading = useSelector((state) => state.account.loading);
  const accountType = agentService.Auth.current().accountType;

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const profilePicRef = useRef()

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
        // var extension = selectedFile.type.replace(/(.*)\//g, "");
        // let filename = `${profileInfo.id}.${extension}`;
        // console.log(filename)
        formData.append("image", selectedFile);
        //   //dispatch to the service
        dispatch(updateProfilePicture(formData));

        return;
      }
    }, 2000);
  };

  if (loading)
    return <PersonalInfoSkeleton />

  return (
    <div className="personal-profile p-d-flex p-jc-start align-items-center">
      <JobplicantAvatar
        data={profileInfo}
        selectedFile={selectedFile}
        loading={loading}
        preview={preview}
        isViewApplicant={false}
        handleClick={() => profilePicRef.current.click()}
      />
      <input 
        ref={profilePicRef}
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={uploadProfilePicture}
      />
      <div className="ml-3">
        <h3 className="username p-mr-2">
          {profileInfo?.firstName || 'John'} {profileInfo?.lastName || 'Doe'}
        </h3>
        {!isViewApplicant && <span> <i
          className="pi pi-pencil p-pr-3 personalInfo-edit"
          id="personalInfoEdit"
          onClick={() => openEdit(PROFILE.PERSONAL_INFO, profileInfo)}
        ></i>
          <u>Edit Personal Info</u>
        </span>}
        <br />
        {profileInfo.experiences.length ? <div>{profileInfo.experiences[0].jobTitle} at {profileInfo.experiences[0].company}</div> : <div></div>}
        {rating && accountType === ACCOUNT_TYPE.ARTISAN && <span>
          <div className="stars" style={{ "--rating": rating }}></div>
        </span>}
      </div>
    </div>
  );
};

export default PersonalInfo;
