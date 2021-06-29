import React, { useState } from 'react';
import PostForm from './PostForm';
import PostJobModal from './PostJobModal';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';

const ModalMode = ({ onHide, displayModal, postId }) => {
  const [displayCreatePostModal, setCreatePostModalDisplay] = useState(true);
  const createPost_Title = "Create a Post";
  const EditPost_Title = "Edit your Post";
  const dialogTitle = postId ? EditPost_Title : displayModal ? createPost_Title : "";
  
  return (
    <>
      <Dialog header={dialogTitle} visible={displayModal} onHide={onHide} breakpoints={{ '960px': '100vw' }} style={{ width: '45vw' }}>
        <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" checked={displayCreatePostModal} onChange={(e) => setCreatePostModalDisplay(e.value)} />
        {
          displayCreatePostModal &&
          <PostForm
            postId={postId}
            clearModalInput={!displayModal}
          />
        }
        {
          !displayCreatePostModal &&
          <PostJobModal
          />
        }
      </Dialog>
    </>

  );
}

export default ModalMode;
