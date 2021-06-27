import { Button } from "primereact/button"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createContractType, deleteContractType, getContractTypes, updateContractType } from "store/modules/admin";
import { Tag } from "primereact/tag";

const AdminContractType = () => {
    const dispatch = useDispatch();
    const contractTypes = useSelector((state) => state.admin.contractTypes);
    const loading = useSelector(state => state.admin.loading)
    const message = useSelector(state => state.admin.message)

    const [contractType, setContractType] = useState({});
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    useEffect(() => {
        dispatch(getContractTypes());
    }, [])

    useEffect(() => {
        if (message !== null) {
            dispatch(getContractTypes())
        }

    }, [message])



    const handleChange = e => {
        setContractType({ ...contractType, [e.target.name]: e.target.value })
    }

    const handleEdit = (data, id) => {
        console.log(data)
        setContractType({ ...contractType, id, name: data.name, description: data.description })
        setValue('name', data.name);
        setValue('description', data.description)
    }

    const handleDelete = (data) => {
        var confirm = window.confirm('do you want to remove?')
        if (confirm) {
            dispatch(deleteContractType(data.id));
        }
    }

    const handleCreateNew = () => {
        setContractType({});
        setValue('name', '');
        setValue('description', '')
    }

    const onSubmit = e => {
        const obj = { name: contractType.name, description: contractType.description };
        if (contractType.id) {
            dispatch(updateContractType(obj, contractType.id))
        } else {
            dispatch(createContractType(obj))
        }
    }
    return (<div className="background-dashboard container">
        <div className="background-top"></div>
        <div className="background-bottom" >

            <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Contract Type</h3>
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
                                            Contract Name
                                            {errors.name && (
                                                <span className="text-danger font-weight-bold">
                                                    &nbsp; {errors.name.message}
                                                </span>
                                            )}
                                        </label>
                                        <CustomInputField
                                            id="name"
                                            name="Contract Type"
                                            inputLabel="Contract Type"
                                            register={register}
                                            inputChange={handleChange}
                                            value={contractType.name}
                                        />
                                    </div>
                                    <div className="p-field p-col-12 p-md-12">
                                        <label className="inputLabel" htmlFor="course">
                                            Contract Description
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
                                            value={contractType.description}
                                        />
                                    </div>
                                </div>
                                <div className="buttons">
                                <Button
                                    iconPos="left"
                                    label={loading ? "Please wait..." : contractType.id ? "Update" : "Create"}
                                    id="saveButton"
                                    type="submit"
                                    disabled={loading}
                                />
                                {contractType.id && <Button label="Add New" type="button" onClick={handleCreateNew} />}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
                    <div className="p-card h-100 p-mt-2">
                        <div className="p-card-body pt-4">
                            {contractTypes.map((contractType, index) => (<span key={index}>
                                <Tag >
                                    <span 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleEdit(contractType, contractType.id)}>
                                            {contractType.name} 
                                    </span>&nbsp;
                                    <button 
                                        className="btn" 
                                        style={{ color: 'white' }} 
                                        onClick={() => handleDelete(contractType)}>
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

export default AdminContractType