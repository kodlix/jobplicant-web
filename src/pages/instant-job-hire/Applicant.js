import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { acceptApplicant, loadApplicants, loadInstantJob, rejectApplicant, } from 'store/modules/instantJob';

import Job from './Job';

import './InstantJobHire.css'
import { useSelector, useDispatch } from 'react-redux';

const Applicant = (props) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);

    const instantJobs = useSelector(state => state.instantJob.instantjobs);
    const instantJobId = props.match.params.id;

    const applicants = useSelector(state => state.instantJob.applicants);
    console.log("Applicant => ", applicants);


    useEffect(() => {
        dispatch(loadApplicants(instantJobId))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadInstantJob(instantJobId))
    }, [dispatch])

    const acceptHandler = (id) => {
        dispatch(acceptApplicant(id));
    }

    const rejectHandler = (id) => {
        dispatch(rejectApplicant(id))
    }


    return (
        <>
            <div className="content-container">
                <div className="p-grid">
                    <div className="p-pl-3">
                        <div className="p-grid">
                            <div className="p-col">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Rating
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Unrated
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Good Fit
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Maybe
                                        </li>
                                        <li className="dropdown-item pr-1">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Not a fit
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-col">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Years of experience
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Less than 1 year
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            1 to 2 years
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; 3 to 5 years
                                        </li>
                                        <li className="dropdown-item pr-1">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; 6 to 10 years
                                        </li>
                                        <li className="dropdown-item pr-1">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; More than 10 years
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="p-col">
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        Sorted by
                                    </button>
                                    <ul className="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                        {/* <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Option 1
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Option 2
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; Option 3
                                        </li>
                                        <li className="dropdown-item pr-1">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; Option 4
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="p-col-12 p-md-9">
                        <h5 className="font-weight-bold p-pt-3">5 Applicants (3 results) </h5>
                        <hr />
                    </div> */}

                    <div className="card card-size mt-2">
                        <div className="card-body p-pt-0">
                            <div className="p-4">
                                <div className="d-flex justify-content-between p-mb-1">
                                    <div>
                                        <h5> <span className="font-weight-bold text-secondary">{instantJobs.service}</span> <span className="app-color">
                                            {applicants.length ? applicants.length : 0} Applicant ({applicants.length ? applicants?.length : 0} Result)</span></h5>
                                        <p className="font-weight-bold">Location : <span>{instantJobs.location}</span></p>
                                    </div>
                                    <div>
                                        <Link to="/instant-hires" className="bk-btn p-pt-2 app-color">
                                            <i className="pi pi-arrow-left">Back</i>
                                        </Link>
                                    </div>
                                </div>
                                <hr className="appcolor" />
                                <div className="">

                                </div>
                                <div className="row">
                                    {applicants && applicants.length > 0 && applicants.map(applicant =>

                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div key={applicant.applicantId} className="card">
                                                <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold d-flex"> Name : &nbsp; <span className="app-color">
                                                        {`${applicant.firstName} ${applicant.lastName}`} </span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Occupation :</span> <span className="font-weight-bold app-color">
                                                        {applicant.service}</span></p>
                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span>{applicant.location}</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Number :</span> {applicant.phoneNumber}</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                    </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false}
                                                        onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>
                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm"
                                                            onClick={() => acceptHandler(applicant.applicantId)} />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm"
                                                            onClick={() => rejectHandler(applicant.applicantId)} />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>)}
                                    {applicants.length === 0 && <strong className="mx-auto text-secondary"><i>There are no applicants for this job </i> </strong>}

                                </div>
                            </div>
                        </div>

                    </div>
                    {/* Job Component*/}
                    <Job />
                </div>
                <div className="p-grid">
                    <div className="col-12">
                        <div className="pagination center p-mb-1">
                            <Button label="Load more" className="p-button-sm" />
                        </div>
                    </div>
                </div>

            </div>
            <div className="modal fade p-mt-6" id="staticBackdrop" modalDisplay={modalDisplay} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="../../assets/user-icon.png " width="10px" height="200px" className="card-img-top" alt="..." />

                        </div>
                        <div className="modal-body">
                            <p><span className="font-weight-bold">Funll Name:</span> <span > Chinedu Michael</span></p>
                            <p><span className="font-weight-bold">Location:</span> <span>Egbeda</span></p>
                            <p><span className="font-weight-bold">Address:</span> <span > 113, Gowan Estate</span></p>
                            <p><span className="font-weight-bold"> phone Number: </span><span > 08098765432</span></p>
                            <p ><span className="font-weight-bold">Bio:</span> <span classNam="p-p-0">I'm a mad ass professional at what i do, Also striving to improve</span></p>
                            <p className="card-text"><span className="font-weight-bold">Rating :
                            </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                            </p>
                        </div>
                        <div className="modal-footer py-2">
                            <button type="button" className="btn appcolor text-white" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Applicant
