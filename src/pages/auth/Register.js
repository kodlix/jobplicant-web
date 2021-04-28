import React, { useState } from 'react';
import RegisterStep from './RegisterStep';
import AccountTypeStep from './AccountTypeStep';

import './Register.css'

const Register = () => {

    const [step, setStep] = useState(1);
    const [accountType, setAccountType] = useState('')

    const goto = (stepInput) => {
        setStep(stepInput);
    }
    return (
        <>
            <div>
                {step == 1 && <AccountTypeStep goto={goto} setAccountType={setAccountType}/>}
                {step == 2 && <RegisterStep accountType={accountType}/>}
            </div>           
        </>
    )
}

export default Register;