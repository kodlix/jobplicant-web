import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { acceptApplicant, loadApplicants, loadInstantJob, rejectApplicant, } from 'store/modules/instantJob';
import Spinner from 'components/spinner/spinner.component'
import { Tooltip } from 'primereact/tooltip';


import './InstantJobHire.css'
import { useSelector, useDispatch } from 'react-redux';
import { Tag } from 'primereact/tag';
import { confirmDialog } from 'primereact/confirmdialog';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from 'react-hook-form';

const Review = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [rating, setRating] = useState(0);
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const [review, setReview] = useState("")

    const instantJob = useSelector(state => state.instantJob.instantjob);

    const applicants = useSelector(state => state.instantJob.applicants);
    console.log("Applicant => ", applicants);
    console.log("instant-job => ", instantJob)

    const onSubmit = () => {

    }

    return (
        <>
            <div className="content-container">
                <div className="p-grid">

                    <div className="card review-card-size mt-2 p-col-sm-12">
                        <div className="card-body p-pt-0">
                            <div className="applicants-display">
                                <div className="d-flex justify-content-between p-mb-1">
                                    <div>
                                        <h5> <span className="font-weight-bold text-secondary"></span> <span className="app-color">
                                            Job Information</span></h5>
                                        <div className="d-flex d-row p-mt-3">
                                            <p className="p-mr-5"> <span className="font-weight-bold" >Job Id : </span> 0905901</p>
                                            <p className="p-mr-5"> <span className="font-weight-bold">Job Closed : </span><span>31 July, 2001</span></p>
                                            <p className="p-mr-5">  <span className="font-weight-bold">Applicant :</span> <span>Mr Jonathan Ebele</span></p>
                                        </div>
                                    </div>
                                    <div className="bk-btn p-pt-2 app-color" onClick={() => history.goBack()}>
                                        {/* <Link to="/instant-hires" className="bk-btn p-pt-2 app-color"> */}
                                        <i className="pi pi-arrow-left">Back</i>
                                        {/* </Link> */}
                                    </div>
                                </div>
                                {/* <hr className="appcolor" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="card review-card-size mt-2 mb-2 p-col-sm-12">
                        <div className="card-body p-pt-0">
                            <form onSubmit={handleSubmit(onSubmit)} className="applicants-display">
                                <div>
                                    <h5> <span className="font-weight-bold text-secondary"></span> <span className="app-color">
                                        Leave feedback about this applicant</span></h5>
                                </div>

                                <div className="row p-mt-4">
                                    <div className="col-2">
                                        <img
                                            src="https://source.unsplash.com/random/100x100"
                                            className="rounded circle"
                                            alt="user-image" height="100" width="100"
                                        />
                                    </div>

                                    <div className="col-10">
                                        <div>
                                            {/* <p ><span style={{ fontSize: 15 }}> Adebisi Adekoga </span></p> */}
                                            <p ><span style={{ fontSize: 15 }}> Drycleaner </span></p>
                                            <div>
                                                <p className="card-text"><span className="font-weight-bold">Rate this Appliant</span>  </p>
                                                <div className="p-p-0"> <Rating value={rating} disabled={false} cancel={false}
                                                    onChange={(e) => setRating(e.value)} stars={5} /></div>

                                            </div>
                                            {/* <p> <span></span> </p> */}
                                            <div className="p-fluid p-md-12 p-sm-12">
                                                <div className="p-field">
                                                    {/* <label htmlFor="lastname"> My Feedback</label> */}
                                                    <InputTextarea
                                                        defaultValue={review}
                                                        onChange={(e) => setReview(e.target.value)}
                                                        rows={3}
                                                        cols={50}
                                                        placeholder="Please describe your experience with this applicant."
                                                        name="review"
                                                        {...register("review")}
                                                        style={{ width: "40vw" }}
                                                    />
                                                </div>
                                            </div>
                                        </div >
                                    </div>
                                </div>
                                <Button icon="pi pi-check" iconPos="left" label="Submit" id="saveButton" type="submit" className="float-right" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
