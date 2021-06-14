import { useState } from "react";
import { Link } from "react-router-dom";

import "./ProfileTab.css";

const ProfileTab = (props) => {
  console.log(props);
  const [activeTab, setActiveTab] = useState("info");

  return (
    <>
      <div className="profileNav">
        <Link to={`/profile/info`} onClick={() => setActiveTab("info")}>
          <i
            className={`pi pi-info-circle ${
              activeTab === "info" && "pi-active"
            }`}
          ></i>
          <div className="tab-titles pi-active">Info</div>
        </Link>
        <Link to={`/profile/jobs`} onClick={() => setActiveTab("jobs")}>
          <i
            className={`pi pi-briefcase ${activeTab === "jobs" && "pi-active"}`}
          ></i>
          <div className="tab-titles">Jobs</div>
        </Link>
        <Link to={`/profile/contacts`} onClick={() => setActiveTab("contacts")}>
          <i
            className={`pi pi-user ${activeTab === "contacts" && "pi-active"}`}
          ></i>
          <div className={`tab-titles`}>Contacts</div>
        </Link>
        <Link to={`/profile/groups`} onClick={() => setActiveTab("groups")}>
          <i
            className={`pi pi-users ${activeTab === "groups" && "pi-active"}`}
          ></i>
          <div className={`tab-titles`}>Groups</div>
        </Link>
      </div>
    </>
  );
};

export default ProfileTab;
