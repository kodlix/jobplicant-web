import React from 'react';
import { Button } from 'primereact/button';
import Comment from './Comment';
import { useSelector } from "react-redux";
import { formatter } from '../../helpers/converter';
import './CommentSection.css';

const CommentList = ({ postId, onViewComments, expandProfileImage, commentCount }) => {
  const loadingType = useSelector(state => state.comment.loadingType);
  const comments = useSelector(state => state.comment.comments);
  const commentIds = useSelector(state => state.timeline.commentIds);
  const pageLimit = 10;

  const onViewMoreComments = () => {
    const pageToLoad = formatter.getPageToLoad(commentIds[postId].length, pageLimit);
    onViewComments(postId, pageToLoad, pageLimit, postId + "-loadingMoreComments")
  }

  return (
    <div className='p-card-body p-pt-1 p-px-0'>
      {
        commentIds?.[postId]?.map((commentId) => {
          const comment = comments.data[commentId];
          return (
            <>
              <Comment
                key={comment.id}
                comment={comment}
                postId={postId}
                expandProfileImage={expandProfileImage}
              />
            </>
          )
        })
      }
      {
        !commentIds?.[postId] &&
        commentCount &&
        <Button
          label="View comments"
          loading={loadingType === postId + "-loadingComments"}
          className="timeline-commentListTitle"
          onClick={() => onViewComments(postId, 1, pageLimit, postId + "-loadingComments")}
        />
      }
      {
        commentIds?.[postId] &&
        commentIds?.[postId]?.length < comments.meta[postId].total &&
        <Button
          label={`View more comments (${(comments.meta[postId].total) - (commentIds?.[postId]?.length)})`}
          loading={loadingType === postId + "-loadingMoreComments"}
          className="timeline-commentListTitle"
          onClick={onViewMoreComments}
        />
      }
    </div>
  );
}

export default CommentList;