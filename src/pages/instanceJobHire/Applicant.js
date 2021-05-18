import React from 'react';
import { Link } from 'react-router-dom';
import './InstanceJobHire.css'

const Applicant = () => {
    const rating = 4.5;

    return (
        <>
            <section>
                <div className="applicant-width">
                    <div className="card card-size p-mt-2">
                        <div className="card-body p-pt-0">
                            <div class="row row-cols-12 row-cols-md-3 g-4">
                                <div class="col-4">
                                    <div class="card mt-3">
                                        <img src="../../assets/user-icon.png" height="150px" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title font-weight-bold">Chinedu Michael - <span className="font-weight-bold">Plumber</span> </p>

                                            <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                            <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                            <p class="card-text"><span className="font-weight-bold">Price Rate :</span> 4000</p>
                                            <p class="card-text"><span className="font-weight-bold">Ratings :</span> ****</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mt-3">
                                        <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title font-weight-bold">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                            <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                            <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                            <p class="card-text"><span className="font-weight-bold">Price Rate :</span> 4000</p>
                                            <p class="card-text"><span className="font-weight-bold">Ratings :</span> ****</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mt-3">
                                        <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title font-weight-bold">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                            <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                            <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                            <p class="card-text"><span className="font-weight-bold">Price Rate :</span> 4000</p>
                                            <p class="card-text"><span className="font-weight-bold">Ratings :</span> ****</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mt-3">
                                        <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title font-weight-bold">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                            <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                            <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                            <p class="card-text"><span className="font-weight-bold">Price Rate :</span> 4000</p>
                                            <p class="card-text"><span className="font-weight-bold">Ratings :</span> ****</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card mt-3">
                                        <img src="../../assets/user-icon.png " width="10px" height="150px" class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <p class="card-title font-weight-bold">Chinedu Michael - <span className="font-weight-bold">Plumber</span></p>
                                            <p class="card-text"> <span className="font-weight-bold">Location :</span> 113, Gowan estate, Egbeda.</p>
                                            <p class="card-text"><span className="font-weight-bold">Phone Nuber:</span> 08065907281</p>
                                            <p class="card-text"><span className="font-weight-bold">Price Rate :</span> 4000</p>
                                            <p class="card-text"><span className="font-weight-bold">Ratings :</span> ****</p>
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
            </section>
        </>
    )
}

export default Applicant
