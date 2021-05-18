import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

import './InstanceJobHire.css'
import AppNavBar from 'components/AppNavBar';


const InstanceJobHire = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const [desc, setDesc] = useState('');
    const [selectedCategory, setselectedCategory] = useState(null);
    const [jobDateNow, setJobDateNow] = useState(false);


    const Categories = [
        { name: 'Mechine', code: 'Mec' },
        { name: 'Plumber', code: 'Plu' },
        { name: 'Tailor', code: 'Tai' },
        { name: 'chef', code: 'chef' },
    ];

    const onServiceChange = (e) => {
        setselectedCategory(e.value);
    }

    const toggleJobDate = (e) => {
        if (e.target.checked) {
            let period = new Date();
            let instaceJobDate = period.getUTCFullYear() + "/" + (period.getUTCMonth() + 1) + "/" + period.getUTCDate() + " " + period.getUTCHours() + ":" + period.getUTCMinutes() + ":" + period.getUTCSeconds();
            setValue("jobDate", instaceJobDate, { shouldValidate: true })
            setJobDateNow(true);
            console.log({ instaceJobDate });

        } else {
            setValue("jobDate", " ", { shouldValidate: true })
            setJobDateNow(false);
        }
    }


    const onSubmit = (data) => {
        if (jobDateNow) {
            data.jobDate = new Date.now();
        }
    }
    return (
        <>
            <div className='d-flex flex-column' >
                <AppNavBar />
                <div className="p-fluid " >

                    <div className="p-grid">
                        <div className="bgcolor p-col-12"
                            style={
                                {
                                    minHeight: '102vh',
                                    margin: 0
                                }
                            }>
                            <div className="p-mt-4 p-col-12 p-col-sm-12 mx-auto mobile-view "   >
                                <div className="card card-size">
                                    <div className="card-header font-weight-bold header-color">
                                        <h4 className="text-white">Instance Job Hire</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="login-pane-right p-4">
                                            <div className="">
                                                <div className="panel-login text-center"></div>
                                                <div className="panel-signup ">

                                                    <form onSubmit={handleSubmit(onSubmit)}>
                                                        <div className="p-fluid">
                                                            <div className="p-field">
                                                                <label htmlFor="jobservice"> Job Service *</label>
                                                                <Dropdown
                                                                    value={selectedCategory}
                                                                    options={Categories}
                                                                    onChange={onServiceChange}
                                                                    optionLabel="name"
                                                                    name="jobservice"
                                                                    placeholder="Select Job Service"
                                                                    {...register("jobservice", { required: "Please Select job service" })}

                                                                />
                                                                {errors.jobservice && <span className="text-danger font-weight-bold "> <p>{errors.jobservice.message}</p>
                                                                </span>}
                                                            </div>

                                                        </div>
                                                        <div className="p-fluid">
                                                            <div className="p-field">
                                                                <label htmlFor="location">Location * </label>
                                                                <InputText
                                                                    type="text"
                                                                    placeholder="Location"
                                                                    name="location"
                                                                    {...register("location", { required: "Location is required" })}
                                                                />
                                                                {errors.location && <span className="text-danger font-weight-bold "> <p>{errors.location.message}</p>
                                                                </span>}
                                                            </div>
                                                        </div>
                                                        <div className="p-fluid">

                                                            <div className="p-field">
                                                                <label htmlFor="instance">  Job Date * &nbsp;
                                                            ( <input type="checkbox" onClick={toggleJobDate} name="instance"
                                                                        className="align-text-bottom" />
                                                                    <small className="font-weight-bold"> This Job is needed NOW </small> )
                                                                </label>

                                                                <InputText type="date"
                                                                    placeholder="Job Date"
                                                                    name="jobDate"
                                                                    disabled={jobDateNow}
                                                                    {...register("jobDate", { required: "JobDate is required" })}
                                                                />
                                                                {errors.jobDate && <span className="text-danger font-weight-bold "> <p>{errors.jobDate.message}</p>
                                                                </span>}
                                                            </div>
                                                        </div>
                                                        {jobDateNow === false && <div className="p-fluid">
                                                            <div className="p-field">
                                                                <label htmlFor="lastname"> Time *</label>
                                                                <InputText type="time"
                                                                    placeholder="Time"
                                                                    name="time"
                                                                    {...register("time", { required: "Time is required" })}
                                                                />
                                                                {errors.time && <span className="text-danger font-weight-bold "> <p>{errors.time.message}</p>
                                                                </span>}
                                                            </div>
                                                        </div>}
                                                        <div className="p-fluid">
                                                            <div className="p-field">
                                                                <label htmlFor="lastname"> Description *</label>
                                                                <InputTextarea
                                                                    defaultValue={desc}
                                                                    onChange={(e) => setDesc(e.target.value)}
                                                                    rows={3}
                                                                    cols={30}
                                                                    placeholder="Job Description"
                                                                    name="description"
                                                                    {...register("description", { required: "Description is required" })}
                                                                />
                                                                {errors.description && <span className="text-danger font-weight-bold "> <p>{errors.description.message}</p>
                                                                </span>}
                                                            </div>
                                                        </div>

                                                        <Button type="submit" label="Submit" className="appcolor continue-btn" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstanceJobHire;
