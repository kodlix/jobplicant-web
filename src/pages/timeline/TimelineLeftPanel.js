import React from 'react';
import { Button } from 'primereact/button';
import { formatter } from '../../helpers/converter';
import { Link } from 'react-router-dom';
import { ACCOUNT_TYPE } from 'constants/accountType';

const TimelineLeftPanel = ({ profileInfo, expandProfileImage }) => {
  return (
    <div className="p-col-12 p-md-3 p-pl-0 p-py-md-2 p-pr-md-2 p-pb-0 p-pr-0">
      <div className="p-card">
        <div className="leftpanel-top-container-timeline"></div>
        <div className="leftpanel-bottom-container-timeline">
          {
            profileInfo.imageUrl &&
            <img
              width="80"
              height="80"
              alt="Profile"
              src={profileInfo?.imageUrl}
              className="rounded-circle timeline-profilePicture"
              onClick={(e) => expandProfileImage(e.target.src)} />
          }
          {
            !profileInfo.imageUrl &&
            <div className="">
              <i className="pi pi-user timeline-emptyProfilePic"></i>
            </div>
          }
          {
            profileInfo?.firstName && profileInfo?.accountType !== ACCOUNT_TYPE.CORPORATE &&
            <>
              <h4 className="p-mt-2">
                {`${formatter.capitalizeFirstLetter(profileInfo?.firstName)} ${formatter.capitalizeFirstLetter(profileInfo?.lastName)}`}
              </h4>
              <p className="p-mb-4 ">
                <p className="p-mt-1">
                  Graphic Designer at Self Employed
                </p>
                <span className="p-mt-1">
                  {
                    (profileInfo.city || profileInfo.country) &&
                    <i className="pi pi-map-marker p-pr-1"></i>
                  }
                  {
                    profileInfo.city &&
                    <span>{profileInfo?.city}</span>
                  }
                  {
                    (profileInfo.city && profileInfo.country) &&
                    <span>, &nbsp;</span>
                  }
                  {
                    profileInfo.country &&
                    <span>Nigeria</span>
                  }
                </span>
              </p>
            </>
          }
          {
            profileInfo?.firstName && profileInfo?.accountType === ACCOUNT_TYPE.CORPORATE &&
            <>
              <h4 className="p-my-1 timeline-companyName">
                {formatter.capitalizeFirstLetter(profileInfo?.companyName)}
              </h4>
              <p className="p-mb-4">
                {
                  (profileInfo.city || profileInfo.country) &&
                  <i className="pi pi-map-marker p-pr-1"></i>
                }
                <span className="p-mt-1">
                  {
                    profileInfo.city &&
                    <span>{profileInfo?.city}</span>
                  }
                  {
                    profileInfo.city && profileInfo.country &&
                    <span>, &nbsp;</span>
                  }
                  {
                    profileInfo.country &&
                    <span>Nigeria</span>
                  }
                </span>
              </p>
            </>
          }
          <div className="timeline-leftpanel-connection">
            <h5>
              Following
            </h5>
            <h6>
              45
            </h6>
          </div>
          <div className="timeline-leftpanel-connection">
            <h5>
              Followers
            </h5>
            <h6>
              45
            </h6>
          </div>
          <Link
            className="timeline-leftpanel-connection w-100"
            to={profileInfo.accountType === ACCOUNT_TYPE.CORPORATE ? "/company" : "/profile"}
          >
            <h6>
              View Profile
            </h6>
          </Link>
        </div>
      </div>
      <div className="p-card p-mt-2">
        <div className="p-card-title cardtitle-timeline p-mb-3">
          Suggestions
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              width="40"
              height="40"
              src="../../assets/logo.png"
              className="rounded-circle profile-picture-timeline p-mr-2"
            />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline"
          />
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              src="../../assets/logo.png"
              width="40"
              height="40"
              className="rounded-circle profile-picture-timeline p-mr-2"
            />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline"
          />
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              width="40"
              height="40"
              src="../../assets/logo.png"
              className="rounded-circle profile-picture-timeline p-mr-2"
            />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline"
          />
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              width="40"
              height="40"
              src="../../assets/logo.png"
              className="rounded-circle profile-picture-timeline p-mr-2" />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline"
          />
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              width="40"
              height="40"
              src="../../assets/logo.png"
              className="rounded-circle profile-picture-timeline p-mr-2"
            />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline"
          />
        </div>
        <div className="p-card-body d-flex justify-content-between">
          <span className="d-flex align-items-end">
            <img
              width="40"
              height="40"
              src="../../assets/logo.png"
              className="rounded-circle profile-picture-timeline p-mr-2" />
            <span>
              <div className="p-card-title cardsubtitle-timeline p-mb-0">
                Jane Doe
              </div>
              <p className="jobDescription-timeline">
                Graphic Designer
              </p>
            </span>
          </span>
          <Button
            type="button"
            iconPos="left"
            icon="pi pi-plus"
            className="p-p-0 suggestion-button-timeline" />
        </div>
      </div>
    </div>

  );
}

export default TimelineLeftPanel;