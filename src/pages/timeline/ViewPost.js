import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useParams } from 'react-router-dom'
import { formatter } from '../../helpers/converter';
import { openModal, closeModal } from "store/modules/modal";
import { loadProfileInfo } from "store/modules/account";
import { closeEmojiPicker } from "store/modules/emojiPicker";
import { deletePost, likePost, dislikePost, viewPost } from "../../store/modules/timeline";
import { loadComments } from "../../store/modules/comment";
import TimelineLeftPanel from "./TimelineLeftPanel";
import { loadAllJobs } from "store/modules/job";
import { TIMELINE } from "constants/timeline";
import agent, { API_ROOT } from "../../services/agent.service";
import moment from "moment";
import JobSidePanel from "../../components/JobSidePanel";
import ThumbsDown from "../../components/ThumbDown";
import ThumbsUp from "../../components/ThumbUp";
import "./Timeline.css";

const ViewPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.timeline.posts);
  const loading = useSelector(state => state.timeline.loadingPosts);
  const error = useSelector(state => state.timeline.error);
  const allJobs = useSelector(state => state.job.allJobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [postId, setPostId] = useState("");
  const [imageToDisplay, setImageToDisplay] = useState("");
  const [copyAlert, setCopyAlert] = useState(false);
  const commentsByPage = useSelector(state => state.comment.comments);
  const params = useParams();
  const isAuthenticated = agent.Auth.isAuth();

  const onShow = (id) => {
    if (id) {
      setPostId(id);
      dispatch(openModal(TIMELINE.EDITPOST));
    }
    else {
      dispatch(openModal(TIMELINE.CREATEPOST));
    }
  }

  useEffect(() => {
    if (params) {
      dispatch(viewPost(params.id, "viewPost"));
      if (isAuthenticated) {
        dispatch(loadProfileInfo());
        dispatch(loadAllJobs());
      }
    }
  }, [dispatch]);

  const expandProfileImage = (e) => {
    setImageToDisplay(e.target.src)
    dispatch(openModal(TIMELINE.ACTIVEUSERPICTURE));
  }

  const expandPostImage = (e) => {
    setImageToDisplay(e.target.src);
    dispatch(openModal(TIMELINE.POSTIMAGE));
  }

  const onHide = (name) => {
    dispatch(closeModal(name));
    dispatch(closeEmojiPicker());
    setImageToDisplay("");
    setPostId("");
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
    setCopyAlert(true);
    setTimeout(function () { setCopyAlert(false); }, 1000);
  }

  const handleViewComments = (commentPage, loadingType) => {
    dispatch(loadComments(params.id, commentPage, 1, loadingType));
  }

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-content">
          <div className="p-grid p-mt-2 p-m-0">
            {isAuthenticated &&
              <TimelineLeftPanel
                profileInfo={profileInfo}
                expandProfileImage={expandProfileImage}
              />}
            <div className={`p-col-12 p-md-6 p-px-0 ${isAuthenticated ? "p-md-6" : "p-md-9"}`}>
              <ModalMode
                onHide={onHide}
                postId={postId}
                post={posts?.data[params.id]}
                imageUrl={imageToDisplay}
              />
              {
                loading === "viewPost" &&
                posts?.ids.length === 0 &&
                <div className="p-p-5 d-flex justify-content-center">
                  <i
                    className="pi pi-spin pi-spinner"
                    style={{ 'fontSize': '2em', color: "#5A2846" }} />
                </div>
              }
              {
                error?.statusCode === 404 &&
                <div className="p-card p-py-3 p-py-sm-5 p-pl-3 p-pl-sm-5 p-pr-4 p-pr-sm-6 timeline-posts timeline-postsContainer--empty">
                  <h1>
                    <u>
                      404
                    </u>
                  </h1>
                  <h5 className="p-mt-4">
                    This post no longer exists
                  </h5>
                </div>
              }
              {
                posts?.ids?.length > 0 &&
                <div className="timeline-postsContainer">
                  <div className="p-card p-py-3 p-py-sm-5 p-pl-3 p-pl-sm-5 p-pr-4 p-pr-sm-6 p-mb-2 timeline-posts">
                    <span className="d-flex justify-content-between">
                      <span className="d-flex">
                        {
                          posts?.data[params.id]?.author?.imageUrl ?
                            <img
                              width="70"
                              height="70"
                              src={`${API_ROOT}/${posts?.data[params.id].author.imageUrl}`}
                              alt={`${formatter.capitalizeFirstLetter(posts?.data[params.id].author.firstName)}`}
                              className="rounded-circle p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 profile-picture-timeline text-white"
                            />
                            :
                            <i className="pi pi-user  p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 timeline-emptyProfilePic-medium"></i>
                        }
                        <span>
                          {
                            posts?.data[params.id]?.author?.accountType !== "Corporate" &&
                            <span className="p-card-title cardtitle-posts p-mb-0">
                              {`${formatter.capitalizeFirstLetter(posts?.data[params.id]?.author?.firstName)} ${formatter.capitalizeFirstLetter(posts?.data[params.id]?.author?.lastName)}`}
                            </span>
                          }
                          {
                            posts?.data[params.id]?.author?.accountType === "Corporate" &&
                            <span className="p-card-title cardtitle-posts p-mb-0">
                              {formatter.capitalizeFirstLetter(posts?.data[params.id]?.author?.companyName)}
                            </span>
                          }
                          {
                            posts?.data[params.id].author.accountType === "Artisan" &&
                            <span className="stars p-ml-1 align-text-bottom" style={{ "--rating": posts?.data[params.id].author.rating }} />
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
                              {moment(posts?.data[params.id].createdAt).fromNow('MMMM Do YYYY')} ago
                            </span>
                          </div>
                        </span>
                      </span>
                      {
                        posts?.data[params.id].createdBy === agent.Auth.current()?.email &&
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
                              onClick={() => onShow(posts?.data[params.id].id)}
                            >
                              Edit
                            </li>
                            <li
                              className="dropdown-item timeline-dropdownItem"
                              onClick={() => dispatch(deletePost(posts.data[params.id].id, "fromViewPost"))}
                            >
                              Delete
                            </li>
                          </ul>
                        </div>
                      }
                    </span>
                    <h6 className="p-my-3">
                      <u>
                        {posts?.data[params.id].title}
                      </u>
                    </h6>
                    <div className="p-my-4 w-100 h-100">
                      <div
                        className="p-mb-3"
                        dangerouslySetInnerHTML={{ __html: posts?.data[params.id].body }}
                      />
                      {
                        posts?.data[params.id]?.postImage &&
                        <img
                          width="100%"
                          alt={posts?.data[params.id].title}
                          className="timeline-postImage text-white"
                          src={`${API_ROOT}/${posts?.data[params.id].postImage}`}
                          onClick={expandPostImage} />
                      }
                    </div>
                    <div className="cardtitle-statusbar-timeline p-my-3 p-py-3">
                      <div className="d-flex">
                        <span
                          data-id={posts?.data[params.id].id}
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
                            posts?.data[params.id].likes > 0 &&
                            <h5 className="p-pr-1">
                              {posts?.data[params.id].likes}
                            </h5>
                          }
                        </span>
                        <span
                          data-id={posts?.data[params.id].id}
                          onClick={(e) => handleDislike(e)}
                          className="post-statusbar-content align-items-start"
                        >
                          <ThumbsDown
                            width="23"
                            height="23"
                            disliked={false}
                            className="p-mr-1" />
                          {
                            posts?.data[params.id].dislikes > 0 &&
                            <h5 className="p-pr-1">
                              {posts?.data[params.id].dislikes}
                            </h5>
                          }
                        </span>
                      </div>
                      <div
                        className="timeline-postShare-button"
                        data-id={posts?.data[params.id].id}
                        onClick={handleShareButton}
                      >
                        <span className="p-button-label">
                          <i className="pi pi-share-alt p-mr-1" />
                          Share
                        </span>
                      </div>
                      <span className={copyAlert ? "timeline-copyModalAlert--active" : "timeline-copyModalAlert"}>
                        Link copied
                      </span>
                    </div>
                    <CommentForm
                      postId={posts?.data[params.id].id}
                      imageUrl={profileInfo?.imageUrl}
                    />
                    <CommentList
                      postId={posts?.data[params.id].id}
                      comments={commentsByPage}
                      onViewComments={handleViewComments}
                    />
                  </div>
                </div>
              }
            </div>
            <JobSidePanel data={allJobs} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPost;