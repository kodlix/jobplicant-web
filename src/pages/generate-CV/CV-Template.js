import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';

import './cv.css';


const CVTEMPLATE = () => {

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
                                        <h4 className="cv-header">Select a CV Template to generate from</h4>
                                    </div>
                                    <div className="p-grid p-pt-5" >

                                        <div className="p-col">
                                            <div className="text-center template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 1</p>
                                                <img src="/cv-templates/template~1.png" alt="Template-1" />
                                            </div>

                                        </div>

                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 2</p>
                                            </div>
                                            <img src="/assets/images/cv-templates/template2.jpg" alt="Template-2" />

                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 3</p>
                                            </div>
                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 4</p>
                                            </div>
                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 5</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-grid p-pt-5" >

                                        <div className="p-col">
                                            <div className="text-center">
                                                <p className="p-pt-2 font-weight-bold">CV Template 6</p>

                                            </div>

                                        </div>

                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 7</p>
                                            </div>
                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 8</p>
                                            </div>
                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 9</p>
                                            </div>
                                        </div>
                                        <div className="p-col p-pl-2">

                                            <div className="text-center  template-size">
                                                <p className="p-pt-2 font-weight-bold">CV Template 10</p>

                                            </div>
                                        </div>
                                    </div>


                                    {/* </div> */}
                                </div>
                                <div className="p-pt-3">
                                    <Link to={""} >
                                        <Button label="GENERATE" className="p-button float-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CVTEMPLATE;

