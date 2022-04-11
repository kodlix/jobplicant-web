import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import agentService from "../../services/agent.service";
import { confirmDialog } from 'primereact/confirmdialog';
import InfiniteScroll from 'react-infinite-scroll-component';
import { allNotiByAccount, deleteNoti, updateNotification } from "../../store/modules/appNotification";
import moment from 'moment';

import "./Notification.css";
import { InputText } from 'primereact/inputtext';
import Spinner from 'components/spinner/spinner.component';


const List = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.appNotification.loading);
    const seenAndUnseenNoti = useSelector(state => state.appNotification.seenAndUnseenNoti);
    const seenAndUnseenMeta = useSelector(state => state.appNotification.meta)

    const [markAsRead, setMarkAsRead] = useState(false)
    const contactContainerClassName = seenAndUnseenNoti?.length < 4 ? "containerHeight-contact" : "";

    const history = useHistory()
    const [pageNumber, setPageNumber] = useState(1);
    const [limit] = useState(5);
    const [allNotis, setAllNotis] = useState([]);
    const [searchVal, setSearchVal] = useState("");

    const userId = agentService.Auth.current().id;

    useEffect(() => {
        if (seenAndUnseenNoti) {
            setAllNotis(seenAndUnseenNoti)
        }
    }, [seenAndUnseenNoti]);

    useEffect(() => {
        dispatch(allNotiByAccount(userId, searchVal, pageNumber, limit));
    }, [searchVal, pageNumber]);


    const confirmRemove = (id) => {
        confirmDialog({
            message: `Are you sure you want to delete this notifcation?`,
            header: 'Remove from Notification List',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                dispatch(deleteNoti(id));
                // let myArr = allNotis.filter(item => item.id !== id);
                // setAllNotis(myArr)
                // console.log("remainder", myArr);
            }
        });
    };

    const handleMarkAsRead = () => {
        // dispatch(updateNotification(id))
        setMarkAsRead(!markAsRead);
    }

    const handleSeen = (noti) => {
        dispatch(updateNotification(noti.id))
        history.push(`/${noti.notificationType}/${noti.id}`)
    }

    const fetchMoreData = () => {
        if (seenAndUnseenMeta) {
            const total = seenAndUnseenMeta.total
            const numberOfPages = Math.ceil(total / limit)
            if (pageNumber < numberOfPages) {
                setPageNumber(pageNumber + 1);
            }
        }

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
                                <div>
                                    <span className="p-input-icon-right px-3">
                                        <i className={`${loading ? <Spinner /> : "pi pi-search px-3"}`} />
                                        <InputText value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="Search" />
                                    </span>
                                    {/* <span>
                                        <Button onClick={() => history.goBack()} className="contacts-cardsubtitle p-mr-3">
                                            Back
                                        </Button>
                                    </span> */}
                                </div>
                            </div>
                        </div>
                        <InfiniteScroll
                            dataLength={allNotis?.length}
                            next={fetchMoreData}
                            hasMore={true}
                            loader={loading && <Spinner />}
                            endMessage={
                                <p style={{ textAlign: 'center' }}>
                                    <b>Yay! You have seen it all</b>
                                </p>
                            }
                        // below props only if you need pull down functionality
                        // refreshFunction={fetchMoreData}
                        // pullDownToRefresh
                        // pullDownToRefreshThreshold={50}
                        // pullDownToRefreshContent={
                        //     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
                        // }
                        // releaseToRefreshContent={
                        //     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
                        // }
                        >

                            {allNotis && allNotis.length > 0 && allNotis.map((noti) => {

                                return (
                                    <div className={`p-card contact-individualContainer noti ${markAsRead ? 'bg-light' : ''}`} key={noti?.id}>
                                        <div className="text-secondary" onClick={() => handleSeen(noti)}><span className="d-flex ">
                                            {
                                                noti.imageUrl &&
                                                <img
                                                    src={`${noti.imageUrl}`}
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
                                        </span> </div>
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
                                                    onClick={() => confirmRemove(noti.id)}
                                                >
                                                    <i className="pi pi-trash "> </i> Remove this notification
                                                </li>
                                            </ul>
                                            <span className={`${noti.seen ? '' : 'custom-badge p-badge-dot p-badge-info'}`}> </span>
                                        </div>
                                    </div>
                                )

                            })
                            }
                        </InfiniteScroll>
                        {
                            allNotis && allNotis.length === 0
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
                            allNotis && allNotis.length === 0 &&
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