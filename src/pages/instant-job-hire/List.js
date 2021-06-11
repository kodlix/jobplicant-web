import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import './InstantJobHire.css'
import InstantHeader from './instant-header';
import { useDispatch, useSelector } from 'react-redux';
import InstantJobs from 'pages/instant-jobs/List';
import { search } from 'superagent';
import { loadInstantJob } from '../../store/modules/instantJob'



const InstantHires = ({ setMode, mode }) => {
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(false);
    const [pageNumber, setPageNumber] = useState(1);
    const [search, setSearch] = useState("");
    const instantJobs = useSelector(state => state.instantJob.instantjob);
    console.log({ instantJobs });
    const toast = useRef(null);



    useEffect(() => {
        dispatch(loadInstantJob())
    }, [dispatch])

    const id = 1;

    const deleteRequest = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            // accept,
            // reject
        });
    };

    return (
        <div>
            <InstantHeader
                title="All Created instant hires"
                setMode={setMode}
                showCreateButton={true}
                mode={mode}
                count={InstantJobs.length}
            />
            <div className="background">
                <div className="panel-login text-center"></div>
                {instantJobs && instantJobs.length > 0 && instantJobs.map(instantjob => {
                    <div key={instantjob.id} className="highlight-card p-p-2">
                        <div className="float-right ">
                            <span><i className="pi pi-pencil" onClick={() => setMode("edit")} ></i></span>
                            <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.5rem' }} onClick={deleteRequest}></i>

                        </div>
                        <Link to={'/instant-hire-applicants'}>
                            <small className="p-text-secondary">
                                <p className="font-weight-bold app-color">Job Service : {instantjob.service}</p>
                                <p><span className="font-weight-bold app-color">Job Location : </span>{instantjob.loaction}</p>
                                <p><span className="font-weight-bold app-color">Time : </span> {instantjob.time}</p>
                                <p><span className="font-weight-bold app-color">Job Description : </span> {instantjob.description}</p>
                                <div className="p-grid">
                                    <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {instantjob.startDate}</div>
                                    <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> {instantjob.endDate}</div>
                                </div>
                            </small></Link>
                    </div>
                })}
                {/* <hr /> */}

                {
                    instantJobs?.length === 0 && <strong className="mx-auto">No Instant Job Created</strong>
                }

            </div>
        </div>
    )
}

export default InstantHires;
