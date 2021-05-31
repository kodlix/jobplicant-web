import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';

import './InstantJobHire.css'


const InstantHeader = ({ title, setMode, mode, showCreateButton = false, showBack = false, count = 3 }) => {
    return (
        <>
            <header className="d-flex">
                <div className="title-container w-100"   >
                    <h2 className="title sm-screen ">{title} ({count}) </h2>
                </div>
                <div className="flex-shrink-0">
                    {showCreateButton && <Button iconPos="left" label="Create" id="saveButton" type="button" onClick={() => setMode(mode)} />}
                    {showBack &&
                        <Link to="/new-instant-hire" onClick={() => setMode(mode)} className="bk-btn p-pt-2 app-color">
                            <i className="pi pi-arrow-left">Back</i>
                        </Link>}
                </div>
            </header >
            <hr className="font-weight-bolder appcolor" />
        </>
    );
}

export default InstantHeader;