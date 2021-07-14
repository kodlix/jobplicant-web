import React from 'react';
import Comment from './Comment';
import './CommentSection.css';


const CommentList = ({ comments }) => {
  return (
    <div className='p-card-body p-pt-1 p-px-0'>
      {
        comments.map((comment) => (
          <>
            <Comment comment={comment} key={comment.id} />
          </>
        ))
      }
      {/* <h6 className="p-mt-3 p-ml-6">
        <span className="timeline-commentListTitle">
          View more comments
        </span>
      </h6> */}
    </div>
  );
}

export default CommentList;