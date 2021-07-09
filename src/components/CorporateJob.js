import moment from 'moment';
import { Badge } from 'primereact/badge';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadJobs } from 'store/modules/job';



const CorporateJob = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadJobs())
    }, [])

    const jobs = useSelector(state => state.job.jobs);

    if (jobs === null || !jobs.length)
        return <div className="d-flex justify-content-center p-5">
            <h3>No Jobs listed yet!</h3>
        </div>

    return (<>
        {jobs && jobs.map((job, index) => (
            <div className="p-card p-4 mt-2 p-d-flex justify-content-between" key={index}>
               {/* <p>{JSON.stringify(job)}</p> */}
                <div className="d-flex">
                    <img
                        src="https://source.unsplash.com/random/100x100"
                        className="rounded circle"
                        alt="image"
                    />
                    <div className="p-2" ></div>
                    <div>
                        <ul>
                            <li className="p-d-flex p-ai-center p-as-center"><h4>{job.title}</h4> <Badge severity="success"></Badge></li>
                            <li>{job.companyName}</li>
                            <li className="d-flex">
                                <div className="box">
                                    <h6>Salary</h6>
                                    <p>Min {job.minSalary}</p>
                                    <p>Max {job.maxSalary}</p>
                                </div>
                                {/* <div className="box">
                                    <h6>Skills</h6>
                                    <p>{skills }</p>
                                </div> */}
                                <a target="_blank" href={job.jobUrl}>{job.jobUrl}</a>
                                <p>Industry: {job.industry}</p>
                            </li>
                            <li>
                                <p>Start date {moment(job.startDate).format("MMM d, yyyy")}</p>
                                <p>End date {moment(job.endDate).format("MMM d, yyyy")}</p>
                            </li>
                            <li>
                                <p>Location: {job.location}</p>
                                <p>State: {job.state}</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className="p-mr-2 p-as-end"> <a href="#"><i className="pi pi-eye" style={{ 'fontSize': '2em', color: 'black' }}></i></a> </span>
            </div>
        ))}
    </>)
}

export default CorporateJob