import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, removeContact } from "../../store/modules/contact";
import { confirmDialog } from 'primereact/confirmdialog';
import { formatter } from '../../helpers/converter';
import { Button } from 'primereact/button';
import "./Contacts.css"
import ConnectionRequestPanel from './ConnectionRequestPanel';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [selectedId, setSelectedId] = useState(null);

  // for contact list
  const contactsByPage = useSelector(state => state.contact.contacts);
  const [contactPageNumber, setContactPageNumber] = useState(1);
  const [contactsLoaded, setContactsLoaded] = useState([]);
  const contactContainerClassName = contactsLoaded.length < 4 ? "containerHeight-contact" : "";

  useEffect(() => {
    if (contactPageNumber === 1) {
      setContactsLoaded(contactsByPage);
    }
    else {
      setContactsLoaded([...contactsLoaded, ...contactsByPage])
    }
  }, [contactsByPage]);

  const loadMoreContacts = () => {
    setContactPageNumber(contactPageNumber + 1)
    dispatch(loadContacts(contactPageNumber + 1, 10, "loadMoreContacts"));
  };

  useEffect(() => {
    dispatch(loadContacts(1, 10, "loadingContacts"))
  }, [dispatch]);

  const confirmRemove = (e) => {
    let contactId = e.currentTarget.dataset.id;
    let firstName = e.currentTarget.dataset.firstName;
    let lastName = e.currentTarget.dataset.lastName;
    confirmDialog({
      message: `Are you sure you want to remove   ${formatter.capitalizeFirstLetter(firstName)} ${formatter.capitalizeFirstLetter(lastName)} from your contact list?`,
      header: 'Remove from Contact List',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        setSelectedId(contactId);
        dispatch(removeContact(contactId));
      }
    });
  };

  return (
    <>
      <div className={`contacts-container ${contactContainerClassName}`}>
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
            {
              contactsLoaded.length === 0
              && loading !== "loadingContacts"
              &&
              <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
                <div className="text-center">
                  <span className="p-card-title ">
                    Oops. Contact List is Empty
                  </span>
                  <Link to="/contacts/create">
                    Find users to add to contact list
                  </Link>
                </div>

              </div>
            }
            {
              contactsLoaded?.map((contact) => (
                <div className="p-card contact-individualContainer" key={contact.id}>
                  <span>
                    <img
                      src="https://source.unsplash.com/random/80x80"
                      className="rounded circle p-mr-3 align-top"
                      alt={`${contact?.firstName}'s profile`}

                    />
                    <span className="">
                      <span className="p-card-title contacts-contactHeader p-mb-0">
                        <span className="p-mr-2">
                          {`${formatter.capitalizeFirstLetter(contact?.firstName)} ${formatter.capitalizeFirstLetter(contact?.lastName)}`}
                        </span>
                        {
                          contact.accountType === "Artisan" &&
                          <div className="stars" style={{ "--rating": contact.rating }} />
                        }
                      </span>
                      <p>
                        photographer at photostat
                      </p>
                      <small>
                        <b>Email:</b> {contact?.email || "Unavailable"}
                      </small>
                    </span>
                  </span>
                  <div className="contacts-actionIcons">
                    <i className="pi pi-phone p-pr-2" />
                    <i className="pi pi-video p-pr-2" />
                    <i className="pi pi-comments p-pr-2" />
                    <i className="pi pi-trash p-pr-2" onClick={confirmRemove} data-id={contact.id} data-first-name={contact.firstName} data-last-name={contact.lastName} />
                  </div>
                </div>
              ))
            }
            {
              contactsLoaded.length > 0 &&
              <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} onClick={loadMoreContacts} className="p-mr-2 w-100" />
            }
          </div>
          <ConnectionRequestPanel selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
    </>
  );
}

export default List;