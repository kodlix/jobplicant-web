import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { openModal, closeModal } from "store/modules/modal";
import { loadPosts, loadTotalPostCount, deletePost, likePost, dislikePost } from "../../store/modules/timeline";
import { loadJobs } from "store/modules/job";
import agent, { API_ROOT } from "../../services/agent.service";
import moment from "moment";
import "./Timeline.css";

const Timeline = () => {
  const dispatch = useDispatch();
  const postsByPage = useSelector(state => state.timeline.posts);
  const loading = useSelector(state => state.timeline.loading);
  const modalOpen = useSelector(state => state.modal);
  const totalPostCount = useSelector(state => state.timeline.totalPostCount);
  const jobs = useSelector(state => state.job.jobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [postId, setPostId] = useState("");
  const [pageNumber, setpageNumber] = useState(1);
  const [postsLoaded, setPostsLoaded] = useState([]);

  const onShow = (id) => {
    if (id) {
      setPostId(id);
      dispatch(openModal("displayEditPost"));
    }
    else {
      dispatch(openModal("displayCreatePost"));
    }
  }

  const onHide = (name) => {
    dispatch(closeModal(name));
    setPostId("");
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
    setpageNumber(pageNumber + 1)
    dispatch(loadPosts(pageNumber + 1, 2, "loadMore"));
  }

  useEffect(() => {
    dispatch(loadTotalPostCount());
    dispatch(loadJobs());
    dispatch(loadPosts(1, 1, "loadPosts"));
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
            <div className="p-col-12 p-md-3 p-pl-0 p-py-md-2 p-pr-md-2">
              <div className="p-card">
                <div className="leftpanel-top-container-timeline"></div>
                <div className="leftpanel-bottom-container-timeline">
                  <img src="../../assets/images/hero/hero-image.png" width="80" height="80" className="rounded-circle profile-picture" />
                  {/* {
                    profileInfo?.firstName &&
                    <h4 className="p-mt-2">
                      {`${capitalizeFirstLetter(profileInfo?.firstName)} ${capitalizeFirstLetter(profileInfo?.lastName)}`}
                    </h4>
                  } */}
                  <h4 className="p-mt-2">
                    Jane Doe
                  </h4>
                  <p className="p-mb-3">
                    Graphic Designer at Self Employed
                  </p>
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
                <div className="p-card-title cardtitle-timeline p-mb-0">
                  Suggestions
                  </div>
                <div className="p-card-body d-flex justify-content-between">
                  <span className="d-flex align-items-end">
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                    <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture p-mr-2" />
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
                <div className="p-col-2 text-center">
                  <img src="../../assets/logo.png" width="80" height="80" className="rounded-circle profile-picture" />
                </div>
                <div className="p-col-10">
                  <Button label="Start a Post" className="postInputButton" onClick={() => onShow()} />
                  <ModalMode onHide={onHide} displayModal={(modalOpen.name === "displayCreatePost" || modalOpen.name === "displayEditPost")} postId={postId} />
                </div>
              </div>
              {loading === "loadPosts" && postsLoaded.length === 0 &&
                <div className="p-p-5 d-flex justify-content-center">
                  <i className="pi pi-spin pi-spinner" style={{ 'fontSize': '2em', color: "#5A2846" }}></i>
                </div>
              }
              {postsLoaded.length > 0 &&
                <div className="timeline-postsContainer">
                  {/* <div className="p-card p-p-5 p-mb-2">
                <span className="d-flex justify-content-between">
                  <span>
                    <img src="../../assets/logo.png" width="70" height="70" className="rounded-circle p-mb-2 p-mr-3 profile-picture" />
                    <span>
                      <div className="p-card-title cardtitle-posts p-mb-0">Jane Doe
                        <span className="poster-description">
                          <i className="pi pi-briefcase p-pr-1"></i>
                          <span>Software Engineer</span>
                          <i className="pi pi-map-marker p-pl-2 p-pr-1"></i>
                          <span>Nigeria</span>
                        </span>
                      </div>
                      <div className="cardtitle-posttime"><i className="pi pi-clock p-pr-1"></i>
                        <span>
                          3 min ago
                        </span>
                      </div>
                    </span>
                  </span>
                  <div className="dropdown font-weight-bold ml-2">
                    <i type="button" className="pi pi-ellipsis-v" role="button" id="dropdownMenuLink"
                      data-bs-toggle="dropdown" aria-expanded="false"></i>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                      <li className="dropdown-item">
                        Edit
                      </li>
                      <li className="dropdown-item">
                        Delete
                      </li>
                    </ul>
                  </div>
                </span>
                <h6 className="p-my-3">Senior Web Developer</h6>
                <Tag value="Full Time" className="p-mr-3"></Tag>
                <span>$30/hr</span>
                <p className="p-my-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus urna, fermentum eu eros vel, hendrerit elementum ex. Integer augue sem, ornare id consectetur in, lobortis mattis sapien. Ut metus augue, pharetra et dui et, accumsan vulputate nulla. Aliquam aliquam vestibulum arcu tincidunt pellentesque. Fusce mollis sodales laoreet. Quisque pellentesque pellentesque eros. Sed at dui non magna facilisis euismod. Donec maximus tortor in lacus vehicula lacinia. Curabitur et dignissim purus. Aliquam pellentesque lectus id libero lacinia aliquet. In vel arcu in ipsum posuere laoreet sit amet eu justo. Vivamus nisl felis, maximus sit amet dui id, suscipit porttitor enim. Curabitur consequat ligula non varius placerat.

                  Aliquam laoreet hendrerit ligula vitae laoreet. Curabitur placerat, mauris non maximus dapibus, dolor sem cursus purus, accumsan iaculis velit arcu ac ex. Maecenas at leo sagittis, euismod arcu et, molestie dui. Morbi ipsum nisl, consequat in velit luctus, tempus sollicitudin ex. Pellentesque lacus metus, iaculis vel ligula eget, convallis ultricies magna. Suspendisse potenti. Etiam porta lobortis ex. Cras nisl tellus, pulvinar non blandit sed, ultrices non sapien.
                </p>
                <Tag value="CSS" className="p-mr-3 skilltag-timeline"></Tag>
                <Tag value="HTML" className="p-mr-3 skilltag-timeline"></Tag>
                <Tag value="NodeJS" className="p-mr-3 skilltag-timeline"></Tag>
                <Tag value="ReactJS" className="p-mr-3 skilltag-timeline"></Tag>
                <div className="cardtitle-statusbar p-my-3 p-py-3">
                  <span className="d-flex">
                    <span className="post-statusbar-content">
                      <i className="pi pi-heart p-pr-1"></i>
                      <span>
                        Like
                    </span>
                    </span>
                    <span className="post-statusbar-content">
                      <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/job-searcher.jpg" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                      <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle likers-picture" />
                    </span>
                    <span className="post-statusbar-content">
                      <i className="pi pi-comment p-ml-3 p-pr-1"></i>
                      <span>
                        Comments (15)
                     </span>
                    </span>
                  </span>
                  <span className="post-statusbar-content">
                    <i className="pi pi-eye p-ml-3 p-pr-1"></i>
                    <span>
                      Views (15)
                  </span>
                  </span>
                </div>
                <CommentForm />
                <CommentList />
              </div>
 */}

                  {postsLoaded.map((post) => (
                    <div className="p-card p-py-5 p-pl-5 p-pr-6 p-mb-2" key={post.id}>
                      <span className="d-flex justify-content-between">
                        <span className="d-flex">
                          <img src="../../assets/logo.png" width="70" height="70" className="rounded-circle p-mt-2 p-mb-2 p-mr-sm-3 p-mr-0 profile-picture" />
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
                        <img src={`${API_ROOT}/${post.postImage}`} className="timeline-postImage" width="100%" />
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
                            {/* <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle" />
                        <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                        <img src="../../assets/images/hero/job-searcher.jpg" width="30" height="30" className="rounded-circle likers-picture" />
                        <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                        <img src="../../assets/images/hero/hero-image.png" width="30" height="30" className="rounded-circle likers-picture" />
                        <img src="../../assets/logo.png" width="30" height="30" className="rounded-circle likers-picture" /> */}
                          </span>
                        </span>
                        <span className="post-statusbar-content">
                          <i className="pi pi-eye p-ml-3 p-pr-1"></i>
                          <span>
                            Views (15)
                  </span>
                        </span>
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
            <div className="p-col-12 p-md-3 p-pr-0 p-py-md-2 p-pl-md-2">
              <div className="p-card">
                <div className="p-card-title cardtitle-timeline">
                  Recent Jobs
                </div>
                <div className="p-pb-2">
                  <Link to="/timeline" className="p-card-body p-card-body-timeline p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle-timeline">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription-timeline">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                  </Link>
                  <Link to="/timeline" className="p-card-body p-card-body-timeline p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle-timeline">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription-timeline">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </div>
                  </Link>
                  <Link to="/timeline" className="p-card-body p-card-body-timeline p-px-3 p-pt-1 p-pb-3">
                    <div className="p-card-title cardsubtitle-timeline">
                      <div>Senior Product Designer</div>
                      <div>$25/hr</div>
                    </div>
                    <div className="p-card-body p-px-0 p-py-0 jobDescription-timeline">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timeline;