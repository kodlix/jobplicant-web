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


const RegisterStep = ({ accountType }) => {

    // const [step, setStep] = useState(1)
    const { register, handleSubmit, setValue, formState: { errors } } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });
    const dispatch = useDispatch();
    const [gender, setGender] = useState(null)

    const onSubmit = (user) => {
        user.accountType = accountType;
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
                            <img src="/assets/logo.png" width="150" alt="brand-logo" />
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
                                                {...register("password", { required: "Please enter your password" })}
                                            />
                                            <label htmlFor="password" className="">
                                                {errors.password && <span className="text-danger font-weight-bold "> <p>{errors.password.message}</p>
                                                </span>}
                                            </label>
                                        </div>

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
                                        {
                                            accountType === ACCOUNT_TYPE.CORPORATE &&
                                            <div className="p-field">
                                                <InputText type="text"
                                                    className="form-control p-mb-4"
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