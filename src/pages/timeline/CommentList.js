import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentList = () => {
  return (
    <div className='p-card-body'>
      <span className="post-statusbar-content justify-content-end">
        <i className="pi pi-comment p-ml-3 p-pr-1"></i>
        <span>
          Comments (15)
        </span>
      </span>
      <Comment />
    </div>
  );
}

export default CommentList;