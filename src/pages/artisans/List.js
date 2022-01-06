import React, { useState } from 'react';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import './Artisans.css'
import { useSelector, useDispatch } from 'react-redux';
import { Artisans } from "./data";
import { Tag } from 'primereact/tag';
import InstantHeader from 'pages/instant-job-hire/instant-header';
import JobSidePanel from 'components/JobSidePanel';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';
import agentService from 'services/agent.service';
import { ACCOUNT_TYPE } from 'constants/accountType';



const Applicant = (props) => {
    const dispatch = useDispatch()

    const [rating, setRating] = useState(4);
    const userAccountType = agentService.Auth.current().accountType;

    const allJobs = useSelector(state => state.job.allJobs);

    return (
        <>
            <div className="content-container">
                <div className="p-grid">
                    <div className="col-lg-9 col-sm-12">
                        <div className="card card-size mt-2">
                            <div className="card-body p-pt-0 ">
                                <div className="p-4">
                                    <InstantHeader
                                        title="Available Hand-Worker(s) near you"
                                        showCreateButton={false}
                                        showBack={true}
                                        showSearchBar={true}
                                        placeholder='Search  by occupation' />

                                    <div className="row">
                                        {Artisans && Artisans.length > 0 && Artisans.map(artisan =>
                                            <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                                <div className="card">
                                                    <img src={artisan.imageUrl} height="150px" className="card-img-top" alt="..." />
                                                    <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        <p className="card-title font-weight-bold app-color">{artisan.name} - <span className="font-weight-bold">
                                                            <Tag className="p-mr-2 secondary-color" value={artisan.occupation} icon="pi pi-user" rounded></Tag>
                                                        </span> </p>

                                                        <p className="card-text"> <span className="font-weight-bold">Location :</span> {artisan.location}</p>
                                                        <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> {artisan.phoneNumber}</p>
                                                        <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={artisan.rating} /></span>
                                                        </p>
                                                        <p className='pt-1 d-flex flex-row-reverse'>
                                                            <i className="font-weight-bold pi pi-video p-pr-2" style={{ 'fontSize': "1.5em" }} ></i>
                                                            <i className="font-weight-bold pi pi-comments p-pr-2 " style={{ 'fontSize': "1.5em" }}></i>
                                                        </p>

                                                    </div>

                                                    {/* TODO: MAKE THE VIEW PROFILE LINK TO DIFFERENT INDIVIDUAL PROFILE */}
                                                    {/* <Button label="View profile" id="reject" className="p-button-sm" /> */}

                                                </div>
                                            </div>
                                        )}
                                        {Artisans.length === 0 && <strong className="mx-auto text-secondary">oops!! There are no artisans that match your description. </strong>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="pt-2 pb-2 ">
                            <Button label="Load more" className='w-100' />
                        </div>
                    </div>

                    {/* Job Component*/}
                    {userAccountType === ACCOUNT_TYPE.ARTISAN ? <RecentInstantJobs /> :
                        <JobSidePanel data={allJobs} />}                </div>
            </div>
        </>
    )
}

export default Applicant
