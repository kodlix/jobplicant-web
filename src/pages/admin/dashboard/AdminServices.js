import { Button } from "primereact/button"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createServiceGroup, deleteServiceGroup, loadServiceGroups, updateServiceGroup } from "store/modules/admin";
import { createService, deleteService, loadServices, updateService } from "store/modules/admin";
import { RadioButton } from 'primereact/radiobutton';
import { Tag } from "primereact/tag";
import { Dropdown } from 'primereact/dropdown';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const AdminService = () => {
  const dispatch = useDispatch();
  const serviceGroups = useSelector((state) => state.admin.serviceGroups);
  const services = useSelector((state) => state.admin.services);
  const loading = useSelector(state => state.admin.loading);

  const [serviceGroup, setServiceGroup] = useState({});
  const [service, setService] = useState({});
  const [serviceGroupOptions, setServiceGroupOptions] = useState([]);

  const {
    register: serviceRegister,
    handleSubmit: handleServiceSubmit,
    setValue: setServiceValue,
    formState: { errors: serviceErrors },
    clearErrors: clearServiceErrors,
    setValue
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  const {
    register: serviceGroupRegister,
    handleSubmit: handleServiceGroupSubmit,
    setValue: setServiceGroupValue,
    formState: { errors: serviceGroupErrors },
    clearErrors: clearServiceGroupErrors
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });


  useEffect(() => {
    dispatch(loadServiceGroups());
    dispatch(loadServices());
  }, [])

  // useEffect(() => {
  //   // {...serviceRegister("serviceGroupId", {
  //   //   required: "* is required",
  //   //   validate: value => value || "yh"
  //   // })}
  //   serviceRegister("serviceGroupId", { validate: value => value || "value" });
  // }, [serviceRegister])


  useEffect(() => {
    const newArray = [];
    if (serviceGroups?.data?.length) {
      serviceGroups.data.map((serviceGroup) => { newArray.push({ name: serviceGroup.name, id: serviceGroup.id }) })
    }
    setServiceGroupOptions(newArray);
  }, [serviceGroups])

  const handleServiceChange = e => {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  const handleServiceGroupChange = e => {
    setServiceGroup({ ...serviceGroup, [e.target.name]: e.target.value })
  }

  const handleServiceGroupEdit = (data, id) => {
    clearServiceGroupErrors("serviceGroup",)
    setServiceGroup({ ...serviceGroup, id, SGName: data.name, SGDescription: data.description })
    setServiceGroupValue('serviceGroup.name', data.name);
    setServiceGroupValue('serviceGroup.description', data.description);
  }

  const handleServiceGroupDelete = (id) => {
    var confirm = window.confirm('do you want to remove?')
    if (confirm) {
      dispatch(deleteServiceGroup(id));
    }
  }

  // useEffect(() => {
  //   serviceRegister("serviceGroupId", { required: "Gender is required" })
  // }, [serviceRegister])
  const handleServiceGroupCreate = () => {
    // setContractType({ ...contractType, name: '', description: "" });
    // setValue('name', '');
    // setValue('description', '')
  }

  const handleServiceEdit = (data, id) => {
    clearServiceErrors();
    setService({ ...service, id, name: data.name, description: data.description, serviceGroupId: "3dc9de10-e7b3-490b-bc96-4372fa1ddfb4" });
    setServiceValue('name', data.name);
    setServiceValue('description', data.description);
    setServiceValue('serviceGroupId', "Legal");
  }

  const handleServiceDelete = (id) => {
    var confirm = window.confirm('do you want to remove?')
    if (confirm && id) {
      dispatch(deleteService(id));
    }
  }

  const handleServiceCreate = () => {
    // setContractType({ ...contractType, name: '', description: "" });
    // setValue('name', '');
    // setValue('description', '')
  }
  console.log(services);

  const onServiceSubmit = data => {
    if (service.id) {
      dispatch(updateService(data, service.id))
    } else {
      dispatch(createService(data));
    }
  }

  const onServiceGroupSubmit = e => {
    const obj = { name: serviceGroup.SGName, description: serviceGroup.SGDescription };
    if (serviceGroup.id) {
      dispatch(updateServiceGroup(obj, serviceGroup.id))
    } else {
      dispatch(createServiceGroup(obj))
      setServiceGroupValue('SGName', '');
      setServiceGroupValue('SGDescription', '');
    }
  }

  const SActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil" onClick={() => handleServiceEdit(rowData, rowData.id)}></i>  <i className="pi pi-trash" onClick={() => handleServiceDelete(rowData.id)}></i>
    </div>

  const SGActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil" onClick={() => handleServiceGroupEdit(rowData, rowData.id)}></i>      <i className="pi pi-trash" onClick={() => handleServiceGroupDelete(rowData.id)}></i>
    </div>


  const getSTableData = (data) => {
    return (
      <DataTable value={data}>
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column header="Actions" body={SActionTemplate}></Column>
      </DataTable>
    )
  }

  const getSGTableData = (data) => {
    return (
      <DataTable value={data}>
        <Column field="name" header="Name"></Column>
        <Column field="description" header="Description"></Column>
        <Column header="Actions" body={SGActionTemplate}></Column>
      </DataTable>
    )
  }



  return (
    <div className="background-dashboard container">
      <div className="background-top">

      </div>
      <div className="background-bottom">
        <h3 className="p-pb-2">
          <i className="pi pi-chart-line p-pr-2"></i>Services & Service Groups
          </h3>
        <h5 className="p-pb-2 p-mt-5">
          <i className="pi pi-chart-line p-pr-2" />
            Services
          </h5>
        <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
          <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
            <div className="p-card h-100 p-mt-2">
              <div className="p-card-body pt-4">
                {getSTableData(services.data)}
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
                <form onSubmit={handleServiceSubmit(onServiceSubmit)}>
                  <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-12 ">
                      <label className="inputLabel" htmlFor="course">
                        Service Name
                          <span className="text-danger p-ml-2 font-weight-bold">
                          {serviceErrors?.name?.message}
                        </span>
                      </label>
                      <CustomInputField
                        id="name"
                        name="Service"
                        inputLabel="Service"
                        register={serviceRegister}
                        inputChange={handleServiceChange}
                        value={service.name}
                      />
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                      <label className="inputLabel" htmlFor="service.description">
                        Service Description
                        <span className="text-danger p-ml-2 font-weight-bold">
                          {serviceErrors?.description?.message}
                        </span>
                      </label>
                      <CustomInputField
                        id="description"
                        name="Description"
                        inputLabel="Description"
                        register={serviceRegister}
                        inputChange={handleServiceChange}
                        value={service.description}
                      />
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                      <label className="inputLabel" htmlFor="serviceGroup">
                        Service Group
                        <span className="text-danger p-ml-2 font-weight-bold">
                          {serviceErrors?.serviceGroupId?.message}
                        </span>
                      </label>
                      <div className="p-grid p-mt-1 text-left">
                        {serviceGroupOptions.map((serviceGroupOption) => (
                          <div className="p-col-12 p-md-6 p-py-1">
                            <RadioButton
                              className="p-mr-1"
                              name="serviceGroupId"
                              value={serviceGroupOption.id}
                              inputId={serviceGroupOption.id}
                              checked={service?.serviceGroupId === serviceGroupOption.id}
                              {...serviceRegister("serviceGroupId", {
                                required: " * Service Group is required",
                              })}
                              onChange={(e) => {
                                setService({ ...service, serviceGroupId: e.value })
                                setServiceValue('serviceGroupId', e.value, { shouldValidate: true })
                              }
                              }
                            />
                            {/* <RadioButton
                              inputId={serviceGroupOption.id} type="radio"
                              name="serviceGroupId"
                              value={serviceGroupOption.id}
                              onChange={(e) => { setService({ ...service, serviceGroupId: e.value }); setValue('service.serviceGroupId', e.value, { shouldValidate: true }) }}
                              checked={service?.serviceGroupId === serviceGroupOption.id}
                            /> */}
                            <label htmlFor="service.serviceGroupId">
                              {serviceGroupOption.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <Button
                      type="submit"
                      iconPos="left"
                      id="saveButton"
                      disabled={loading}
                      label={loading ? "Please wait..." : service.id ? "Update" : "Create"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <h5 className="p-pb-2 p-mt-5">
          <i className="pi pi-chart-line p-pr-2" />
          Service Groups
        </h5>
        <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
          <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
            <div className="p-card h-100 p-mt-2">
              <div className="p-card-body pt-4">
                {getSGTableData(serviceGroups.data)}
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
                <form onSubmit={handleServiceGroupSubmit(onServiceGroupSubmit)}>
                  <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-12 ">
                      <label className="inputLabel" htmlFor="serviceGroup.name">
                        Service Group Name
                          <span className="text-danger p-ml-2 font-weight-bold">
                          {serviceGroupErrors?.serviceGroup?.name?.message}
                        </span>
                      </label>
                      <CustomInputField
                        id="serviceGroup.name"
                        name="Service Group"
                        inputLabel="Service Group"
                        register={serviceGroupRegister}
                        inputChange={handleServiceGroupChange}
                        value={serviceGroup.name}
                      />
                    </div>
                    <div className="p-field p-col-12 p-md-12">
                      <label className="inputLabel" htmlFor="serviceGroup.description">
                        Service Group Description
                          <span className="text-danger p-ml-2 font-weight-bold">
                          {serviceGroupErrors?.serviceGroup?.description?.message}
                        </span>
                      </label>
                      <CustomInputField
                        id="serviceGroup.description"
                        name="Description"
                        inputLabel="Description"
                        register={serviceGroupRegister}
                        inputChange={handleServiceGroupChange}
                        value={serviceGroup.description}
                      />
                    </div>
                  </div>
                  <div className="buttons">
                    <Button
                      type="submit"
                      iconPos="left"
                      id="saveButton"
                      disabled={loading}
                      label={loading ? "Please wait..." : serviceGroup.id ? "Update" : "Create"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default AdminService;