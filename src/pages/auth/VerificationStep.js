import React from 'react';

import './Register.css'


const VerificationStep = ({ goto, setAccountType }) => {
    const setSelectedAccountType = (type, e) => {
        if (e.target.checked) {
            setAccountType(type)
        }
    }
    return (
        <>
            <div className="p-fluid">
                <div className="p-grid">
                    <div className="login-pane-left p-col-12 sm-height"
                        style={
                            {
                                minHeight: '104vh',
                                margin: 0
                            }
                        }>
                        <div className="left-content p-col-8 mx-auto">
                            <div className="card text-center">
                                <div className="card-header appcolor ">
                                    Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Select Reason for Creating an Account ?</h5>
                                    <ul className="list-group px-4 py-4">
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck3" onChange={(e) => setSelectedAccountType('Instant Hire ', e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck3"></label>
                                                <label htmlFor="invalidCheck3" className="font-weight-bold">To Request for Instant Artisan Services.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck2" onChange={(e) => setSelectedAccountType('Artisan', e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck2"></label>
                                                <label htmlFor="invalidCheck2" className="font-weight-bold">To Provide Service as an Artisan.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck4" onChange={(e) => setSelectedAccountType('Corporate', e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck4"></label>
                                                <label htmlFor="invalidCheck4" className="font-weight-bold">To Recruit Corporate Jobseekers.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input"
                                                    type="radio" name="accountType"
                                                    id="invalidCheck"
                                                    onChange={(e) => setSelectedAccountType('Job-Seeker', e)} required />
                                                <label htmlFor="invalidCheck" className="font-weight-bold">To Look for Corporate Job Opportunities.</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer text-muted font-weight-bold">
                                    STEP 1/2
                                </div>
                                <div className=" text-right p-2 px-10">
                                    <button type="button" className="btn appcolor"
                                        onClick={
                                            () => goto(2)
                                        }>Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default VerificationStep;
