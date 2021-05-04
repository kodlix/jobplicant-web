import React from 'react';
import './InstanceJobHire.css'

const Applicant = () => {
    const rating = 4.5;

    return (
        <>
            <section className="find-job job-list section test appcolor">
                <div className="container">
                    <div className="single-head">
                        <div className="p-grid">
                            <div className="p-col-4">
                                <div className="single-job">
                                    {/* <img src="../../assets/logo.png" alt="User Image" width="130" height="130" class="profile-picture" */}
                                    <div className="job-image">
                                        <img src="../../assets/user-icon.png" width="70" height="70" alt="User image" className="" />
                                    </div>
                                    <div className="job-content">
                                        <h4><a href="job-details.html">Michael Adebayo</a></h4>
                                        {/* <span className="stars" style={{ "--rating": rating }}>
                                        </span> */}
                                        <hr className="p-mt-0" />
                                        <p><span className="font-weight-bold">Occupation:</span> Mechanic </p>
                                        <p><span className="font-weight-bold">Location:</span> 49,Adedoyin street, ogba Ikeja Lagos </p>
                                        <p><span className="font-weight-bold">Ratings:</span> *****</p>                                        <ul>
                                            <li><i className="pi pi-comment"></i><a href="#">Chat</a></li>
                                            <li className="p-mr-2"><a href="job-details.html">Hire</a></li>
                                            <li className=""><span>Reject</span></li>
                                        </ul>
                                    </div>
                                    {/* <div className="job-button">
                                        <ul>
                                         
                                        </ul>
                                    </div> */}
                                </div>
                            </div>

                            <div className="p-col-4">
                                <div className="single-job">
                                    <div className="job-image">
                                        <img src="../../assets/user-icon.png" width="70" height="70" alt="User image" className="" />
                                    </div>
                                    <div className="job-content">
                                        <h4><a href="job-details.html">Michael Adebayo</a></h4>
                                        <hr className="p-mt-0" />
                                        <p><span className="font-weight-bold">Occupation:</span> Mechanic </p>
                                        <p><span className="font-weight-bold">Location:</span> 49,Adedoyin street, ogba Ikeja Lagos </p>
                                        <p><span className="font-weight-bold">Ratings:</span> *****</p>                                        <ul>
                                            <li><i className="pi pi-comment"></i><a href="#">Chat</a></li>
                                            <li className="p-mr-2"><a href="job-details.html">Hire</a></li>
                                            <li><span>Reject</span></li>

                                        </ul>
                                    </div>
                                    {/* <div className="job-button">
                                        <ul>
                                           
                                        </ul>
                                    </div> */}
                                </div>

                            </div>
                            <div className="p-col-4">
                                <div className="single-job">
                                    <div className="job-image">
                                        <img src="../../assets/user-icon.png" width="70" height="70" alt="User image" className="" />
                                    </div>
                                    <div className="job-content">
                                        <h4><a href="job-details.html">Michael Adebayo</a></h4>
                                        <hr className="p-mt-0" />
                                        <p><span className="font-weight-bold">Occupation:</span> Mechanic </p>
                                        <p><span className="font-weight-bold">Location:</span> 49,Adedoyin street, ogba Ikeja Lagos </p>
                                        <p><span className="font-weight-bold">Ratings:</span> *****</p>
                                        <ul>
                                            <li><i className="pi pi-comment"></i><a href="#"> Chat</a></li>
                                            <li className="p-mr-2"><a href="job-details.html">Hire</a></li>
                                            <li><span>Reject</span></li>

                                        </ul>
                                    </div>
                                    {/* <div className="job-button">
                                        <ul>

                                        </ul>
                                    </div> */}
                                </div>
                            </div>
                            <div className="p-col-4">
                                <div className="single-job">
                                    <div className="job-image">
                                        <img src="../../assets/user-icon.png" width="70" height="70" alt="User image" className="" />
                                    </div>
                                    <div className="job-content">
                                        <h4><a href="job-details.html">Michael Adebayo</a></h4>
                                        <hr className="p-mt-0" />
                                        <p><span className="font-weight-bold">Occupation:</span> Mechanic </p>
                                        <p><span className="font-weight-bold">Location:</span> 49,Adedoyin street, ogba Ikeja Lagos </p>
                                        <p><span className="font-weight-bold">Ratings:</span> *****</p>
                                        <ul>
                                            <li><i className="pi pi-comment"></i><a href="#"> Chat</a></li>
                                            <li className="p-mr-2"><a href="job-details.html">Hire</a></li>
                                            <li><span>Reject</span></li>

                                        </ul>
                                    </div>
                                    {/* <div className="job-button">
                                        <ul>
                                          
                                        </ul>
                                    </div> */}
                                </div>
                            </div>

                        </div>

                        <div className="p-grid">
                            <div className="col-12">
                                <div className="pagination center">
                                    <ul className="pagination-list">
                                        <li><a href="#"><i className="lni lni-arrow-left"></i></a></li>
                                        <li className="active"><a href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a href="#">3</a></li>
                                        <li><a href="#">4</a></li>
                                        <li><a href="#"><i className="lni lni-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Applicant
