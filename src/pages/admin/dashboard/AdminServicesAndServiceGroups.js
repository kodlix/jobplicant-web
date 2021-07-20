import React from 'react';
import AdminServiceGroups from './AdminServiceGroups';
import AdminServices from './AdminServices';

const AdminServicesAndServiceGroups = () => {
  return (
    <div className="background-dashboard container">
      <div className="background-top">
      </div>
      <div className="background-bottom">
        <h4 className="p-pb-2 p-mb-2">
          <i className="pi pi-chart-line p-pr-2"></i>Services & Service Groups
          </h4>
        <AdminServices />
        <AdminServiceGroups />
      </div>
    </div>)
}

export default AdminServicesAndServiceGroups;