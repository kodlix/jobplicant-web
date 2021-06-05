import React, { useEffect, useState } from 'react';
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
import Job from './Job.js';
import New from './New';
import Edit from './Edit';
import InstantHeader from './instant-header';
// import BreadCrumbPane from 'helpers/BreadCrumb';



const InstanceJobHire = () => {

    const { register, handleSubmit, formState: { errors }, setValue } = useForm({
        mode: "onChange",
        reValidateMode: "onChange"
    });

    const modes = {
        list: 'list',
        edit: 'edit',
        create: 'create',
        deleteMode: 'delete'
    };
    const [desc, setDesc] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [jobDateNow, setJobDateNow] = useState(true);
    const [activeIndex, setActiveIndex] = useState(0);
    const [mode, setMode] = useState(modes.list)



    const setActiveMode = (mode) => {
        setMode(mode);
    }

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
        <>
            <div className="background instant" >
                <div className="content-container">
                    <div className="p-grid">
                        <div className="p-col-12 p-md-9">
                            <div className="card card-size-list">
                                <div className="card-body">
                                    {mode === modes.create && <New setMode={setActiveMode} mode={modes.list} />}

                                    {mode === modes.list && <div className="tab-pane fade show active" id="instant-hire-list" role="tabpanel" aria-labelledby="instant-hire-list-tab">
                                        <InstantHires setMode={setActiveMode} mode={modes.create} />
                                    </div>
                                    }

                                    {mode === modes.edit && <Edit setMode={setActiveMode} mode={modes.list} />}
                                    {/* <div className="tab-pane fade" id="applicant-tab" role="tabpanel" aria-labelledby="applicant-tab">
                                        <Applicant />
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <Job />
                    </div>
                </div>
            </div>
        </>
    )
}

export default InstanceJobHire;
