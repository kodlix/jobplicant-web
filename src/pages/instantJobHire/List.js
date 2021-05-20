import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { confirmDialog } from 'primereact/confirmdialog';
import './InstantJobHire.css'



const InstantHires = () => {

    const [] = useState(false);
    const toast = useRef(null);

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
    }

    const reject = () => {
        toast.currents.show({ severity: 'info', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
    }




    const id = 1;

    const deleteRequest = () => {
        confirmDialog({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'pi pi-info-circle',
            acceptClassName: 'p-button-danger',
            accept,
            reject
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
        <>
            <div className="p-fluid" >
                <div className='d-flex flex-column' >
                    <div className="p-grid">
                        <div className="bgcolor p-col-12"
                            style={
                                {
                                    minHeight: '102vh',
                                    margin: 0
                                }
                            }>
                            <div className="left-content p-col-12 p-mt-0 mx-auto ">
                                <div className="card card-size-list ">

                                    <div className="card-body">
                                        <div className="login-pane-right p-4">
                                            <div className="">
                                                <div className="panel-login text-center"></div>
                                                <div className="card">
                                                    <div className="card-body highlight-card">

                                                        <div className="dropdown font-weight-bold ml-2" style={{ float: "right" }}>
                                                            <i type="button" className="pi pi-ellipsis-v bg-secondary text-white px-3  p-1  rounded-pill" role="button" id="dropdownMenuLink"
                                                                data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li> <Link to={`/instant-hire/edit/${id}`} className="dropdown-item">Edit</Link>
                                                                </li>
                                                                <span>
                                                                    <li className="dropdown-item text-danger" style={{ cursor: "pointer" }}
                                                                        onClick={deleteRequest}
                                                                    >
                                                                        Delete        </li>
                                                                </span>
                                                            </ul>

                                                        </div>

                                                        <small className="p-text-secondary">
                                                            <p className="font-weight-bold app-color">Machine Service</p>
                                                            <p><span className="font-weight-bold app-color">Job Location : </span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <p><span className="font-weight-bold app-color">Time</span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <div className="row">
                                                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                                                            </div>
                                                            <p>I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="card p-mt-1 " >
                                                    <div className="card-body highlight-card">
                                                        <div className="dropdown font-weight-bold ml-2" style={{ float: "right" }}>
                                                            <i type="button" className="pi pi-ellipsis-v bg-secondary text-white px-3  p-1  rounded-pill" role="button" id="dropdownMenuLink"
                                                                data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li> <Link to={`/instant-hire/edit/${id}`} className="dropdown-item">Edit</Link>
                                                                </li>
                                                                <span>
                                                                    <li className="dropdown-item text-danger" style={{ cursor: "pointer" }}  >
                                                                        Delete        </li>
                                                                    {/* onClick={() => handleDeleteItem(id)} */}
                                                                </span>
                                                            </ul>

                                                        </div>

                                                        <small className="p-text-secondary">
                                                            <p className="font-weight-bold app-color">Fashion Design Service</p>
                                                            <p><span className="font-weight-bold app-color">Job Location : </span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <p><span className="font-weight-bold app-color">Time</span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <div className="row">
                                                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                                                            </div>
                                                            <p>I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>

                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="card p-mt-1">
                                                    <div className="card-body highlight-card">
                                                        <div className="dropdown font-weight-bold ml-2" style={{ float: "right" }}>
                                                            <i type="button" className="pi pi-ellipsis-v bg-secondary text-white px-3  p-1  rounded-pill" role="button" id="dropdownMenuLink"
                                                                data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li> <Link to={`/instant-hire/edit/${id}`} className="dropdown-item">Edit</Link>
                                                                </li>
                                                                <span>
                                                                    <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} >
                                                                        Delete        </li>
                                                                </span>
                                                            </ul>

                                                        </div>

                                                        <small className="p-text-secondary">
                                                            <p className="font-weight-bold app-color">Plumming Service</p>
                                                            <p><span className="font-weight-bold app-color">Job Location : </span><span>115, Gowan estate, Egbeda, Lagos</span> </p>
                                                            <p><span className="font-weight-bold app-color">Time</span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <div className="row">
                                                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                                                            </div>
                                                            <p>I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>

                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstantHires;
