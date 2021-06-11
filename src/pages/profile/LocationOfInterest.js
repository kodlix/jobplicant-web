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
    console.log('profile location', profileLocation?.locations)

    return <strong>{profileLocation.join(", ")}</strong>
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
          {profileInfo?.locations !== null
            ? <strong>{profileInfo?.locations?.join(", ")}</strong>
            : "locations"}
        </div>
      </div>
    </>
  );
};

export default LocationOfInterest;
