import React from 'react';

export default function MicroSpinner({ show, color }) {

    return (
        <>
            {show && <div id="spinner" className={`spinner-border spinner-border-sm text-${color}`} role="status">
                <span className="sr-only">loading...</span>
            </div>
            }
        </>
    )
}




