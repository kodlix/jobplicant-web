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
                <div className="p-grid p-mx-0">
                    <div className="login-pane-left p-col-12 p-md-7 p-lg-8 p-xl-8 small-screen">
                        <div className="left-content">
                            {/* <div><svg xmlns="http://www.w3.org/2000/svg" className="" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ width: "2rem" }} >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg></div> */}
                            <div><h1 className="p-mb-0 p-text-center title">Joplicant Home for all</h1></div>
                            <div>
                                <div>
                                    <p> <h2 className="p-text-center sub-title"> Job seekers, Artisan, Employer</h2></p>
                                </div>
                                <section className="about font-weight-bold p-mt-4 p-mb-4">
                                    <ul>
                                        <li>Artisans meets employers</li>
                                        <li> You need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li> Employeers find employees you need to get a skilled worker for that urgent need? not too worry,</li>
                                        <li>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry,</li>
                                    </ul>
                                </section>
                            </div>
                            <div>
                                <div className="font-weight-bold">
                                    <p>You need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="login-pane-right p-col-12 p-md-5 p-lg-4">
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
                                    <h3 className="p-mb-3  text-center">Sign up for free!</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="p-fluid">
                                        <div className="p-field">
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
                                        <div className="p-field">
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

                                        <div className="p-field">

                                            <InputText type="email"
                                                name="email"
                                                id="numberOrEmail"
                                                placeholder="Mobile number or email address"
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
                                        <div className="p-field">
                                            <InputText type="password"
                                                name="password"
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
                                        <div className="p-field">
                                            <InputText
                                                id="confirmPassword"
                                                type="password"
                                                name="confirmPassword"
                                                placeholder="Confirm New Password"
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
                                            <div className="p-field">
                                                <InputText type="text"
                                                    className="form-control"
                                                    name="companyName"
                                                    id="companyName"
                                                    placeholder="Company or Organiation Name"
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
                                            <div className="p-field">
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
                                                // onChange={(e) => handleChange(e, "profession")}

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
                                                // {...register("gender", { required: "Gender is required" })}
                                                />

                                                <label htmlFor="male">Male</label>
                                            </div>
                                            <div className="p-field-radiobutton">
                                                <RadioButton inputId="female" type="radio"
                                                    name="gender"
                                                    value="female"
                                                    onChange={(e) => { setGender(e.value); setValue("gender", e.value, { shouldValidate: true }) }}
                                                    checked={gender === 'female'}
                                                // {...register("gender", { required: "Gender is required" })}
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