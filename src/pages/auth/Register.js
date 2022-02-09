import React, { useState } from 'react';
import RegisterStep from './RegisterStep';
import './Register.css'
import VerificationStep from './VerificationStep';

const Register = () => {

    const [step, setStep] = useState(1);
    const [accountType, setAccountType] = useState(null)

    const goto = (stepInput) => {
        setStep(stepInput);
    }
    return (
        <>
            <div>
                {/* {step == 1 && <AccountTypeStep goto={goto} setAccountType={setAccountType}/>} */}
                {step === 1 && <VerificationStep goto={goto} accountType={accountType} setAccountType={setAccountType} />}
                {step === 2 && <RegisterStep accountType={accountType} goto={goto} />}
            </div>
        </>
    )
}

export default Register;