import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import './InstantJobHire.css'
import { Button } from 'primereact/button';

const Applicant = () => {


    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);



    return (
        <>
            <div className='d-flex flex-column' >
                {/* <div className="content-container"> */}
                <div className="p-grid">
                    <div className="p-col-12 p-md-9">
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
            </div>
            {/* </div> */}



            <div className="modal fade p-mt-6" id="staticBackdrop" modalDisplay={modalDisplay} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title font-weight-bold text-center text-primary" id="staticBackdropLabel">Applicant Name</h5> */}
                            <img src="../../assets/user-icon.png " width="10px" height="200px" className="card-img-top" alt="..." />
                            {/* <button type="button" className="close" data-bs-dismiss="modal" aria-bs-label="Close"> */}
                            {/* <span aria-hidden="true">&times;</span> */}
                            {/* </button> */}
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
