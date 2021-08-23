import React from "react";
import { Avatar } from "primereact/avatar";
import "./jobplicant-avatar.css";

const JobplicantAvatar = ({
  width = 175,
  height = 175,
  data,
  selectedFile,
  loading,
  preview,
}) => {
  const profileInfo = data;

  const getInitials = (profileInfo) => {
    if (profileInfo.firstName === "") return "";
    const fullname = profileInfo?.firstName + " " + profileInfo?.lastName;
    let initial = "";
    const names = fullname.split(" ");
    names.forEach((name) => {
      initial += name[0];
    });
    return initial;
  };

  const avatarContainer = (profileInfo) => {
   
    return (
      <Avatar
        label={getInitials(profileInfo)}
        size="xlarge"
        className="avatar-title"
        shape="circle"
        style={{ backgroundColor: "green" }}
      />
    );
  };

  return (
    <div className="userProfile-header">
      <div className="avatar-container">{avatarContainer(profileInfo)}</div>
      <div
        className="profilePic-label"
      >
        {loading ? (
          <i className="pi pi-spin pi-spinner" style={{ color: "black" }}>
            {" "}
          </i>
        ) : (
          <i className="pi pi-camera"></i>
        )}
      </div>
    </div>
  );
};

export default JobplicantAvatar;
