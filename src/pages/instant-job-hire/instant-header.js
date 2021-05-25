import { Button } from 'primereact/button';
import React from 'react';
import { Link } from 'react-router-dom';

const InstantHeader = ({ title, setMode, mode, showCreateButton = false, showBack = false, count = 0 }) => {
    return (
        <>
            <header className="d-flex flex-row">
                <h2 className="title">{title} ({count}) </h2>
                {showCreateButton && <Button iconPos="left" label="Create" id="saveButton" type="button" className="w-25" onClick={() => setMode(mode)} style={{ marginLeft: "30vw" }} />}
                {showBack && <Link to="/new-instant-hire" onClick={() => setMode(mode)} className="p-pt-2 app-color" style={{ marginLeft: "37vw" }}>
                    <i className="pi pi-arrow-left"> Back</i>
                </Link>}
            </header >
            <hr className="font-weight-bolder appcolor" />
        </>
    );
}

export default InstantHeader;