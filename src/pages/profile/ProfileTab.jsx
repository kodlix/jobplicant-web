const ProfileTab = ({ activeTab }) => {
  return (
    <>
      <button>
        <i
          className={`pi pi-info-circle ${activeTab === "info" && "pi-active"}`}
        ></i>
        <div className={`tab-titles ${activeTab === "info" && "pi-active"}`}>
          Info
        </div>
      </button>
      <button>
        <i
          className={`pi pi-briefcase ${activeTab === "jobs" && "pi-active"}`}
        ></i>
        <div className={`tab-titles ${activeTab === "jobs" && "pi-active"}`}>
          Jobs
        </div>
      </button>
      <button>
        <i
          className={`pi pi-user ${activeTab === "contacts" && "pi-active"}`}
        ></i>
        <div
          className={`tab-titles ${activeTab === "contacts" && "pi-active"}`}
        >
          Contacts
        </div>
      </button>
      <button>
        <i
          className={`pi pi-users ${activeTab === "groups" && "pi-active"}`}
        ></i>
        <div className={`tab-titles ${activeTab === "groups" && "pi-active"}`}>
          Groups
        </div>
      </button>
      <button className="tab-portfolio">
        <i
          className={`pi pi-images ${activeTab === "portfolio" && "pi-active"}`}
        ></i>
        <div
          className={`tab-titles ${activeTab === "portfolio" && "pi-active"}`}
        >
          Portfolio
        </div>
      </button>
    </>
  );
};

export default ProfileTab;
