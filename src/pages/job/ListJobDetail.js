import Spinner from 'components/spinner/spinner.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { apply, applyJob, viewJob } from 'store/modules/job'
import BackgroundImage from '../../assets/bg.png'
import parser from 'html-react-parser'

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
    btnApply: {
        backgroundColor: '#5B2946',
        color: 'white',
        padding: '12px 0',
        marginTop: '10px',
        fontSize: '18px',
        fontWeight: 500
    },
    overListItem: {
        marginBottom: '16px'
    },
    overviewListHeader: {
        fontSize: '18px',
        fontWeight: 500,
    },
    overviewListText: {
        fontSize: '16px',
        fontWeight: 'normal'
    },
    contactItem: {
        marginBottom: '10px',
        fontSize: '16px',
        fontWeight: 500
    }
}

const ListJobDetail = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const param = useParams();

    const jobDetail = useSelector(state => state.job.jobDetail)
    const jobApplicationRequest = useSelector(state => state.job.jobApplicationRequest)
    const jobApplicationResponse = useSelector(state => state.job.jobApplicationResponse)

    useEffect(() => {
       dispatch(viewJob(param.jobListId))
    }, []);
    
    const formatValue = value => new Intl.NumberFormat('en-US', {}).format(value);

    const handleApplyForJob = (id) => dispatch(apply(id, {"jobId": jobDetail.id}))

    return (
        <>
            <div style={styles.container}>

            </div>

            {jobDetail === null && <Spinner />}
            {jobDetail && <div className="container">
                <div className="row mt-4 mb-5">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-end">
                            <button onClick={() => history.goBack()} className="btn btn-primary" style={{backgroundColor: '#5B2946', border: 'none', padding: '8px 24px'}}><i className="pi pi-arrow-left"></i> Back</button>
                        </div>
                        <div className="p-card p-4 mt-2">
                            <h4 className="p-title">Job Description</h4>
                            <p className="mt-3">{jobDetail.description === null ? '' : parser(jobDetail.description)}</p>
                        </div>
                        <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Skills and Qualification</h4>
                            <div className="mt-3">
                                <ul>
                                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Aenean eu diam vulputate, efficitur tellus et, lacinia massa.</li>
                                    <li>Etiam condimentum risus vitae orci tincidunt, non venenatis tortor dictum.</li>
                                    <li>Quisque a elit eget mi fringilla gravida.</li>
                                    <li>Integer eleifend dui sed tristique varius.</li>
                                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Aenean eu diam vulputate, efficitur tellus et, lacinia massa.</li>
                                    <li>Etiam condimentum risus vitae orci tincidunt, non venenatis tortor dictum.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Skills and Qualification</h4>
                            <div className="mt-3">
                                <ul>
                                    <li> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Aenean eu diam vulputate, efficitur tellus et, lacinia massa.</li>
                                    <li>Etiam condimentum risus vitae orci tincidunt, non venenatis tortor dictum.</li>
                                    <li>Quisque a elit eget mi fringilla gravida.</li>
                                    <li>Integer eleifend dui sed tristique varius.</li>
                                </ul>
                            </div>
                        </div>
                        <button onClick={() => handleApplyForJob(jobDetail.id)} className="btn btn-block" style={styles.btnApply}>{jobApplicationRequest ? <span><i className="pi pi-spin pi-spinner"></i> Please wait...</span> : `Apply For This Job`}</button>
                    </div>
                    <div className="col-md-3">
                        <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Overview</h4>
                            <hr />
                            <div className="overview-list">
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Offered Salary</p>
                                    <p style={styles.overviewListText}>&#x20A6;{formatValue(jobDetail.minSalary)} - &#x20A6;{formatValue(jobDetail.maxSalary)}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Industry</p>
                                    <p style={styles.overviewListText}>{jobDetail.industry}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Experience</p>
                                    <p style={styles.overviewListText}>{jobDetail.minYearOfExperience} year(s)</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Qualification</p>
                                    <p style={styles.overviewListText}>{jobDetail.minQualification}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Job Location</p>
                                    <p style={styles.overviewListText}>{jobDetail.location}</p>
                                </div>
                            </div>
                        </div>
                        {!jobDetail.hideCompanyName && ( <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Company Address</h4>
                            <hr />
                            <ul className="overview-list">
                                <li style={styles.contactItem}>{jobDetail.address}</li>
                                <li style={styles.contactItem}>{jobDetail.contactPhone}</li>
                                <li style={styles.contactItem}>{jobDetail.email}</li>
                                <li style={styles.contactItem}>{jobDetail.jobUrl}</li>
                            </ul>
                        </div>)}
                    </div>
                </div>
            </div>}
        </>
    )
}

export default ListJobDetail