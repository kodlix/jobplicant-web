import { Button } from "primereact/button"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createQualification, deleteQualification, getQualifications, updateQualification } from "store/modules/admin";
import { Tag } from "primereact/tag";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const AdminQualification = () => {
    const dispatch = useDispatch();
    const qualifictions = useSelector((state) => state.admin.qualifications);
    const loading = useSelector(state => state.admin.loading)
    const message = useSelector(state => state.admin.message)

    const [qualification, setQualification] = useState({});
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        clearErrors,
        formState: { errors },
    } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    useEffect(() => {
        dispatch(getQualifications());
    }, [])

    useEffect(() => {
        dispatch(getQualifications())
        if (message === 'created') {
            setQualification({ name: '', description: '' })
        }

    }, [message])



    const handleChange = e => {
        setQualification({ ...qualification, [e.target.name]: e.target.value })
        setValue(e.target.name, e.target.value)
    }

    const handleEdit = (data, id) => {
        setQualification({ ...qualification, id, name: data.name, description: data.description })
        setValue('name', qualification.name);
        setValue('description', qualification.description)
    }

    const handleDelete = (id) => {
        var confirm = window.confirm('do you want to remove?')
        if (confirm) {
            dispatch(deleteQualification(id));
            console.log(id)
        }
    }

    const handleCreateNew = () => {
        setQualification({});
        setValue('name', '');
        setValue('description', '')
    }

    const onSubmit = e => {
        const obj = { name: qualification.name, description: qualification.description };
        if (qualification.id) {
            dispatch(updateQualification(obj))
        } else {
            dispatch(createQualification(obj))
        }
    }

    const actionTemplate = (rowData) => <div>
        <i className="pi pi-pencil" onClick={() => handleEdit(rowData, rowData.id)}></i>&nbsp;&nbsp;
        <i className="pi pi-trash" onClick={() => handleDelete(rowData.id)}></i>
    </div>

    const getTableData = (qualifications) => {
        return (
            <DataTable value={qualifications}>
                <Column field="name" header="Name"></Column>
                <Column field="description" header="Description"></Column>
                <Column header="Action" body={actionTemplate}></Column>
            </DataTable>
        )
    }

    return (<div className="background-dashboard container">
        <div className="background-top"></div>
        <div className="background-bottom" >

            <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Qualification</h3>
            <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
                <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
                    <div className="p-card h-100 p-mt-2">
                        <div className="p-card-body pt-4">
                            {getTableData(qualifictions.data)}
                            {/* {qualifictions.map((q, index) => (<span key={index}>
                                <Tag >
                                    <span 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleEdit(q, q.id)}>
                                            {q.name} 
                                    </span>&nbsp;
                                    <button 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleDelete(q.id)}>
                                            &times;
                                    </button>
                                </Tag>&nbsp;&nbsp;
                            </span>))} */}
                        </div>
                    </div>
                </div>
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
                                            Qualification
                                            {errors.name && (
                                                <span className="text-danger font-weight-bold">
                                                    &nbsp; {errors.name.message}
                                                </span>
                                            )}
                                        </label>
                                        <CustomInputField
                                            id="name"
                                            name="Qualification"
                                            inputLabel="Qualification"
                                            register={register}
                                            inputChange={handleChange}
                                            value={qualification.name}
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
                                            value={qualification.description}
                                        />
                                    </div>
                                </div>
                                <div className="buttons">
                                    <Button
                                        iconPos="left"
                                        label={loading ? "Please wait..." : qualification.id ? "Update" : "Create"}
                                        id="saveButton"
                                        type="submit"
                                        disabled={loading}
                                    />
                                    {qualification.id && <Button label="Add New" type="button" onClick={handleCreateNew} />}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>)
}

export default AdminQualification