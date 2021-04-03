import React from 'react';


const PageHeader = ({ pageTitle, children, heading, count=0 }) => {
    return (
        <div className="d-block shadow bg-white p-3 d-md-flex align-items-center justify-content-between mb-1 rounded">
            <h3 className="project-text-color mb-3 ">{pageTitle} {count > 0 && `(${count})`} {heading && ` - ${heading}`}</h3>
            {children}
        </div>
    );
}

export default PageHeader;