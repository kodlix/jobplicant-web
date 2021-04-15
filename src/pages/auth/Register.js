import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { RadioButton } from 'primereact/radiobutton';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';

import './Register.css'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerUser } from 'store/modules/auth';




const Register = ({ props }) => {

    const { register, handleSubmit, erorrs } = useForm();
    const dispatch = useDispatch();

    const [gender, setGender] = useState(null)

    //     "email": "string",
    //   "password": "string",
    //   "name": "string",
    //   "imageUrl": "string",
    //   "accountType": "string",
    //   "firstName": "string",
    //   "lastName": "string"

    const onSubmit = (user) => {
        // user.gender = user.gender;
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
                                            <label htmlFor="firstName" className="p-sr-only">FirstName
                                        <span className="p-text-danger p-pl-1">
                                                    {/* {erorrs.firstname && "Enter your First Name"} */}
                                                </span>
                                            </label>
                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                id="firstName"
                                                name="firstName"
                                                placeholder="First Name" 
                                                {...register("firstName", { required: true })}
                                            />
                                        </div>
                                        <div className="p-field p-grid">
                                            <label htmlFor="lastName" className="p-sr-only">Last Name
                                                  <span className="p-text-danger p-pl-1">
                                                    {/* {erorrs.newpassword && "New password is required"} */}
                                                </span>
                                            </label>
                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="lastName"
                                                id="lastName"
                                                placeholder="Last Name"
                                                {...register("lastName",{ required: true })}

                                            />
                                        </div>

                                        <div className="p-field p-grid">
                                            <label htmlFor="numberOrEmail" className="p-sr-only">Number or Email
                                                  <span className="p-text-danger p-pl-1">
                                                    {/* {erorrs.numberoremail && "numberoremail is required"} */}
                                                </span>
                                            </label>
                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="email"
                                                id="numberOrEmail"
                                                placeholder="Mobile number or email address"
                                                {...register("email",{ required: true })}

                                            />
                                        </div>
                                        <div className="p-field p-grid">
                                            <label htmlFor="newPassword" className="p-sr-only">New Password
                                                  <span className="p-text-danger p-pl-1">
                                                    {/* {erorrs.newpassword && "password is required"} */}
                                                </span>
                                            </label>
                                            <InputText type="password"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="password"
                                                id="newPassword"
                                                placeholder="New password"
                                                {...register("password",{ required: true })}
                                            />
                                        </div>
                                        <div className="p-field p-grid">
                                            <label htmlFor="companyName" className="p-sr-only">Company Name
                                                  <span className="p-text-danger p-pl-1">
                                                    {/* {erorrs.companyname && "companyname is required"} */}
                                                </span>
                                            </label>
                                            <InputText type="text"
                                                className="form-control p-ml-6 p-mr-6"
                                                name="name"
                                                id="companyName"
                                                placeholder="Company Name"
                                                hidden={false}
                                                {...register("name",{ required: true })}
                                            />
                                        </div>

                                        <div><label htmlFor="city7" style={{ marginRight: 339, }} className="p-mb-2 p-text-bold p-ml-6" > Gender</label> </div>

                                        <div className="p-formgroup-inline p-ml-6">

                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="male" type="radio"
                                                    name="gender"
                                                    value="male"
                                                    onChange={(e) => setGender(e.value)}
                                                    checked={gender === 'male'}
                                                    {...register("gender",{ required: true })}
                                                />
                                                <label htmlFor="female">Female</label>
                                            </div>
                                            <div className="p-field-checkbox">
                                                <RadioButton inputId="female" type="radio"
                                                    name="gender"
                                                    value="female"
                                                    onChange={(e) => setGender(e.value)}
                                                    checked={gender === 'female'}
                                                    {...register("gender",{ required: true })}


                                                />
                                                <label htmlFor="female">Male</label>
                                            </div>

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