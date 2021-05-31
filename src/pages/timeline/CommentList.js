import React from 'react';
import Comment from './Comment';
import './CommentSection.css';

const CommentList = () => {
  return (    
      <div className='p-card-body'>
        <Comment />
      </div>
  );
}

export default CommentList;