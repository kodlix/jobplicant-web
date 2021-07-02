import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFreeUsers, sendContactRequest } from "../../store/modules/contact";
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { API_ROOT } from "../../services/agent.service";
import "./Contacts.css";

const Create = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contact.freeUsers)
  const rating = 0.9;
  const [sortBy, setSortBy] = useState(null);
  const sortOptions = [
    { name: 'Name (Ascending)', code: 'NY' },
    { name: 'Name (Descending)', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const capitalizeFirstLetter = (name) => {
    if (name) {
      return name[0].toUpperCase() + name.slice(1);
    }
  }

  const expandProfileImage = () => {
    console.log("yh")
  }
  console.log(users)

  useEffect(() => {
    dispatch(loadFreeUsers(1, 10, "loadingFreeUsers", "okoro"))
  }, [dispatch])

  return (
    <>
      <div className="contacts-container">
        <div className="p-grid contacts-content">
          <div className="p-col-12 p-md-9">
            <div className="p-card p-p-1 p-mb-2">
              <div className="p-card-title d-flex justify-content-between align-items-center p-mb-0">
                <span className="contact-cardtitle">
                  <i className="pi pi-user-plus p-pr-2" />
                   Add User to Contact List
                </span>
                <Dropdown value={sortBy} options={sortOptions} onChange={(e) => setSortBy(e.value)} optionLabel="name" placeholder="Sorty By" className="p-mr-2 contacts-cardsubtitle" panelClassName="contacts-cardsubtitle" />
              </div>
            </div>
            {users.map((user) => (
              <div className="p-card p-p-4 d-flex justify-content-between p-mb-2">
                <span>
                  {
                    user.imageUrl &&
                    <img src={`${API_ROOT}/${user.imageUrl}`} width="80" height="80" className="rounded-circle contact-profilePicture" onClick={expandProfileImage} />
                  }
                  {
                    !user.imageUrl &&
                    <i className="pi pi-user contact-emptyProfilePic"></i>
                  }
                  <span className="p-ml-2">
                    <span className="p-card-title contacts-contactHeader p-mb-0">
                      <span className="p-mr-2">
                        {`${capitalizeFirstLetter(user?.firstName)} ${capitalizeFirstLetter(user?.lastName)}`}
                      </span>
                      {
                        user.accountType === "Artisan" &&
                        <div className="stars" style={{ "--rating": rating }} />
                      }
                    </span>
                    <p>
                      photographer at photostat
                  </p>
                  </span>
                </span>
                <div className="contacts-actionIcons">
                  <Button className="contacts-cardsubtitle p-mr-3" onClick={dispatch(sendContactRequest)}>
                    Send Connection Request
                  </Button>
                </div>
              </div>

            ))}
          </div>
          <div className="p-col-12 p-md-3 p-p-2">
            <div className="p-card">
              <div className="p-card-title contact-sidepanel-cardtitle p-mb-0">
                Connection Requests
                  </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;