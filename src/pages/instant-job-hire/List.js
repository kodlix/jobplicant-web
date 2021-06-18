import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import './InstantJobHire.css'
import InstantHeader from './instant-header';
import { useDispatch, useSelector } from 'react-redux';
import InstantJobs from 'pages/instant-jobs/List';
import { search } from 'superagent';
import { deleteInstantJob, loadInstantJobs } from '../../store/modules/instantJob'
import moment from 'moment';
import Job from './Job';


const InstantHires = (props) => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const instantJobs = useSelector(state => state.instantJob.instantjobs);
    console.log({ instantJobs });

    const jobid = props.match.params.id;
    console.log({ props });


    useEffect(() => {
        dispatch(loadInstantJobs())
    }, [dispatch])

    const deleteRequest = (id) => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                dispatch(deleteInstantJob(id));
            },
            reject: () => {
                return;
            }
        });
    };


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
                                    />
                                    {instantJobs && instantJobs.length > 0 && instantJobs.map(instantjob =>
                                        <div key={instantjob.id}>
                                            <div className="panel-login text-center"></div>
                                            <div className="highlight-card p-p-2">
                                                <div className="float-right ">
                                                    <Link to={`/instant-hire/edit/${instantjob.id}`}> <span><i className="pi pi-pencil" ></i></span></Link>
                                                    <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.5rem' }} onClick={() => deleteRequest(instantjob.id)}></i>
                                                </div>
                                                <Link to={`/instant-hire-applicants/${instantjob.id}`}>
                                                    <small className="p-text-secondary">
                                                        <p className="font-weight-bold app-color ">Job Service : {instantjob.service} </p>
                                                        <p><span className="font-weight-bold app-color">Job Location : </span> {instantjob.location}</p>
                                                        <p><span className="font-weight-bold app-color">Time : </span>{instantjob.time} </p>
                                                        <p><span className="font-weight-bold app-color">Job Description : </span> {instantjob.description} </p>
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
                        <Job />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InstantHires;
