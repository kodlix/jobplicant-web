import { Button } from 'primereact/button';
import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import './OfflinePage.css';


const OfflinePage = () => {
    const search = useLocation().search;
    const returnUrl = new URLSearchParams(search).get('returnUrl');

    const handleNavigate = () => {
        if (returnUrl) {
            window.location.href = returnUrl
        }
    }

    return (
        <>
            <div id="pnf" className="p-grid">
                <div className="nfcontainer smallscreen">
                    <div className="p-col-6 p-md-12 p-lg-12 p-xl-12">
                        <section>
                            <div className="">
                                {/* <img src="" alt=""/> */}
                                <h1 className=""> Error</h1>
                                <h1 className="">Network Offline</h1>

                            </div>
                            <hr />
                        </section>
                        <h3 className="msg">Check your internet connection</h3>
                        <div className=" msg p-mt-3">
                            <Button label="Go Back" className="appcolor" onClick={handleNavigate}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OfflinePage
