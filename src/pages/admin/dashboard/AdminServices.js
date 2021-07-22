import { Button } from "primereact/button"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { Paginator } from 'primereact/paginator';
import { AutoComplete } from 'primereact/autocomplete';
import { createService, deleteService, loadServices, updateService, loadServiceGroupsForServiceComponent } from "store/modules/admin";
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import "./Admin.css";

const AdminServices = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.admin.services);
  const loading = useSelector(state => state.admin.adminLoading);
  const serviceGroupOptionsByPage = useSelector((state) => state.admin.serviceGroupsForServiceComponent);
  const [page, setPage] = useState(1);
  const [service, setService] = useState({});
  const [pageLimit, setPageLimit] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [serviceToDelete, setServiceToDelete] = useState("");
  const [serviceGroupOptions, setServiceGroupOptions] = useState([]);
  const [selectedServiceGroupOption, setSelectedServiceGroupOption] = useState(null);

  // React hook form
  const {
    register: serviceRegister,
    handleSubmit: handleServiceSubmit,
    setValue: setServiceValue,
    formState: { errors: serviceErrors },
    clearErrors: clearServiceErrors,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });
  // React hook form

  const onPaginationChange = (event) => {
    setTotalCapacity(event.first);
    setPageLimit(event.rows);
    dispatch(loadServices(event.page + 1, event.rows, "loadServices", globalFilter));
  }


  useEffect(() => {
    // clear service group if a service group has been created or updated
    if (loading === "createServiceGroup" || loading === "updateServiceGroup") {
      setSelectedServiceGroupOption(null);
      setServiceValue('groupId', "");
    }
    //clear serviceToDelete if error deleting service
    if (!loading) {
      setServiceToDelete(null);
    }
  }, [loading]);

  useEffect(() => {
    dispatch(loadServices(page, pageLimit, "loadServices", globalFilter));
  }, [dispatch]);

  useEffect(() => {
    //correct pagination on delete or create of service
    setTotalCapacity((services?.meta?.page - 1) * services?.meta?.limit);
    setPage(services?.meta?.page)
  }, [services])

  useEffect(() => {
    // create array for service group autocomplete dropdown
    const newArray = [];
    serviceGroupOptionsByPage?.data?.map((serviceGroup) => { newArray.push({ group: serviceGroup.name, groupId: serviceGroup.id }) })
    setServiceGroupOptions(newArray);
  }, [serviceGroupOptionsByPage]);

  const handleServiceEdit = (data, id) => {
    clearServiceErrors();
    setService({ ...service, name: data.name, id: id, description: data.description, serviceGroup: { group: data.groupName, groupId: data.groupId } });
    setSelectedServiceGroupOption({ group: data.group, groupId: data.groupId })

    //set values in react hook
    setServiceValue('name', data.name);
    setServiceValue('description', data.description);
    setServiceValue('groupId', data.groupId);
  }

  const handleServiceSearch = () => {
    dispatch(loadServices(page, pageLimit, "searchServices", globalFilter));
  }

  const handleServiceDelete = (id, name) => {
    var confirm = window.confirm(`Do you want to delete the service "${name}"?`)
    if (confirm && id) {
      setServiceToDelete(id);
      if (service.id === id) {
        //change update form to create form if update form has service id of deleted service
        setService({ ...service, id: null });
      }
      dispatch(deleteService(id));
    }
  }

  const cancelUpdateMode = () => {
    setService({ ...service, id: null });
  }

  const searchServiceGroups = (e) => {
    const searchValue = e.query ? e.query : "";
    dispatch(loadServiceGroupsForServiceComponent(1, 10, "searchServiceGroupsForService", searchValue))
  }

  const handleServiceChange = e => {
    setService({ ...service, [e.target.name]: e.target.value });
    setServiceValue(e.target.name, e.target.value, { shouldValidate: true });
  }

  const handleServiceGroupChange = e => {
    setSelectedServiceGroupOption(e.value);
    setServiceValue(e.target.name, e.value, { shouldValidate: true });
  }

  const onServiceSubmit = (data) => {
    data.groupId = selectedServiceGroupOption.groupId;
    if (service.id) {
      dispatch(updateService(data, service.id, "updateService", globalFilter));
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
        </span>
        <form className="d-flex align-items-baseline">
          <div className="p-input-icon-right searchInput-container-contact">
            <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all services" value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)} />
            {
              globalFilter && loading !== "searchServices" &&
              <i className="pi pi-times p-mr-2" onClick={() => { setGlobalFilter(""); dispatch(loadServices(page, pageLimit, "loadServices", "")) }} name="clear" />
            }
          </div>
          <Button onClick={handleServiceSearch} type="submit" icon="pi pi-search" className="p-px-1 p-pt-1 p-pb-2" loading={loading === "searchServices"} />
        </form>
      </div>
    );
  }
  // Table Header

  // Table Body
  const header = renderHeader();

  const SActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil p-pr-3" onClick={() => handleServiceEdit(rowData, rowData.id)} />
      {
        serviceToDelete !== rowData.id &&
        <i className="pi pi-trash" onClick={() => handleServiceDelete(rowData.id, rowData.name)} />
      }
      {
        serviceToDelete === rowData.id &&
        <i className="pi pi-spinner pi-spin" />
      }
    </div>

  const getSTableData = (data) => {
    return (
      <>
        <DataTable value={data}
          header={header} className="p-datatable-header-admin" dataKey="id" rowHover
        >
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column field="group" header="Service Group"></Column>
          <Column header="Actions" body={SActionTemplate}></Column>
        </DataTable>
        <Paginator first={totalCapacity} rows={pageLimit} totalRecords={services?.meta?.total} rowsPerPageOptions={[10, 20, 50]} onPageChange={onPaginationChange}></Paginator>
      </>
    )
  }
  // Table Body

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
                    <label className="inputLabel" htmlFor="groupId">
                      Service Group
                        <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceErrors?.groupId?.message}
                      </span>
                    </label>
                    <div className="p-mt-1 text-left">
                      <AutoComplete
                        field="group"
                        dropdown
                        forceSelection
                        dropdownMode="current"
                        suggestions={serviceGroupOptions}
                        value={selectedServiceGroupOption}
                        placeholder="Search and select a service group"
                        {
                        ...serviceRegister
                          ("groupId", {
                            required: " * Service Group is required",
                          })
                        }
                        onChange={handleServiceGroupChange}
                        completeMethod={searchServiceGroups}
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