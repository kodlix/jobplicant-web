import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { openModal, closeModal } from "store/modules/modal";
import { loadProfileInfo } from "store/modules/account";
import { loadPosts, loadTotalPostCount, deletePost, likePost, dislikePost } from "../../store/modules/timeline";
import { loadAllJobs } from "store/modules/job";
import { TIMELINE } from "constants/timeline";
import agent, { API_ROOT } from "../../services/agent.service";
import moment from "moment";
import JobSidePanel from "../../components/JobSidePanel"
import "./Timeline.css";

const Timeline = () => {
  const dispatch = useDispatch();
  const postsByPage = useSelector(state => state.timeline.posts);
  const loading = useSelector(state => state.timeline.loadingPosts);
  const totalPostCount = useSelector(state => state.timeline.totalPostCount);
  const allJobs = useSelector(state => state.job.allJobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [postId, setPostId] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [imageToDisplay, setImageToDisplay] = useState("");
  const [displayModal, setDisplayModal] = useState(false);
  const [postsLoaded, setPostsLoaded] = useState([]);
  const onShow = (id) => {
    if (id) {
      setPostId(id);
      dispatch(openModal(TIMELINE.EDITPOST));
      setDisplayModal(true);
    }
    else {
      dispatch(openModal(TIMELINE.CREATEPOST));
      setDisplayModal(true);
    }
  }

  const expandProfileImage = (e) => {
    setImageToDisplay(e.target.src)
    setDisplayModal(true);
    dispatch(openModal(TIMELINE.ACTIVEUSERPICTURE));
  }

  const expandPostImage = (e) => {
    setImageToDisplay(e.target.src);
    setDisplayModal(true);
    dispatch(openModal(TIMELINE.POSTIMAGE));
  }

  const onHide = (name) => {
    dispatch(closeModal(name));
    setImageToDisplay("");
    setPostId("");
    setDisplayModal(false);
  }

  const capitalizeFirstLetter = (name) => {
    if (name) {
      return name[0].toUpperCase() + name.slice(1);
    }
  }

  const handleLike = (e) => {
    const postId = e.currentTarget.dataset.id
    dispatch(likePost(postId));
  }

  const handleDislike = (e) => {
    const postId = e.currentTarget.dataset.id
    dispatch(dislikePost(postId));
  }

  const loadmorePosts = () => {
    setPageNumber(pageNumber + 1)
    dispatch(loadPosts(pageNumber + 1, 10, "loadMore"));
  }

  useEffect(() => {
    dispatch(loadProfileInfo());
    dispatch(loadTotalPostCount());
    dispatch(loadPosts(1, 10, "loadPosts"));
    dispatch(loadAllJobs());
  }, [dispatch]);

  useEffect(() => {
    if (pageNumber === 1) {
      setPostsLoaded(postsByPage);
    }
    else {
      setPostsLoaded([...postsLoaded, ...postsByPage])
    }
  }, [postsByPage]);

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
                    <img src={profileInfo?.imageUrl} width="80" height="80" className="rounded-circle timeline-profilePicture" onClick={expandProfileImage} />
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
                        {`${capitalizeFirstLetter(profileInfo?.firstName)} ${capitalizeFirstLetter(profileInfo?.lastName)}`}
                      </h4>
                      <p className="p-mb-4 ">
                        <p className="p-mt-1">
                          Graphic Designer at Self Employed
                          </p>
                        <span className="p-mt-1">
                          {
                            (profileInfo.city || profileInfo.country) &&
                            <i class="pi pi-map-marker p-pr-1"></i>
                          }
                          {
                            profileInfo.city &&
                            <span>{profileInfo?.city}, &nbsp;</span>
                          }
                          {
                            profileInfo.country &&
                            // <span>{profileInfo?.country}</span>
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
                        {capitalizeFirstLetter(profileInfo?.companyName)}
                      </h4>
                      <p className="p-mb-4">
                        {
                          (profileInfo.city || profileInfo.country) &&
                          <i class="pi pi-map-marker p-pr-1"></i>
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
                            // <span>{profileInfo?.country}</span>
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture-timeline p-mr-2" />
                    <span>
                      <div className="p-card-title cardsubtitle-timeline p-mb-0">
                        Jane Doe
                      </div>
                      <p className="jobDescription-timeline">
                        Graphic Designer
                      </p>
                    </span>
                  </span>
                  <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 suggestion-button-timeline" />
                </div>
              </div>
            </div>
            <div className="p-col-12 p-md-6 p-px-0">
              <div className="p-card p-grid p-mb-2 p-mt-0 p-mx-0 p-p-3 align-items-center">
                <div className="p-col-2 text-center profilepic-startpost-timeline">
                  {
                    profileInfo.imageUrl &&
                    <img src={profileInfo?.imageUrl} width="70" height="70" className="rounded-circle" onClick={expandProfileImage} />
                  }
                  {
                    !profileInfo.imageUrl &&
                    <i className="pi pi-user timeline-emptyProfilePic"></i>
                  }
                </div>
                <div className="p-col-10">
                  <Button label="Start a Post" className="postInputButton" onClick={() => onShow()} />
                  <ModalMode onHide={onHide} displayModal={displayModal} postId={postId} imageUrl={imageToDisplay} />
                </div>
              </div>
              {loading === "loadPosts" && postsLoaded.length === 0 &&
                <div className="p-p-5 d-flex justify-content-center">
                  <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em', color: "#5A2846" }}></i>
                </div>
              }
              {postsLoaded.length > 0 &&
                <div className="timeline-postsContainer">
                  {postsLoaded.map((post) => (
                    <div className="p-card p-py-3 p-py-sm-5 p-pl-3 p-pl-sm-5 p-pr-4 p-pr-sm-6 p-mb-2 timeline-posts" key={post.id}>
                      <span className="d-flex justify-content-between">
                        <span className="d-flex">
                          <img src="../../assets/logo.png" width="70" height="70" className="rounded-circle p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 profile-picture-timeline" />
                          <span>
                            <div className="p-card-title cardtitle-posts p-mb-0">Jane Doe</div>
                            <div className="poster-description">
                              <i className="pi pi-briefcase p-pr-1"></i>
                              <span>Software Engineer</span>
                              <i className="pi pi-map-marker p-pl-2 p-pr-1"></i>
                              <span>Nigeria</span>
                            </div>
                            <div className="timeline-cardtitle-posttime"><i className="pi pi-clock p-pr-1 p-mt-2"></i>
                              <span>
                                {moment(post.createdAt).fromNow('MMMM Do YYYY')} ago
                              </span>
                            </div>
                          </span>
                        </span>
                        {post.createdBy === agent.Auth.current()?.email &&
                          <div className="dropdown font-weight-bold ml-2">
                            <i type="button" className="pi pi-ellipsis-v" role="button" id="dropdownMenuLink"
                              data-bs-toggle="dropdown" aria-expanded="false"></i>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                              <li className="dropdown-item timeline-dropdownItem" onClick={() => onShow(post.id)} >
                                Edit
                          </li>
                              <li className="dropdown-item timeline-dropdownItem" data-id={post.id} onClick={(e) => dispatch(deletePost(e.currentTarget.dataset.id))} >
                                Delete
                          </li>
                            </ul>
                          </div>
                        }
                      </span>
                      <h6 className="p-my-3"><u>{post.title}</u></h6>
                      <div className="p-my-4 w-100 h-100">
                        <div dangerouslySetInnerHTML={{ __html: post.body }} className="p-mb-3" />
                        <img src={`${API_ROOT}/${post.postImage}`} className="timeline-postImage" width="100%" onClick={expandPostImage} />
                        {/* <img src="../../assets/images/hero/hero-image.png" height="100%" width="100%" /> */}
                      </div>
                      <div className="cardtitle-statusbar-timeline p-my-3 p-py-3">
                        <span className="d-flex">
                          <span className="post-statusbar-content p-pr-3" onClick={(e) => handleLike(e)} data-id={post.id}>
                            <i className="pi pi-arrow-up p-pr-1"></i>
                            {
                              post.likes > 0 &&
                              <h6 className="text-success">
                                {post.likes}
                              </h6>
                            }
                          </span>
                          <span className="post-statusbar-content" onClick={(e) => handleDislike(e)} data-id={post.id} >
                            <i className="pi pi-arrow-down p-pr-1"></i>
                            {
                              post.dislikes > 0 &&
                              <h6>
                                {post.dislikes}
                              </h6>
                            }
                          </span>
                          <span className="post-statusbar-content">
                          </span>
                        </span>
                        {/* <span className="post-statusbar-content">
                          <i className="pi pi-eye p-ml-3 p-pr-1"></i>
                          <span>
                            Views (15)
                          </span>
                        </span> */}
                      </div>
                      <CommentForm postId={post.id} />
                      <CommentList id={post.id} comments={post.comments} />
                    </div>

                  ))}
                  {
                    postsLoaded.length > 0 &&
                    <Button label={loading === "loadMore" ? 'please wait...' : 'Load More'} onClick={loadmorePosts} className="p-mr-2 w-100" />
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