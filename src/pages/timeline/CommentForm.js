import React, { useState } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import { useDispatch } from 'react-redux';
import { postComment } from "../../store/modules/comment";
import './CommentSection.css';

const CommentForm = ({ postId }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm("");
  const dispatch = useDispatch();
  const [comment, setComment] = useState("");

  const inputChange = (e) => {
    const inputValue = e.target.value;

    // check if inputValue is empty
    if (inputValue.trim().length > 0) {
      setValue("message", inputValue, { shouldValidate: true })
    }
    else {
      setValue("message", inputValue.trim(), { shouldValidate: true })
    }
  }

  const onSubmit = (data) => {
    setValue("message", "");
    dispatch(postComment(postId, data));
  }

  return (
    <div className='p-card-title d-flex p-mt-2 w-100'>
      <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle profile-picture" />
      <form onSubmit={handleSubmit(onSubmit)} className='timeline-commentInputContainer'>
        <InputTextarea rows={1} cols={30} autoResize className="commentForm" name="message" placeholder="Write your comment..." {...register("message", { required: true })}
          onChange={(e) => { inputChange(e) }} />
        <Button type="submit" className="p-px-1 timeline-commentButton" label="Comment" />
      </form>
    </div>
  );
}

export default CommentForm;