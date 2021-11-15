import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadContacts, removeContact } from "../../store/modules/contact";
import agentService, { API_ROOT } from "../../services/agent.service";
import { confirmDialog } from 'primereact/confirmdialog';
import { formatter } from '../../helpers/converter';
import { Button } from 'primereact/button';
import "./Notification.css"
import { ACCOUNT_TYPE } from 'constants/accountType';
import { deleteNotification, ViewNotification } from "../../store/modules/appNotification";
import moment from 'moment';

const List = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.notification.loading);
    const allUserNotifications = useSelector(state => state.appNotification.navBarNotifications.data);
    const error = useSelector(state => state.notification.error);
    const [markAsRead, setMarkAsRead] = useState(false)
    const contactContainerClassName = allUserNotifications?.length < 4 ? "containerHeight-contact" : "";

    const history = useHistory()


    // for contact list
    const pageLimit = 10;
    // const contactContainerClassName = contacts.ids.length < 4 ? "containerHeight-contact" : "";
    const [pageNumber, setPageNumber] = useState(1);

    const userId = agentService.Auth.current().id;


    useEffect(() => {
        dispatch(ViewNotification(userId))
    }, [dispatch]);

    const confirmRemove = () => {
        confirmDialog({
            message: `Are you sure you want to delete this notifcation?`,
            header: 'Remove from Notification List',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                // dispatch(deleteNotification(id));
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
                    <div className="p-col-12">
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
                        {allUserNotifications && allUserNotifications.length > 0 && allUserNotifications.map((noti, index) => {

                            return (
                                <div className={`p-card contact-individualContainer noti ${markAsRead ? 'bg-light' : ''}`} key={index}>
                                    <Link className="text-secondary" to={`/${noti.notificationType}/${noti.id}`}><span className="d-flex ">
                                        {
                                            noti.imageUrl &&
                                            <img
                                                src={`${API_ROOT}/${noti.imageUrl}`}
                                                width="75"
                                                height="75"
                                                alt={`${noti?.firstName}'s profile`}
                                                className="rounded-circle contact-profilePicture p-mr-3"
                                            />
                                        }
                                        {
                                            !noti.imageUrl &&
                                            <i className="pi pi-user contact-emptyProfilePic p-mr-3" style={{ 'fontSize': '1.5em' }}></i>
                                        }
                                        <span className="">
                                            <span className="p-card-title contacts-contactHeader p-mb-0">
                                                <span className="p-mr-2">
                                                    <p> {noti.message}</p>
                                                </span>
                                            </span>
                                            <small>
                                                <p className=""> {moment(noti?.createdAt).fromNow()} </p>
                                            </small>
                                        </span>
                                    </span> </Link>
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
                                                data-id={noti.id}
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
                            allUserNotifications && allUserNotifications.length > 0 && <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} className="p-mr-2 w-100" />
                        }
                        {
                            allUserNotifications && allUserNotifications.length === 0
                            && !loading
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
                            loading &&
                            allUserNotifications && allUserNotifications.length === 0 &&
                            <div className="p-p-5 d-flex justify-content-center">
                                <i
                                    className="pi pi-spin pi-spinner"
                                    style={{ 'fontSize': '2em', color: "#5A2846" }} />
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default List;