import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

import './InstanceJobHire.css'
import AppNavBar from 'components/AppNavBar';
import { TabPanel, TabView } from 'primereact/tabview';
import { Link } from 'react-router-dom';


const Edit = ({ }) => {

    const dispatch = useDispatch();
    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const [desc, setDesc] = useState('');
    const [selectedCategory, setselectedCategory] = useState(null);
    const [jobDateNow, setJobDateNow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);



    const id = 1;

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
            </div>
            <div className="p-flex" >
                <div className="p-grid">
                    <div className="bgcolor p-col-12 p-col-md-9"
                        style={
                            {
                                minHeight: '102vh',
                                margin: 0
                            }
                        }>

                        <div className="p-mt-4 p-col-12 p-col-sm-12 mx-auto mobile-view">
                            <div className='content-tab tab-width'>
                                <div className="row">
                                    <div className="col-8 p-mt-3">
                                        <h5 className='p-ml-3 text-white'><span ></span> Edit Instant Hire</h5>
                                    </div>
                                    <div className="col-4 p-pt-2">
                                        <Link to="/new-instant-hire">
                                            <Button label="Back" id="saveButton" type="submit" className="back-btn" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="card card-size p-mt-4">
                                <div className="card-body p-pt-0">
                                    <div className="p-4">

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="row">
                                                <div className="p-fluid col-md-6 col-sm-12">
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
                                                <div className="p-fluid col-md-6 col-sm-12">
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

                                                <div className="p-fluid col-md-6 col-sm-12">
                                                    <div className="p-field">
                                                        <label htmlFor="address">Address * </label>
                                                        <InputText
                                                            type="text"
                                                            placeholder="Address"
                                                            name="address"
                                                            {...register("address", { required: "Address is required" })}
                                                        />
                                                        {errors.address && <span className="text-danger font-weight-bold "> <p>{errors.address.message}</p>
                                                        </span>}
                                                    </div>
                                                </div>
                                                <div className="p-fluid col-md-6 col-sm-12">

                                                    <div className="p-field">
                                                        <label htmlFor="instance">  Job Date * &nbsp;
                                                                            ( <input type="checkbox" onClick={toggleJobDate} name="instance"
                                                                className="align-text-bottom" />
                                                            <small className="font-weight-bold"> NOW </small> )
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

                                                {jobDateNow === false && <div className="p-fluid col-md-6 col-sm-12">
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
                                                <div className="p-fluid col-md-12 col-sm-12">
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
                                            </div>
                                            <Button icon="pi pi-check" iconPos="left" label="Submit" id="saveButton" type="submit" className="float-right" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Edit;
