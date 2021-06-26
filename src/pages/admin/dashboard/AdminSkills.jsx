import { Button } from "primereact/button"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createSkills, deleteSkills, getSkills, updateSkills } from "store/modules/admin";
import { Tag } from "primereact/tag";
const AdminSkill = () => {
    const dispatch = useDispatch();
    const skillList = useSelector((state) => state.admin.skills);
    const loading = useSelector(state => state.admin.loading)
    const message = useSelector(state => state.admin.message)

    const [skills, setSkills] = useState({});
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    useEffect(() => {
        dispatch(getSkills());
    }, [])

    useEffect(() => {
        dispatch(getSkills())
        if (message !== null) {
           if(message === 'created'){
                setSkills({name: '', description: ''})
                reset({name: '', description:''})
           }
        }

    }, [message])



    const handleChange = e => {
        setSkills({ ...skills, [e.target.name]: e.target.value })
        setValue(e.target.name, e.target.value)
    }

    const handleEdit = (data, id) => {
        setSkills({ ...skills, id, name: data.name, description: data.description })
        setValue('name', skills.name);
        setValue('description', skills.description)
        console.log(skills)
    }

    const handleDelete = (id) => {
        var confirm = window.confirm('do you want to remove?')
        if (confirm) {
            dispatch(deleteSkills(id));
            console.log(id)
        }
    }

    const handleCreateNew = () => {
        setSkills({});
        setValue('name', '');
        setValue('description', '')
    }

    const onSubmit = e => {
        const obj = { name: skills.name, description: skills.description };
        if (skills.id) {
            dispatch(updateSkills(obj))
        } else {
            dispatch(createSkills(obj))
        }
    }
    return (<div className="background-dashboard container">
        <div className="background-top"></div>
        <div className="background-bottom" >

            <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Skills</h3>
            <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
                <div className="p-col-12 p-lg-4 p-p-lg-1">
                    <div className="p-card h-100 p-mt-2 text-center">
                        <div className="p-card-title p-px-3 p-pt-4">
                            <div className="d-flex justify-content-end">

                            </div>
                        </div>
                        <div className="p-card-body svgimage p-pt-0">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="p-fluid p-formgrid p-grid">
                                    <div className="p-field p-col-12 p-md-12 ">
                                        <label className="inputLabel" htmlFor="course">
                                            Skill
                                            {errors.name && (
                                                <span className="text-danger font-weight-bold">
                                                    &nbsp; {errors.name.message}
                                                </span>
                                            )}
                                        </label>
                                        <CustomInputField
                                            id="name"
                                            name="Skill"
                                            inputLabel="Skill"
                                            register={register}
                                            inputChange={handleChange}
                                            value={skills.name}
                                        />
                                    </div>
                                    <div className="p-field p-col-12 p-md-12">
                                        <label className="inputLabel" htmlFor="course">
                                            Description
                                            {errors.description && (
                                                <span className="text-danger font-weight-bold">
                                                    &nbsp; {errors.description.message}
                                                </span>
                                            )}
                                        </label>
                                        <CustomInputField
                                            id="description"
                                            name="Description"
                                            inputLabel="Description"
                                            register={register}
                                            inputChange={handleChange}
                                            value={skills.description}
                                        />
                                    </div>
                                </div>
                                <div className="buttons">
                                <Button
                                    iconPos="left"
                                    label={loading ? "Please wait..." : skills.id ? "Update" : "Create"}
                                    id="saveButton"
                                    type="submit"
                                    disabled={loading}
                                />
                                {skills.id && <Button label="Add New" type="button" onClick={handleCreateNew} />}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
                    <div className="p-card h-100 p-mt-2">
                        <div className="p-card-body pt-4">
                            {skillList.map((skill, index) => (<span key={index}>
                                <Tag >
                                    <span 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleEdit(skill, skill.id)}>
                                            {skill.name} 
                                    </span>&nbsp;
                                    <button 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleDelete(skill.id)}>
                                            &times;
                                    </button>
                                </Tag>&nbsp;&nbsp;
                            </span>))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>)
}

export default AdminSkill