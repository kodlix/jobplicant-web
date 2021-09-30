import { Dialog } from 'primereact/dialog';
import React from 'react';

import './JobCvModal.css'

const JobCvCardItem = ({ cvData }) => {
    const [selected, setSelected] = React.useState(false);

    const handleToggle = () => {
        setSelected(!selected)
    }

    const apply = () => {
        console.log('apply for job')
    }

    return (
        <div className="p-d-flex p-jc-start p-as-center" onClick={handleToggle}>
            {/* <div className={`checkbox ${selected ? 'active' : ''}`}></div> */}
            <div className="card-content ">
                <h4 className="title">{cvData.title}</h4>
                <p className="subtitle">{cvData.description}</p>
            </div>
            <div className=" ml-auto">
            <button className="btn btn-primary" onClick={apply}>Apply</button>
            </div>
        </div>
    )
}

export default ({ cvData, showModal, setShowModal }) => {

    const onHide = () => setShowModal(false)

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