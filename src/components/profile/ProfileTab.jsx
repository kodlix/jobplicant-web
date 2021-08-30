import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";

// import "./ProfileTab.css";

const ProfileTab = () => {
  const match = useRouteMatch();
  const [activeTab, setActiveTab] = useState("info");

  return (
    <>
      <div className="p-d-inline-flex">
        <Link to={`${match.path}/info`} onClick={() => setActiveTab("info")}>
          <i
            className={`pi pi-info-circle ${activeTab === "info" && "pi-active"
              }`}
          ></i>
          <div className="tab-titles pi-active">Info</div>
        </Link>
        <Link to={`${match.path}/jobs`} onClick={() => setActiveTab("jobs")}>
          <i
            className={`pi pi-briefcase ${activeTab === "jobs" && "pi-active"}`}
          ></i>
          <div className="tab-titles">Jobs</div>
        </Link>
        <Link to={`${match.path}/contacts`} onClick={() => setActiveTab("contacts")}>
          <i
            className={`pi pi-user ${activeTab === "contacts" && "pi-active"}`}
          ></i>
          <div className={`tab-titles`}>Contacts</div>
        </Link>
        <Link to={`${match.path}/groups`} onClick={() => setActiveTab("groups")}>
          <i
            className={`pi pi-users ${activeTab === "groups" && "pi-active"}`}
          ></i>
          <div className={`tab-titles`}>Groups</div>
        </Link>
        <Link to={`${match.path}/review`} onClick={() => setActiveTab("review")}>
          <i
            className={`pi pi-star ${activeTab === "review" && "pi-active"}`}
          ></i>
          <div className={`tab-titles`}>Reviews</div>
        </Link>
      </div>
    </>
  );
};

export default ProfileTab;
