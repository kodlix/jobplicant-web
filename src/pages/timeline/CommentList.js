import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import Comment from './Comment';
import { useSelector } from "react-redux";
import './CommentSection.css';


const CommentList = ({ postId, onViewComments }) => {
  const [commentPage, setCommentPage] = useState(1);
  const [commentsLoaded, setCommentsLoaded] = useState([]);
  const loadingType = useSelector(state => state.comment.loadingType);
  const commentsByPage = useSelector(state => state.comment.comments[postId]);
  useEffect(() => {
    if (commentPage === 1) {
      setCommentsLoaded(commentsByPage);
    }
    else {
      setCommentsLoaded([...commentsLoaded, ...commentsByPage])
    }
  }, [commentsByPage]);

  const onViewMoreComments = () => {
    onViewComments(postId, commentPage + 1, postId + "-loadingMoreComments")
    setCommentPage(commentPage + 1);
  }

  return (
    <div className='p-card-body p-pt-1 p-px-0'>
      {
        commentsLoaded?.map((comment) => (
          <>
            <Comment
              key={comment.id}
              comment={comment}
              postId={postId}
            />
          </>
        ))
      }
      {
        !commentsLoaded &&
        <Button
          label="View comments"
          loading={loadingType === postId + "-loadingComments"}
          className="timeline-commentListTitle"
          onClick={() => onViewComments(postId, commentPage, postId + "-loadingComments")}
        />
      }
      {
        commentsLoaded?.length > 0 &&
        <Button
          label="View more comments"
          loading={loadingType === postId + "-loadingMoreComments"}
          className="timeline-commentListTitle"
          onClick={onViewMoreComments}
        />
      }
    </div>
  );
}

export default CommentList;