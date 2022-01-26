import React from "react";
import "./AccountTypesOption.css";
import classnames from "classnames";

const AccountTypesOptions = ({ title, image, body, onClick, customstyle }) => {
  return (
    <>
      <div className="wrapper">
        {/* <div className="flex align-items-center justify-content-between"> */}
        <figure onClick={onClick} className={classnames(customstyle)}>
          <figcaption>
            <p>{title}</p>
            <img src={image} alt="jobs" className="img-fluid" />
            <h5>{body}</h5>
          </figcaption>
        </figure>
      </div>
      {/* </div> */}
    </>
  );
};

export default AccountTypesOptions;
