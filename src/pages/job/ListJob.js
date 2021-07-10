import { Badge } from 'primereact/badge'
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

const ListJob = () => {
    const dispatch = useDispatch();

    const jobs = useSelector(state => state.job.allJobs);
    const loading = useSelector(state => state.job.loading)

    useEffect(() => {
        dispatch(loadAllJobs())
    }, [])

    const formatValue = value => new Intl.NumberFormat('en-US', {}).format(value);

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
            </div>

            {/* {jobs && <p>{JSON.stringify(jobs)}</p>} */}

            <div className="container mt-5">
                <div className="p-grid">
                    <FilterPanel />
                    <div className="p-md-6">
                        {loading ? <Spinner /> : (<>
                            <div className="header-count-section" style={styles.jobListingHeader}>
                                <h4>{jobs.length} matches found</h4>
                            </div>
                            <div className="job-listing-container">
                                {jobs.map((job, index) => (<div key={index} className="p-card p-4 mt-2 p-d-flex justify-content-between" style={{ position: 'relative' }} >
                                    <Badge severity="success" value={job.contactType} style={{ position: 'absolute', top: 10, right: 10 }}></Badge>
                                    <div className="d-flex">
                                        <div className="image-container">
                                            <img
                                                src="https://source.unsplash.com/random/100x100"
                                                alt="image"
                                                style={{ borderRadius: '50%', height: '100px', justifyContent: 'center' }}
                                            />
                                        </div>
                                        <div className="p-2" ></div>
                                        <div>

                                            <ul>
                                                <li className="p-d-flex p-ai-center p-as-center"><h4>{job.title}</h4> </li>
                                                <li>{job.companyName} | <span>Salary <strong>&#x20A6;{formatValue(job.minSalary)}</strong> - <strong>&#x20A6;{formatValue(job.maxSalary)}</strong></span> </li>
                                                <li className="d-flex" style={{ marginTop: '10px' }}>
                                                    <div className="box">
                                                        <h6>Skills</h6>
                                                        <div className="d-flex">
                                                            {['CSS', 'Photoshop'].map((tag, index) => <span key={index}><Tag>{tag}</Tag>{" "}</span>)}
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className="p-mr-2 p-as-end"> <Link to={`/jobs/view/${job.id}`} class="btn btn-teal" style={styles.viewLinkStyle}>View <i className="pi pi-arrow-right"></i></Link> </span>
                                </div>)
                                )}

                            </div>
                        </>)}
                    </div>
                    <JobSidePanel data={jobs} />
                </div>
            </div>

        </div>
    )
}


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
        padding: '12px 0px 36px 0px',
        margin: '16px 0px',
    },
    viewLinkStyle: {
        backgroundColor: '#4E4E4F',
        color: 'white',
        padding: '8px 36px'
    },
    btnFind: {
        border: 'none',
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        color: 'white'
    }
}

export default ListJob