import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import moment from 'moment';
import { likeComment, deleteComment } from "../../store/modules/comment";
import agent from "../../services/agent.service";
import { formatter } from '../../helpers/converter';
import ThumbsDown from "../../components/ThumbDown";
import ThumbsUp from "../../components/ThumbUp";
import CommentForm from './CommentForm';
import './CommentSection.css';
import { ACCOUNT_TYPE } from 'constants/accountType';

const Comment = ({ comment, key, postId, expandProfileImage }) => {
  const dispatch = useDispatch();
  const [displayCommentForm, setDisplayCommentForm] = useState(false);
  const isAuthenticated = agent.Auth.isAuth();
  const isMe = comment.createdBy === agent.Auth.current()?.email;

  const handleLike = (e) => {
    const commentId = e.currentTarget.dataset.id;
    dispatch(likeComment(commentId, postId));
  }

  const onEdit = () => {
    setDisplayCommentForm(true);
  }
  return (
    <div className="timeline-commentContainer" id={key}>
      <div className="d-flex p-pl-2 p-pt-2 w-100">
        {
          comment.imageUrl
            ?
            <img
              width="40"
              height="40"
              src={`${comment.imageUrl}`}
              className="rounded-circle profile-picture-timeline p-mr-2"
              onClick={expandProfileImage}
              alt="profile"
            />
            :
            <>
              <i className="pi pi-user timeline-comment-emptyProfilePic-small p-p-1 mx-1 bg-gray rounded h-50" />
            </>
        }
        <div className="w-100">
          <span className=" d-flex justify-content-between">
            <div>
              {comment?.author && <h6>
                {
                  comment.accountType === ACCOUNT_TYPE.CORPORATE
                    ?
                    comment?.author?.companyName
                    :
                    (`${formatter.capitalizeFirstLetter(comment?.author?.firstName)} ${formatter.capitalizeFirstLetter(comment?.author?.lastName)}`)
                }
                {isMe && <small className='p-mx-2 p-px-1 text-light rounded' style={{background: 'green', fontSize: '0.7rem'}}>me</small>}


              </h6>}

            </div>
            {
              <div className="dropdown font-weight-bold mr-4 d-flex justify-content-between">
                <span className="timeline-cardtitle-posttime p-pt-1 p-pb-1">
                  <i className="pi pi-clock p-pr-1" />
                  <span>
                    {moment(comment.createdAt).fromNow('MMMM Do YYYY')} ago
                  </span>
                </span>
                {comment.createdBy === agent.Auth.current()?.email && <i
                  type="button"
                  role="button"
                  aria-expanded="false"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  className="pi pi-ellipsis-v p-pt-1 p-px-2 mx-2 text-white rounded-pill bg-success"
                />}
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
          <small className="d-flex align-center justify-content-start p-mt-1 p-pl-3">
            {
              isAuthenticated ?
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
                    showText={true}
                  />
                  {
                    comment.likes > 0 &&
                    <span className="text-success p-px-2">
                      {comment.likes}
                    </span>
                  }
                </span>
                :
                <p className="p-pr-2">
                  {
                    comment.likes > 0 &&
                    <>
                      {`${comment.likes} ${comment.likes > 1 ? "likes" : "like"}`}
                    </>
                  }
                </p>
            }
          </small>
        </b>
      </div>
    </div>
  );
}

export default Comment;