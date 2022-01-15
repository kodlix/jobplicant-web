import { Badge } from 'primereact/badge'
import { Skeleton } from 'primereact/skeleton'
import { Dropdown } from 'primereact/dropdown'
import { InputText } from 'primereact/inputtext'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Tag } from "primereact/tag";
import BackgroundImage from '../../assets/bg.png'

import './ListJob.css'
import FilterPanel from './FilterPanel'
import { useDispatch, useSelector } from 'react-redux'
import { loadAllJobs } from 'store/modules/job'
import Spinner from 'components/spinner/spinner.component'
import JobSidePanel from 'components/JobSidePanel'
import { Button } from 'primereact/button'
import { Avatar } from 'primereact/avatar'
import { ACCOUNT_TYPE } from '../../constants/accountType';
import agentService from 'services/agent.service';


const CardSkeleton = () => (
    <div className="custom-skeleton p-p-4">
        <div className="p-d-flex p-mb-3">
            <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
            <div>
                <Skeleton width="10rem" className="p-mb-2"></Skeleton>
                <Skeleton width="5rem" className="p-mb-2"></Skeleton>
                <Skeleton height=".5rem"></Skeleton>
            </div>
        </div>
        <Skeleton width="100%" height="150px"></Skeleton>
        <div className="p-d-flex p-jc-between p-mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton width="4rem" height="2rem"></Skeleton>
        </div>
    </div>
)
const formatValue = value => new Intl.NumberFormat('en-US', {}).format(value);

const CardItem = ({ job }) => (
    <div className="card mb-2 custom-skeleton p-p-4">
        <div className="p-d-flex p-mb-3">
            <Avatar shape="circle" size="large" className="p-mr-2" image="https://source.unsplash.com/random/60x60" />
            <div>
                <p width="10rem" className="p-mb-2">{job.companyName}</p>
                <p width="5rem" className="p-mb-2">Salary <strong>&#x20A6;{formatValue(job.minSalary)}</strong> - <strong>&#x20A6;{formatValue(job.maxSalary)}</strong></p>
            </div>
        </div>

        <div className="p-d-flex p-jc-between p-mt-3">
            <div width="100%" height="100px">
                <p className="heading-3">Skills</p>
                {['CSS', 'Photoshop'].map((tag, index) => <span key={index} className="mr-1"><Tag>{tag}</Tag></span>)}
            </div>
            <div><Link to={`/jobs/view/${job.id}`} style={styles.viewLinkStyle} className="btn btn-sm">View Job</Link></div>
        </div>
    </div>
)

const ListJob = () => {
    const dispatch = useDispatch();

    const jobs = useSelector(state => state.job.allJobs);
    const loading = useSelector(state => state.job.loading)
    const userAccountType = agentService.Auth.current().accountType;


    useEffect(() => {
        dispatch(loadAllJobs())
    }, [])


    return (
        <div className="list-job-wrapper">
            <div className="list-job-container"
                style={styles.container}
            >
                <div className="list-job-search-container" style={styles.boxContainer}>
                    <div className="list-job-search-box" style={styles.box}>
                        <InputText style={styles.inputStyle} placeholder="Job Title" />
                    </div>
                    <div className="list-job-search-box" style={styles.box}>
                        <InputText style={styles.inputStyle} placeholder="Location" />
                    </div>
                    <div className="list-job-search-box" style={styles.box}>
                        <Dropdown style={styles.inputStyle} placeholder="Category" />
                    </div>
                    <div className="list-job-search-box" style={styles.boxButton}>
                        <button style={styles.btnFind}>Find Jobs</button>
                    </div>
                </div>
                {userAccountType === ACCOUNT_TYPE.CORPORATE && <div className="p-pl-3">
                    <Link to={"/jobs/create"}>
                        <Button label="Post job" className="p-button-rounded p-button" />
                    </Link>
                </div>}
            </div>


            {/* {jobs && <p>{JSON.stringify(jobs)}</p>} */}

            <div className="container mt-5">
                <div className="p-grid">
                    <FilterPanel />
                    <div className="p-col-12 p-md-6">
                        {loading ?
                            <CardSkeleton /> : (<>
                                <div className="header-count-section" style={styles.jobListingHeader}>
                                    <h4 className="ml-4">{jobs.length} matches found</h4>
                                </div>
                                <div className="job-listing-container">
                                    {jobs.map((job, index) => <CardItem key={index} job={job} />)}

                                </div>
                            </>)}
                    </div>
                    <JobSidePanel data={jobs} />
                </div>
            </div>

        </div>
    )
}

/**
 * <div key={index} className="p-card p-4 mt-2 p-d-flex justify-content-between" style={{ position: 'relative' }} >
                                    <Badge severity="success" value={job.contactType} style={{ position: 'absolute', top: 10, right: 10 }}></Badge>
                                    <div className="p-d-flex">
                                        <div className="image-container">
                                            <img
                                                src="https://source.unsplash.com/random/100x100"
                                                alt="image"
                                                className="rounded-circle"
                                            // style={{ borderRadius: '50%', height: '100px', justifyContent: 'center' }}
                                            />
                                        </div> 
                                        <div className="p-2" ></div>
                                        <div>
                                            <ul>
                                                <li className="p-d-flex p-ai-center p-as-center"><h4>{job.title}</h4> </li>
                                                <li>{job.companyName} | <span>Salary <strong>&#x20A6;{formatValue(job.minSalary)}</strong> - <strong>&#x20A6;{formatValue(job.maxSalary)}</strong></span> </li>
                                                <li className="d-flex p-jc-between" style={{ marginTop: '4px' }}>
                                                    <div className="box p-d-flex p-align-items-center">
                                                        <p>Skills</p>
                                                        <div className="d-flex">
                                                            {['CSS', 'Photoshop'].map((tag, index) => <span key={index}><Tag>{tag}</Tag>{" "}</span>)}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>)

 */


const styles = {
    container: {
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: "100%",
        height: '160px',
        position: "relative",
        padding: '100px'
    },

    boxContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    box: {
        border: '2px solid #55B2B0',
        backgroundColor: 'white',
        // padding: '12px 36px'
    },
    inputStyle: {
        width: '100%',
        border: 'none'
    },
    boxButton: {
        border: '2px solid #55B2B0',
        backgroundColor: '#55B2B0',
        padding: '12px 36px',
        color: 'white'
    },
    skillTextStyle: {
        backgroundColor: '#ddd',
        borderRadius: '25%',
        textAlign: 'center',
        fontWeight: 'bold',
        marginRight: '6px',
        padding: '6px'
    },
    jobListingHeader: {
        backgroundColor: '#ccc',
        padding: '6px 0px',
        margin: '16px 0px',
    },
    viewLinkStyle: {
        backgroundColor: '#4E4E4F',
        color: 'white',
        padding: '8px 12px',

    },
    btnFind: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        color: 'white'
    },
    actions: {
        display: 'flex',
        justifyContent: 'flex-end',
    }
}

export default ListJob