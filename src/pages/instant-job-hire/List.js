import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import './InstantJobHire.css'
import InstantHeader from './instant-header';



const InstantHires = ({ setMode, mode }) => {

    const [visible, setVisible] = useState(false);
    const toast = useRef(null);

    // const accept = () => {
    //     toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    // }

    // const reject = () => {
    //     toast.currents.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    // }




    const id = 1;

    const deleteRequest = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            // accept,
            // reject
        });
    };

    // const handleDeleteItem = (Id) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#276678',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             // dispatch(deleteEventType(Id));
    //             // Swal.fire(
    //             //     'Deleted!',
    //             //     'Your scheduled meeting has been deleted.',
    //             //     'success'
    //             // )
    //             return;
    //         }
    //     })

    // }



    return (
        <div className="p-4">
            <InstantHeader
                title="All Created instant hires"
                setMode={setMode}
                showCreateButton={true}
                mode={mode}
            />
            <div className="">
                <div className="panel-login text-center"></div>
                <div className="highlight-card p-p-2">
                    <div className="float-right ">
                        <span><i className="pi pi-pencil" onClick={() => setMode("edit")} ></i></span>
                        <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.5rem' }} onClick={deleteRequest}></i>

                    </div>
                    <Link to={'/instant-hire-applicants'}>
                        <small className="p-text-secondary">
                            <p className="font-weight-bold app-color">Fashion Design Service</p>
                            <p><span className="font-weight-bold app-color">Job Location : </span> 115, Gowan estate, Egbeda, Lagos</p>
                            <p><span className="font-weight-bold app-color">Time : </span> Now</p>
                            <div className="row">
                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                            </div>
                            <p><span className="font-weight-bold app-color">Job Description : </span> I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>
                        </small></Link>
                </div>
                <hr />

                <div className="highlight-card p-p-2">

                    <div className="float-right ">
                        <span><i className="pi pi-pencil" onClick={() => setMode("edit")} ></i></span>
                        <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.5rem' }} onClick={deleteRequest}></i>

                    </div>
                    <Link to={'/instant-hire-applicants'}>
                        <small className="p-text-secondary">
                            <p className="font-weight-bold app-color">Fashion Design Service</p>
                            <p><span className="font-weight-bold app-color">Job Location : </span> 115, Gowan estate, Egbeda, Lagos</p>
                            <p><span className="font-weight-bold app-color">Time : </span> Now</p>
                            <div className="row">
                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                            </div>
                            <p><span className="font-weight-bold app-color">Job Description : </span> I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>

                        </small></Link>
                </div>
                <hr />

                <div className="highlight-card p-p-2">

                    <div className="float-right">
                        <span><i className="pi pi-pencil" onClick={() => setMode("edit")} ></i></span>
                        <i className="pi pi-trash" style={{ fontSize: '0.8rem', padding: '.5rem' }} onClick={deleteRequest}></i>

                    </div>
                    <Link to={'/instant-hire-applicants'}>
                        <small className="p-text-secondary">
                            <p className="font-weight-bold app-color">Fashion Design Service</p>
                            <p><span className="font-weight-bold app-color">Job Location : </span><span>115, Gowan estate, Egbeda, Lagos</span> </p>
                            <p><span className="font-weight-bold app-color">Time : </span> Now</p>
                            <div className="row">
                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                            </div>
                            <p><span className="font-weight-bold app-color">Job Description : </span> I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>

                        </small></Link>
                </div>
            </div>
        </div>
    )
}

export default InstantHires;
