import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { acceptApplicant, loadApplicants, loadInstantJob, rejectApplicant, } from 'store/modules/instantJob';
import Spinner from 'components/spinner/spinner.component'

import './InstantJobHire.css'
import { useSelector, useDispatch } from 'react-redux';
import { Tag } from 'primereact/tag';
import { confirmDialog } from 'primereact/confirmdialog';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';

const Applicant = (props) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);
    const [applicantList, setApplicantList] = useState({});

    const instantJob = useSelector(state => state.instantJob.instantjob);
    const instantJobId = props.match.params.id;

    const applicants = useSelector(state => state.instantJob.applicants);
    console.log("Applicant => ", applicants);
    console.log("instant-job => ", instantJob);


    useEffect(() => {
        dispatch(loadApplicants(instantJobId))
    }, [dispatch,])


    useEffect(() => {
        setApplicantList(applicants)
    }, [applicants])

    useEffect(() => {
        dispatch(loadInstantJob(instantJobId))
    }, [dispatch])

    const acceptHandler = (id) => {
        dispatch(acceptApplicant(id));
        // window.location.reload();

        // accetedApplicantHandler(id);
    }

    // const accetedApplicantHandler = (applicationId) => {
    //     const acceptedUser = applicants.filter(function (item) {
    //         return item.applicationId !== applicationId;
    //     })
    //     setApplicantList(acceptedUser);
    // }

    const rejectHandler = (id) => {
        return confirmDialog({
            message: 'You are about to REJECT this Applicant!',
            header: 'Reject Applicant Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept: () => {
                dispatch(rejectApplicant(id))
                dispatch(loadApplicants(instantJobId))
            },
            reject: () => {
                return;
            }
        });

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
                                            My Location
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Top Rated
                                        </li>
                                        <li className="dropdown-item">
                                            <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                            &nbsp; Reliability
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

                    <div className="card card-size mt-2 p-col-sm-12">
                        <div className="card-body p-pt-0">
                            <div className="applicants-display">
                                <div className="d-flex justify-content-between p-mb-1">
                                    <div>
                                        <h5> <span className="font-weight-bold text-secondary text-capitalize">{instantJob?.service}</span> <span className="app-color">
                                            {applicantList?.length ? applicantList?.length : 0} Applicant ({applicantList?.length ? applicantList?.length : 0} Result)</span></h5>
                                        <p className="font-weight-bold text-capitalize">Location : <span>{instantJob?.location}</span></p>
                                        <p className="font-weight-bold text-capitalize">Address : <span>{instantJob?.address}</span></p>
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
                                    {applicantList && applicantList?.length > 0 && applicantList.map(applicant =>

                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div key={applicant.applicantId} className="card">
                                                <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <div className="applicant-actionIcons float-right">
                                                        <i className="pi pi-video p-pr-2" data-toggle="tooltip" data-placement="top" title="Video Call" />
                                                        <i className="pi pi-comments p-pr-2" data-toggle="tooltip" data-placement="top" title="Message" />
                                                    </div> <hr />
                                                    {/* <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> */}
                                                    <p className="card-text"> <span className="font-weight-bold text-capitalize">Occupation :</span> <span className="font-weight-bold app-color">
                                                        {applicant.occupation}</span></p>
                                                    <p className="card-title"><span className="font-weight-bold text-capitalize">Name : </span>{applicant.name} </p>
                                                    <p className="card-text"> <span className="font-weight-bold text-capitalize">Location :</span>{applicant.address}</p>
                                                    <p className="card-text"><span className="font-weight-bold text-capitalize">Phone Number :</span> {applicant.phoneNumber}</p>
                                                    <p className="card-text"><span className="font-weight-bold text-capitalize">Rating :
                                                    </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false}
                                                        onChange={(e) => setRating(applicant.rating)} stars={5} /></span>
                                                    </p>
                                                </div>
                                                {!applicant.accepted && !applicant.rejected && <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className=" applicant-actionIcons p-pr-2">
                                                        <Link to={`/applicant/${applicant.applicantId}`}><a className="pi pi-user" title="View Applicant Profile"></a></Link>
                                                    </div>
                                                    <div className="p-pr-2">
                                                        <Button label="Accept" id="saveButton" className="p-button-sm"
                                                            onClick={() => acceptHandler(applicant.applicationId)} />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" id="reject" className="p-button-sm"
                                                            onClick={() => rejectHandler(applicant.applicationId)} />
                                                    </div>

                                                </div>}
                                                <div className="p-grid p-pb-2">
                                                    {applicant.accepted && <div className="p-grid p-pl-5 p-pb-2">
                                                        <div className="p-pr-2">
                                                            <Tag className="header-color"> <span >Accepted</span></Tag>
                                                        </div>
                                                    </div>}
                                                    {applicant.accepted && <div className="p-grid p-pl-5 p-pb-2">
                                                        <div className="p-pr-2 p-pt-2">
                                                            {/* <Button label="Review" id="reject" className="p-button-sm" /> */}
                                                            <Link to="/review"><u className="app-color font-weight-bold">Leave a Review</u> </Link>
                                                        </div>
                                                    </div>}
                                                </div>

                                                {applicant.rejected && <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Tag> <span >Rejected</span></Tag>
                                                    </div>
                                                </div>}
                                            </div>
                                        </div>)}
                                    {applicants?.length === 0 && <strong className="mx-auto text-secondary"><i>There are no applicants for this job </i> </strong>}

                                </div>
                            </div>
                        </div>

                    </div>
                    <RecentInstantJobs />
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
                    {applicantList && applicantList?.length > 0 && applicantList.map(applicant => <div className="modal-content">
                        <div className="modal-header">
                            <img src="../../assets/user-icon.png " width="10px" height="200px" className="card-img-top" alt="..." />

                        </div>
                        <div className="modal-body">
                            <p><span className="font-weight-bold">Full Name:</span> <span > {applicant.name}</span></p>
                            <p><span className="font-weight-bold">Location:</span> <span>{applicant.address}</span></p>
                            <p><span className="font-weight-bold">Address:</span> <span > {applicant.address}</span></p>
                            <p><span className="font-weight-bold"> phone Number: </span><span > {applicant.phoneNumber}</span></p>
                            <p ><span className="font-weight-bold">Bio:</span> <span classNam="p-p-0">{applicant.bio}</span></p>
                            <p className="card-text"><span className="font-weight-bold">Rating :
                            </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                            </p>
                        </div>
                        <div className="modal-footer py-2">
                            <button type="button" className="btn appcolor text-white" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </>
    )
}

export default Applicant
