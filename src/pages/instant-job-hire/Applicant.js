import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import AppNavBar from 'components/AppNavBar';
import Job from './Job';

import './InstantJobHire.css'


// import { DataTable } from 'primereact/datatable';
// import { Column } from 'primereact/column';
// import { CustomerService } from '../service/CustomerService';
// import { InputText } from 'primereact/inputtext';
// import { MultiSelect } from 'primereact/multiselect';
// import { Dropdown } from 'primereact/dropdown';

const Applicant = () => {


    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);

    const representatives = [
        { name: "Amy Elsner", image: 'amyelsner.png' },
        { name: "Anna Fali", image: 'annafali.png' },
        { name: "Asiya Javayant", image: 'asiyajavayant.png' },
        { name: "Bernardo Dominic", image: 'bernardodominic.png' },
        { name: "Elwin Sharvill", image: 'elwinsharvill.png' },
        { name: "Ioni Bowcher", image: 'ionibowcher.png' },
        { name: "Ivan Magalhaes", image: 'ivanmagalhaes.png' },
        { name: "Onyama Limba", image: 'onyamalimba.png' },
        { name: "Stephen Shaw", image: 'stephenshaw.png' },
        { name: "XuXue Feng", image: 'xuxuefeng.png' }
    ];



    return (
        <>
            <div className='d-flex flex-column background' >
                {/* <div className="container"> */}
                <AppNavBar />
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-pl-3">
                            <div className="p-grid">
                                <div className="p-col">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Rating
                                </button>
                                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                     Unrated
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                     Good Fit
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                         Maybe
                                    </li>
                                            <li class="dropdown-item pr-1">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                            Not a fit
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-col">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Years of experience
                                </button>
                                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                            {/* <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                     Less than 1 year
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                     1 to 2 years
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                        &nbsp; 3 to 5 years
                                    </li>
                                            <li class="dropdown-item pr-1">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                        &nbsp; 6 to 10 years
                                    </li>
                                            <li class="dropdown-item pr-1">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                             &nbsp; More than 10 years
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="p-col">
                                    <div class="dropdown">
                                        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                            Sorted by
                                </button>
                                        <ul class="dropdown-menu " aria-labelledby="dropdownMenuButton1">
                                            {/* <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                     Option 1
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />&nbsp;
                                    Option 2
                                    </li>
                                            <li class="dropdown-item">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                        &nbsp; Option 3
                                    </li>
                                            <li class="dropdown-item pr-1">
                                                <input class="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                        &nbsp; Option 4
                                    </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-col-12 p-md-9">
                            {/* <div className="p-pl-6 p-pt-2"> */}
                            <h5 className="font-weight-bold p-pt-3">5 Applicants (3 results) </h5>
                            {/* </div> */}
                            <hr />
                        </div>
                        <div className="card card-size">
                            <div className="card-body p-pt-0">
                                <div className="p-4">
                                    <div className="row">
                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div className="card">
                                                <img src="../../assets/user-icon.png" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>

                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm" />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >

                                            <div className="card">
                                                <img src="../../assets/user-icon.png" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>

                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm" />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div className="card">
                                                <img src="../../assets/user-icon.png" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>

                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm" />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div className="card">
                                                <img src="../../assets/user-icon.png" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>

                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm" />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4 col-sm-12 highlight-card p-pb-3" >
                                            <div className="card">
                                                <img src="../../assets/user-icon.png" height="150px" className="card-img-top" alt="..." />
                                                <div className="card-body" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                    <p className="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                    <p className="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                    <p className="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                    <p className="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                    </p>

                                                </div>
                                                <div className="p-grid p-pl-5 p-pb-2">
                                                    <div className="p-pr-2">
                                                        <Button icon="pi pi-check" iconPos="left" label="Accept" id="saveButton" className="p-button-sm" />
                                                    </div>
                                                    <div className="">
                                                        <Button label="Reject" icon="pi pi-times" iconPos="left" id="reject" className="p-button-sm" />
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* Job Component*/}
                        <Job />


                    </div>
                    <div className="p-grid">
                        <div className="col-12">
                            <div className="pagination center">
                                <ul className="pagination-list">
                                    <li><Link to="#"><i className="lni lni-arrow-left"></i></Link></li>
                                    <li className="active"><Link to="#">1</Link></li>
                                    <li><Link to="#">2</Link></li>
                                    <li><Link to="#"><i className="lni lni-arrow-right"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>



            <div className="modal fade p-mt-6" id="staticBackdrop" modalDisplay={modalDisplay} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <img src="../../assets/user-icon.png " width="10px" height="200px" className="card-img-top" alt="..." />

                        </div>
                        <div className="modal-body">
                            <p><span className="font-weight-bold">Funll Name:</span> <span > Chinedu Michael</span></p>
                            <p><span className="font-weight-bold">Location:</span> <span>Egbeda</span></p>
                            <p><span className="font-weight-bold">Address:</span> <span > 113, Gowan Estate</span></p>
                            <p><span className="font-weight-bold"> phone Number: </span><span > 08098765432</span></p>
                            <p ><span className="font-weight-bold">Bio:</span> <span classNam="p-p-0">I'm a mad ass professional at what i do, Also striving to improve</span></p>
                            <p className="card-text"><span className="font-weight-bold">Rating :
                                </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                            </p>
                        </div>
                        <div className="modal-footer py-2">
                            <button type="button" className="btn appcolor text-white" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Applicant
