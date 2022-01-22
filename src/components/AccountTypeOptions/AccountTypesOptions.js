import React from 'react';
import "./AccountTypesOption.css";

const AccountTypesOptions = ({ title, image, body, onClick }) => {
  return <div>

    <div className="wrapper"  >
      {/* <div className="flex align-items-center justify-content-between"> */}
      <figure onClick={onClick}>
        <figcaption >
          <p>{title}</p>
          <img src={image} alt="jobs" />
          <h5>{body}</h5>
        </figcaption>

      </figure>
    </div>
    {/* </div> */}
  </div>;
};

export default AccountTypesOptions;
