import React, { useEffect, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/modules/auth';

import './Register.css'
import { ACCOUNT_TYPE } from 'constants/accountType';
import { Dropdown } from 'primereact/dropdown';
import { useRef } from 'react';


const RegisterStep = ({ accountType }) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const password = useRef(({}));
    password.current = watch("password", "");

    const professions = [
        { name: 'Software Developer', code: 'SD' },
        { name: 'Doctor', code: 'DR' },
        { name: 'Lawyer', code: 'LY' },
        { name: 'Structural Engineer', code: 'SE' },
        { name: 'Mechanical Engineer', code: 'ME' }
    ];

    const [selectedProf, setSelectedProf] = useState(null);
    // const [step, setStep] = useState(1)
    const [gender, setGender] = useState(null)


    const handleChange = (e) => {
        const { name, value } = e.target;

        setSelectedProf(e.value);
        setValue(name, value, { shouldValidate: true });
    };
    useEffect(() => {
        if (accountType === ACCOUNT_TYPE.CORPORATE | accountType === ACCOUNT_TYPE.IN) return setValue("profession", " ", { shouldValidate: true });
    }, [ACCOUNT_TYPE.CORPORATE])


    const onSubmit = (user) => {
        user.accountType = accountType;
        if (accountType === ACCOUNT_TYPE.JOB_SEEKER || accountType === ACCOUNT_TYPE.ARTISAN) {
            user.profession = user.profession.name;
        }

        dispatch(registerUser(user))
    }


    useEffect(() => {
        register("gender", { required: "Gender is required" })
    }, [register])

    return (
        <>
            <div className="p-fluid">
                <div className="p-grid">
                    <div className="login-pane-right p-md-4 my-4 mx-auto">
                        <div className="logo-container">
                            <Link to="/">
                                <img src="/assets/images/logo/applogo.jpeg" width="150" alt="brand-logo" />
                            </Link>
                        </div>
                        <div className="">
                            <div className="panel-login text-center">
                            </div>
                            <div className="panel-signup">
                                <div className="login-title sm-page-title">
                                    <h5 className="p-mb-3 text-center">Sign up for free!</h5>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="p-grid">
                                        <div className="p-field col-6 p-pr-1">
                                            <InputText type="text"
                                                id="firstname"
                                                name="firstName"
                                                placeholder="First Name"
                                                {...register("firstName", { required: "Please enter your first name" })}
                                            />
                                            <label htmlFor="firstname" className="">
                                                {errors.firstName && <span className="text-danger font-weight-bold "> <p>{errors.firstName.message}</p>
                                                </span>}
                                            </label>

                                        </div>
                                        <div className="p-field col-6">
                                            <InputText type="text"
                                                name="lastName"
                                                id="lastname"
                                                placeholder="Last Name"
                                                {...register("lastName", { required: "Please enter your last name" })}

                                            />
                                            <label htmlFor="lastname" className="">
                                                {errors.lastName && <span className="text-danger font-weight-bold "> <p>{errors.lastName.message}</p>
                                                </span>}
                                            </label>
                                        </div>

                                        <div className="p-field col-12">

                                            <InputText type="email"
                                                name="email"
                                                id="numberOrEmail"
                                                placeholder="Enter email address"
                                                {...register("email", {
                                                    required: true,
                                                    pattern: /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i,
                                                }
                                                )}
                                            />
                                            <label htmlFor="email" className="">
                                                {errors?.email?.type === "required" && <span className="text-danger font-weight-bold "> <p>Please enter your email</p>
                                                </span>}
                                                {errors?.email?.type === "pattern" && <span className="text-danger font-weight-bold "> <p>Please enter a valid email <address></address></p></span>}

                                            </label>
                                        </div>
                                        <div className="p-field col-6 p-pr-1">
                                            <InputText type="password"
                                                id="password"
                                                placeholder="New password"
                                                {...register("password", {
                                                    required: "Please enter your password",
                                                    minLength: {
                                                        value: 8,
                                                        message: "Password must not be less than 8 characters"
                                                    }
                                                })}
                                            />
                                            <label htmlFor="password" className="">
                                                {errors.password && <span className="text-danger font-weight-bold "> <p>{errors.password.message}</p>
                                                </span>}
                                            </label>
                                        </div>
                                        <div className="p-field col-6">
                                            <InputText
                                                id="confirmPassword"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm password"
                                                {...register("confirmPassword", {
                                                    validate: value => value === password.current || "Passwords does not match"
                                                })}
                                            />
                                            <label htmlFor="confirmPassword" className="">
                                                {errors.confirmPassword && <span className="text-danger font-weight-bold"> <p>{errors.confirmPassword.message}</p>
                                                </span>}
                                            </label>
                                        </div>
                                        {
                                            accountType === ACCOUNT_TYPE.CORPORATE &&
                                            <div className="p-field col-12">
                                                <InputText type="text"
                                                    className="form-control"
                                                    name="companyName"
                                                    id="companyName"
                                                    placeholder="Company or Organization Name"
                                                    hidden={false}
                                                    {...register("companyName", { required: "Please enter your company's Name" })}
                                                />
                                                <label htmlFor="name" className="">
                                                    {errors.companyName && <span className="text-danger font-weight-bold "> <p>{errors.companyName.message}</p>
                                                    </span>}
                                                </label>
                                            </div>
                                        }

                                        {accountType === ACCOUNT_TYPE.ARTISAN | accountType === ACCOUNT_TYPE.JOB_SEEKER &&
                                            <div className="p-field col-12">
                                                <Dropdown
                                                    value={selectedProf}
                                                    options={professions}
                                                    optionLabel="name"
                                                    editable
                                                    placeholder='Profession'
                                                    {...register("profession", { required: "Please select your Profession" })}
                                                    id="profession"
                                                    name="profession"
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor="profession" className="">
                                                    {errors.profession && <span className="text-danger font-weight-bold "> <p>{errors.profession.message}</p>
                                                    </span>}
                                                </label>
                                            </div>
                                        }
                                        <div><label htmlFor="gender" className="p-mb-1 p-text-bold gender-margin app-color" > Gender</label> </div>

                                        <div className="p-formgroup-inline">
                                            <div className="p-field-radiobutton">
                                                <RadioButton inputId="male" type="radio"
                                                    name="gender"
                                                    value="male"
                                                    onChange={(e) => { setGender(e.value); setValue("gender", e.value, { shouldValidate: true }) }}
                                                    checked={gender === 'male'}
                                                />

                                                <label htmlFor="male">Male</label>
                                            </div>
                                            <div className="p-field-radiobutton">
                                                <RadioButton inputId="female" type="radio"
                                                    name="gender"
                                                    value="female"
                                                    onChange={(e) => { setGender(e.value); setValue("gender", e.value, { shouldValidate: true }) }}
                                                    checked={gender === 'female'}
                                                />
                                                <label htmlFor="female">Female</label>
                                            </div>
                                            {errors.gender && <span className="text-danger font-weight-bold p-pl-1"> <p>{errors.gender.message}</p>
                                            </span>}
                                        </div>
                                        <div>
                                            <p className="term-policy p-mb-3">By clicking Sign Up, you agree to our <Link to="/"> <span className="app-color font-weight-bold">Terms, Data Policy </span></Link>
                                                &nbsp; and <Link to="/"> <span className="app-color font-weight-bold">Cookie Policy.</span></Link>.</p>

                                        </div>
                                        <Button type="submit" label="Sign up" className="form-group" />
                                    </div>

                                </form>
                                <div className=" text-center">
                                    <Link to="/Login" className="p-text-secondary p-mt-3 app-color font-weight-bold"> Already have an account?</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RegisterStep;