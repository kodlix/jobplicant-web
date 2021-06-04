import React from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import './CommentSection.css';

const CommentForm = () => {
  return (
    <div className='p-card-title d-flex p-mt-2'>
      <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture" />
      <InputTextarea rows={1} cols={30} autoResize className="commentForm" placeholder="Write your comment..." />
    </div>
  );
}

export default CommentForm;