import React from "react";
import SectionHeader from "./SectionHeader";
import { PROFILE } from "constants/profile";
import "./UserProfile.css";

const LocationOfInterest = ({
  openCreate,
  openEdit,
  profileInfo
}) => {

  const formatLocation = (profileLocation) => {
    console.log(profileLocation);
    return profileLocation;
    // return profileLocation.map(location => location.LOIName).join(", ");
  };


  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          icon="map-marker"
          sectionTitle="Location of Interest"
          id="LOIEdit"
          showAddButton="true"
          showEditButton="true"
          openModalOnCreate={() => openEdit(PROFILE.LOCATION)}
          openModalOnEdit={() => openCreate(PROFILE.LOCATION)}
        />
        <div className="p-card-body p-text-secondary">
          {profileInfo.location !== null
            ? formatLocation(profileInfo.location)
            : "locations"}
        </div>
      </div>
    </>
  );
};

export default LocationOfInterest;
