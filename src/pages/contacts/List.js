import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, removeContact, loadPendingRequests, acceptRequest, rejectRequest } from "../../store/modules/contact";
import { confirmDialog } from 'primereact/confirmdialog';
import { Button } from 'primereact/button';
import "./Contacts.css"

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [selectedId, setSelectedId] = useState(null);

  // for contact list
  const contactsByPage = useSelector(state => state.contact.contacts);
  const [contactPageNumber, setContactPageNumber] = useState(1);
  const [contactsLoaded, setContactsLoaded] = useState([]);

  // For pending requests
  const requestsByPage = useSelector(state => state.contact.pendingRequests);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [requestsLoaded, setRequestsLoaded] = useState([]);

  useEffect(() => {
    if (contactPageNumber === 1) {
      setContactsLoaded(contactsByPage);
    }
    else {
      setContactsLoaded([...contactsLoaded, ...contactsByPage])
    }
  }, [contactsByPage]);

  useEffect(() => {
    if (requestPageNumber === 1) {
      setRequestsLoaded(requestsByPage);
    }
    else {
      setRequestsLoaded([...requestsLoaded, ...requestsByPage])
    }
  }, [requestsByPage]);

  const loadMoreContacts = () => {
    setContactPageNumber(contactPageNumber + 1)
    dispatch(loadContacts(contactPageNumber + 1, 10, "loadMoreContacts"));
  };

  const loadMoreRequests = () => {
    setRequestPageNumber(requestPageNumber + 1)
    dispatch(loadPendingRequests(requestPageNumber + 1, 10, "loadMoreRequests"));
  };

  useEffect(() => {
    dispatch(loadContacts(1, 10, "loadingContacts"))
  }, [dispatch]);

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

  const confirmRemove = (e) => {
    let contactId = e.currentTarget.dataset.id;
    confirmDialog({
      message: 'Are you sure you want to remove Jane Doe from your contact list?',
      header: 'Remove from Contact List',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        setSelectedId(contactId);
        dispatch(removeContact(contactId));
      }
    });
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

  return (
    <>
      <div className="contacts-container">
        <div className="p-grid contacts-content">
          <div className="p-col-12 p-md-9">
            <div className="p-card">
              <div className="p-card-title d-flex justify-content-between align-items-center">
                <span className="contact-cardtitle">
                  <i className="pi pi-book p-pr-2" />
                   Contacts
                </span>
                <span>
                  <Link to="/contacts/create">
                    <Button className="contacts-cardsubtitle p-mr-3">
                      Add New Contact
                  </Button>
                  </Link>
                </span>
              </div>
            </div>
            {contacts.map((contact) => (
              <div className="p-card p-p-4 d-flex justify-content-between p-mb-2">
                <span>
                  <img src="https://source.unsplash.com/random/80x80" className="rounded circle p-mr-3" />
                  <span className="">
                    <span className="p-card-title contacts-contactHeader p-mb-0">
                      <span className="p-mr-2">
                        {contact.name}
                      </span>
                      <div className="stars" style={{ "--rating": contact.rating }} />
                    </span>
                    <p>
                      photographer at photostat
                  </p>
                  </span>
                </span>
                <div className="contacts-actionIcons">
                  <i className="pi pi-phone p-pr-2" />
                  <i className="pi pi-video p-pr-2" />
                  <i className="pi pi-comments p-pr-2" />
                  <i className="pi pi-trash p-pr-2" onClick={confirmRemove} data-id={contact.id} />
                </div>
              </div>
            ))}
            {
              // contactsLoaded.length > 0 &&
              <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} onClick={loadMoreContacts} className="p-mr-2 w-100" />
            }
          </div>
          <div className="p-col-12 p-md-3 p-p-md-2 p-pt-0">
            <div className="p-card">
              <div className="p-card-title contact-sidepanel-cardtitle p-mb-3">
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

export default List;