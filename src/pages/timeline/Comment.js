import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { likeComment, dislikeComment, deleteComment } from "../../store/modules/comment";
import agent from "../../services/agent.service";
import ThumbsDown from "../../components/ThumbDown";
import ThumbsUp from "../../components/ThumbUp";
import CommentForm from './CommentForm';
import './CommentSection.css';

const Comment = ({ comment, key, postId, expandProfileImage }) => {
  const dispatch = useDispatch();
  const [displayCommentForm, setDisplayCommentForm] = useState(false);

  const handleLike = (e) => {
    const commentId = e.currentTarget.dataset.id;
    dispatch(likeComment(commentId, postId));
  }

  const handleDislike = (e) => {
    const commentId = e.currentTarget.dataset.id;
    dispatch(dislikeComment(commentId, postId));
  }

  const onEdit = () => {
    setDisplayCommentForm(true);
  }
  return (
    <div className="timeline-commentContainer" id={key}>
      <div className="d-flex p-pl-3 p-pt-3 w-100">
        <img
          width="40"
          height="40"
          src="../../assets/logo.png"
          className="rounded-circle profile-picture-timeline p-mr-2"
          onClick={expandProfileImage}
        />
        <div className="w-100">
          <span className=" d-flex justify-content-between">
            <div>
              <h6>
                John Doe
              </h6>
              <div className="timeline-cardtitle-posttime p-pt-1 p-pb-3">
                <i className="pi pi-clock p-pr-1" />
                <span>
                  {moment(comment.createdAt).fromNow('MMMM Do YYYY')} ago
                </span>
              </div>
            </div>
            {comment.createdBy === agent.Auth.current()?.email &&
              <div className="dropdown font-weight-bold ml-2">
                <i
                  type="button"
                  role="button"
                  aria-expanded="false"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  className="pi pi-ellipsis-v"
                />
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li
                    data-id={comment.id}
                    className="dropdown-item timeline-dropdownItem"
                    onClick={(e) => dispatch(deleteComment(e.currentTarget.dataset.id, postId))}
                  >
                    Delete
                  </li>
                </ul>
              </div>
            }
          </span>

          {
            !displayCommentForm &&
            <div className="p-pt-2">
              {comment.message}
            </div>
          }
        </div>
      </div>
      {
        displayCommentForm &&
        <CommentForm
          id={comment.id}
          postId={postId}
          editMode={displayCommentForm}
        />
      }
      <div className="p-mb-3">
        <b>
          <small className="d-flex align-center justify-content-end p-mt-3">
            <span
              data-id={comment.id}
              className="post-statusbar-content p-pr-2"
              onClick={(e) => handleLike(e)}
            >
              <ThumbsUp
                width="20"
                height="20"
                liked={false}
                className="p-mr-1"
              />
              {
                comment.likes > 0 &&
                <h6 className="text-success">
                  {comment.likes}
                </h6>
              }
            </span>
            <span
              className="post-statusbar-content"
              onClick={(e) => handleDislike(e)}
              data-id={comment.id}
            >
              <ThumbsDown
                width="20"
                height="20"
                disliked={false}
                className="p-mr-1"
              />
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