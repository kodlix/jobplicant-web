import React, { useState, useRef } from 'react';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';
import { SlideMenu } from 'primereact/slidemenu';

const DataTableComponent = () => {
  const menu = useRef(null);
  const data = [
    {
      age: 30,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer1',
      status: 'Full-time1'
    },
    {
      age: 32,
      name: 'John Doe2',
      office: 'London',
      position: 'Software Engineer2',
      status: 'Full-time'
    },
    {
      age: 33,
      name: 'John Doe3',
      office: 'London',
      position: 'Software Engineer3',
      status: 'Full-time'
    },
    {
      age: 34,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer',
      status: 'Full-time'
    },
    {
      age: 30,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer',
      status: 'Full-time'
    }
  ]

  const actionDropdown = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            },

          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    }
  ];

  const totalData = data.length;
  const [globalFilter, setGlobalFilter] = useState(null);
  const [multiSortMeta, setMultiSortMeta] = useState([{ field: 'category', order: -1 }]);
  const renderHeader = () => {
    return (
      <div className="table-header d-flex justify-content-between cardtitle">
        Artisans
        <span>
          Search
          <span className="p-input-icon-left p-ml-2">
            {/* <i className="pi pi-search" /> */}
            <InputText type="search"
              onInput={(e) => setGlobalFilter(e.target.value)}
            />
          </span>
        </span>
      </div>
    );
  }

  const sortData = (e) => {
    setMultiSortMeta(e.multiSortMeta);
    console.log(e.multiSortMeta);
  }

  const statusBodyTemplate = (rowData) => {
    return <span className={`product-badge status-${rowData.status}`}>{rowData.status}</span>;
  }

  const actionBodyTemplate = (rowData) => {
    return (
      <>
        {/* <i className="pi pi-ellipsis-v p-pr-3 actionColumn-ellipsis" onClick={(event) => menu.current.toggle(event)}></i> */}
        {/* <SlideMenu ref={menu} model={actionDropdown} popup viewportHeight={190} ></SlideMenu> */}
        <i className="pi pi-trash actionColumn-trash" id={rowData.name} onClick={(e) => console.log(e.target.id)}></i>
      </>
    )
  }

  const header = renderHeader();

  return (
    <DataTable
      rows={10}
      paginator
      value={data}
      header={header}
      sortMode="multiple"
      onSort={(e) => sortData(e)}
      globalFilter={globalFilter}
      className="p-datatable-gridlines"
      rowsPerPageOptions={[10, 20, 50]}
      currentPageReportTemplate={`Showing {first} to {last} of ${totalData}`}
      multiSortMeta={multiSortMeta}
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
    >
      <Column field="name" header="Name" className="ok" sortable />
      <Column field="position" header="Position" sortable></Column>
      <Column field="office" header="Office" sortable></Column>
      <Column field="age" header="Age" sortable></Column>
      <Column header="Status" field="status" body={statusBodyTemplate} sortable></Column>
      <Column header="Action" field="status" body={actionBodyTemplate}></Column>
    </DataTable>
  );
}

export default DataTableComponent;