import { Button } from "primereact/button"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";

const AdminServices = () => {
    const dispatch = useDispatch();
    const profileInfo = useSelector((state) => state.admin.profileInfo);
    const loading = useSelector(state => state.admin.loading)

    const handleServiceCreate = () => {
        console.log('do nothing now')
    }

    const [serviceTitle, setServiceTitle] = useState({});
    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        formState: { errors },
    } = useForm({ mode: "onChange", reValidateMode: "onChange" });


    const onSubmit = (e) => {
        console.log({ serviceTitle })
    }

    return (
        <>
            <h3 className="p-pb-2"><i className="pi pi-chart-line p-pr-2"></i>Services</h3>
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
                                    <div className="p-field p-col-12 p-md-12">
                                        <label className="inputLabel" htmlFor="course">
                                            Service Title
                                            {errors.serviceTitle && (
                                                <span className="text-danger font-weight-bold">
                                                    &nbsp; {errors.serviceTitle.message}
                                                </span>
                                            )}
                                        </label>
                                        <CustomInputField
                                            id="serviceTitle"
                                            name="Service Title"
                                            inputLabel="Service Title"
                                            register={register}
                                            inputChange={e => setServiceTitle(e.target.value)}
                                            value={serviceTitle}
                                        />
                                    </div>
                                </div>
                                <Button
                                    iconPos="left"
                                    label="Create"
                                    id="saveButton"
                                    type="submit"
                                />

                            </form>
                        </div>
                    </div>
                </div>
                <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
                    <div className="p-card h-100 p-mt-2">
                        <div className="p-card-body">
                            List of TAGS
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminServices