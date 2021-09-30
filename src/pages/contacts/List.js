import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, removeContact, blockContact, unblockContact } from "../../store/modules/contact";
import { API_ROOT } from "../../services/agent.service";
import { confirmDialog } from 'primereact/confirmdialog';
import { formatter } from '../../helpers/converter';
import { Button } from 'primereact/button';
import "./Contacts.css"
import ConnectionRequestPanel from './ConnectionRequestPanel';
import { ACCOUNT_TYPE } from 'constants/accountType';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [selectedId, setSelectedId] = useState(null);

  // for contact list
  const pageLimit = 10;
  const contacts = useSelector(state => state.contact.contacts);
  const contactContainerClassName = contacts.ids.length < 4 ? "containerHeight-contact" : "";
  const [pageNumber, setPageNumber] = useState(1);

  const loadMoreContacts = () => {
    dispatch(loadContacts(pageNumber + 1, pageLimit, "loadMoreContacts"));
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    dispatch(loadContacts(1, pageLimit, "loadingContacts"))
  }, [dispatch]);

  const confirmRemove = (e) => {
    let contactId = e.currentTarget.dataset.id;
    let firstName = e.currentTarget.dataset.firstName;
    let lastName = e.currentTarget.dataset.lastName;
    confirmDialog({
      message: `Are you sure you want to remove ${formatter.capitalizeFirstLetter(firstName)} ${formatter.capitalizeFirstLetter(lastName)} from your contact list?`,
      header: 'Remove from Contact List',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        setSelectedId(contactId);
        dispatch(removeContact(contactId));
      }
    });
  };

  const confirmBlock = (e) => {
    let contactId = e.currentTarget.dataset.id;
    let firstName = e.currentTarget.dataset.firstName;
    let lastName = e.currentTarget.dataset.lastName;
    confirmDialog({
      message: `Are you sure you want to block ${formatter.capitalizeFirstLetter(firstName)} ${formatter.capitalizeFirstLetter(lastName)}?`,
      header: 'Block contact',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(blockContact(contactId));
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
              contacts.ids?.map((contactId) => {
                const contact = contacts.data[contactId];
                if (!contact) {
                  return null;
                }
                return (
                  <div className="p-card contact-individualContainer" key={contact.id}>
                    <span className="d-flex">
                      {
                        contact.imageUrl &&
                        <img
                          src={`${API_ROOT}/${contact.imageUrl}`}
                          width="85"
                          height="85"
                          alt={`${contact?.firstName}'s profile`}
                          className="rounded-circle contact-profilePicture p-mr-3"
                        />
                      }
                      {
                        !contact.imageUrl &&
                        <i className="pi pi-user contact-emptyProfilePic p-mr-3"></i>
                      }
                      <span className="">
                        <span className="p-card-title contacts-contactHeader p-mb-0">
                          <span className="p-mr-2">
                            {`${formatter.capitalizeFirstLetter(contact?.firstName)} ${formatter.capitalizeFirstLetter(contact?.lastName)}`}
                          </span>
                          {
                            contact.accountType === ACCOUNT_TYPE.ARTISAN &&
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
                      {
                        contact.isBlocked === false ?
                          <>
                            <i className="pi pi-phone p-pr-2" />
                            <i className="pi pi-video p-pr-2" />
                            <i className="pi pi-comments p-pr-2" />
                            <i
                              data-id={contact.id}
                              onClick={confirmBlock}
                              className="pi pi-ban p-pr-2"
                              data-last-name={contact.lastName}
                              data-first-name={contact.firstName}
                            />
                            <i
                              data-id={contact.id}
                              onClick={confirmRemove}
                              className="pi pi-trash p-pr-2"
                              data-last-name={contact.lastName}
                              data-first-name={contact.firstName}
                            />
                          </>
                          :
                          <div className="contacts-blockedContactMessage text-right">
                            <p className="p-my-2 contacts-blockedContactMessage">You blocked this contact</p>
                            <div>
                              <i
                                className="pi pi-lock-open"
                                onClick={() => dispatch(unblockContact(contact.id))}
                              />
                              <i
                                data-id={contact.id}
                                onClick={confirmRemove}
                                className="pi pi-trash p-pr-2"
                                data-last-name={contact.lastName}
                                data-first-name={contact.firstName}
                              />
                            </div>
                          </div>
                      }

                    </div>
                  </div>
                )
              })
            }
            {
              contacts.ids.length > 0 &&
              contacts.ids.length < contacts.meta.total &&
              <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} onClick={loadMoreContacts} className="p-mr-2 w-100" />
            }
            {
              contacts.ids.length === 0
              && loading !== "loadingContacts"
              &&
              <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
                <div className="text-center">
                  <div className="p-card-title ">
                    Oops. Contact list is empty...
                  </div>
                  <Link to="/contacts/create">
                    Find users to add to contact list
                  </Link>
                </div>

              </div>
            }
            {
              loading === "loadingContacts" &&
              contacts.ids.length === 0 &&
              <div className="p-p-5 d-flex justify-content-center">
                <i
                  className="pi pi-spin pi-spinner"
                  style={{ 'fontSize': '2em', color: "#5A2846" }} />
              </div>
            }
          </div>
          <ConnectionRequestPanel selectedId={selectedId} setSelectedId={setSelectedId} />
        </div>
      </div>
    </>
  );
}

export default List;