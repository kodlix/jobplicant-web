import React from 'react'
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';
import './InternalServerError.css';


const InternalServalError = () => {



    return (
        <>
            <div id="pnf" className="p-grid">
                <div className="nfcontainer smallscreen">
                    <div className="p-col-6 p-md-12 p-lg-12 p-xl-12">
                        <section>
                            <div className="">
                                {/* <img src="" alt=""/> */}
                                <p> <h1 className="p-text-center p-mb-n5 p-text-bold clearspace"> Error</h1></p>
                                <p><h1 className="notfound-404 notfoundpage">500</h1></p>

                            </div>
                            <hr />
                        </section>
                        <h3 className="msg">Internal Server Error</h3>
                        <div className=" msg p-mt-3">
                            <Link to="/login">
                                <Button label="Go Back" className="appcolor" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InternalServalError
