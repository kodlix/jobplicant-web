import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InstantHeader from 'pages/instant-job-hire/instant-header';
import Job from 'pages/instant-job-hire/Job';
import { Button } from 'primereact/button';
import { applyInstantJob, fetchAllInstantJobs, loadApplicants } from 'store/modules/instantJob';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { confirmDialog } from 'primereact/confirmdialog';

import './Instant-Jobs.css';
import RecentInstantJobs from './Recent_instant_Jobs';
import { Tag } from 'primereact/tag';


const InstantJobs = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);
    const [take, setTake] = useState(10);
    const toast = useRef(null);
    const [isApplied, setIsApplied] = useState(false);
    const allInstantJobs = useSelector(state => state.instantJob.instantjobs);
    const applicants = useSelector(state => state.instantJob.applicants);

    console.log("All instant job =>", allInstantJobs);

    useEffect(() => {
        dispatch(fetchAllInstantJobs(page, take))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadApplicants())
    }, [dispatch,])


    const handleApply = (id, i) => {
        confirmDialog({
            message: 'You are about to apply for this job?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                dispatch(applyInstantJob(id))
                const element = document.getElementById(i);
                const element2 = document.getElementById(`${i}_int`)

                element.hidden = false;
                element2.hidden = true;
            },
            reject: () => {
                return;
            },
        });
    }

    return (
        <div className="background">
            <div className="instant" >
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-9">
                            <div className="card card-size-list">
                                <InstantHeader
                                    title="All Instant Jobs"
                                    showCreateButton={false}
                                    count={allInstantJobs?.length}
                                />
                                {allInstantJobs && allInstantJobs.length > 0 && allInstantJobs.map((instantjob, i) =>
                                    <div className="">
                                        <div className="panel-login text-center"></div>
                                        <div className="highlight-card p-p-2">
                                            <div className="row" style={{ flexWrap: "nowrap !important" }}>
                                                <div className="col-2">
                                                    <img
                                                        src="https://source.unsplash.com/random/100x100"
                                                        className="rounded circle"
                                                        alt="user-image"
                                                    />
                                                </div>
                                                {/* <div className="p-2" ></div> */}
                                                <div className="col-10">
                                                    <small className="p-text-secondary">
                                                        <Link className="p-text-secondary" to={'#'}>

                                                            <p className="font-weight-bold ">Job Services : <span className="app-color" style={{ fontSize: 15 }}> {instantjob.service}</span></p>
                                                            <p><span className="font-weight-bold">Job Location : </span><span>{instantjob.location}</span> </p>
                                                            {/* <p><span className="font-weight-bold">Time : </span> {instantjob.time}</p> */}
                                                            <p><span className="font-weight-bold">Job Description : </span> {instantjob.description}</p>
                                                            <p><span className="font-weight-bold">Phone Nuber : </span> {instantjob.phoneNumber}</p>
                                                            <div className="p-grid">
                                                                <div className="p-col-4"><span className="font-weight-bold">Start Date: </span> {moment(instantjob.startDate).format('MMMM DD, YYYY')} </div>
                                                                <div className="p-col-6"><span className="font-weight-bold">End Date: </span> {moment(instantjob.endDate).format('MMMM DD, YYYY')}</div>
                                                            </div>
                                                        </Link>
                                                        <div className="p-grid p-pt-2" id={`${i}_int`} hidden={false}>
                                                            <div className="offset-md-5 p-pr-2 d-flex">
                                                                <p> <span className="font-weight-bold app-color p-mt-2"> Interested ? &nbsp; </span> </p>
                                                                <Button label="Yes" id="saveButton" className="p-button-sm" onClick={() => handleApply(instantjob.id, i)} /></div>
                                                            <div className="p-pr-1"> <Button label="View" id="reject" className="p-button-sm" /></div>
                                                        </div>

                                                        <div className="p-grid p-pt-2" id={`${i}`} hidden={true}>
                                                            <Tag> <span >Waiting to be accepted...</span></Tag>

                                                        </div>

                                                        {/* {applicant.accepted && <div className="p-grid p-pl-5 p-pb-2">
                                                            <div className="p-pr-2">
                                                                <Tag> <span >Accepted</span></Tag>
                                                            </div>
                                                        </div>} */}

                                                    </small >
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>)}
                            </div>
                        </div>
                        <RecentInstantJobs />
                        {/* <CorporateJob /> */}
                    </div>


                </div>


            </div>
            <div className="p-grid" >
                <div className="col-12">
                    <div className="pagination center p-mb-1">
                        <Button label="Load more" className="p-button-sm" />
                    </div>
                </div>
            </div>



        </div>
    )
}

export default InstantJobs;
