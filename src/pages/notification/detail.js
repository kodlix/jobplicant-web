import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
// import Swal from 'sweetalert2';
import AdminSideBar from '../AdminSidebar';
import { updateNotification, ViewNotification } from '../../../store/modules/appNotification';
import { Link } from 'react-router-dom';
import moment from 'moment';
import AdminMainHeader from '../AdminMainHeader';
import AdminPageHeader from '../AdminPageHeader';
import { IMAGE_URL } from '../../../agent';
import { useForm } from 'react-hook-form';

const Detail = (props) => {
    const dispatch = useDispatch();
    const notificationView = useSelector(state => state.appNotification.notification);
    const notificationId = props.match.params.id;
    console.log({ props });

    useEffect(() => {
        dispatch(ViewNotification(notificationId));
    }, [dispatch]);

    useEffect(() => {
        dispatch(updateNotification(notificationId));
    }, [dispatch]);


    // const handlePublishEvent = () => {
    //     Swal.fire({
    //         title: 'Are you sure you want to publish this event?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#754ffe',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, publish it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             dispatch(publishEvents(eventId))

    //         }

    //     })
    // }

    return (
        <div id="db-wrapper">
            <div id="page-content">
                <div className="container-fluid p-4">
                    <div className="row">
                        <div className="col-10">
                        </div>
                        <div className="col-2 mb-3">
                            <Link className="btn btn-primary size-text" to="/admin/notifications"><i className="fa fas-back"></i>back</Link>
                        </div>
                    </div>
                    <div class="card mb-4">
                        {/* <!-- Card body --> */}
                        <div class="card-body">
                            {/* <!-- List group --> */}
                            <ul class="list-group list-group-flush">
                                {/* <!-- List group item --> */}
                                <li class="list-group-item px-0 py-4">
                                    <div class="media">
                                        {notificationView?.senderImageUrl && <img src={notificationView?.senderImageUrl} alt="" className="avatar-md rounded-circle" />}
                                        {!notificationView?.senderImageUrl && <img src="../assets/images/avat.png" alt="" className="avatar-md rounded-circle" />}
                                        {/* <img src="./assets/images/author3.jpg" alt="" class="rounded-circle avatar-lg" /> */}
                                        <div class="ml-3 mt-2 media-body">
                                            <div class="d-flex align-items-center justify-content-between">
                                                <div>
                                                    <h4 class="mb-0">{notificationView.createdBy}</h4>
                                                    <span class="text-muted font-size-xs">
                                                        {moment(notificationView?.createdAt).fromNow()}
                                                    </span>
                                                </div>
                                            </div>
                                            <div class="mt-2">
                                                <span class="h5">Notification Type: <span className="text-warning">{notificationView?.notificationType?.name}</span></span><br />
                                                {/* <span class="h5">Url: {notificationView.url ? notificationView.url: 'NIL'}</span><br /> */}
                                                {/* <span class="h5">Seen: {notificationView?.seen ? "Yes" : "No"}</span><br /> */}

                                                <p class="mt-2" dangerouslySetInnerHTML={{ __html: notificationView?.message }}>

                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;