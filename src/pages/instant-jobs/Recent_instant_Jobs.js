import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InstantHeader from 'pages/instant-job-hire/instant-header';
import Job from 'pages/instant-job-hire/Job';
import { applyInstantJob, fetchAllInstantJobs } from 'store/modules/instantJob';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { confirmDialog } from 'primereact/confirmdialog';

import { PROFILE } from "constants/profile";

import "../profile/UserProfile.css";
import SectionHeader from "pages/profile/SectionHeader";

import './Instant-Jobs.css';
import { isExtraneousPopstateEvent } from 'history/DOMUtils';


const RecentInstantJobs = ({ openCreate, openEdit, profileInfo }) => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(10);
    const allInstantJobs = useSelector(state => state.instantJob.instantjobs);
    console.log("All instant job =>", allInstantJobs);

    useEffect(() => {
        dispatch(fetchAllInstantJobs(page, take))
    }, [dispatch])


    const handleApply = (id) => {
        confirmDialog({
            message: 'You are about to apply for this job?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                dispatch(applyInstantJob(id))
            },
            reject: () => {
                return;
            },
        });
    }

    function truncate(str, no_words) {
        return str.split(" ").splice(0, no_words).join(" ");
    }

    return (
        <>

            <div className="p-col-12 p-md-3 p-pt-2">
                <div className="p-card">
                    <SectionHeader
                        icon="briefcase"
                        sectionTitle="Recent Instant Jobs"
                        id="portfolioEdit"
                        // showAddButton="false"
                        showEditButton="false"

                    />
                    <div className="p-card-body p-grid p-mt-2">
                        {allInstantJobs && allInstantJobs.length > 0 && allInstantJobs.map(instantjob =>
                            <div className="">
                                <div className="panel-login text-center"></div>
                                <div className="highlight-card p-p-2">
                                    <div className="row" style={{ flexWrap: "nowrap !important" }}>
                                        <div className="p-card-title d-flex justify-content-around">
                                            <div>{instantjob.service}</div>
                                            <div><i className="pi pi-share-alt"></i></div>
                                        </div>
                                        <div className="col-2 rounded-circle p-pr-1">
                                            <img
                                                src="https://source.unsplash.com/random/100x100"
                                                className="rounded circle recent-job-image"
                                                alt="image"
                                            />
                                        </div>
                                        <div className="col-10">
                                            <small className="p-text-secondary">
                                                <Link to={'#'}>
                                                    <p className="font-weight-bold app-color">Job Services : <span className=""> {instantjob.service}</span></p>
                                                    <p><span className="font-weight-bold app-color">Job Location : </span> {instantjob.location} </p>
                                                    <p><span className="font-weight-bold app-color">Job Description : </span> {`${truncate(instantjob.description, 20)} ${'...'}`}</p>
                                                </Link>
                                            </small >
                                        </div>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>


        </>
    )
}

export default RecentInstantJobs;
