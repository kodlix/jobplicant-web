import React from "react";

const AppBreadCrumb = ({ name, link, pageName }) => {
  return (
    <nav aria-label="breadcrumb" className="py-2 pt-4 font-weight-bold custom-container">
      <ol className="breadcrumb bg-light">
        <li className="breadcrumb-item"><a href="#" className="lighter-custom-color-text">Home</a></li>
        <li className="breadcrumb-item"><a href="#" className="lighter-custom-color-text">Library</a></li>
        <li className="breadcrumb-item active" aria-current="page">Data</li>
      </ol>
    </nav>
  );
};

export default AppBreadCrumb;
