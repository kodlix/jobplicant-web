import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { likeComment, dislikeComment, deleteComment } from "../../store/modules/comment";
import agent from "../../services/agent.service";
import CommentForm from './CommentForm';
import './CommentSection.css';

const Comment = ({ comment }) => {
  const dispatch = useDispatch();
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const handleLike = (e) => {
    const commentId = e.currentTarget.dataset.id;
    dispatch(likeComment(commentId));
  }

  const handleDislike = (e) => {
    const commentId = e.currentTarget.dataset.id;
    dispatch(dislikeComment(commentId));
  }

  const onEdit = () => {
    setDisplayCommentForm(true);
  }
  return (
    <div className="timeline-commentContainer">
      <div className="d-flex p-pl-3 p-pt-3 w-100">
        <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
        <div className="w-100">
          <span className=" d-flex justify-content-between">
            <div>
              <h6>
                John Doe
        </h6>
              <div className="timeline-cardtitle-posttime p-pt-1 p-pb-3"><i className="pi pi-clock p-pr-1"></i>
                <span>
                  {moment(comment.createdAt).fromNow('MMMM Do YYYY')} ago
          </span>
              </div>
            </div>
            {comment.createdBy === agent.Auth.current()?.email &&
              <div className="dropdown font-weight-bold ml-2">
                <i type="button" className="pi pi-ellipsis-v" role="button" id="dropdownMenuLink"
                  data-bs-toggle="dropdown" aria-expanded="false"></i>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  {/* endpoint unavailable to edit comment */}
                  {/* <li className="dropdown-item timeline-dropdownItem" onClick={() => onEdit(comment.id)} >
                    Edit
                </li> */}
                  <li className="dropdown-item timeline-dropdownItem" data-id={comment.id}
                    onClick={(e) => dispatch(deleteComment(e.currentTarget.dataset.id))} >
                    Delete
                </li>
                </ul>
              </div>
            }
          </span>

          {!displayCommentForm && <div className="p-pt-2">
            {comment.message}
          </div>
          }
        </div>
      </div >
      {
        displayCommentForm && <CommentForm editMode={displayCommentForm} id={comment.id} />
      }
      <div className="p-mb-3">
        <b>
          <small className="d-flex align-center justify-content-end">
            <span className="post-statusbar-content p-pr-3" onClick={(e) => handleLike(e)} data-id={comment.id}>
              <i className="pi pi-arrow-up p-pr-1"></i>
              {
                comment.likes > 0 &&
                <h6 className="text-success">
                  {comment.likes}
                </h6>
              }
            </span>
            <span className="post-statusbar-content" onClick={(e) => handleDislike(e)} data-id={comment.id} >
              <i className="pi pi-arrow-down p-pr-1"></i>
              {
                comment.dislikes > 0 &&
                <h6>
                  {comment.dislikes}
                </h6>
              }
            </span>
          </small>
        </b>
      </div>
    </div>
  );
}

export default Comment;