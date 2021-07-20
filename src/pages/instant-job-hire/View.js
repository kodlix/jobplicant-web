import Spinner from 'components/spinner/spinner.component'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import BackgroundImage from '../../assets/bg.png'
import { applyInstantJob, loadInstantJob } from 'store/modules/instantJob'
import moment from 'moment'
import { confirmDialog } from 'primereact/confirmdialog'

const View = () => {
    const dispatch = useDispatch()
    const history = useHistory();
    const param = useParams();
    console.log("param", param);

    const instantJobDetail = useSelector(state => state.instantJob.instantjob)
    const jobApplicationRequest = useSelector(state => state.job.jobApplicationRequest)
    const loading = useSelector(state => state.job.loading)
    console.log("details", instantJobDetail);

    useEffect(() => {
        dispatch(loadInstantJob(param.id))
    }, []);

    const handleApply = (id) => {
        confirmDialog({
            message: 'You are about to apply for this job?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                dispatch(applyInstantJob(id))
            },
            reject: () => {
                return;
            },
        });
    }

    if (instantJobDetail === null)
        return <Spinner />

    return (
        <>
            <div style={styles.container}>
                <div className="container">
                    <div className="d-flex" style={styles.topBarContainer}>
                        <div className="company-logo" >
                            <img src="https://source.unsplash.com/random/100x100" alt="company-logo" style={{ borderRadius: '50%', height: '75px', justifyContent: 'center' }} />
                        </div>
                        <div className="company-caption" style={styles.topBarTextContainer}>
                            <h4 style={styles.topBarHeaderTextStyle}>{instantJobDetail.title}</h4>
                            <p style={styles.topBarSubHeaderTextStyle}>{instantJobDetail.companyName}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4 mb-5">
                    <div className="col-md-9">
                        <div className="d-flex justify-content-end">
                            <button onClick={() => history.goBack()} className="btn btn-primary" style={{ backgroundColor: '#5B2946', border: 'none', padding: '8px 24px' }}><i className="pi pi-arrow-left"></i> Back</button>
                        </div>
                        <div className="p-card p-4 mt-2">
                            <h4 className="p-title">Job Description</h4>
                            <p className="mt-3">{instantJobDetail?.description}</p>

                        </div>
                        <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Instant Job Detail</h4>
                            <div className="mt-3">
                                <div className="p-text-secondary">
                                    <p className="font-weight-bold app-color ">Job Service : {instantJobDetail.service} </p>
                                    <p><span className="font-weight-bold app-color">Job Location : </span> {instantJobDetail.location}</p>
                                    <p><span className="font-weight-bold app-color">Address : </span>{instantJobDetail.address} </p>
                                    <p><span className="font-weight-bold app-color">Phone Number : </span>{instantJobDetail.phoneNumber} </p>
                                    {/* <p><span className="font-weight-bold app-color">Job Description : </span> {instantJobDetail.description} </p> */}
                                    <div className="p-grid">
                                        <div className="p-col-4"><span className="font-weight-bold app-color">Start Date: </span> {moment(instantJobDetail.startDate).format('MMMM DD, YYYY')} </div>
                                        <div className="p-col-6"><span className="font-weight-bold app-color">End Date: </span> {moment(instantJobDetail.endDate).format('MMMM DD, YYYY')}</div>
                                    </div>
                                    <p className="float-right font-weight-bold"> {moment(instantJobDetail.createdAt).fromNow()} </p>

                                </div>
                            </div>
                        </div>

                        <button onClick={() => handleApply(instantJobDetail.id)} className="btn btn-block" style={styles.btnApply}>{jobApplicationRequest ? <span><i className="pi pi-spin pi-spinner"></i> Please wait...</span> : `Apply For This Job`}</button>
                    </div>
                    <div className="col-md-3">
                        {/* <div className="p-card p-4 mt-3">
                            <h4 className="p-title">Overview</h4>
                            <hr />
                            <div className="overview-list">
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Offered Salary</p>
                                    <p style={styles.overviewListText}>&#x20A6;{formatValue(instantJobDetail.minSalary)} - &#x20A6;{formatValue(instantJobDetail.maxSalary)}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Industry</p>
                                    <p style={styles.overviewListText}>{instantJobDetail.industry}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Experience</p>
                                    <p style={styles.overviewListText}>{instantJobDetail.minYearOfExperience} year(s)</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Qualification</p>
                                    <p style={styles.overviewListText}>{instantJobDetail.minQualification}</p>
                                </div>
                                <div className="overview-list-item" style={styles.overListItem}>
                                    <p style={styles.overviewListHeader}>Job Location</p>
                                    <p style={styles.overviewListText}>{instantJobDetail.location}</p>
                                </div>
                            </div>
                        </div> */}
                        {/* {!instantJobDetail.hideCompanyName && (<div className="p-card p-4 mt-3">
                            <h4 className="p-title">Company Address</h4>
                            <hr />
                            <ul className="overview-list">
                                <li style={styles.contactItem}>{instantJobDetail.address}</li>
                                <li style={styles.contactItem}>{instantJobDetail.contactPhone}</li>
                                <li style={styles.contactItem}>{instantJobDetail.email}</li>
                                <li style={styles.contactItem}>{instantJobDetail.jobUrl}</li>
                            </ul>
                        </div>)} */}
                    </div>
                </div>
            </div>
        </>
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

    },
    topBarContainer: {
        width: '600px', marginTop: '30px'
    }
    ,
    topBarTextContainer: {
        alignSelf: 'center'
    },
    topBarHeaderTextStyle: {
        fontSize: '22px',
        fontWeight: '500',
        marginLeft: '8px',
        marginBottom: '4px'
    },
    topBarSubHeaderTextStyle: {
        color: 'black',
        fontSize: '16px',
        fontWeight: '500',
        marginLeft: '8px'
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


export default View