import { Button } from "primereact/button"
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux"
import CustomInputField from "components/CustomInputField";
import { createServiceGroup, deleteServiceGroup, loadServiceGroups, updateServiceGroup } from "store/modules/admin";
import { Paginator } from 'primereact/paginator';
import { DataTable } from 'primereact/datatable';
import { InputText } from 'primereact/inputtext';
import { Column } from 'primereact/column';

const AdminServiceGroups = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.admin.adminLoading);
  const serviceGroups = useSelector((state) => state.admin.serviceGroups);
  const [page, setPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(10);
  const [globalFilter, setGlobalFilter] = useState("");
  const [serviceGroup, setServiceGroup] = useState({});
  const [totalCapacity, setTotalCapacity] = useState(0);
  const [serviceGroupToDelete, setServiceGroupToDelete] = useState("");
  const {
    register: serviceGroupRegister,
    handleSubmit: handleServiceGroupSubmit,
    setValue: setServiceGroupValue,
    formState: { errors: serviceGroupErrors },
    clearErrors: clearServiceGroupErrors,
  } = useForm({ mode: "onChange", reValidateMode: "onChange" });

  useEffect(() => {
    dispatch(loadServiceGroups(page, pageLimit, "loadServiceGroups", globalFilter));
  }, [])

  useEffect(() => {
    //clear serviceGroupToDelete if error deleting service group
    if (!loading) {
      setServiceGroupToDelete(null);
    }
  }, [loading])

  useEffect(() => {
    //correct pagination on delete or create of service group
    setTotalCapacity((serviceGroups?.meta?.page - 1) * serviceGroups?.meta?.limit);
    setPage(serviceGroups?.meta?.page)
  }, [serviceGroups])

  const onPaginationChange = (event) => {
    setPage(event.page + 1)
    setTotalCapacity(event.first);
    setPageLimit(event.rows);
    dispatch(loadServiceGroups(event.page + 1, event.rows, "loadServiceGroups", globalFilter));
  }

  const handleServiceGroupChange = e => {
    setServiceGroup({ ...serviceGroup, [e.target.name]: e.target.value });
    setServiceGroupValue(e.target.name, e.target.value, { shouldValidate: true });
  }

  const handleServiceGroupSearch = () => {
    dispatch(loadServiceGroups(page, pageLimit, "searchServiceGroups", globalFilter));
  }

  const handleServiceGroupEdit = (data, id) => {
    clearServiceGroupErrors("serviceGroup",)
    setServiceGroup({ ...serviceGroup, id, name: data.name, description: data.description })
    setServiceGroupValue('serviceGroupName', data.name);
    setServiceGroupValue('serviceGroupDescription', data.description);
  }

  const handleServiceGroupDelete = (id, name) => {
    var confirm = window.confirm(`Do you want to delete the service group "${name}"?`);
    if (confirm && id) {
      setServiceGroupToDelete(id);
      if (serviceGroup.id === id) {
        //change update form to create form if update form has service group id of deleted service group
        setServiceGroup({ ...serviceGroup, id: null });
      }
      dispatch(deleteServiceGroup(id, "deleteServiceGroup", globalFilter));
    }
  }

  const cancelUpdateMode = () => {
    setServiceGroup({ ...serviceGroup, id: null });
  }

  const onServiceGroupSubmit = data => {
    const formData = { name: data.serviceGroupName, description: data.serviceGroupDescription }
    if (serviceGroup.id) {
      dispatch(updateServiceGroup(formData, serviceGroup.id, "updateServiceGroup", globalFilter))
    } else {
      dispatch(createServiceGroup(formData, "createServiceGroup", globalFilter))
    }
  }

  // Table Header
  const renderHeader = () => {
    return (
      <div className="table-header">
        <span>
          List of Service Groups
        </span>
        <form className="d-flex align-items-baseline" >
          <div className="p-input-icon-right searchInput-container-contact">
            <InputText className="p-mr-2 p-pr-5 contact-searchInput" placeholder="Search all service groups" value={globalFilter} onChange={(e) => setGlobalFilter(e.currentTarget.value)} />
            {
              globalFilter && loading !== "searchServiceGroups" &&
              <i className="pi pi-times p-mr-2" onClick={() => { setGlobalFilter(""); dispatch(loadServiceGroups(page, pageLimit, "loadServiceGroups", "")) }} name="clear" />
            }
          </div>
          <Button onClick={handleServiceGroupSearch} type="submit" icon="pi pi-search" className="p-px-1 p-pt-1 p-pb-2" loading={loading === "searchServiceGroups"} />
        </form>
      </div>
    );
  }
  // Table Header

  // Table Body
  const header = renderHeader();

  const SGActionTemplate = (rowData) =>
    <div>
      <i className="pi pi-pencil p-pr-3" onClick={() => handleServiceGroupEdit(rowData, rowData.id)} />
      {
        serviceGroupToDelete !== rowData.id &&
        <i className="pi pi-trash" onClick={() => handleServiceGroupDelete(rowData.id, rowData.name)} />
      }
      {
        serviceGroupToDelete === rowData.id &&
        <i className="pi pi-spinner pi-spin" />
      }
    </div>

  const getSGTableData = (data) => {
    return (
      <>
        <DataTable value={data} header={header} className="p-datatable-header-admin" dataKey="id" rowHover>
          <Column field="name" header="Name"></Column>
          <Column field="description" header="Description"></Column>
          <Column header="Actions" body={SGActionTemplate}></Column>
        </DataTable>
        <Paginator first={totalCapacity} rows={pageLimit} totalRecords={serviceGroups?.meta?.total} rowsPerPageOptions={[10, 20, 50]} onPageChange={onPaginationChange}></Paginator>
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
                    <label className="inputLabel" htmlFor="serviceGroupName">
                      Service Group Name
                          <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceGroupErrors?.name?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="serviceGroupName"
                      name="serviceGroupName"
                      inputLabel="Service Group"
                      register={serviceGroupRegister}
                      inputChange={handleServiceGroupChange}
                      value={serviceGroup.name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label className="inputLabel" htmlFor="serviceGroupDescription">
                      Service Group Description
                          <span className="text-danger p-ml-2 font-weight-bold">
                        {serviceGroupErrors?.description?.message}
                      </span>
                    </label>
                    <CustomInputField
                      id="serviceGroupDescription"
                      name="serviceGroupDescription"
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