import React from 'react';
import DataTableComponent from './DataTableComponent';

const Accounts = () => {
    return (
        <div className="dashboard-container p-ml-5 p-px-5">
            <h3 className="p-pb-2 p-mt-5"><i className="pi pi-users p-pr-2" style={{ fontSize: "2rem" }}></i>Users</h3>
            <div className="">
                <div className="p-card p-mt-2">
                    <div className="p-card-title cardtitle p-py-3 p-px-5">
                        Personnel Management
                    </div>
                    <div className="p-grid p-mx-0 p-px-1 datatable-container">
                        <div className="p-col-12 p-card p-px-0 p-py-0 p-mt-2 datatable-content">
                            <DataTableComponent />
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default Accounts;