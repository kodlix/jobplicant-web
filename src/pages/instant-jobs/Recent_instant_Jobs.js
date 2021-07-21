import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchAllInstantJobs } from 'store/modules/instantJob';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import "../profile/UserProfile.css";
import SectionHeader from "pages/profile/SectionHeader";

import './Instant-Jobs.css';


const RecentInstantJobs = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(10);
    const allCurrentInstantJobs = useSelector(state => state.instantJob.allCurrentInstantJobs);
    console.log("allcurrentjob", allCurrentInstantJobs)

    useEffect(() => {
        dispatch(fetchAllInstantJobs(page, take))
    }, [dispatch])


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
                    <div className="p-card-body p-grid p-mt-2 overflow-auto" style={{ height: 500 }}>
                        {allCurrentInstantJobs && allCurrentInstantJobs.length > 0 && allCurrentInstantJobs.map(instantjob =>
                            <div key={instantjob.id} className="" >
                                <div className="panel-login text-center"></div>
                                <div className="highlight-card p-p-2 ">
                                    <div className="row " style={{ flexWrap: "nowrap !important" }}>
                                        <div className="p-card-title d-flex justify-content-around" style={{ fontSize: 15 }}>
                                            <div >{instantjob.service}</div>
                                            <div><i className="pi pi-share-alt"></i></div>
                                        </div>
                                        <hr />

                                        <div className="col-2 rounded-circle">
                                            <img
                                                src="https://source.unsplash.com/random/100x100"
                                                className="rounded circle recent-job-image"
                                                alt="user-image"
                                            />
                                        </div>
                                        <div className="col-10">
                                            <small >
                                                <Link className="p-text-secondary" to={`/instant-hire/view/${instantjob.id}`}>
                                                    <p className="font-weight-bold"> <span className="app-color" style={{ fontSize: 15 }}> {instantjob.service}</span></p>
                                                    <p><span className="font-weight-bold"> </span> {instantjob.location} </p>
                                                    <p><span className="font-weight-bold"> </span> {`${truncate(instantjob.description, 20)} ${'...'}`}</p>
                                                    <p className="p-pt-2 float-right"> {moment(instantjob.createdAt).fromNow()} </p>
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
