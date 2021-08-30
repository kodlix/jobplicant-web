import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import ModalMode from './ModalMode';
import { useParams } from 'react-router-dom'
import { openModal, closeModal } from "store/modules/modal";
import { loadProfileInfo } from "store/modules/account";
import { closeEmojiPicker } from "store/modules/emojiPicker";
import { viewPost } from "../../store/modules/timeline";
import TimelineLeftPanel from "./TimelineLeftPanel";
import { loadAllJobs } from "store/modules/job";
import { TIMELINE } from "constants/timeline";
import agent from "../../services/agent.service";
import JobSidePanel from "../../components/JobSidePanel";
import "./Timeline.css";
import Post from './Post';

const ViewPost = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.timeline.posts);
  const loading = useSelector(state => state.timeline.loadingPosts);
  const error = useSelector(state => state.timeline.error);
  const allJobs = useSelector(state => state.job.allJobs);
  const profileInfo = useSelector((state) => state.account.profileInfo);
  const [imageToDisplay, setImageToDisplay] = useState("");
  const params = useParams();
  const isAuthenticated = agent.Auth.isAuth();


  const onShow = (id) => {
    if (id) {
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

  const expandProfileImage = (src) => {
    setImageToDisplay(src)
    dispatch(openModal(TIMELINE.ACTIVEUSERPICTURE));
  }

  const onHide = (name) => {
    dispatch(closeModal(name));
    dispatch(closeEmojiPicker());
    setImageToDisplay("");
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
                  <Post
                    post={posts.data[params.id]}
                    key={params.id}
                    onShow={onShow}
                    profileInfo={profileInfo}
                    isAuthenticated={isAuthenticated}
                    expandProfileImage={expandProfileImage}
                  />
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