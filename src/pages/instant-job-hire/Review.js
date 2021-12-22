import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { acceptApplicant, loadApplicants, loadInstantJob, rejectApplicant, } from 'store/modules/instantJob';
import Spinner from 'components/spinner/spinner.component'
import { Tooltip } from 'primereact/tooltip';
import 'primeflex/primeflex.css';

import './InstantJobHire.css'
import { useSelector, useDispatch } from 'react-redux';
import { Tag } from 'primereact/tag';
import { confirmDialog } from 'primereact/confirmdialog';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from 'react-hook-form';
import { InputText } from 'primereact/inputtext';
import { createReview } from 'store/modules/review';

const Review = (props) => {
    const dispatch = useDispatch()
    const history = useHistory();

    const [rating, setRating] = useState(0);
    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const [review, setReview] = useState("")
    const loading = useSelector(state => state.review.loading);


    // const instantJob = useSelector(state => state.instantJob.instantjob);
    // const applicants = useSelector(state => state.instantJob.applicants);
    // console.log("Applicant => ", applicants);
    // console.log("instant-job => ", instantJob)

    const applicant = useParams();

    useEffect(() => {
        register("rating")
    }, [register])

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    // };



    const onSubmit = (data) => {
        data.applicantId = applicant.applicantId;
        data.jobId = applicant.jobId;
        data.rating = rating;
        dispatch(createReview(data))
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
                                            Rate & Review </span></h5>
                                    </div>
                                    <div className="bk-btn p-pt-2 app-color" onClick={() => history.goBack()}>
                                        {/* <Link to="/instant-hires" className="bk-btn p-pt-2 app-color"> */}
                                        <i className="pi pi-arrow-left">Back</i>
                                        {/* </Link> */}
                                    </div>
                                </div>

                                <div className="d-flex d-row p-mt-3">
                                    <p className="p-mr-5"> <span className="font-weight-bold" >Job Id : </span> {applicant.jobId}</p>
                                    <p className="p-mr-5"> <span className="font-weight-bold">Job Closed : </span><span>31 July, 2001</span></p>
                                    <p className="p-mr-5">  <span className="font-weight-bold">Applicant :</span> <span>Mr Jonathan Ebele</span></p>
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
                                        Leave feedback about this artisan</span></h5>
                                </div>

                                <div className="row p-mt-4">
                                    <div className="col-2 rounded-circle">
                                        <img
                                            src="https://source.unsplash.com/random/100x100" style={{ borderRadius: "50%" }}
                                            className="img-fluid"
                                            alt="user-image" height="100" width="100"
                                        />
                                    </div>

                                    <div className="col-10">
                                        <div>
                                            {/* <p ><span style={{ fontSize: 15 }}> Adebisi Adekoga </span></p> */}
                                            <p ><span style={{ fontSize: 15 }}> Drycleaner </span></p>
                                            <div>
                                                <p className="card-text"><span className="font-weight-bold">Rate this Appliant</span>  </p>
                                                <div className="p-p-0">
                                                    <Rating
                                                        value={rating}
                                                        cancel={false}
                                                        onChange={(e) => setRating(e.value)}
                                                        stars={5}
                                                        name="rating"
                                                    />
                                                </div>

                                            </div>
                                            {/* <p> <span></span> </p> */}

                                        </div >
                                    </div>
                                </div>
                                <hr />
                                <div>
                                    <div className="p-fluid p-formgrid p-grid">
                                        <div className="p-field p-col">
                                            <label htmlFor="title">Review Title *</label>
                                            <InputText
                                                id="title"
                                                name="title"
                                                type="text"
                                                placeholder="e.g. I'm impressed / I'm not impressed"
                                                {...register("title", { required: "Title is required" })}
                                            />
                                            {errors.title && <span className="text-danger font-weight-bold "> <p>{errors.title.message}</p>
                                            </span>}
                                        </div>
                                        <div className="p-field p-col">
                                            <label htmlFor="reviewerDisplayName">Your Name *</label>
                                            <InputText
                                                id="reviewerDisplayName"
                                                name="reviewerDisplayName"
                                                type="text"
                                                {...register("reviewerDisplayName", { required: "Enter a Name " })}

                                            />
                                            {errors.reviewerDisplayName && <span className="text-danger font-weight-bold "> <p>{errors.reviewerDisplayName.message}</p>
                                            </span>}
                                        </div>
                                    </div>

                                    <div className="p-fluid p-md-12 p-pl-0 p-sm-12">
                                        <div className="p-field">
                                            <label htmlFor="detail"> Detailed Review *</label>
                                            <InputTextarea
                                                defaultValue={review}
                                                onChange={(e) => setReview(e.target.value)}
                                                rows={3}
                                                cols={100}
                                                placeholder="Please describe your experience with this applicant."

                                                name="detail"
                                                {...register("detail", { required: "Details about this person service is required" })}
                                            />
                                            {errors.detail && <span className="text-danger font-weight-bold "> <p>{errors.detail.message}</p>
                                            </span>}
                                        </div>
                                    </div>
                                </div>
                                <Button
                                    icon={loading ? " " : "pi pi-check"}
                                    iconPos="left"
                                    id="saveButton"
                                    type="submit"
                                    className="float-right"
                                    label={loading ? "Please wait..." : "Submit"}
                                    disabled={loading}
                                />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Review
