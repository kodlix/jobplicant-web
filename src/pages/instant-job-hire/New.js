// import React, { useEffect, useRef, useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { Button } from 'primereact/button';
// import { InputText } from 'primereact/inputtext';
// import { InputTextarea } from 'primereact/inputtextarea';
// import { Dropdown } from 'primereact/dropdown';

// import './InstantJobHire.css'
// import InstantHeader from './instant-header';
// import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
// import { useDispatch } from 'react-redux';
// import { createInstantJob } from 'store/modules/instantJob';
// import { Calendar } from 'primereact/calendar';


// const New = ({ setMode, mode }) => {
//     const dispatch = useDispatch();
//     const toast = useRef(null);



//     const { register, handleSubmit, formState: { errors }, setValue } = useForm({
//         mode: "onChange",
//         reValidateMode: "onChange"
//     });

//     const [desc, setDesc] = useState('');
//     const [selectedCategory, setSelectedCategory] = useState("");
//     const [jobDateNow, setJobDateNow] = useState(true);
//     const [startDate, setStartDate] = useState(null);
//     const [endDate, setEndDate] = useState(null);

//     const Categories = [
//         { name: 'Mechine', code: 'Mec' },
//         { name: 'Plumber', code: 'Plu' },
//         { name: 'Tailor', code: 'Tai' },
//         { name: 'chef', code: 'chef' },
//     ];

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         setSelectedCategory({ ...education, [name]: value });
//         setValue(name, value, { shouldValidate: true });
//     };


//     let period = new Date();
//     let instaceJobDate = period.getUTCFullYear() + "/" + (period.getUTCMonth() + 1) + "/" + period.getUTCDate() + " " + period.getUTCHours() + ":" + period.getUTCMinutes() + ":" + period.getUTCSeconds();

//     const toggleJobDate = (e) => {
//         if (e.target.checked) {
//             setValue("startDate", instaceJobDate, { shouldValidate: true })
//             console.log(instaceJobDate)
//             setJobDateNow(true);
//         } else {
//             setValue("startDate", "", { shouldValidate: true })
//             setJobDateNow(false);
//         }
//     }

//     const confirm = () => {
//         confirmDialog({
//             message: 'Are you sure you want to make this request?',
//             header: 'Confirmation',
//             icon: 'pi pi-exclamation-triangle',
//             accept,
//             reject,
//         });
//     };

//     const accept = () => {
//         onSubmit();
//     }

//     const reject = () => {
//         return;
//     }


//     useEffect(() => {
//     }, [])

//     const onSubmit = (data) => {
//         console.log({ data });

//         if (jobDateNow) {
//             data.jobDate = new Date.now();
//         }

//         dispatch(createInstantJob(data));

//     }

//     return (
//         <div>
//             <InstantHeader
//                 title="Create new instant hire"
//                 setMode={setMode}
//                 showBack={true}
//                 mode={mode}
//             />

//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <div className="row">
//                     <div className="p-fluid p-md-6 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="service"> Job Service *</label>


//                             <Dropdown
//                                 options={Categories}
//                                 optionLabel="name"
//                                 filter
//                                 showClear
//                                 filterBy="name"
//                                 icon="pi pi-plus"
//                                 id="service"
//                                 name="service"
//                                 value={education.qualification}
//                                 {...register("qualification", {
//                                     required: `* Qualification is required`,
//                                 })}
//                                 onChange={handleChange}
//                             />

//                             {errors.jobservice && <span className="text-danger font-weight-bold "> <p>{errors.service.message}</p>
//                             </span>}
//                         </div>

//                     </div>
//                     <div className="p-fluid p-md-6 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="location">Location * </label>
//                             <InputText
//                                 type="text"
//                                 placeholder="Location"
//                                 name="location"
//                                 {...register("location", { required: "Location is required" })}
//                             />
//                             {errors.location && <span className="text-danger font-weight-bold "> <p>{errors.location.message}</p>
//                             </span>}
//                         </div>
//                     </div>

