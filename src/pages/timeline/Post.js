import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { formatter } from '../../helpers/converter';
import { openModal } from "store/modules/modal";
import { deletePost, likePost, dislikePost, viewPost } from "../../store/modules/timeline";
import { loadComments } from "../../store/modules/comment";
import { TIMELINE } from "constants/timeline";
import agent, { API_ROOT } from "../../services/agent.service";
import moment from "moment";
import ThumbsDown from "../../components/ThumbDown";
import ThumbsUp from "../../components/ThumbUp";
import { ACCOUNT_TYPE } from 'constants/accountType';
import "./Timeline.css";

const Post = ({ profileInfo, post, isAuthenticated, expandProfileImage, onShow, commentCount, setImageToDisplay }) => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.timeline.loadingPosts);
  const [copyAlert, setCopyAlert] = useState(null);
  const currentUserAccountId = agent.Auth.current()?.id;
  const postId = post.id;

  const expandPostImage = (e) => {
    setImageToDisplay(e.target.src);
    dispatch(openModal(TIMELINE.POSTIMAGE));
  }

  const handleLike = (e) => {
    const postId = e.currentTarget.dataset.id
    dispatch(likePost(postId));
  }

  const handleDislike = (e) => {
    const postId = e.currentTarget.dataset.id
    dispatch(dislikePost(postId));
  }

  const handleShareButton = (e) => {
    const postId = e.currentTarget.dataset.id;
    const el = document.createElement('input');
    el.value = window.location.host + `/post/${postId}`;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopyAlert(postId);
    setTimeout(function () { setCopyAlert(false); }, 1000);
  }

  const handleViewComments = (postId, commentPage, pageLimit, loadingType) => {
    dispatch(loadComments(postId, commentPage, pageLimit, loadingType));
  }
  return (
    <div className="p-card p-py-3 p-py-sm-5 p-pl-3 p-pl-sm-5 p-pr-4 p-pr-sm-6 p-mb-2 timeline-posts">
      <span className="d-flex justify-content-between">
        <span className="d-flex">
          {
            post?.author?.imageUrl ?
              <img
                width="70"
                height="70"
                src={`${API_ROOT}/${post.author.imageUrl}`}
                alt={
                  post.author.accountType === ACCOUNT_TYPE.CORPORATE
                    ? formatter.capitalizeFirstLetter(post.author.firstName)
                    : formatter.capitalizeFirstLetter(post.author.companyName)
                }
                className="rounded-circle p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 profile-picture-timeline text-white"
                onClick={(e) => expandProfileImage(e.target.src)}
              />
              :
              <i className="pi pi-user p-mt-2 p-mb-2 p-mr-sm-3 p-mr-2 timeline-emptyProfilePic-medium"></i>
          }
          <span>
            <span className="p-card-title cardtitle-posts p-mb-0">
              {
                post.author.id !== currentUserAccountId &&
                (post.author.accountType !== ACCOUNT_TYPE.CORPORATE ?
                  <Link to={`/applicant/${post.author.id}`} className="posts-header">
                    {`${formatter.capitalizeFirstLetter(post.author.firstName)} ${formatter.capitalizeFirstLetter(post.author.lastName)}`}
                  </Link>
                  :
                  <Link to={`/company/${post.author.id}`} className="posts-header">
                    {post.author.companyName}
                  </Link>)
              }
              {
                post.author.id === currentUserAccountId &&
                (post.author.accountType !== ACCOUNT_TYPE.CORPORATE ?
                  <Link to={`/profile`} className="posts-header">
                    {`${formatter.capitalizeFirstLetter(post.author.firstName)} ${formatter.capitalizeFirstLetter(post.author.lastName)}`}
                  </Link>
                  :
                  <Link to={`/company`} className="posts-header">
                    {post.author.companyName}
                  </Link>)
              }
            </span>
            {
              post.author.accountType === ACCOUNT_TYPE.ARTISAN &&
              <span className="stars p-ml-1 align-text-bottom" style={{ "--rating": post.author.rating }} />
            }
            <div className="poster-description">
              <p>
              </p>
              <i className="pi pi-briefcase p-pr-1" />
              <span>Software Engineer</span>
              <i className="pi pi-map-marker p-pl-2 p-pr-1" />
              <span>Nigeria</span>
            </div>
            <div className="timeline-cardtitle-posttime">
              <i className="pi pi-clock p-pr-1 p-mt-2" />
              <span>
                {moment(post.createdAt).fromNow('MMMM Do YYYY')} ago
              </span>
            </div>
          </span>
        </span>
        {
          post.createdBy === agent.Auth.current()?.email &&
          <div className="dropdown font-weight-bold ml-2">
            <i
              type="button"
              className="pi pi-ellipsis-v"
              role="button"
              data-bs-toggle="dropdown"
              id="dropdownMenuLink"
              aria-expanded="false"
            />
            <ul
              className="dropdown-menu"
              aria-labelledby="dropdownMenuLink"
            >
              <li
                className="dropdown-item timeline-dropdownItem"
                onClick={() => onShow(post.id)}
              >
                Edit
              </li>
              <li
                className="dropdown-item timeline-dropdownItem"
                data-id={post.id}
                onClick={(e) => dispatch(deletePost(e.currentTarget.dataset.id))}
              >
                Delete
              </li>
            </ul>
          </div>
        }
      </span>
      <h6 className="p-my-3">
        <u>
          {post.title}
        </u>
      </h6>
      <div className="p-my-4 w-100 h-100">
        <div
          className="p-mb-3"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
        {
          post?.postImage &&
          <img
            width="100%"
            alt={post.title}
            className="timeline-postImage text-white"
            src={`${API_ROOT}/${post.postImage}`}
            onClick={expandPostImage} />
        }
      </div>
      <div className="cardtitle-statusbar-timeline p-my-3 p-py-3">
        {
          <div className="d-flex">
            {
              isAuthenticated ?
                <span
                  data-id={post.id}
                  onClick={(e) => handleLike(e)}
                  className="post-statusbar-content p-pr-2 align-items-start"
                >
                  <ThumbsUp
                    width="23"
                    height="23"
                    liked={false}
                    className="p-mr-1"
                  />
                  {
                    post.likes > 0 &&
                    <h6 className="p-pr-1">
                      {post.likes}
                    </h6>
                  }
                </span>
                :
                <p className="p-pr-2">
                  {
                    post.likes > 0 &&
                    <>
                      {`${post.likes} ${post.likes > 1 ? "likes" : "like"}`}
                    </>
                  }
                </p>
            }
            {
              isAuthenticated ?
                <span
                  data-id={post.id}
                  onClick={(e) => handleDislike(e)}
                  className="post-statusbar-content align-items-start"
                >
                  <ThumbsDown
                    width="23"
                    height="23"
                    disliked={false}
                    className="p-mr-1" />
                  {
                    post.dislikes > 0 &&
                    <h6 className="p-pr-1">
                      {post.dislikes}
                    </h6>
                  }
                </span>
                :
                <>
                  {
                    post.dislikes > 0 &&
                    <p className="p-pr-1">
                      {`${post.dislikes} ${post.dislikes > 1 ? "dislikes" : "dislike"}`}
                    </p>
                  }
                </>
            }
          </div>
        }
        <div
          className="timeline-postShare-button"
          data-id={post.id}
          onClick={handleShareButton}
        >
          <span className="p-button-label">
            <i className="pi pi-share-alt p-mr-1" />
            Share
          </span>
        </div>
        <span className={copyAlert === post.id ? "timeline-copyModalAlert--active" : "timeline-copyModalAlert"}>
          Link copied
        </span>
      </div>
      {
        isAuthenticated &&
        <CommentForm
          postId={post.id}
          imageUrl={profileInfo?.imageUrl}
          expandProfileImage={(e) => expandProfileImage(e.target.src)}
        />
      }
      {
        loading !== "loadMore" &&
        <CommentList
          postId={postId}
          onViewComments={handleViewComments}
          commentCount={commentCount}
          expandProfileImage={(e) => expandProfileImage(e.target.src)}
        />
      }
    </div>

  );
}

export default Post;