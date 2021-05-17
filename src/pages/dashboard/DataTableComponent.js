import React, { useState } from 'react';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { DataTable } from 'primereact/datatable';

const DataTableComponent = () => {
  const rowData = [
    {
      age: 30,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer1'
    },
    {
      age: 32,
      name: 'John Doe2',
      office: 'London',
      position: 'Software Engineer2'
    },
    {
      age: 33,
      name: 'John Doe3',
      office: 'London',
      position: 'Software Engineer3'
    },
    {
      age: 34,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer'
    },
    {
      age: 30,
      name: 'John Doe',
      office: 'London',
      position: 'Software Engineer'
    }
  ]
  // const [globalFilter, setGlobalFilter] = useState(null);
  // const nameBodyTemplate = () => {
  //   console.log(rowData.name)
  //   return (
  //     <React.Fragment>
  //       <span className="p-column-title">Name</span>
  //       {rowData.name}
  //     </React.Fragment>
  //   );
  // }

  const renderHeader = () => {
    return (
      <div className="table-header d-flex justify-content-between">
        List of Customers
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText type="search" 
          // onInput={(e) => setGlobalFilter(e.target.value)} 
          placeholder="Global Search" />
        </span>
      </div>
    );
  }

  const header = renderHeader();


  return (
    <DataTable value={rowData} className="p-datatable-gridlines" sortMode="multiple" header={header} 
    // globalFilter={globalFilter}
     >
      <Column field="name" header="Name" sortable />
      <Column field="position" header="Position" sortable></Column>
      <Column field="office" header="Office" sortable></Column>
      <Column field="age" header="Age" sortable></Column>
    </DataTable>
  );
}

export default DataTableComponent;