import React from 'react';
import { Button } from 'primereact/button';

import './cv.css';
import { Link } from 'react-router-dom';



const HowToStart = () => {




    return (
        <div>
            <div className="generate-cv" >
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-9">
                            <div className="card card-size-list">
                                <div className="card-body">
                                    {/* <div> */}
                                    <div className="text-center p-p-0">
                                        <h4 className="cv-header">How do you want to start?</h4>
                                    </div>
                                    <div className="p-grid p-pt-5" >

                                        <div className="p-col card-padding">
                                            <div className="text-center">
                                                <div ><i className="pi pi-book" style={{ 'fontSize': '4em' }}></i> </div>
                                                <h5 className="font-weight-bold p-pt-3"> Create New Resume</h5>
                                                <p className="p-pt-2 font-weight-bold">Create a new CV from your profile</p>
                                                <div className="p-pt-3">
                                                    <Link to={"/cv-template"}>
                                                        <Button label="START FRESH" className="p-button " /></Link>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="vl"></div>

                                        <div className="p-col card-padding p-pl-6">

                                            <div className="text-center">
                                                <div ><i className="pi pi-upload text-info" style={{ 'fontSize': '4em' }}></i> </div>
                                                <h5 className="font-weight-bold p-pt-3"> I already have a Resume</h5>
                                                <p className="p-pt-2 font-weight-bold">Upload existing CV</p>
                                                <div className="p-pt-3">
                                                    <Button label="UPLOAD RESUME" className="upload-btn" />
                                                </div>
                                            </div>



                                        </div>
                                    </div>


                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HowToStart;

