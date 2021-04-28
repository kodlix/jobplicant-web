import {getLocation} from 'connected-react-router';
import React, {useEffect} from 'react';
import {registerUser} from 'store/modules/auth';

import './Register.css'


const VerificationStep = ({goto, setAccountType}) => {
    const setSelectedAccountType = (type, e)=>{
        if(e.target.checked){
            setAccountType(type)
        }
    }
    return (
        <>
            <div className="p-fluid">
                <div className="p-grid">
                    <div className="login-pane-left p-col-12"
                        style={
                            {
                                minHeight: '101vh',
                                margin: 0
                            }
                    }>
                        <div className="left-content p-col-8 mx-auto">
                            <div className="card text-center">
                                <div className="card-header">
                                    Featured
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">Which of the following best decribes your primary intention for using this platform ?</h5>
                                    <ul className="list-group px-4 py-4">
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" 
                                                    type="radio" name="accountType" 
                                                    id="invalidCheck"
                                                    onChange={(e) => setSelectedAccountType('artisan', e)} required/>
                                                <label htmlFor="invalidCheck" className="font-weight-bold">Provide instant jobs as a skilled worker.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck2" onChange={(e) => setSelectedAccountType('instant-hire', e)} required/>
                                                <label className="form-check-label" htmlFor="invalidCheck2"></label>
                                                <label htmlFor="invalidCheck2" className="font-weight-bold">Request for instant hires.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck3" onChange={(e) => setSelectedAccountType('job-seeker', e)} required/>
                                                <label className="form-check-label" htmlFor="invalidCheck3"></label>
                                                <label htmlFor="invalidCheck3" className="font-weight-bold">Seek corporate job opportunities and apply for jobs.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck4" onChange={(e) => setSelectedAccountType('employer', e)} required/>
                                                <label className="form-check-label" htmlFor="invalidCheck4"></label>
                                                <label htmlFor="invalidCheck4" className="font-weight-bold">Register as a corporate body or organization. Recruit talents to addd to our work force.</label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="card-footer text-muted font-weight-bold">
                                    STEP 1/2
                                </div>
                                <div className=" text-right p-2 px-10">
                                    <button type="button" className="btn btn-primary"
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
