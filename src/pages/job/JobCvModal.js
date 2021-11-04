import { Dialog } from 'primereact/dialog';
import React from 'react';

import './JobCvModal.css'
import { useDispatch, useSelector } from 'react-redux';
import { apply } from 'store/modules/job';

const JobCvCardItem = ({ cvData, setShowModal }) => {
    const [selected, setSelected] = React.useState(false);
    const dispatch = useDispatch()
    const requesting = useSelector(state => state.job.jobApplicationRequest)
   

    const handleToggle = () => {
        setSelected(!selected)
    }

    const handleJobApply = () => {
        console.log('apply for job', cvData)
        const { id, url } = cvData;
        dispatch(apply(id, url))
    }

    return (
        <div className="p-d-flex p-jc-start p-as-center" onClick={handleToggle}>
            {/* <div className={`checkbox ${selected ? 'active' : ''}`}></div> */}
            <div className="card-content ">
                <h4 className="title">{cvData.title}</h4>
                <p className="subtitle">{cvData.description}</p>
            </div>
            <div className=" ml-auto">
            <button className="btn btn-primary" onClick={handleJobApply} disabled={requesting}>{!requesting ? 'Apply' : 'Please wait...'}</button>
            </div>
        </div>
    )
}

export default ({ cvData, showModal, setShowModal }) => {

    const onHide = () => setShowModal(false)

    const response = useSelector( state => state.job.jobApplicationResponse)
    
    React.useEffect(() => {
        if(response){
            setShowModal(false)
        }
    }, [response])

    return (
        <Dialog
            visible={showModal}
            onHide={onHide}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
            header="Select CV to use"
        >

            {cvData === null
                ? <h4>No CV file uploaded</h4>
                : (
                    <div className="card">
                        <div className="card-body">
                            <JobCvCardItem cvData={cvData} />
                        </div>
                   
                    </div>
                )
            }

        </Dialog>
    )
}