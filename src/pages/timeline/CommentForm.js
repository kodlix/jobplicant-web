import React, { useState, useEffect } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import { API_ROOT } from "../../services/agent.service";
import { useForm } from 'react-hook-form';
import { Button } from 'primereact/button';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { Emoji } from 'emoji-mart'
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from "../../store/modules/comment";
import { openEmojiPicker, closeEmojiPicker } from "store/modules/emojiPicker";
import './CommentSection.css';

const CommentForm = ({ postId, imageUrl }) => {
  const dispatch = useDispatch();
  const emojiPickerId = useSelector(state => state.emojiPicker.name);
  const loadingTypeCommentModule = useSelector(state => state.comment.loadingType);
  const [comment, setComment] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue } = useForm("");

  useEffect(() => {
    if (loadingTypeCommentModule === "createCommentSuccess") {
      // clear comment form input on successful comment create
      setComment("")
      setValue("message", "");
      if (emojiPickerId === postId) {
        // close picker of comment form with same postId on successful comment create
        dispatch(closeEmojiPicker());
      }
    }
  }, [loadingTypeCommentModule])

  const inputChange = (e) => {
    const inputValue = e.target.value;
    setComment(inputValue)

    // check if inputValue is empty
    if (inputValue.trim().length > 0) {
      setValue("message", inputValue, { shouldValidate: true })
    }
    else {
      setValue("message", inputValue.trim(), { shouldValidate: true })
    }
  }

  //Emoji Picker
  useEffect(() => {
    window.addEventListener('click', _handleClickEvent);
  }, [])

  const handleEmojiSelect = (emojiToAdd) => {
    let sym = emojiToAdd.unified.split('-')
    let codesArray = []
    sym.forEach(el => codesArray.push('0x' + el))
    let emoji = String.fromCodePoint(...codesArray)
    setComment(comment + emoji)
  }

  const _handleClickEvent = (e) => {
    const { target } = e;
    const parentIds = ['TextEditor-comment-emoji-button', 'TextEditor-comment-emoji-picker'];

    // Check if the target element is a decendant of any of the above parent IDs
    const isDescendant = parentIds.some((parentId) => isDescendantElement(target, parentId));

    // If element is not a descendant, then close the picker
    if (!isDescendant) {
      _handleEmojiToggle(false);
    }
  }

  const isDescendantElement = (el, parentId) => {
    let isDescendant = false;

    if (el.id === parentId) {
      isDescendant = true;
    }

    while (el = el.parentNode) {
      if (el.id === parentId) {
        isDescendant = true;
      }
    }

    return isDescendant;
  }

  const _handleEmojiToggle = (state) => {
    if (emojiPickerId) {
      dispatch(closeEmojiPicker());
    }
    else {
      dispatch(openEmojiPicker(state));
    };
  }
  //Emoji Picker

  const onSubmit = (data) => {
    dispatch(postComment(postId, data, "createComment"));
  }

  return (
    <div className='d-flex p-mt-2 w-100'>
      <img
        alt="Profile"
        src={imageUrl}
        width="55"
        height="55"
        className="rounded-circle profile-picture-timeline"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='timeline-commentInputContainer'
      >
        <InputTextarea
          rows={1}
          cols={30}
          autoResize
          name="message"
          value={comment}
          className="commentForm"
          placeholder="Write your comment..."
          {...register("message", { required: true })}
          onChange={(e) => { inputChange(e) }}
        />
        <span className="timeline-commentButtons-container">
          {
            emojiPickerId === postId &&
            <div id='TextEditor-comment-emoji-picker'>
              <Picker
                showPreview={false}
                showSkinTones={false}
                onSelect={(emoji) => handleEmojiSelect(emoji)}
                exclude={["flags", "recent"]}
                skin="1"
                style={{ position: 'absolute', right: '0', top: '-360px', 'z-index': '1', 'padding-bottom': '10px' }}
              />
            </div>
          }
          <span
            id="TextEditor-comment-emoji-button"
            onClick={() => _handleEmojiToggle(postId)}
          >
            <Emoji
              emoji={{ id: 'slightly_smiling_face' }}
              size={23}
            />
          </span>
          <Button
            type="submit"
            label="Comment"
            className="p-px-1 p-ml-2 timeline-commentButton"
          />
        </span>
      </form>
    </div>
  );
}

export default CommentForm;