import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { openModal, closeModal } from "store/modules/modal";
import { loadProfileInfo } from "store/modules/account";
import { closeEmojiPicker } from "store/modules/emojiPicker";
import { formatter } from '../../helpers/converter';
import { loadPosts, deletePost, likePost, dislikePost } from "../../store/modules/timeline";
import { loadComments } from "../../store/modules/comment";
import { loadAllJobs } from "store/modules/job";
import { TIMELINE } from "constants/timeline";
import agent, { API_ROOT } from "../../services/agent.service";
import moment from "moment";
import TimelineLeftPanel from "./TimelineLeftPanel";
import JobSidePanel from "../../components/JobSidePanel";
import ThumbsDown from "../../components/ThumbDown";
import ThumbsUp from "../../components/ThumbUp";

import "./Timeline.css";

const Timeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.timeline.posts);
  const loading = useSelector(state => state.timeline.loadingPosts);
  const allJobs = useSelector(state => state.job.allJobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [post, setPost] = useState({});
  const [pageNumber, setPageNumber] = useState(1);
  const [imageToDisplay, setImageToDisplay] = useState("");
  const [copyAlert, setCopyAlert] = useState(null);
  const isAuthenticated = agent.Auth.isAuth();
  const pageLimit = 10;

  const onShow = (id) => {
    if (id) {
      setPost(posts.data[id]);
      dispatch(openModal(TIMELINE.EDITPOST));
    }
    else {
      dispatch(openModal(TIMELINE.CREATEPOST));
    }
  }

  const expandProfileImage = (src) => {
    setImageToDisplay(src)
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
    setPost({});
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

  const loadmorePosts = () => {
    setPageNumber(pageNumber + 1)
    dispatch(loadPosts(pageNumber + 1, pageLimit, "loadMore"));
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(loadProfileInfo());
      dispatch(loadAllJobs());
    }
    dispatch(loadPosts(1, pageLimit, "loadPosts"));
  }, [dispatch]);

  useEffect(() => {
    if (loading === "loadPosts") {
      dispatch(closeEmojiPicker());
    }
  }, [posts]);

  return (
    <>
      <div className="timeline-container">
        <div className="timeline-content">
          <div className="p-grid p-mt-2 p-m-0">
            {isAuthenticated &&
              <TimelineLeftPanel
                profileInfo={profileInfo}
                expandProfileImage={(e) => expandProfileImage(e.target.src)}
              />}
            <div className={`p-col-12 p-px-0 ${isAuthenticated ? "p-md-6" : "p-md-9"}`}>
              {
                isAuthenticated &&
                <div className="p-card p-grid p-mb-2 p-mt-0 p-mx-0 p-p-3 align-items-center">
                  <div className="p-col-2 text-center profilepic-startpost-timeline p-pl-0 p-sm-pl-3">
                    {
                      profileInfo.imageUrl &&
                      <img
                        width="70"
                        height="70"
                        alt="Profile"
                        className="rounded-circle d-flex p-ml-1 p-ml-xs-2 p-ml-sm-4 p-ml-md-3"
                        src={profileInfo?.imageUrl}
                        onClick={(e) => expandProfileImage(e.target.src)}
                      />
                    }
                    {
                      !profileInfo.imageUrl &&
                      <i className="pi pi-user timeline-emptyProfilePic-small" />
                    }
                  </div>
                  <div className="p-col-10">
                    <Button
                      label="Start a Post"
                      className="postInputButton"
                      onClick={() => onShow()}
                    />
                    <ModalMode
                      onHide={onHide}
                      post={post}
                      imageUrl={imageToDisplay}
                    />
                  </div>
                </div>
              }
              {
                loading === "loadPosts" &&
                posts.ids.length === 0 &&
                <div className="p-p-5 d-flex justify-content-center">
                  <i
                    className="pi pi-spin pi-spinner"
                    style={{ 'fontSize': '2em', color: "#5A2846" }} />
                </div>
              }
              {
                loading !== "loadPosts" &&
                posts.ids.length === 0 &&
                <div className="p-card p-p-3 p-mb-1 timeline-posts">
                  <div className="p-mb-6 p-p-4 text-center">
                    <h3 className="p-card-title">
                      Create a post
                    </h3>
                    <h6>
                      Hello there, create your first post.
                    </h6>
                  </div>
                </div>
              }

              {
                posts?.ids?.length > 0 &&
                <div className="timeline-postsContainer">
                  {
                    posts.ids.map((postId) => {
                      const post = posts.data[postId];
                      if (!post) {
                        return null;
                      }
                      return (
                        <div className="p-card p-py-3 p-py-sm-5 p-pl-3 p-pl-sm-5 p-pr-4 p-pr-sm-6 p-mb-2 timeline-posts" key={post.id}>
                          <span className="d-flex justify-content-between">
                            <span className="d-flex">
                              {
                                post?.author?.imageUrl ?
                                  <img
                                    width="70"
                                    height="70"
                                    src={`${API_ROOT}/${post.author.imageUrl}`}
                                    alt={`${formatter.capitalizeFirstLetter(post.author.firstName)}`}
                                    className="rounded-circle p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 profile-picture-timeline text-white"
                                    onClick={(e) => expandProfileImage(e.target.src)}
                                  />
                                  :
                                  <i className="pi pi-user p-mt-2 p-mb-2 p-mr-sm-3 p-mr-2 timeline-emptyProfilePic-medium"></i>
                              }
                              <span>
                                {
                                  post?.author?.accountType !== "Corporate" &&
                                  <span className="p-card-title cardtitle-posts p-mb-0">
                                    {`${formatter.capitalizeFirstLetter(post?.author?.firstName)} ${formatter.capitalizeFirstLetter(post?.author?.lastName)}`}
                                  </span>
                                }
                                {
                                  post?.author?.accountType === "Corporate" &&
                                  <span className="p-card-title cardtitle-posts p-mb-0">
                                    {formatter.capitalizeFirstLetter(post?.author?.companyName)}
                                  </span>
                                }
                                {
                                  post.author.accountType === "Artisan" &&
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
                              isAuthenticated ?
                                <div className="d-flex">
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
                                      <h5 className="p-pr-1">
                                        {post.likes}
                                      </h5>
                                    }
                                  </span>
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
                                      <h5 className="p-pr-1">
                                        {post.dislikes}
                                      </h5>
                                    }
                                  </span>
                                </div>
                                :
                                <div></div>
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
                              postId={posts.data[postId].id}
                              imageUrl={profileInfo?.imageUrl}
                              onViewComments={handleViewComments}
                              commentCount={posts.data[postId].commentCount}
                              expandProfileImage={(e) => expandProfileImage(e.target.src)}
                            />
                          }
                        </div>
                      )
                    }
                    )}
                  {
                    posts.ids.length > 0 &&
                    posts.meta.total > posts.ids.length &&
                    loading !== "loadMore" &&
                    <Button
                      onClick={loadmorePosts}
                      className="p-mr-2 w-100"
                      label='Load More'
                    />
                  }
                  {
                    posts.ids.length > 0 &&
                    posts.meta.total > posts.ids.length &&
                    loading === "loadMore" &&
                    <Button
                      className="p-mr-2 w-100"
                      loading={loading === "loadMore"}
                      disabled={loading === "loadMore"}
                    />
                  }
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

export default Timeline;