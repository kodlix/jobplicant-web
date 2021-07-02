import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { ToggleButton } from 'primereact/togglebutton';
import { useSelector } from "react-redux";
import { TIMELINE } from "constants/timeline";
import PostForm from './PostForm';
import PostJobModal from './PostJobModal';

const ModalMode = ({ onHide, displayModal, postId, imageUrl }) => {
  const modalName = useSelector(state => state.modal.name);
  const [toggle, setToggle] = useState(true)
  const createPost_Title = "Create a Post";
  const EditPost_Title = "Edit your Post";
  const dialogTitle = modalName === TIMELINE.EDITPOST ? EditPost_Title : modalName === TIMELINE.CREATEPOST ? createPost_Title : "";

  const toggleModal = () => {
    const displayPostForm = toggle === true ? false : true;
    setToggle(displayPostForm);
  }

  return (
    <>
      <Dialog header={dialogTitle} visible={displayModal} onHide={onHide} breakpoints={{ '960px': '100vw' }} style={{ width: '45vw' }}>
        {
          (modalName === TIMELINE.CREATEPOST || modalName === TIMELINE.CREATEJOB) &&
          < ToggleButton
            checked={toggle}
            onLabel="I confirm"
            offLabel="I reject"
            onIcon="pi pi-check"
            offIcon="pi pi-times"
            onChange={toggleModal} />
        }
        {
          (modalName === TIMELINE.CREATEPOST || modalName === TIMELINE.EDITPOST) && toggle &&
          <PostForm
            postId={postId}
            clearModalInput={!displayModal}
          />
        }
        {
          !toggle &&
          <PostJobModal
          />
        }
        {
          imageUrl && (modalName === TIMELINE.ACTIVEUSERPICTURE || modalName === TIMELINE.POSTIMAGE) &&
          <div>
            <img src={imageUrl} className="timeline-profilepic-expanded" />
          </div>
        }
      </Dialog>
    </>

  );
}

export default ModalMode;
