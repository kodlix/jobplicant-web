import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { TabView, TabPanel } from 'primereact/tabview';
import AppNavBar from 'components/AppNavBar';
import InstantHires from './List';
import Applicant from './Applicant';

import './InstantJobHire.css'



const InstanceJobHire = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const [desc, setDesc] = useState('');
    const [selectedCategory, setselectedCategory] = useState(null);
    const [jobDateNow, setJobDateNow] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);


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
            <div className="p-flex " >

                <div className="p-grid">
                    <div className="bgcolor p-col-12 p-col-md-9"
                        style={
                            {
                                minHeight: '102vh',
                                margin: 0
                            }
                        }>
                        <div className="p-mt-4 p-col-12 p-col-sm-12 mx-auto mobile-view "   >


                            <div className='content-tab content-tab-width p-mb-2' >
                                <nav>
                                    <div class="nav  p-pt-2" id="nav-tab" role="tablist">

                                        {/* nav-tabs */}
                                        {/* <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist"> */}
                                        <button class="nav-link text-white font-weight-bold " id="create-instant-tab" data-bs-toggle="tab" data-bs-target="#create-instant" type="button" role="tab" aria-controls="create-instant" aria-selected="true">Create Instant Hire</button>
                                        <button class="nav-link text-white font-weight-bold active" id="instant-hire-list-tab" data-bs-toggle="tab" data-bs-target="#instant-hire-list" type="button" role="tab" aria-controls="instant-hire-list" aria-selected="false">Instant Hires</button>
                                        <button class="nav-link text-white font-weight-bold" id="applicant-tab-tab" data-bs-toggle="tab" data-bs-target="#applicant-tab" type="button" role="tab" aria-controls="applicant-tab" aria-selected="false">Applicants</button>

                                        {/* <li className="nav-item" role="presentation"> */}
                                        {/* <button className="nav-link text-white" id="create-instant-tab" data-bs-toggle="pill" data-bs-target="#create-instant" type="button" role="tab" aria-controls="create-instant" aria-selected="true">Create Instant Hire</button> */}
                                        {/* </li> */}
                                        {/* <li className="nav-item" role="presentation">
                                            <button className="nav-link text-white active" id="instant-hire-list-tab" data-bs-toggle="pill" data-bs-target="#instant-hire-list" type="button" role="tab" aria-controls="instant-hire-list" aria-selected="false">Instant Hires</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link text-white" id="applicant-tab-tab" data-bs-toggle="pill" data-bs-target="#applicant-tab" type="button" role="tab" aria-controls="applicant-tab" aria-selected="false">Applicants</button>
                                        </li> */}
                                        {/* </ul> */}
                                    </div>
                                </nav>

                            </div>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade " id="create-instant" role="tabpanel" aria-labelledby="create-instant-tab">
                                <div className="card card-size p-mt-2">
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

                            <div className="tab-pane fade show active" id="instant-hire-list" role="tabpanel" aria-labelledby="instant-hire-list-tab">
                                <InstantHires />
                            </div>
                            <div className="tab-pane fade" id="applicant-tab" role="tabpanel" aria-labelledby="applicant-tab">
                                <Applicant />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default InstanceJobHire;



// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useForm } from 'react-hook-form';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Dropdown } from 'primereact/dropdown';
// import { TabView, TabPanel } from 'primereact/tabview';

// import './InstanceJobHire.css'
// import AppNavBar from 'components/AppNavBar';
// import InstantHires from './List';


// const InstanceJobHire = ({ }) => {

//     const dispatch = useDispatch();
//     const { register, handleSubmit, formState: { errors }, setValue } = useForm({
//         mode: "onChange",
//         reValidateMode: "onChange"
//     });

//     const [desc, setDesc] = useState('');
//     const [selectedCategory, setselectedCategory] = useState(null);
//     const [jobDateNow, setJobDateNow] = useState(false);
//     const [activeIndex, setActiveIndex] = useState(0);


//     const Categories = [
//         { name: 'Mechine', code: 'Mec' },
//         { name: 'Plumber', code: 'Plu' },
//         { name: 'Tailor', code: 'Tai' },
//         { name: 'chef', code: 'chef' },
//     ];

//     const onServiceChange = (e) => {
//         setselectedCategory(e.value);
//     }

//     const toggleJobDate = (e) => {
//         if (e.target.checked) {
//             let period = new Date();
//             let instaceJobDate = period.getUTCFullYear() + "/" + (period.getUTCMonth() + 1) + "/" + period.getUTCDate() + " " + period.getUTCHours() + ":" + period.getUTCMinutes() + ":" + period.getUTCSeconds();
//             setValue("jobDate", instaceJobDate, { shouldValidate: true })
//             setJobDateNow(true);
//             console.log({ instaceJobDate });

//         } else {
//             setValue("jobDate", " ", { shouldValidate: true })
//             setJobDateNow(false);
//         }
//     }


//     const onSubmit = (data) => {
//         if (jobDateNow) {
//             data.jobDate = new Date.now();
//         }
//     }
//     return (
//         <>
//             <div className='d-flex flex-column' >
//                 <AppNavBar />
//             </div>
//             <div className="p-flex" >

