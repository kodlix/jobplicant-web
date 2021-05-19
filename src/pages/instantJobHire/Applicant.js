import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
import './InstantJobHire.css'

const Applicant = () => {


    const [rating, setRating] = useState(4);
    const [modalDisplay, setModalDisplay] = useState(false);



    return (
        <>
            <div className='d-flex flex-column' >
                <div className="p-grid">
                    <div className="bgcolor p-col-12"
                        style={
                            {
                                minHeight: '102vh',
                                margin: 0
                            }
                        }>
                        <div className=" left-content p-col-12 p-mt-0 mx-auto ">
                            <div className="card card-size">

                                <div className="card-body p-pt-0">
                                    <div className="p-4">
                                        <div class="row">
                                            {/* <div className="col-3 col-sm-12"> */}
                                            <div class="col-md-4 col-sm-12 highlight-card p-pb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <div class="card">
                                                    <img src="../../assets/user-icon.png" height="150px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                                        <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                        <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                        <p class="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-12 highlight-card p-pb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">

                                                <div class="card">
                                                    <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                                        <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                        <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                        <p class="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-12 highlight-card p-pb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <div class="card">
                                                    <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                                        <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                        <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                        <p class="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                        </p>                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-12 highlight-card p-pb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <div class="card">
                                                    <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                                        <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                        <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                        <p class="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                        </p>                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 col-sm-12 highlight-card p-pb-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                <div class="card">
                                                    <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                                    <div class="card-body">
                                                        <p class="card-title font-weight-bold app-color">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                                        <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                                        <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                                        <p class="card-text"><span className="font-weight-bold">Rating :
                                                        </span> <span className="p-p-0"> <Rating value={rating} disabled={true} cancel={false} onChange={(e) => setRating(e.value)} stars={5} /></span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* </div> */}
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
            </div>
            {/* View an Applicant Modal */}
            {/* <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                ...
            </div> */}

            <div className="modal fade p-mt-6" id="staticBackdrop" modalDisplay={modalDisplay} data-backdrop="static" data-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            {/* <h5 className="modal-title font-weight-bold text-center text-primary" id="staticBackdropLabel">Applicant Name</h5> */}
                            <img src="../../assets/user-icon.png " width="10px" height="200px" class="card-img-top" alt="..." />
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
                            <p class="card-text"><span className="font-weight-bold">Rating :
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
