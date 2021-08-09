import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { confirmDialog } from 'primereact/confirmdialog';
import InstantHeader from './instant-header';
import { useDispatch, useSelector } from 'react-redux';
import { deleteInstantJob, loadInstantJobs } from '../../store/modules/instantJob'
import moment from 'moment';

import './InstantJobHire.css'
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';
import Spinner from 'components/spinner/spinner.component'


const InstantHires = () => {
    const dispatch = useDispatch();
    const instantJobs = useSelector(state => state.instantJob.instantjobs);

    useEffect(() => {
        dispatch(loadInstantJobs())
    }, [])

    const deleteRequest = (id) => {
        return confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                dispatch(deleteInstantJob(id));
                dispatch(loadInstantJobs());
            },
            reject: () => {
                return;
            }
        });
    }

    // if (instantJobs && !instantJobs.length)
    //     return <Spinner />

    return (
        <div>
            <div className="background instant" >
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-9">
                            <div className="card card-size-list">
                                <div className="card-body">
                                    <InstantHeader
                                        title="All Created instant hires"
                                        showCreateButton={true}
                                        count={instantJobs?.length}
                                        showSearchBar={true}
                                    />
                                    {instantJobs && instantJobs.length > 0 && instantJobs.map(instantjob =>
                                        <div key={instantjob.id}>
                                            <div className="panel-login text-center"></div>
                                            <div className="highlight-card p-p-2">
                                                <div className="float-right d-flex">
                                                    <Link to={`/instant-hire/edit/${instantjob.id}`}> <span><i className="pi pi-pencil" ></i></span></Link>
                                                    <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.2rem' }} onClick={() => deleteRequest(instantjob.id)}></i>
                                                </div>
                                                <Link to={`/instant-hire-applicants/${instantjob.id}`}>
                                                    <small className="p-text-secondary">
                                                        <p className="font-weight-bold app-color text-capitalize">Job Service : {instantjob.service} </p>
                                                        <p><span className="font-weight-bold app-color text-capitalize">Job Location : </span> {instantjob.location}</p>
                                                        {/* <p><span className="font-weight-bold app-color">Time : </span>{instantjob.time} </p> */}
                                                        <p><span className="font-weight-bold app-color text-capitalize">Address : </span>{instantjob.address} </p>
                                                        <p><span className="font-weight-bold app-color text-capitalize">Phone Number : </span>{instantjob.phoneNumber} </p>
                                                        <p><span className="font-weight-bold app-color text-capitalize">Job Description : </span> {instantjob.description} </p>
                                                        <div className="p-grid">
                                                            <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {moment(instantjob.startDate).format('MMMM DD, YYYY')} </div>
                                                            <div className="p-col-6"><span className="font-weight-bold app-color">End Date: </span> {moment(instantjob.endDate).format('MMMM DD, YYYY')}</div>
                                                        </div>
                                                    </small></Link>
                                            </div>
                                            <hr />
                                        </div>
                                    )}
                                    {
                                        instantJobs?.length === 0 && <strong className="mx-auto">No Instant Job Created</strong>
                                    }
                                </div>
                            </div>
                        </div>
                        <RecentInstantJobs />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstantHires;
