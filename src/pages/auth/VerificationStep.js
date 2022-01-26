import React, { useState } from "react";
import AccountTypesOptions from "components/AccountTypeOptions/AccountTypesOptions";
import { ACCOUNT_TYPE } from "constants/accountType";
import { set } from "react-hook-form";

import "./Register.css";

const VerificationStep = ({ goto, accountType, setAccountType }) => {

  const [selectedCard, setSelectedCard] = useState(false)
  console.log(selectedCard, " selected value")


  const setSelectedAccountType = (type, e) => {
    if (type) {
      setAccountType(type);
    }
    if (type === ACCOUNT_TYPE.INSTANT_HIRE) {
      setSelectedCard(true);
    }
  };

  const handleGoto = () => {
    if (accountType === null) {
      window.alert('Please select an account type!')
      return;
    }
    goto(2)
  }

  return (
    <>
      <div className="p-fluid">
        <div className="verificationContainer">
          <h5>Select Account Type</h5>
          <div className="verificationStep">
            <AccountTypesOptions
              onClick={(e) =>
                setSelectedAccountType(ACCOUNT_TYPE.INSTANT_HIRE, e)
              }
              image="/assets/images/accountTypes/thinkingman.png"
              body="To Request for Instant Artisan Services"
              customstyle="artisan"
              style={{ border: "4px solid yellow" }}
            />
            <AccountTypesOptions
              onClick={(e) => setSelectedAccountType(ACCOUNT_TYPE.ARTISAN, e)}
              image="/assets/images/accountTypes/handworker.png"
              body="To Provide Service as an Artisan."
              customstyle="artisanService"
              className={`${selectedCard ? "hight-btn" : ""}`}

            />
            <AccountTypesOptions
              onClick={(e) => setSelectedAccountType(ACCOUNT_TYPE.CORPORATE, e)}
              image="/assets/images/accountTypes/recruiter.png"
              body="To Recruit Corporate Jobseekers."
              customstyle="company"
              className={`${selectedCard ? "hight-btn" : ""}`}

            />
            <AccountTypesOptions
              onClick={(e) =>
                setSelectedAccountType(ACCOUNT_TYPE.JOB_SEEKER, e)
              }
              image="/assets/images/accountTypes/jobseekers.png"
              body="To Look for Corporate Job Opportunities"
              customstyle="job-seker"
              // className={`${selectedCard ? "hight-btn" : ""}`}
              className="hight-btn"

            />
          </div>
          <button className="btn-proceed" onClick={handleGoto}>Proceed</button>
        </div>
      </div>

      {/* <div className="login-pane-left p-col-12 sm-height"
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
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck3" onChange={(e) => setSelectedAccountType(ACCOUNT_TYPE.INSTANT_HIRE, e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck3"></label>
                                                <label htmlFor="invalidCheck3" className="font-weight-bold">To Request for Instant Artisan Services.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck2" onChange={(e) => setSelectedAccountType(ACCOUNT_TYPE.ARTISAN, e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck2"></label>
                                                <label htmlFor="invalidCheck2" className="font-weight-bold">To Provide Service as an Artisan.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input" type="radio" name="accountType" id="invalidCheck4" onChange={(e) => setSelectedAccountType(ACCOUNT_TYPE.CORPORATE, e)} required />
                                                <label className="form-check-label" htmlFor="invalidCheck4"></label>
                                                <label htmlFor="invalidCheck4" className="font-weight-bold">To Recruit Corporate Jobseekers.</label>
                                            </div>
                                        </li>
                                        <li className="list-group-item text-left">
                                            <div className="form-check text-dark">
                                                <input className="form-check-input"
                                                    type="radio" name="accountType"
                                                    id="invalidCheck"
                                                    onChange={(e) => setSelectedAccountType(ACCOUNT_TYPE.JOB_SEEKER, e)} required />
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
                                        onClick={ handleGoto}>Next</button>
                                </div>
                            </div>
                        </div>
                    </div> */}
      {/* </div>
                </div>
            </div> */}
    </>
  );
};

export default VerificationStep;
