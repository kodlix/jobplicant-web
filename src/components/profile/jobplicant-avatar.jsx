import React from 'react';
import { Avatar } from 'primereact/avatar';
import './jobplicant-avatar.css'
import { useSelector } from 'react-redux';

const AvatarOverlay = () => {


    return <div style={{ width: '90px', height: '90px', backgroundColor: 'rgba(0,0,0,0.5)', position: 'absolute', borderRadius: '50px' }} >
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', transition: '.4sec ease-in-out', padding: '30px' }}>
            <i className="pi pi-camera" style={{ fontSize: '30px' }}></i>
        </div>
    </div>
}

const JobplicantAvatar = ({
    width = 175,
    height = 175,
    data,
    selectedFile,
    loading,
    preview,
    isProfileView,
    handleClick
}) => {
    const profileInfo = data;
    const currentUserInfo = useSelector((state) => state.account.profileInfo); //currently logged in user

    const isProfile = currentUserInfo.id === profileInfo.id;
    console.log('current id', currentUserInfo.id, 'profile id', profileInfo.id)

    const [cameraMode, setCameraMode] = React.useState(false)

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
            size="large"
            className="avatar-title"
            shape="circle"
            style={{ backgroundColor: 'green' }}
        />
        return <div className="avatar-container profile-picture">
            <h4 className="avatar-title">{getInitials(fullname)}</h4>
        </div>
    }

    const fullname = profileInfo.firstName ? profileInfo?.firstName + ' ' + profileInfo?.lastName : '';
    return (
        <form>
            <div className="userProfile-header" style={{ cursor: 'pointer', position: 'relative' }} onClick={isProfile ? () => handleClick() : () => { }} onMouseLeave={() => setCameraMode(false)} onMouseEnter={() => setCameraMode(true)}>
                <span className="profilePic-container">
                    {profileInfo.imageUrl && profileInfo.imageUrl.includes("https") ?
                        <img src={selectedFile ? preview : profileInfo.imageUrl}
                            alt="User Image"
                            width="130"
                            height="130"
                            className="profile-picture"
                        />
                        : fullname ? avatarContainer(fullname) : ''}
                    {/* {fullname ? avatarContainer(fullname) : ''} */}
                    {/* {!isProfileView && <label className="profilePic-label" htmlFor="upload-button" style={{ marginBottom: '-20px' }}>
                    {loading ? (
                        <i className="pi pi-spin pi-spinner" style={{ color: "black" }}>
                        {" "}
                        </i>
                        ) : (
                            <i className="pi pi-camera"></i>
                            )}
                        </label>} */}
                </span>
                {(cameraMode) && <AvatarOverlay />}
            </div>
        </form>
    )
}

export default JobplicantAvatar;