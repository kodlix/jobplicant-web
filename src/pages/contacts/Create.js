import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFreeUsers, sendContactRequest, acceptRequest, rejectRequest } from "../../store/modules/contact";
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { confirmDialog } from 'primereact/confirmdialog';
import { Dropdown } from 'primereact/dropdown';
import { API_ROOT } from "../../services/agent.service";
import "./Contacts.css";

const Create = () => {
  const dispatch = useDispatch();
  const usersByPage = useSelector(state => state.contact.freeUsers);
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [sortBy, setSortBy] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [usersLoaded, setUsersLoaded] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [searchValue, setSearchValue] = useState("");

  const sortOptions = [
    { name: 'Name (Ascending)', code: 'NY' },
    { name: 'Name (Descending)', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ];

  const contacts = [
    {
      name: "Jane Doe",
      id: "n1",
      rating: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      name: "Jane Doe",
      id: "n2",
      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      id: "n3",
      rating: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    },
    {
      name: "Jane Doe",
      id: "n4",

      rating: 3.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    },
    {
      name: "Jane Doe",
      id: "n5",

      rating: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
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
      dispatch(loadFreeUsers(1, 10, "searchUsers", inputValue));
    }
    else {
      setSearchValue("");
      dispatch(loadFreeUsers(1, 10, "loadingFreeUsers"))
    }
  }

  useEffect(() => {
    if (pageNumber === 1) {
      setUsersLoaded(usersByPage);
    }
    else {
      setUsersLoaded([...usersLoaded, ...usersByPage])
    }
  }, [usersByPage]);

  const loadMoreUsers = () => {
    setPageNumber(pageNumber + 1)
    dispatch(loadFreeUsers(pageNumber + 1, 10, "loadMore"));
  };

  const handleAcceptRequest = (e) => {
    const contactId = e.currentTarget.dataset.id;
    setSelectedId(contactId);
    dispatch(acceptRequest({ contactId: contactId }, "acceptConnectionRequest"))
  }

  const confirmRequestRejection = (e) => {
    let contactId = e.currentTarget.dataset.id;
    setSelectedId(contactId);
    confirmDialog({
      message: 'Are you sure you want to reject this connection request?',
      header: 'Reject Connection Request',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(rejectRequest(contactId, "rejectRequest"));
      }
    });
  };

  useEffect(() => {
    dispatch(loadFreeUsers(1, 10, "loadingFreeUsers"))
  }, [dispatch]);

  return (
    <>
      <div className="contacts-container">
        <div className="p-grid contacts-content">
          <div className="p-col-12 p-md-9">
            <div className="p-card p-p-1 p-mb-2">
              <div className="p-card-title d-flex justify-content-between align-items-center p-mb-0">
                <div className="contact-cardtitle">
                  <i className="pi pi-user-plus p-pr-2" />
                   Add User to Contact List
                </div>
                <span className="d-flex align-items-baseline">
                  <span className="p-input-icon-right">
                    <span className="p-input-icon-left">
                      <i className="pi pi-search" />
                      <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all users" value={searchValue} onChange={handleSearchInputChange} />
                    </span>
                    {
                      loading === "searchUsers" &&
                      <i className="pi pi-spin pi-spinner p-mr-2" />
                    }
                    {
                      searchValue && loading !== "searchUsers" &&
                      <i className="pi pi-times p-mr-2" onClick={(e) => handleSearchInputChange(e)} name="clear" />
                    }
                  </span>
                  {/* <Dropdown value={sortBy} options={sortOptions} onChange={(e) => setSortBy(e.value)} optionLabel="name" placeholder="Sorty By" className="p-mr-2 contacts-cardsubtitle contact-sortDropdown" panelClassName="contacts-cardsubtitle" /> */}
                </span>
              </div>
            </div>
            {usersLoaded.map((user) => (
              <div className="p-card p-p-4 d-flex justify-content-between p-mb-2" key={user.id}>
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
                        user.accountType.toLowerCase() === "artisan" &&
                        <div className="stars" style={{ "--rating": user.rating }} />
                      }
                    </span>
                    <p>
                      photographer at photostat
                  </p>
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

            ))}
            {
              usersLoaded.length > 0 &&
              <Button label={loading === "loadMore" ? 'Loading...' : 'Load More'} onClick={loadMoreUsers} className="p-mr-2 w-100" />
            }
          </div>
          <div className="p-col-12 p-md-3 p-p-2">
            <div className="p-card">
              <div className="p-card-title contact-sidepanel-cardtitle p-mb-0">
                Connection Requests
                  </div>
              {
                contacts.map((contact) => (
                  <div className="p-card-body d-flex justify-content-between">
                    <span className="d-flex align-items-end">
                      <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                      <span>
                        <div className="p-card-title contacts-cardsubtitle p-mb-0">
                          {contact.name}
                        </div>
                        <p className="contacts-jobDescription">
                          Graphic Designer
                      </p>
                      </span>
                    </span>
                    <span>
                      {
                        loading === "acceptConnectionRequest" && contact.id === selectedId &&
                        <Button className="p-mr-2 contacts-accept-button" >
                          <i className="pi pi-spin pi-spinner" />
                        </Button>
                      }
                      {
                        (error === "acceptFail" || contact.id !== selectedId || loading !== "acceptConnectionRequest") &&
                        <Button className="p-mr-2 contacts-accept-button" data-id={contact.id} onClick={handleAcceptRequest}>
                          <i className="pi pi-plus" />
                        </Button>
                      }
                      {
                        loading === "rejectRequest" && contact.id === selectedId &&
                        <Button className="contacts-reject-button" >
                          <i className="pi pi-spin pi-spinner" />
                        </Button>
                      }
                      {
                        (error === "requestFail" || contact.id !== selectedId || loading !== "rejectRequest") &&
                        <Button className="contacts-reject-button" data-id={contact.id} onClick={confirmRequestRejection}>
                          <i className="pi pi-times" />
                        </Button>

                      }
                    </span>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Create;