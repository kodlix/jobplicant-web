import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';

import './InstantJobHire.css'
import InstantHeader from './instant-header';


const New = ({ setMode, mode }) => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const [desc, setDesc] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobDateNow, setJobDateNow] = useState(true);


    const Categories = [
        { name: 'Mechine', code: 'Mec' },
        { name: 'Plumber', code: 'Plu' },
        { name: 'Tailor', code: 'Tai' },
        { name: 'chef', code: 'chef' },
    ];

    const onServiceChange = (e) => {
        setSelectedCategory(e.value);
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

    useEffect(() => {
        register("jobservice", { required: "Please Select job service" })
    }, [])

    const onSubmit = (data) => {
        if (jobDateNow) {
            data.jobDate = new Date.now();
        }
    }
    return (
        <div>
            <InstantHeader
                title="Create new instant hire"
                setMode={setMode}
                showBack={true}
                mode={mode}
            />

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row">
                    <div className="p-fluid p-md-6 p-sm-12">
                        <div className="p-field">
                            <label htmlFor="jobservice"> Job Service *</label>
                            <Dropdown
                                value={selectedCategory}
                                options={Categories}
                                onChange={onServiceChange}
                                optionLabel="name"
                                name="jobservice"
                                placeholder="Select Job Service"

                            />

                            {errors.jobservice && <span className="text-danger font-weight-bold "> <p>{errors.jobservice.message}</p>
                            </span>}
                        </div>

                    </div>
                    <div className="p-fluid p-md-6 p-sm-12">
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

                    <div className="p-fluid p-md-6 p-sm-12">
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
                    <div className="p-fluid p-md-6 p-sm-12">

                        <div className="p-field">
                            <label htmlFor="instance">  Job Date * &nbsp;
                                                        ( <input type="checkbox" onClick={toggleJobDate} name="instance" defaultChecked={jobDateNow}
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

                    {jobDateNow === false && <div className="p-fluid p-md-6 p-sm-12">
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
                    <div className="p-fluid p-md-12 p-sm-12">
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
    );
}

export default New;