//                     <div className="p-fluid p-md-6 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="address">Address * </label>
//                             <InputText
//                                 type="text"
//                                 placeholder="Address"
//                                 name="address"
//                                 {...register("address", { required: "Address is required" })}
//                             />
//                             {errors.address && <span className="text-danger font-weight-bold "> <p>{errors.address.message}</p>
//                             </span>}
//                         </div>
//                     </div>

//                     <div className="p-fluid p-md-6 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="phoneNumber">Phone Number * </label>
//                             <InputText
//                                 type="number"
//                                 placeholder="Phone Number"
//                                 name="phoneNumber"
//                                 {...register("phoneNumber", { required: "Phone Number is required" })}

//                             />

//                             {errors.address && <span className="text-danger font-weight-bold "> <p>{errors.phoneNumber.message}</p>
//                             </span>}
//                         </div>
//                     </div>
//                     <div className="p-fluid p-md-6 p-sm-12">

//                         <div className="p-field">
//                             <label htmlFor="startDate">  Start Date * &nbsp;
//                                 ( <input type="checkbox" onClick={toggleJobDate} name="instance" defaultChecked={jobDateNow}
//                                     className="align-text-bottom" />
//                                 <small className="font-weight-bold"> NOW </small>  )
//                             </label>
//                             <Calendar
//                                 id="startDate"
//                                 type="date"
//                                 value={instaceJobDate || startDate}
//                                 disabled={jobDateNow}
//                                 name="startDate"
//                                 {...register("startDate", {
//                                     required: `* Start Date is required`,
//                                 })}
//                                 onSelect={(e) => {
//                                     const inputName = "startDate";
//                                     const value = new Date(e.value).toISOString();

//                                     setStartDate(value);
//                                     setValue(inputName, value, { shouldValidate: true });
//                                 }}
//                                 name="startDate"
//                                 {...register("startDate", {
//                                     required: `* Start date is required`,
//                                 })}
//                             />
//                             {errors.startDate && <span className="text-danger font-weight-bold "> <p>{errors.startDate.message}</p>
//                             </span>}
//                         </div>
//                     </div>

//                     <div className="p-fluid p-md-6 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="endDate">{" "}End Date * </label>
//                             <Calendar
//                                 id="endDate"
//                                 type="date"
//                                 value={endDate}
//                                 name="endDate"
//                                 {...register("endDate", {
//                                     required: `* End Date is required`,
//                                 })}
//                                 onSelect={(e) => {
//                                     const inputName = "endDate";
//                                     const value = e.value.toISOString();
//                                     setEndDate(value);
//                                     setValue(inputName, value, { shouldValidate: true });
//                                 }}
//                                 name="endDate"
//                                 {...register("endDate", {
//                                     required: `* End date is required`,
//                                 })}
//                             />
//                             {errors.endDate && (<span className="text-danger font-weight-bold">&nbsp; {errors.endDate.message}</span>)}
//                         </div>
//                     </div>

//                     <div className="p-fluid p-md-6 p-sm-12" hidden={jobDateNow}>
//                         <div className="p-field">
//                             <label htmlFor="lastname"> Time *</label>
//                             <InputText type="time"
//                                 placeholder="Time"
//                                 name="time"
//                                 {...register("time", { required: "Time is required" })}
//                             />
//                             {errors.time && <span className="text-danger font-weight-bold "> <p>{errors.time.message}</p>
//                             </span>}
//                         </div>
//                     </div>
//                     <div className="p-fluid p-md-12 p-sm-12">
//                         <div className="p-field">
//                             <label htmlFor="lastname"> Description *</label>
//                             <InputTextarea
//                                 defaultValue={desc}
//                                 onChange={(e) => setDesc(e.target.value)}
//                                 rows={3}
//                                 cols={30}
//                                 placeholder="Job Description"
//                                 name="description"
//                                 {...register("description", { required: "Description is required" })}
//                             />
//                             {errors.description && <span className="text-danger font-weight-bold "> <p>{errors.description.message}</p>
//                             </span>}
//                         </div>
//                     </div>
//                 </div>
//                 <Button icon="pi pi-check" iconPos="left" onClick={confirm()} label="Submit" id="saveButton" type="submit" className="float-right" />
//             </form>
//         </div>
//     );
// }

// export default New;