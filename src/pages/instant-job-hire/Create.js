import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import InstantHeader from './instant-header';
import { confirmDialog } from 'primereact/confirmdialog';
import { useDispatch } from 'react-redux';
import { createInstantJob } from 'store/modules/instantJob';
import { Calendar } from 'primereact/calendar';
import RecentInstantJobs from 'pages/instant-jobs/Recent_instant_Jobs';

import './InstantJobHire.css'

const New = ({ mode }) => {
    const dispatch = useDispatch();
    const toast = useRef(null);

    const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const { startdate, enddate } = watch(["startDate", "endDate"]);


    const [desc, setDesc] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [isJobDateNow, setIsJobDateNow] = useState(false);
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const Categories = [
        { name: 'Mechanic', code: 'Mec' },
        { name: 'Plumber', code: 'Plu' },
        { name: 'Tailor', code: 'Tai' },
        { name: 'Chef', code: 'Chef' },
        { name: 'Dry-cleaners', code: 'Lan' },
        { name: 'Painter', code: 'Pai' },
        { name: 'Janitor', code: 'Jan' },

    ];

    const handleChange = (e) => {
        const { name, value } = e.target;

        setSelectedCategory(e.value);
        setValue(name, value, { shouldValidate: true });
    };


    let period = new Date();
    let instantJobDate = period.getUTCFullYear() + "/" + (period.getUTCMonth() + 1) + "/" + period.getUTCDate() + " " + period.getUTCHours() + ":" + period.getUTCMinutes() + ":" + period.getUTCSeconds();


    // useEffect(() => {
    // if (isJobDateNow) {
    //     isJobDateNow && setValue("startDate", instantJobDate, { shouldValidate: true })
    //     console.log("instant job => ", instantJobDate)
    // }

    // }, [])


    const toggleJobDate = (e) => {
        if (e.target.checked) {
            setValue("startDate", instantJobDate, { shouldValidate: true })
            // setValue("time", new Date().toLocaleTimeString(), { shouldValidate: false })

            console.log("instant job => ", instantJobDate)
            setIsJobDateNow(true);
        } else {
            setValue("startDate", "", { shouldValidate: true })
            setIsJobDateNow(!isJobDateNow);
        }
    }

    const locateUserHandler = () => {
        if (!navigator.geolocation) {
            alert('location feature is not available in your browser, please use another browser');
            return;
        }
        navigator.geolocation.getCurrentPosition(successResult => {
            const coordinates = {
                lat: successResult.coords.latitude,
                lng: successResult.coords.longitude,
            }
            console.log("user location -", coordinates)

            fetch(`https://api.opencagedata.com/geocode/v1/json?q=${coordinates.lat}+${coordinates.lng}&key=684dc29e6b4748bab86ee02452867930`)
                .then(response => response.json())
                .then(console.log())
            console.log(response => response.json())
        },
            error => {
                alert('Could not locate your address unforturnately, Please enter your address manually')
            })



    }

    navigator.geolocation.getCurrentPosition(console.log, console.log)


    const succefulLookUp = (position) => {
        const { latitude, longitude } = position.coords;

        fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=684dc29e6b4748bab86ee02452867930`)
            .then(response => response.json())
            .then(console.log())
    }

    navigator.geolocation.getCurrentPosition(succefulLookUp, console.log)

    const onSubmit = (data) => {
        confirmDialog({
            message: 'Are you sure you want to make this request?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                if (isJobDateNow) {
                    data.startDate = new Date().toISOString()
                    data.now = true;
                } else {
                    data.now = false;
                }
                data.service = data.service.name;
                dispatch(createInstantJob(data));
                locateUserHandler();
            },
            reject: () => {
                return;
            },
        });

    }

    return (
        <div>
            <div className="background instant" >
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-9">
                            <div className="card card-size-list">
                                <div className="card-body"></div>
                                <InstantHeader
                                    title="Create new instant hire"
                                    showBack={true}
                                />

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div className="p-fluid p-md-6 p-sm-12">
                                            <div className="p-field">
                                                <label htmlFor="service"> Job Service *</label>

                                                <Dropdown
                                                    options={Categories}
                                                    optionLabel="name"
                                                    filter
                                                    showClear
                                                    filterBy="name"
                                                    icon="pi pi-plus"
                                                    id="service"
                                                    name="service"
                                                    value={selectedCategory}
                                                    {...register("service", { required: `* Please Select a service` })}
                                                    onChange={handleChange}
                                                />

                                                {errors.service && <span className="text-danger font-weight-bold "> <p>{errors.service.message}</p>
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
                                                <label htmlFor="phoneNumber">Phone Number * </label>
                                                <InputText
                                                    type="number"
                                                    placeholder="Phone Number"
                                                    name="phoneNumber"
                                                    {...register("phoneNumber", { required: "Phone Number is required" })}

                                                />

                                                {errors.address && <span className="text-danger font-weight-bold "> <p>{errors.phoneNumber.message}</p>
                                                </span>}
                                            </div>
                                        </div>
                                        <div className="p-fluid p-md-6 p-sm-12">

                                            <div className="p-field">
                                                <label htmlFor="startDate">  Start Date * &nbsp;
                                                    ( <input type="checkbox" onClick={toggleJobDate} name="instance" defaultChecked={isJobDateNow}
                                                        className="align-text-bottom" />
                                                    <small className="font-weight-bold"> NOW </small>  ) &nbsp; {isJobDateNow && (<span className="appcolor text-white px-3"> {instantJobDate}</span>)}
                                                </label>
                                                <Calendar
                                                    id="startDate"
                                                    type="date"
                                                    value={startDate}
                                                    disabled={isJobDateNow}
                                                    // maxDate={endDate}
                                                    name="startDate"
                                                    {...register("startDate", {
                                                        required: `* Start Date is required`,
                                                    })}
                                                    onSelect={(e) => {
                                                        const inputName = "startDate";
                                                        const value = new Date(e.value).toISOString();

                                                        setStartDate(value);
                                                        setValue(inputName, value, { shouldValidate: true });
                                                    }}
                                                    name="startDate"
                                                    {...register("startDate", {
                                                        required: `* Start date is required`,
                                                    })}
                                                />
                                                {errors.startDate && <span className="text-danger font-weight-bold "> <p>{errors.startDate.message}</p>
                                                </span>}
                                            </div>
                                        </div>

                                        <div className="p-fluid p-md-6 p-sm-12">
                                            <div className="p-field">
                                                <label htmlFor="endDate">{" "}End Date * </label>
                                                <Calendar
                                                    id="endDate"
                                                    type="date"
                                                    value={endDate}
                                                    // minDate={startDate || null}
                                                    name="endDate"
                                                    {...register("endDate", {
                                                        required: `* End Date is required`,
                                                    })}
                                                    onSelect={(e) => {
                                                        const inputName = "endDate";
                                                        const value = e.value.toISOString();
                                                        setEndDate(value);
                                                        setValue(inputName, value, { shouldValidate: true });
                                                    }}
                                                    name="endDate"
                                                    {...register("endDate", {
                                                        required: `* End date is required`,
                                                        validate: value => !value || !startdate || value > startdate || "End date cannot be less than Start date"
                                                    })}
                                                />
                                                {errors.endDate && (<span className="text-danger font-weight-bold">&nbsp; {errors.endDate.message}</span>)}
                                            </div>
                                        </div>

                                        {/* {!isJobDateNow && <div className="p-fluid p-md-6 p-sm-12">
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
                                        </div>} */}
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

                                {/* <ConfirmDialog visible={visible} onHide={() => setVisible(false)} message="Are you sure you want to proceed?"
                header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />
            <Button onClick={() => setVisible(true)} icon="pi pi-check" label="Confirm" /> */}
                            </div>
                        </div>
                        <RecentInstantJobs />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default New;
