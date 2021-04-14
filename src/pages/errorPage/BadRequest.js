import { Button } from 'primereact/button';
import React from 'react'
import { Link } from 'react-router-dom';
import './BadRequest.css';


const BadRequest = () => {



    return (
        <>
            <div id="pnf" className="p-grid badrequestimg">
                <div className="nfcontainer">
                    <div>
                        <div>
                            <Link to="/login">
                                <Button label="Go Back" className="appcolor backbtn" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BadRequest
