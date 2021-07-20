import { Button } from "primereact/button"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createServiceGroup, deleteServiceGroup, loadServiceGroups, updateServiceGroup } from "store/modules/admin";
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const AdminServiceGroups = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [serviceGroup, setServiceGroup] = useState({});
  const loading = useSelector(state => state.admin.adminLoading);
  const [pageLimit, setPageLimit] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");
  const serviceGroups = useSelector((state) => state.admin.serviceGroups);


  const {
    register: serviceGroupRegister,
    handleSubmit: handleServiceGroupSubmit,
    setValue: setServiceGroupValue,
    formState: { errors: serviceGroupErrors },
    clearErrors: clearServiceGroupErrors,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  useEffect(() => {
    dispatch(loadServiceGroups(1, pageLimit, "loadServiceGroups", globalFilter));
  }, [])

  const onPaginationChange = (event) => {
    setPage(event.first);
    setPageLimit(event.rows);
    dispatch(loadServiceGroups(event.page + 1, event.rows, "loadServiceGroups", globalFilter));
  }

  const handleServiceGroupChange = e => {
    setServiceGroup({ ...serviceGroup, [e.target.name]: e.target.value });
    setServiceGroupValue(e.target.name, e.target.value, { shouldValidate: true });
  }

  //onClick
  const handleServiceGroupEdit = (data, id) => {
    clearServiceGroupErrors("serviceGroup",)
    setServiceGroup({ ...serviceGroup, id, name: data.name, description: data.description })
    setServiceGroupValue('name', data.name);
    setServiceGroupValue('description', data.description);
  }

  const handleServiceGroupDelete = (id) => {
    var confirm = window.confirm('Do you want to delete this service group?')
    if (confirm) {
      dispatch(deleteServiceGroup(id));
    }
  }

  const cancelUpdateMode = () => {
    setServiceGroup({ ...serviceGroup, id: null });
  }
  //onClick

  const onServiceGroupSubmit = data => {
    console.log(data)
    if (serviceGroup.id) {
      dispatch(updateServiceGroup(data, serviceGroup.id, "updateServiceGroup"))
    } else {
      dispatch(createServiceGroup(data, "createServiceGroup"))
    }
  }


  const onSearch = () => {
    dispatch(loadServiceGroups(1, pageLimit, "searchServiceGroupss", globalFilter));
  }

  // Table Header
  const renderHeader = () => {
    return (
      <div className="table-header">
        <span>
          List of Service Groups
      {/* <span className="contact-searchInput p-pl-2">
          (Showing {page + 1} to {page + services?.meta?.itemCount} of {services?.meta?.total})
        </span> */}
        </span>
        {/* <div className="d-flex align-items-baseline">
          <div className="p-input-icon-right searchInput-container-contact">
            <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all services" value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)} />
            {
              globalFilter && loading !== "searchServices" &&
              <i className="pi pi-times p-mr-2" onClick={() => { setGlobalFilter(""); dispatch(loadServiceGroups(1, pageLimit, "loadServices", "")) }} name="clear" />
            }
          </div>
          <Button onClick={onSearch} type="button" icon="pi pi-search" className="p-px-1 p-pt-1 p-pb-2" loading={loading === "searchServices"} />
        </div> */}
      </div>
    );
  }
  // Table Header

  // Table Body
  const header = renderHeader();

  const SGActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil p-pr-2" onClick={() => handleServiceGroupEdit(rowData, rowData.id)}></i>
      <i className="pi pi-trash" onClick={() => handleServiceGroupDelete(rowData.id)}></i>
    </div>

  const getSGTableData = (data) => {
    return (
      <>
        <DataTable value={data} header={header} className="p-datatable-header-admin" dataKey="id" rowHover>
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column header="Actions" body={SGActionTemplate}></Column>
        </DataTable>
        <Paginator first={page} rows={pageLimit} totalRecords={serviceGroups?.meta?.total} rowsPerPageOptions={[10, 20, 50]} onPageChange={onPaginationChange}></Paginator>
      </>
    )
  }
  // Table Body

  return (
    <>
      <div className="p-grid p-mx-lg-0 grid-margin p-py-1 p-mt-2">
        <div className="p-col-12 p-lg-8 p-p-lg-1 p-py-0">
          <div className="p-card h-100 p-mt-2">
            <div className="p-card-body p-p-0">
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
                    <label className="inputLabel" htmlFor="name">
                      Service Group Name
                          <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceGroupErrors?.name?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="name"
                      name="Service Group"
                      inputLabel="Service Group"
                      register={serviceGroupRegister}
                      inputChange={handleServiceGroupChange}
                      value={serviceGroup.name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label className="inputLabel" htmlFor="description">
                      Service Group Description
                          <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceGroupErrors?.description?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="description"
                      name="Description"
                      inputLabel="Description"
                      register={serviceGroupRegister}
                      inputChange={handleServiceGroupChange}
                      value={serviceGroup.description}
                    />
                  </div>
                </div>
                <Button
                  type="submit"
                  iconPos="left"
                  className="p-py-1 submitButton-admin"
                  label={serviceGroup.id ? "Update" : "Create"}
                  loading={loading === "updateServiceGroup" || loading === "createServiceGroup"}
                />
                {
                  serviceGroup.id &&
                  <Button
                    type="button"
                    iconPos="left"
                    label="Cancel"
                    disabled={loading === "updateServiceGroup" || loading === "createServiceGroup"}
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

export default AdminServiceGroups;