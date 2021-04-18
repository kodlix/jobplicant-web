import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/modules/auth';

import './Register.css'


const Register = ({ }) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    console.log({ errors });

    const [gender, setGender] = useState(null)

    //     "email": "string",
    //   "password": "string",
    //   "name": "string",
    //   "imageUrl": "string",
    //   "accountType": "string",
    //   "firstName": "string",
    //   "lastName": "string"

    const onSubmit = (user) => {
        console.log(user)
        user.accountType = "artisan";
        dispatch(registerUser(user))
    }


    return (
        <>
            <div className="p-grid">
                {/* <div className="p-col bgimage p-col-12 p-md-8 p-lg-8">
                </div> */}
                <div className="login-pane-left p-col-12 p-md-8 p-lg-8 p-xl-8">
                    <div className="left-content">

                        <div><h1 className="p-mb-6 p-mt-6 p-text-center text-white">Joplicant Home for all</h1></div>
                        <div>
                            <section>
                                <h3 className="text-white p-text-center"> Job seekers, Artisan, Employer</h3>
                            </section>

                            <section className="p-mt-6 p-text-center">
                                <p>Artisans meets employers, you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employeers find employees you need to get a skilled worker for that urgent need? not too worry, </p>
                                <p>Employees find the right jobs you need to get a skilled worker for that urgent need? not too worry, </p>
                            </section>

                        </div>
                        <div>
                            <section className="p-text-center">
                                <p>you need to get a skilled worker for that urgent need? not too worry, Instant Job Hire is all you need to connect to the right person within you.</p>
                            </section>
                        </div>
                    </div>

                </div>
                <div className="login-pane-right p-col-12 p-md-4 p-lg-4">
                    <div className="brand-logo text-center">
                        <img src="/assets/logo.png" width="150" alt="brand-logo" />
                    </div>
                    <div className="">
                        <div className=" panel-login text-center active">
                        </div>
                        <div className="panel-signup text-center">
                            <div className="">
                                <div className="authfy-heading">
                                    <h3 className="login-title p-mb-5">Sign up for free!</h3>
                                </div>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="signupForm p-field p-form-group">

                                        <div className="p-field p-grid">

                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                id="firstname"
                                                name="firstName"
                                                placeholder="First Name"
                                                {...register("firstName", { required: "First Name is required" })}
                                            />
                                            <label htmlFor="firstname" className="">
                                                {errors.firstName && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.firstName.message}</p>
                                                </span>}
                                            </label>

                                        </div>
                                        <div className="p-field p-grid">
                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="lastName"
                                                id="lastname"
                                                placeholder="Last Name"
                                                {...register("lastName", { required: "Last name is required" })}

                                            />
                                            <label htmlFor="lastname" className="">
                                                {errors.lastName && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.lastName.message}</p>
                                                </span>}
                                            </label>
                                        </div>

                                        <div className="p-field p-grid">

                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="email"
                                                id="numberOrEmail"
                                                placeholder="Mobile number or email address"
                                                {...register("email", { required: "Email is required" })}

                                            />
                                            <label htmlFor="email" className="">
                                                {errors.email && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.email.message}</p>
                                                </span>}
                                            </label>
                                        </div>
                                        <div className="p-field p-grid">
                                            <InputText type="password"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="password"
                                                id="password"
                                                placeholder="New password"
                                                {...register("password", { required: "Create a new password" })}
                                            />
                                            <label htmlFor="password" className="">
                                                {errors.password && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.password.message}</p>
                                                </span>}
                                            </label>
                                        </div>
                                        <div className="p-field p-grid">

                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="name"
                                                id="companyName"
                                                placeholder="Company Name"
                                                hidden={false}
                                                {...register("name", { required: "Name is required" })}
                                            />
                                            <label htmlFor="name" className="">
                                                {errors.name && <span className="text-danger font-weight-bold p-pl-6"> <p>{errors.name.message}</p>
                                                </span>}
                                            </label>
                                        </div>

                                        <div><label htmlFor="city7" style={{ marginRight: 339, }} className="p-mb-2 p-text-bold p-ml-6" > Gender</label> </div>

                                        <div className="p-formgroup-inline p-ml-6">

                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="male" type="radio"
                                                    name="gender"
                                                    value="male"
                                                    onChange={(e) => setGender(e.value)}
                                                    checked={gender === 'male'}
                                                    {...register("gender", { required: "Gender is required" })}
                                                />

                                                <label htmlFor="female">Female</label>
                                            </div>
                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="female" type="radio"
                                                    name="gender"
                                                    value="female"
                                                    onChange={(e) => setGender(e.value)}
                                                    checked={gender === 'female'}
                                                    {...register("gender", { required: "Gendre is required" })}


                                                />
                                                <label htmlFor="female">Male</label>
                                            </div>
                                            <label htmlFor="gender" className="">
                                                {errors.gender && <span className="text-danger font-weight-bold p-pl-1"> <p>{errors.gender.message}</p>
                                                </span>}
                                            </label>

                                            <div>
                                                <p className="term-policy small p-mb-3 p-mr-5 text-black">By clicking Sign Up, you agree to our <Link to="">Terms, Data Policy</Link>
                                                 and <Link to="">Cookie Policy.</Link> You may receive SMS
                                                notifications from us and can opt out at any time.</p>

                                            </div>

                                        </div>
                                        <div className="p-grid">
                                            <Button type="submit" label="Sign up with email" className="signupbtn appcolor p-col-10" />
                                        </div>
                                    </div>

                                </form>
                                <Link to="/Login" className="lnk-toggler p-text-secondary" data-panel=".panel-login">Already have an account?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;