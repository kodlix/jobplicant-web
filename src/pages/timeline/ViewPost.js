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
  const post = useSelector(state => state.timeline.postByPostId);
  const loading = useSelector(state => state.timeline.loadingPosts);
  const allJobs = useSelector(state => state.job.allJobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [postId, setPostId] = useState("");
  const [imageToDisplay, setImageToDisplay] = useState("");
  const [copyAlert, setCopyAlert] = useState(false);
  const commentsByPage = useSelector(state => state.comment.comments);
  const params = useParams();
  const copyModalClassname = copyAlert ? "timeline-copyModalAlert--active" : "timeline-copyModalAlert";

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
      dispatch(loadProfileInfo());
      dispatch(viewPost(params.id));
      dispatch(loadAllJobs());
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
            <div className="p-col-12 p-md-3 p-pl-0 p-py-md-2 p-pr-md-2 p-pb-0 p-pr-0">
              <div className="p-card">
                <div className="leftpanel-top-container-timeline"></div>
                <div className="leftpanel-bottom-container-timeline">
                  {
                    profileInfo.imageUrl &&
                    <img
                      width="80"
                      height="80"
                      alt="Profile"
                      src={profileInfo?.imageUrl}
                      className="rounded-circle timeline-profilePicture"
                      onClick={expandProfileImage} />
                  }
                  {
                    !profileInfo.imageUrl &&
                    <div className="">
                      <i className="pi pi-user timeline-emptyProfilePic"></i>
                    </div>
                  }
                  {
                    profileInfo?.firstName && profileInfo?.accountType !== "Corporate" &&
                    <>
                      <h4 className="p-mt-2">
                        {`${formatter.capitalizeFirstLetter(profileInfo?.firstName)} ${formatter.capitalizeFirstLetter(profileInfo?.lastName)}`}
                      </h4>
                      <p className="p-mb-4 ">
                        <p className="p-mt-1">
                          Graphic Designer at Self Employed
                        </p>
                        <span className="p-mt-1">
                          {
                            (profileInfo.city || profileInfo.country) &&
                            <i className="pi pi-map-marker p-pr-1"></i>
                          }
                          {
                            profileInfo.city &&
                            <span>{profileInfo?.city}, &nbsp;</span>
                          }
                          {
                            profileInfo.country &&
                            <span>Nigeria</span>
                          }
                        </span>
                      </p>
                    </>
                  }
                  {
                    profileInfo?.firstName && profileInfo?.accountType === "Corporate" &&
                    <>
                      <h4 className="p-my-1 timeline-companyName">
                        {formatter.capitalizeFirstLetter(profileInfo?.companyName)}
                      </h4>
                      <p className="p-mb-4">
                        {
                          (profileInfo.city || profileInfo.country) &&
                          <i className="pi pi-map-marker p-pr-1"></i>
                        }
                        <span className="p-mt-1">
                          {
                            profileInfo.city &&
                            <span>{profileInfo?.city}</span>
                          }
                          {
                            profileInfo.city && profileInfo.country &&
                            <span>, &nbsp;</span>
                          }
                          {
                            profileInfo.country &&
                            <span>Nigeria</span>
                          }
                        </span>
                      </p>
                    </>
                  }
                  <div className="timeline-leftpanel-connection">
                    <h5>
                      Following
                    </h5>
                    <h6>
                      45
                    </h6>
                  </div>
                  <div className="timeline-leftpanel-connection">
                    <h5>
                      Followers
                    </h5>
                    <h6>
                      45
                    </h6>
                  </div>
                  <div className="timeline-leftpanel-connection" >
                    <h6>
                      View Profile
                    </h6>
                  </div>
                </div>
              </div>
              <div className="p-card p-mt-2">
                <div className="p-card-title cardtitle-timeline p-mb-3">
                  Suggestions
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      width="40"
                      height="40"
                      src="../../assets/logo.png"
                      className="rounded-circle profile-picture-timeline p-mr-2"
                    />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline"
                  />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      src="../../assets/logo.png"
                      width="40"
                      height="40"
                      className="rounded-circle profile-picture-timeline p-mr-2"
                    />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline"
                  />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      width="40"
                      height="40"
                      src="../../assets/logo.png"
                      className="rounded-circle profile-picture-timeline p-mr-2"
                    />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline"
                  />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      width="40"
                      height="40"
                      src="../../assets/logo.png"
                      className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline"
                  />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      width="40"
                      height="40"
                      src="../../assets/logo.png"
                      className="rounded-circle profile-picture-timeline p-mr-2"
                    />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline"
                  />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img
                      width="40"
                      height="40"
                      src="../../assets/logo.png"
                      className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button
                    type="button"
                    iconPos="left"
                    icon="pi pi-plus"
                    className="p-p-0 suggestion-button-timeline" />
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-6 p-px-0">
              <ModalMode
                onHide={onHide}
                postId={postId}
                imageUrl={imageToDisplay}
              />
              {
                loading === "viewPost" &&
                post &&
                <div className="p-p-5 d-flex justify-content-center">
                  <i
                    className="pi pi-spin pi-spinner"
                    style={{ 'fontSize': '2em', color: "#5A2846" }} />
                </div>
              }
              {
                Object.keys(post).length > 0 &&
                <div className="timeline-postsContainer">
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
                            />
                            :
                            <i className="pi pi-user  p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 timeline-emptyProfilePic-medium"></i>
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
                          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80" }}
                          className="timeline-postImage text-white"
                          src={`${API_ROOT}/${post.postImage}`}
                          onClick={expandPostImage} />
                      }
                    </div>
                    <div className="cardtitle-statusbar-timeline p-my-3 p-py-3">
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
                      <span className={copyModalClassname}>
                        Link copied
                      </span>
                    </div>
                    <CommentForm
                      postId={post.id}
                      imageUrl={profileInfo?.imageUrl}
                    />
                    <CommentList
                      postId={post.id}
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