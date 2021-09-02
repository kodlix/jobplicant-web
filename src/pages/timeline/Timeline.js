import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import { openModal, closeModal } from "store/modules/modal";
import { loadProfileInfo } from "store/modules/account";
import { closeEmojiPicker } from "store/modules/emojiPicker";
import { loadPosts } from "../../store/modules/timeline";
import { loadAllJobs } from "store/modules/job";
import { TIMELINE } from "constants/timeline";
import agent from "../../services/agent.service";
import TimelineLeftPanel from "./TimelineLeftPanel";
import JobSidePanel from "../../components/JobSidePanel";
import Post from './Post';

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

  const onHide = (name) => {
    dispatch(closeModal(name));
    dispatch(closeEmojiPicker());
    setImageToDisplay("");
    setPost({});
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
      <div className="timeline-container" >
        <div className="timeline-content">
          <div className="p-grid p-mt-2 p-m-0">
            {
              isAuthenticated &&
              <TimelineLeftPanel
                profileInfo={profileInfo}
                expandProfileImage={expandProfileImage}
              />
            }
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
                isAuthenticated &&
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
                        <Post
                          post={post}
                          key={postId}
                          onShow={onShow}
                          profileInfo={profileInfo}
                          isAuthenticated={isAuthenticated}
                          expandProfileImage={expandProfileImage}
                          setImageToDisplay={setImageToDisplay}
                        />
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