import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, removeContact } from "../../store/modules/contact";
import { API_ROOT } from "../../services/agent.service";
import { confirmDialog } from 'primereact/confirmdialog';
import { formatter } from '../../helpers/converter';
import { Button } from 'primereact/button';
import "./Notification.css"
import { ACCOUNT_TYPE } from 'constants/accountType';
import ConnectionRequestPanel from 'pages/contacts/ConnectionRequestPanel';

const List = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.notification.loading);
    const error = useSelector(state => state.notification.error);
    const [selectedId, setSelectedId] = useState(null);
    const history = useHistory()
    const [markAsRead, setMarkAsRead] = useState(false)

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
            message: `Are you sure you want to delete this notifcation?`,
            header: 'Remove from Notification List',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                setSelectedId(contactId);
                dispatch(removeContact(contactId));
            }
        });
    };

    const handleMarkAsRead = () => {
        setMarkAsRead(!markAsRead);

    }

    return (
        <>
            <div className={`contacts-container ${contactContainerClassName}`}>
                <div className="p-grid contacts-content">
                    <div className="p-col-12 p-md-9">
                        <div className="p-card">
                            <div className="p-card-title d-flex justify-content-between align-items-center">
                                <span className="contact-cardtitle">
                                    <i className="pi pi-book p-pr-2" />
                                    Notifcations
                                </span>
                                <span>
                                    <Button onClick={() => history.goBack()} className="contacts-cardsubtitle p-mr-3">
                                        Back
                                    </Button>
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
                                    <div className={`p-card contact-individualContainer ${markAsRead ? 'bg-light' : ''}`} key={contact.id}>
                                        <span className="d-flex">
                                            {
                                                contact.imageUrl &&
                                                <img
                                                    src={`${API_ROOT}/${contact.imageUrl}`}
                                                    width="75"
                                                    height="75"
                                                    alt={`${contact?.firstName}'s profile`}
                                                    className="rounded-circle contact-profilePicture p-mr-3"
                                                />
                                            }
                                            {
                                                !contact.imageUrl &&
                                                <i className="pi pi-user contact-emptyProfilePic p-mr-3" style={{ 'fontSize': '1.5em' }}></i>
                                            }
                                            <span className="">
                                                <span className="p-card-title contacts-contactHeader p-mb-0">
                                                    <span className="p-mr-2">
                                                        {`${formatter.capitalizeFirstLetter(contact?.firstName)} ${formatter.capitalizeFirstLetter(contact?.lastName)}`}
                                                    </span>

                                                </span>

                                                <p>
                                                    <b>Email:</b> {contact?.email || "Unavailable"}
                                                </p>
                                            </span>
                                        </span>
                                        <div className="dropdown font-weight-bold ml-2 d-flex">
                                            <i
                                                className="pi pi-ellipsis-h p-pr-2" style={{ fontSize: '1.2rem' }}
                                                type="button"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                id="dropdownMenuLink"
                                                aria-expanded="false"
                                            />

                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="dropdownMenuLink"
                                            >
                                                <li onClick={handleMarkAsRead} className="dropdown-item timeline-dropdownItem finger" >
                                                    <i className="pi pi-check "> </i> {markAsRead ? 'Mark as Unread' : "Mark as read"}
                                                </li>
                                                <li
                                                    className="dropdown-item timeline-dropdownItem finger"
                                                    data-id={contact.id}
                                                    onClick={confirmRemove}
                                                >
                                                    <i className="pi pi-trash "> </i> Remove this notification
                                                </li>
                                            </ul>
                                            <span className={`${markAsRead ? '' : 'custom-badge p-badge-dot p-badge-info'}`}> </span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                        {
                            contacts.ids.length > 0 &&
                            <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} onClick={loadMoreContacts} className="p-mr-2 w-100" />
                        }
                        {
                            contacts.ids.length === 0
                            && loading !== "loadingContacts"
                            &&
                            <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
                                <div className="text-center">
                                    <span className="p-card-title ">
                                        Oops. Notification List is Empty
                                    </span>
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