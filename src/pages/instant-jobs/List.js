import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import InstantHeader from 'pages/instant-job-hire/instant-header';
import Job from 'pages/instant-job-hire/Job';
import { Button } from 'primereact/button';
import { applyInstantJob, loadInstantJobs } from 'store/modules/instantJob';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { confirmDialog } from 'primereact/confirmdialog';

import './Instant-Jobs.css';


const InstantJobs = () => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);
    const instantJobs = useSelector(state => state.instantJob.instantjobs);

    useEffect(() => {
        dispatch(loadInstantJobs())
    }, [dispatch])


    const handleApply = (id, jobID) => {
        confirmDialog({
            message: 'You are about to apply for this job?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                jobID = id;
                dispatch(applyInstantJob(id, jobID))
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
                                    count={instantJobs?.length}
                                />
                                {instantJobs && instantJobs.length > 0 && instantJobs.map(instantjob =>
                                    <div className="">
                                        <div className="panel-login text-center"></div>
                                        <div className="highlight-card p-p-2">
                                            <div className="row" style={{ flexWrap: "nowrap !important" }}>
                                                <div className="col-2">
                                                    <img
                                                        src="https://source.unsplash.com/random/100x100"
                                                        className="rounded circle"
                                                        alt="image"
                                                    />
                                                </div>
                                                {/* <div className="p-2" ></div> */}
                                                <div className="col-10">
                                                    <small className="p-text-secondary">
                                                        <Link to={'/instant-hire-applicants'}>

                                                            <p className="font-weight-bold app-color">Job Services : <span className=""> {instantjob.service}</span></p>
                                                            <p><span className="font-weight-bold app-color">Job Location : </span><span>{instantjob.location}</span> </p>
                                                            <p><span className="font-weight-bold app-color">Time : </span> {instantjob.time}</p>
                                                            <p><span className="font-weight-bold app-color">Job Description : </span> {instantjob.description}</p>
                                                            <p><span className="font-weight-bold app-color">Phone Nuber : </span> {instantjob.phoneNumber}</p>
                                                            <div className="p-grid">
                                                                <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {moment(instantjob.startDate).format('MMMM DD, YYYY')} </div>
                                                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date: </span> {moment(instantjob.endDate).format('MMMM DD, YYYY')}</div>
                                                            </div>
                                                        </Link>
                                                        <div className="p-grid p-pt-2">
                                                            <div className="offset-md-7 p-pr-2"> <Button icon="pi pi-check" iconPos="left" label="Apply" id="saveButton" className="p-button-sm" onClick={() => handleApply(instantjob.id)} /></div>
                                                            <div className="p-pr-1"> <Button label="View" id="reject" className="p-button-sm" /></div>
                                                        </div>

                                                    </small >
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>)}
                            </div>
                        </div>
                        <Job />
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
