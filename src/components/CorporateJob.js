import moment from 'moment';
import ViewAspirantModal from 'pages/company/ViewAspirantModal';
import { Badge } from 'primereact/badge';
import { Tag } from 'primereact/tag';
import {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { viewApplicant } from 'store/modules/job';


const CorporateJob = ({ jobs }) => {
    const dispatch = useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [selectedJobId, setSelectedJobId] = useState('')

    const onHide = () => setShowModal(false);

    const formatValue = value => new Intl.NumberFormat('en-US', {}).format(value);

    const handleShowApplicants = (jobId) => {
        setShowModal(true)
        setSelectedJobId(jobId)
        // dispatch(viewApplicant(jobId));
    }

    if (jobs && !jobs.length)
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
                            <li>{job.companyName} | <span>Salary <strong>&#x20A6;{formatValue(job.minSalary)}</strong> - <strong>&#x20A6;{formatValue(job.maxSalary)}</strong></span></li>
                            <li>
                                <a target="_blank" href={job.jobUrl}>{job.jobUrl}</a> <span>Industry: {job.industry}</span>
                            </li>
                            <li style={{display: 'flex', alignItems: 'center'}}>
                                From <Tag>{moment(job.startDate).format("MMM d, yyyy")}</Tag>{" - "} To <Tag>{moment(job.endDate).format("MMM d, yyyy")}</Tag>
                            </li>
                            <li><span>Location: <strong>{job.location}</strong></span></li>
                        </ul>
                    </div>
                </div>
                <span className="p-mr-2 p-as-end"> <a href="#" onClick={(e) => {
                    e.preventDefault(); 
                    handleShowApplicants(job.id);
                    }}><i className="pi pi-eye" style={{ 'fontSize': '2em', color: 'black' }}></i></a> </span>
            </div>
        ))}
        <ViewAspirantModal showModal={showModal} onHide={onHide} jobId={selectedJobId} />
    </>)
}

export default CorporateJob