//                 <div className="p-grid">
//                     <div className="bgcolor p-col-12 p-col-md-9"
//                         style={
//                             {
//                                 minHeight: '102vh',
//                                 margin: 0
//                             }
//                         }>

//                         <div className="p-mt-4 p-col-12 p-col-sm-12 mx-auto mobile-view">
//                             <TabView className="appcolor content-tab content-tab-width " activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
//                                 <TabPanel header="Create Instant Hire" className="" >

//                                     <div className="card card-size p-mt-2">
//                                         <div className="card-body p-pt-0">
//                                             <div className="p-4">
//                                                 <form onSubmit={handleSubmit(onSubmit)}>
//                                                     <div className="row">
//                                                         <div className="p-fluid col-md-6 col-sm-12">
//                                                             <div className="p-field">
//                                                                 <label htmlFor="jobservice"> Job Service *</label>
//                                                                 <Dropdown
//                                                                     value={selectedCategory}
//                                                                     options={Categories}
//                                                                     onChange={onServiceChange}
//                                                                     optionLabel="name"
//                                                                     name="jobservice"
//                                                                     placeholder="Select Job Service"
//                                                                     {...register("jobservice", { required: "Please Select job service" })}

//                                                                 />
//                                                                 {errors.jobservice && <span className="text-danger font-weight-bold "> <p>{errors.jobservice.message}</p>
//                                                                 </span>}
//                                                             </div>

//                                                         </div>
//                                                         <div className="p-fluid col-md-6 col-sm-12">
//                                                             <div className="p-field">
//                                                                 <label htmlFor="location">Location * </label>
//                                                                 <InputText
//                                                                     type="text"
//                                                                     placeholder="Location"
//                                                                     name="location"
//                                                                     {...register("location", { required: "Location is required" })}
//                                                                 />
//                                                                 {errors.location && <span className="text-danger font-weight-bold "> <p>{errors.location.message}</p>
//                                                                 </span>}
//                                                             </div>
//                                                         </div>

//                                                         <div className="p-fluid col-md-6 col-sm-12">
//                                                             <div className="p-field">
//                                                                 <label htmlFor="address">Address * </label>
//                                                                 <InputText
//                                                                     type="text"
//                                                                     placeholder="Address"
//                                                                     name="address"
//                                                                     {...register("address", { required: "Address is required" })}
//                                                                 />
//                                                                 {errors.address && <span className="text-danger font-weight-bold "> <p>{errors.address.message}</p>
//                                                                 </span>}
//                                                             </div>
//                                                         </div>
//                                                         <div className="p-fluid col-md-6 col-sm-12">

//                                                             <div className="p-field">
//                                                                 <label htmlFor="instance">  Job Date * &nbsp;
//                                                                             ( <input type="checkbox" onClick={toggleJobDate} name="instance"
//                                                                         className="align-text-bottom" />
//                                                                     <small className="font-weight-bold"> NOW </small> )
//                                                                              </label>

//                                                                 <InputText type="date"
//                                                                     placeholder="Job Date"
//                                                                     name="jobDate"
//                                                                     disabled={jobDateNow}
//                                                                     {...register("jobDate", { required: "JobDate is required" })}
//                                                                 />
//                                                                 {errors.jobDate && <span className="text-danger font-weight-bold "> <p>{errors.jobDate.message}</p>
//                                                                 </span>}
//                                                             </div>
//                                                         </div>

//                                                         {jobDateNow === false && <div className="p-fluid col-md-6 col-sm-12">
//                                                             <div className="p-field">
//                                                                 <label htmlFor="lastname"> Time *</label>
//                                                                 <InputText type="time"
//                                                                     placeholder="Time"
//                                                                     name="time"
//                                                                     {...register("time", { required: "Time is required" })}
//                                                                 />
//                                                                 {errors.time && <span className="text-danger font-weight-bold "> <p>{errors.time.message}</p>
//                                                                 </span>}
//                                                             </div>
//                                                         </div>}
//                                                         <div className="p-fluid col-md-12 col-sm-12">
//                                                             <div className="p-field">
//                                                                 <label htmlFor="lastname"> Description *</label>
//                                                                 <InputTextarea
//                                                                     defaultValue={desc}
//                                                                     onChange={(e) => setDesc(e.target.value)}
//                                                                     rows={3}
//                                                                     cols={30}
//                                                                     placeholder="Job Description"
//                                                                     name="description"
//                                                                     {...register("description", { required: "Description is required" })}
//                                                                 />
//                                                                 {errors.description && <span className="text-danger font-weight-bold "> <p>{errors.description.message}</p>
//                                                                 </span>}
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                     <Button icon="pi pi-check" iconPos="left" label="Submit" id="saveButton" type="submit" className="float-right" />
//                                                 </form>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </TabPanel>
//                                 <TabPanel header="Instant Hires" className="appcolor" >
//                                     <InstantHires />
//                                 </TabPanel>
//                             </TabView>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default InstanceJobHire;