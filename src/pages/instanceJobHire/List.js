import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { Link } from 'react-router-dom';
import AppNavBar from 'components/AppNavBar';
import { Button } from 'primereact/button';
import Swal from 'sweetalert2';

import './InstanceJobHire.css'



const InstantHires = (props) => {

    const dispatch = useDispatch();

    const id = 1;


    const [desc, setDesc] = useState('');
    const [selectedCategory, setselectedCategory] = useState(null);


    const handleDeleteInstJob = () => {

    }
    const handleDeleteItem = (Id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#276678',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // dispatch(deleteEventType(Id));
                // Swal.fire(
                //     'Deleted!',
                //     'Your scheduled meeting has been deleted.',
                //     'success'
                // )
                return;
            }
        })

    }



    return (
        <>
            <div className="p-fluid" >
                <div className='d-flex flex-column' >
                    {/* <AppNavBar /> */}
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
                                    {/* <div className="card-header appcolor font-weight-bold">
                                        <div className="hrow">
                                            <h4 className="text-white">Instant Job Hire</h4>
                                            <span><Link to="/newinstancejobhire"><span className="app-color">Back</span> </Link></span>
                                        </div>

                                    </div> */}
                                    <div className="card-body">
                                        <div className="login-pane-right p-4">
                                            <div className="">
                                                <div className="panel-login text-center"></div>
                                                <div className="card">
                                                    <div className="card-body hight-card">

                                                        <div className="dropdown font-weight-bold ml-2" style={{ float: "right" }}>
                                                            <i type="button" className="pi pi-ellipsis-v bg-secondary text-white px-3  p-2  rounded-pill" role="button" id="dropdownMenuLink"
                                                                data-bs-toggle="dropdown" aria-expanded="false"></i>
                                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <li> <Link to={`/instant-hire/edit/${id}`} className="dropdown-item">Edit</Link>
                                                                </li>
                                                                <span>
                                                                    <li className="dropdown-item text-danger" style={{ cursor: "pointer" }} onClick={() => handleDeleteItem(id)} >
                                                                        Delete        </li>
                                                                </span>
                                                            </ul>

                                                        </div>
                                                        {/* <div class="dropdown">
                                                            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                Dropdown link
                                                            </a>

                                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                                                <a class="dropdown-item" href="#">Action</a>
                                                                <a class="dropdown-item" href="#">Another action</a>
                                                                <a class="dropdown-item" href="#">Something else here</a>
                                                            </div>
                                                        </div> */}

                                                        <small className="p-text-secondary">
                                                            {/* <Link to={`/instant-hire/edit/${id}`} > */}
                                                            <p className="font-weight-bold app-color">Machine Service</p>
                                                            <p><span className="font-weight-bold app-color">Job Location : </span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <p><span className="font-weight-bold app-color">Time</span> 115, Gowan estate, Egbeda, Lagos</p>
                                                            <div className="row">
                                                                <div className="p-col-4 p-ml-1"><span className="font-weight-bold app-color">Start Date: </span> 5/16/2021</div>
                                                                <div className="p-col-6"><span className="font-weight-bold app-color">End Date:               </span> 10/16/2021</div>
                                                            </div>
                                                            <p>I urgently need a mechanic to come repair my car,i hink it has an engine problem</p>
                                                            {/* </Link> */}
                                                        </small>
                                                    </div>
                                                </div>
                                                <div className="card p-mt-1 hight-card" >
                                                    <div className="card-body">

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
                                                <div className="card p-mt-1 hight-card">
                                                    <div className="card-body">

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
