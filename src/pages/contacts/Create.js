import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFreeUsers, sendContactRequest } from "../../store/modules/contact";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { API_ROOT } from "../../services/agent.service";
import ConnectionRequestPanel from "./ConnectionRequestPanel";
import "./Contacts.css";
import { ACCOUNT_TYPE } from 'constants/accountType';
import { Link } from 'react-router-dom';

const Create = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.contact.freeUsers);
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [selectedId, setSelectedId] = useState(null);
  const [searchValue, setSearchValue] = useState("");
  const contactContainerClassName = users.ids.length < 3 ? "containerHeight-contact" : "";
  const pageLimit = 10;
  const [pageNumber, setPageNumber] = useState(1);

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
  };

  const handleConnectionRequest = (e) => {
    let id = e.currentTarget.dataset.id
    dispatch(sendContactRequest({ contactId: id }));
    setSelectedId(id);
  }

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.name === "clear" ? "" : e.currentTarget.value;
    if (inputValue) {
      setSearchValue(inputValue);
      dispatch(loadFreeUsers(1, pageLimit, "searchUsers", inputValue));
    }
    else {
      setSearchValue("");
      dispatch(loadFreeUsers(1, pageLimit, "loadingFreeUsers"))
    }
  }

  const loadMoreUsers = () => {
    dispatch(loadFreeUsers(pageNumber + 1, pageLimit, "loadMore", searchValue));
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    dispatch(loadFreeUsers(1, pageLimit, "loadingFreeUsers"))
  }, [dispatch]);

  const getCurrentJobExperience = experiences => {
    if (experiences && experiences.length) {
      const experience = experiences.find(experience => experiences.current === true) || experiences[0]
      return <div>{experience.jobTitle} at {experience.company}</div>
    }
    return <div></div>
  }

  return (
    <>
      <div className={`contacts-container ${contactContainerClassName}`}>
        <div className="p-grid contacts-content">
          <div className="p-col-12 p-md-9">
            <div className="p-card p-p-1 p-mb-2">
              <div className="p-card-title d-flex justify-content-between align-items-center p-mb-0 pageTitle-contact">
                <div className="contact-cardtitle">
                  <i className="pi pi-user-plus p-pr-2" />
                  Add User to Contact List
                </div>
                <div className="d-flex align-items-baseline">
                  <div className="p-input-icon-right searchInput-container-contact">
                    <div className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all users" value={searchValue} onChange={handleSearchInputChange} />
                    </div>
                    {
                      loading === "searchUsers" &&
                      <i className="pi pi-spin pi-spinner p-mr-2" />
                    }
                    {
                      searchValue && loading !== "searchUsers" &&
                      <i className="pi pi-times p-mr-2" onClick={(e) => handleSearchInputChange(e)} name="clear" />
                    }
                  </div>
                  {/* <Dropdown value={sortBy} options={sortOptions} onChange={(e) => setSortBy(e.value)} optionLabel="name" placeholder="Sorty By" className="p-mr-2 contacts-cardsubtitle contact-sortDropdown" panelClassName="contacts-cardsubtitle" /> */}
                </div>
              </div>
            </div>
            {users?.ids.map((userId) => {
              const user = users.data[userId];
              if (!user) {
                return null;
              }
              return (
                <div className="p-card p-p-4 d-flex justify-content-between p-mb-2" key={user.id}>
                  <span className="d-flex">
                    {
                      user.imageUrl &&
                      <img
                        src={`${API_ROOT}/${user.imageUrl}`}
                        width="85"
                        height="85"
                        className="rounded-circle contact-profilePicture"
                        onClick={expandProfileImage}
                        alt="profile"
                      />
                    }
                    {
                      !user.imageUrl &&
                      <i className="pi pi-user contact-emptyProfilePic"></i>
                    }
                    <span className="p-ml-2" title="View user's profile">
                      <span className="p-card-title contacts-contactHeader p-mb-0">
                        <Link to={`/applicant/${user.id}`}><span className="p-mr-2 app-color">
                          {`${capitalizeFirstLetter(user?.firstName)} ${capitalizeFirstLetter(user?.lastName)}`}
                        </span></Link>
                        {
                          user.accountType.toLowerCase() === ACCOUNT_TYPE.ARTISAN &&
                          <div className="stars" style={{ "--rating": user.rating }} />
                        }
                      </span>
                      <small>
                        <p>
                          <b>Email: </b>
                          {user.email}
                        </p>
                        <p>
                          {getCurrentJobExperience(user.experiences)}
                        </p>
                      </small>
                    </span>
                  </span>
                  <div className="align-self-center">
                    {
                      loading === "sendContactRequest" && user.id === selectedId &&
                      <Button className="contacts-cardsubtitle p-p-1 p-mr-3">
                        <i className="pi pi-spin pi-spinner contacts-spinner" />
                      </Button>
                    }
                    {
                      (error || user.id !== selectedId) &&
                      <Button className="contacts-cardsubtitle p-p-1 p-mr-3" data-id={user.id} onClick={(e) => handleConnectionRequest(e)}>
                        <span className="p-m-2">
                          Send Connection Request
                        </span>
                      </Button>
                    }
                  </div>
                </div>
              )
            })}
            {
              users.ids.length > 0 &&
              loading !== "loadMore" &&
              <Button label='Load More' onClick={loadMoreUsers} className="p-mr-2 w-100" />
            }
            {
              users.ids.length === 0 && loading !== "loadingFreeUsers" &&
              <div className="p-card p-p-3">
                <div className="p-card-title">
                  No new user to add
                </div>
              </div>
            }
            {
              users.ids.length > 0 &&
              users.meta.total > users.ids.length &&
              loading === "loadMore" &&
              <Button
                className="p-mr-2 w-100"
                loading={loading === "loadMore"}
                disabled={loading === "loadMore"}
              />
            }
          </div>
          <ConnectionRequestPanel selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
    </>
  );
}

export default Create;