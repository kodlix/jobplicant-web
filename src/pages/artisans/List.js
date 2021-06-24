import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { loadApplicants, loadInstantJob, } from 'store/modules/instantJob';
import './Artisans.css'
import { useSelector, useDispatch } from 'react-redux';
import Job from 'pages/instant-job-hire/Job';

const Applicant = (props) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);

    const instantJobs = useSelector(state => state.instantJob.instantjobs);
    const instantJobId = props.match.params.id;

    const applicants = useSelector(state => state.instantJob.applicants);
    console.log({ instantJobs })
    console.log({ applicants });


    useEffect(() => {
        dispatch(loadApplicants(instantJobId))
    }, [dispatch])

    useEffect(() => {
        dispatch(loadInstantJob(instantJobId))
    }, [dispatch])


    return (
        <>
            <div className="content-container">
                <div className="p-grid">

                    <div className="card card-size mt-2">
                        <div className="card-body p-pt-0">
                            <div className="p-4">
                                <div className="d-flex justify-content-between p-mb-1">
                                    <div>
                                        <h5> <span className="font-weight-bold text-secondary"> 6 Hand-Worker(s)</span> <span className="app-color"> </span></h5>
                                        <p className="font-weight-bold"><span>{instantJobs.location}</span></p>
                                    </div>
                                    <div className="search-container">
                                        <form>
                                            <input type="text" placeholder="Search..." />
                                            <button type="submit"> <i className="pi pi-search"></i>
                                            </button>
                                        </form>
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
                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>

                                            {/* TODO: MAKE THE VIEW PROFILE LINK TO DIFFERENT INDIVIDUAL PROFILE */}
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>
                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>
                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>
                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>
                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>

                                    <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                        <div className="card">
                                            <img src="https://source.unsplash.com/random/100x100" height="150px" className="card-img-top" alt="..." />
                                            <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                <p className="card-text"><span className="font-weight-bold">Rating :
                                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                </p>

                                            </div>
                                            <Button label="View profile" id="reject" className="p-button-sm" />

                                        </div>

                                    </div>


                                    {instantJobs.length === 0 && <strong className="mx-auto text-secondary">There are no applicants for this job</strong>}
                                </div>
                                {instantJobs.length === 0 && <strong className="mx-auto text-secondary">There are no applicants for this job</strong>}

                            </div>
                            {instantJobs.length === 0 && <strong className="mx-auto text-secondary" >There are no applicants for this job</strong>}

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
        </>
    )
}

export default Applicant
