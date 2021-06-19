import React from 'react';
import './CommentSection.css';

const Comment = () => {
  return (
    <div className="d-flex">
      <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
      <span>
        <h6>
          John Doe
        </h6>
        <div className="cardtitle-posttime p-pt-1 p-pb-3"><i className="pi pi-clock p-pr-1"></i>
          <span>
            3 min ago
          </span>
        </div>
        <div>
          the rain in spain falls mainly in the plain.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus urna, fermentum eu eros vel, hendrerit elementum ex. Integer augue sem, ornare id consectetur in, lobortis mattis sapien. Ut metus augue, pharetra et dui et, accumsan vulputate nulla. Aliquam aliquam vestibulum arcu tincidunt pellentesque. Fusce mollis sodales laoreet. Quisque pellentesque pellentesque eros.
         </div>
        <div className="p-mt-1">
          <b>
            <small className="d-flex align-center justify-content-end">
              <button className="reply-button">
                Reply
              <i className="pi pi-comment"></i>
              </button>
            </small>
          </b>
        </div>
      </span>
    </div>
  );
}

export default Comment;