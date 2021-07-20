import { Button } from "primereact/button"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { Paginator } from 'primereact/paginator';
import { createService, deleteService, loadServices, updateService, loadServiceGroupsForServiceComponent } from "store/modules/admin";
import { Dropdown } from 'primereact/dropdown';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import "./Admin.css";

const AdminServices = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [serviceGroupPage, setServiceGroupPage] = useState(1);
  const [service, setService] = useState({});
  const [pageLimit, setPageLimit] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");
  const loading = useSelector(state => state.admin.adminLoading);
  const services = useSelector((state) => state.admin.services);
  const [serviceGroupOptions, setServiceGroupOptions] = useState([]);
  const [selectedServiceGroupOption, setSelectedServiceGroupOption] = useState({});
  const serviceGroupOptionsByPage = useSelector((state) => state.admin.serviceGroupsForServiceComponent);

  const onPaginationChange = (event) => {
    setPage(event.first);
    setPageLimit(event.rows);
    dispatch(loadServices(event.page + 1, event.rows, "loadServices", globalFilter));
  }

  // React hook form
  const {
    register: serviceRegister,
    handleSubmit: handleServiceSubmit,
    setValue: setServiceValue,
    formState: { errors: serviceErrors },
    clearErrors: clearServiceErrors,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  // React hook form

  useEffect(() => {
    dispatch(loadServiceGroupsForServiceComponent());
    dispatch(loadServices(1, pageLimit, "loadServices", globalFilter));
  }, [dispatch]);


  useEffect(() => {
    const newArray = [];
    if (serviceGroupOptionsByPage?.data?.length) {
      serviceGroupOptionsByPage.data.map((serviceGroup) => { newArray.push({ serviceGroupName: serviceGroup.name, serviceGroupId: serviceGroup.id }) })
    }
    if (serviceGroupPage === 1) {
      setServiceGroupOptions(newArray);
    }
    else {
      setServiceGroupOptions([...serviceGroupOptions, ...newArray]);
      setServiceGroupPage(serviceGroupPage + 1);
    }
  }, [serviceGroupOptionsByPage]);

  // onClick Functions
  const handleServiceEdit = (data, id) => {
    clearServiceErrors();
    setService({ ...service, name: data.name, id: id, description: data.description, serviceGroup: { serviceGroupName: "service Group 20", serviceGroupId: "9a71b183-80c2-4876-b949-5ad85890e3d7" } });
    setSelectedServiceGroupOption({ serviceGroupName: "service Group 20", serviceGroupId: "9a71b183-80c2-4876-b949-5ad85890e3d7" })
    setServiceValue('name', data.name);
    setServiceValue('description', data.description);
    setServiceValue('serviceGroupId', data.groupId);
  }

  const onSearch = () => {
    dispatch(loadServices(1, pageLimit, "searchServices", globalFilter));
  }

  const handleServiceDelete = (id) => {
    var confirm = window.confirm('Do you want to delete this service?')
    if (confirm && id) {
      dispatch(deleteService(id));
    }
  }

  const cancelUpdateMode = () => {
    setService({ ...service, id: null });
  }
  // onClick Functions

  const handleServiceChange = e => {
    if (e.target.name === "serviceGroupId") {
      setSelectedServiceGroupOption(e.value);
      setServiceValue(e.target.name, e.value, { shouldValidate: true });
    }
    else {
      setService({ ...service, [e.target.name]: e.target.value });
      setServiceValue(e.target.name, e.target.value, { shouldValidate: true });
    }
  }
  const onServiceSubmit = (data) => {
    data.serviceGroupId = selectedServiceGroupOption.serviceGroupId;
    if (service.id) {
      dispatch(updateService(data, service.id, "updateService"))
    } else {
      dispatch(createService(data, "createService"));
    }
  }

  // Table Header
  const renderHeader = () => {
    return (
      <div className="table-header">
        <span>
          List of Services
        {/* <span className="contact-searchInput p-pl-2">
            (Showing {page + 1} to {page + services?.meta?.itemCount} of {services?.meta?.total})
          </span> */}
        </span>
        <div className="d-flex align-items-baseline">
          <div className="p-input-icon-right searchInput-container-contact">
            <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all services" value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)} />
            {
              globalFilter && loading !== "searchServices" &&
              <i className="pi pi-times p-mr-2" onClick={() => { setGlobalFilter(""); dispatch(loadServices(1, pageLimit, "loadServices", "")) }} name="clear" />
            }
          </div>
          <Button onClick={onSearch} type="button" icon="pi pi-search" className="p-px-1 p-pt-1 p-pb-2" loading={loading === "searchServices"} />
        </div>
      </div>
    );
  }
  // Table Header

  // Table Body
  const header = renderHeader();

  const SActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil p-pr-2" onClick={() => handleServiceEdit(rowData, rowData.groupId)} />
      <i className="pi pi-trash" onClick={() => handleServiceDelete(rowData.groupId)} />
    </div>

  const getSTableData = (data) => {
    return (
      <>
        <DataTable value={data}
          header={header} className="p-datatable-header-admin" dataKey="groupId" rowHover
        >
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column header="Actions" body={SActionTemplate}></Column>
        </DataTable>
        <Paginator first={page} rows={pageLimit} totalRecords={services?.meta?.total} rowsPerPageOptions={[10, 20, 50]} onPageChange={onPaginationChange}></Paginator>
      </>
    )
  }
  // Table Body

  console.log(services)

  return (
    <>
      <div className="p-grid p-mx-lg-0 grid-margin p-py-1">
        <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-body p-p-0">
              {getSTableData(services.data)}
            </div>
          </div>
        </div>
        <div className="p-col-12 p-lg-4 p-p-lg-1">
          <div className="p-card h-100 p-mt-2 text-center">
            <div className="p-card-title p-px-10 p-pt-4">
              <div className="d-flex justify-content-end">
              </div>
            </div>
            <div className="p-card-body svgimage p-pt-0">
              <form onSubmit={handleServiceSubmit(onServiceSubmit)}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12 ">
                    <label className="inputLabel" htmlFor="name">
                      Service Name
                          <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceErrors?.name?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="name"
                      name="name"
                      inputLabel="Service"
                      register={serviceRegister}
                      inputChange={handleServiceChange}
                      value={service.name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label className="inputLabel" htmlFor="description">
                      Service Description
                        <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceErrors?.description?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="description"
                      name="description"
                      inputLabel="Description"
                      register={serviceRegister}
                      inputChange={handleServiceChange}
                      value={service.description}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label className="inputLabel" htmlFor="serviceGroupId">
                      Service Group
                        <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceErrors?.serviceGroupId?.message}
                      </span>
                    </label>
                    <div className="p-grid p-mt-1 text-left">
                      <p className="p-pl-2 p-pb-2 selectedServiceGroup-admin"><b>Selected:</b> {selectedServiceGroupOption?.serviceGroupName || "none"}</p>
                      <Dropdown
                        filter
                        showClear
                        className="w-100 p-mx-2"
                        filterBy="serviceGroupName"
                        options={serviceGroupOptions}
                        value={selectedServiceGroupOption}
                        optionLabel="serviceGroupName"
                        placeholder="Select a Service Group"
                        name="serviceGroupId"
                        {...serviceRegister("serviceGroupId", {
                          required: " * Service Group is required",
                        })}
                        onChange={handleServiceChange}
                      />
                    </div>
                  </div>
                </div>
                <Button
                  type="submit"
                  iconPos="left"
                  className="submitButton-admin p-py-1"
                  label={service.id ? "Update" : "Create"}
                  loading={loading === "updateService" || loading === "createService"}
                />
                {
                  service.id &&
                  <Button
                    type="button"
                    iconPos="left"
                    label="Cancel"
                    disabled={loading === "updateService" || loading === "createService"}
                    className="p-ml-2 p-py-1"
                    onClick={() => cancelUpdateMode()}
                  />
                }
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default AdminServices;