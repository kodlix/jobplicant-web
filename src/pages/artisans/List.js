import React, { useEffect, useState } from 'react';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { useSelector, useDispatch } from 'react-redux';
import { Artisans } from "./data";
import { Tag } from 'primereact/tag';
import InstantHeader from 'pages/instant-job-hire/instant-header';
import JobSidePanel from 'components/JobSidePanel';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';
import agentService from 'services/agent.service';
import { ACCOUNT_TYPE } from 'constants/accountType';
import { loadArtisanAccounts } from 'store/modules/account';
import { Link } from 'react-router-dom';
import { InputText } from 'primereact/inputtext';


import './Artisans.css'

const Applicant = (props) => {
    const dispatch = useDispatch();

    const ArtisanAccounts = useSelector(state => state.account.artisanAccounts);
    const loading = useSelector(state => state.account.loading);
    const artisans = ArtisanAccounts.data


    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(10)
    const [search, setSearch] = useState("")
    let inputValue;


    const [rating, setRating] = useState(4);
    const userAccountType = agentService.Auth.current().accountType;

    const allJobs = useSelector(state => state.job.allJobs);

    useEffect(() => {
        if (inputValue) return setSearch(inputValue);
    }, [inputValue])

    const handleSearch = (e) => {
        inputValue = e.target.value === "clear" ? "" : e.currentTarget.value;
        if (inputValue) setSearch(inputValue);
        dispatch(loadArtisanAccounts(page, limit, search));

    }

    return (
        <>
            <div className="content-container">
                <div className="p-grid">
                    <div className="col-lg-9 col-sm-12">
                        <div className="card card-size mt-2">
                            <div className="card-body p-pt-0 ">
                                <div className="p-4">
                                    {/* <InstantHeader
                                        title="Available Hand-Worker(s) near you"
                                        showCreateButton={false}
                                        showBack={true}
                                        showSearchBar={true}
                                        placeholder='Search  by occupation'
                                        value={inputValue}
                                        onChange={handleSearch}

                                    /> */}

                                    <header className="instant row">
                                        <div className="title-container col-md-7 col-sm-12"   >
                                            <h2 className="title sm-screen ">Available hand-workers near you </h2>
                                        </div>

                                        <div className="align-items-baseline col-md-5 col-sm-12">
                                            <div className="d-flex p-input-icon-right searchInput-container-contact">
                                                <div className="p-input-icon-left">
                                                    <i className="pi pi-search" />

                                                    <InputText className="p-mr-2 p-pr-5"
                                                        placeholder="Search by profession"
                                                        value={inputValue}
                                                        onChange={handleSearch}
                                                    />

                                                </div>
                                                {
                                                    loading === "searchUsers" &&
                                                    <i className="pi pi-spin pi-spinner p-mr-2" ></i>
                                                }
                                                {
                                                    inputValue && loading !== "searchUsers" &&
                                                    <i className="pi pi-times p-mr-2" name="clear"></i>
                                                }

                                                {
                                                    inputValue && loading !== "searchUsers" &&
                                                    <i className="pi pi-times p-mr-2" onClick={(e) => handleSearch(e)} name="clear" />
                                                }
                                                <div className="flex-shrink-0">
                                                    <Link to="/instant-hires" className="bk-btn p-pt-2 app-color"><i className="pi pi-arrow-left">Back</i></Link>
                                                </div>
                                            </div>
                                        </div>
                                    </header >
                                    <hr className="font-weight-bolder appcolor" />

                                    <div className="row">
                                        {artisans && artisans?.length > 0 && artisans.map(artisan => {
                                            return (< div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                                <div className="card">
                                                    <img src={artisan.imageUrl} height="150px" className="card-img-top" alt="..." />
                                                    <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        <Link to={`/applicant/${artisan.userId}`} ><p className="card-title font-weight-bold app-color" title="Click to view profile">{`${artisan.firstName} ${artisan.lastName}`}  <div className="font-weight-bold">
                                                            <Tag className="p-mr-2 header-color text-nowrap text-center" style={{ paddingRight: "5vw" }} value={artisan.profession} icon="pi pi-user" rounded></Tag>
                                                        </div> </p></Link>

                                                        <p className="card-text"> <span className="font-weight-bold">Location :</span> {artisan.locations}</p>
                                                        <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> {artisan.phoneNumber}</p>
                                                        <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={artisan.rating} /></span>
                                                        </p>
                                                        <p className='pt-1 d-flex flex-row-reverse'>
                                                            <i className="font-weight-bold pi pi-video p-pr-2" style={{ 'fontSize': "1.5em" }} ></i>
                                                            <i className="font-weight-bold pi pi-comments p-pr-2 " style={{ 'fontSize': "1.5em" }}></i>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })}
                                        {artisans?.length === 0 && <strong className="mx-auto text-secondary">oops!! There are no artisans that match your description. </strong>}
                                    </div>
                                </div>
                            </div>

                        </div>
                        {artisans?.length > 0 && <div className="pt-2 pb-2 load-more">
                            <Button label="Load more" className='w-100' />
                        </div>}
                    </div>

                    {/* Job Component*/}
                    {userAccountType === ACCOUNT_TYPE.ARTISAN ? <RecentInstantJobs /> :
                        <JobSidePanel data={allJobs} />}                </div>
            </div>
        </>
    )
}

export default Applicant
