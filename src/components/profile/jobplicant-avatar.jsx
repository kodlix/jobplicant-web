import React from 'react';
import { Avatar } from 'primereact/avatar';
import './jobplicant-avatar.css'

const JobplicantAvatar = ({
    width = 175,
    height = 175,
    data,
    selectedFile,
    loading,
    preview,
}) => {
    const profileInfo = data;

    const getInitials = (fullname) => {
        let initial = '';
        const names = fullname.split(' ');
        names.forEach(name => {
          initial += name[0]
        });
        return initial;
      }
    
      const avatarContainer = (fullname) => {
          return <Avatar 
            label={getInitials(fullname)}
            size="xlarge" 
            className="avatar-title"
            shape="circle" 
            style={{backgroundColor: 'green'}}
          />
        return <div className="avatar-container profile-picture">
          <h4 className="avatar-title">{getInitials(fullname)}</h4>
        </div>
      }

      const fullname = profileInfo?.firstName + ' ' + profileInfo?.lastName;
    return (
        <div className="userProfile-header">
            <span className="profilePic-container">
                {/* {profileInfo.imageUrl ?
                    <img src={selectedFile ? preview : profileInfo.imageUrl}
                        alt="User Image"
                        width="130"
                        height="130"
                        className="profile-picture"
                    />
                    : avatarContainer(profileInfo?.fullname || "Chike Daniels")} */}
                    {avatarContainer(fullname || "Chike Daniels")}
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
        </div>
    )
}

export default JobplicantAvatar;