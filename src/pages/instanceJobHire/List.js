import React from 'react';


import './InstanceJobHire.css'
import { Link } from 'react-router-dom';
import AppNavBar from 'components/AppNavBar';
import { Button } from 'primereact/button';


const List = () => {


    const id = 1;



    const handleDeleteInstJob = () => {

    }



    return (
        <>
            <div className="p-fluid" >
                <div className='d-flex flex-column' >
                    <AppNavBar />
                    <div className="p-grid">
                        <div className="bgcolor p-col-12"
                            style={
                                {
                                    minHeight: '102vh',
                                    margin: 0
                                }
                            }>
                            <div className="left-content p-col-12 mx-auto">
                                <div className="card card-size-list">
                                    <div className="card-header header-color font-weight-bold">
                                        <div className="hrow">
                                            <h4 className="text-white">Instance Job Hire Applicant</h4>
                                            {/* <span><Link to="/newinstancejobhire"><span className="app-color">Back</span> </Link></span> */}
                                        </div>

                                    </div>
                                    <div className="card-body">
                                        <div className="login-pane-right p-4">
                                            <div className="">
                                                <div className="panel-login text-center"></div>
                                                <div className="panel-signup table-responsive">
                                                    <table className="table mb-0">
                                                        <thead className="">
                                                            <tr>
                                                                <th scope="col" className="border-1">#</th>
                                                                <th scope="col" className="border-1">Job Services</th>
                                                                <th scope="col" className="border-1">Location</th>
                                                                <th scope="col" className="border-1">Job Date</th>
                                                                <th scope="col" className="border-1">Time</th>
                                                                <th scope="col" className="border-1">Description</th>
                                                                <th scope="col" className="border-1">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr className="">
                                                                <td className="align-middle border-top-1">1</td>
                                                                <td className="align-middle border-top-1"><Link to={`/instancejobhire/view/${id}`}>Mechine Service</Link></td>
                                                                <td className="align-middle border-top-1">Gowan Estate</td>
                                                                <td className="align-middle border-top-1">12/2/2021</td>
                                                                <td className="align-middle border-top-1">10:00 PM</td>
                                                                <td className="align-middle border-top-1">I need a Mechine that will will fix my car</td>
                                                                <td className="text-muted align-middle border-top-1">
                                                                    <Link to={`/instancejobhire/edit/${id}`} className="ml-2"><i
                                                                        className="pi pi-pencil dropdown-item-icon" title="Edit"></i></Link> &nbsp; &nbsp;

                                                                           <Link onClick={() => handleDeleteInstJob(id)}><i
                                                                        className="pi pi-eye dropdown-item-icon" title="View"></i></Link>   &nbsp; &nbsp;
                                                                      <Link className="text-danger" onClick={() => handleDeleteInstJob(id)}><i
                                                                        className="pi pi-trash dropdown-item-icon text-danger" title="Delete"></i></Link>
                                                                </td>
                                                            </tr>
                                                            <tr className="">
                                                                <td className="align-middle border-top-1">2</td>
                                                                <td className="align-middle border-top-1"><Link to={`/instancejobhire/view/${id}`}>Mechine Service</Link></td>
                                                                <td className="align-middle border-top-1">Gowan Estate</td>
                                                                <td className="align-middle border-top-1">12/2/2021</td>
                                                                <td className="align-middle border-top-1">10:00 PM</td>
                                                                <td className="align-middle border-top-1">I need a Mechine that will will fix my car</td>
                                                                <td className="text-muted align-middle border-top-1">
                                                                    <Link to={`/instancejobhire/edit/${2}`} className="ml-2"><i
                                                                        className="pi pi-pencil dropdown-item-icon" title="Edit"></i></Link> &nbsp; &nbsp;

                                                                <Link onClick={() => handleDeleteInstJob(id)}><i
                                                                        className="pi pi-eye dropdown-item-icon" title="View"></i></Link>   &nbsp; &nbsp;
                                                                       <Link className="text-danger" onClick={() => handleDeleteInstJob(id)}><i
                                                                        className="pi pi-trash dropdown-item-icon text-danger" title="Delete"></i></Link>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

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

export default List;
