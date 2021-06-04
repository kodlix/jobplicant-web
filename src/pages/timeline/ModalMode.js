import React, { useState } from 'react';
import CreatePostModal from './CreatePostModal';
import PostJobModal from './PostJobModal';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';

const ModalMode = ({ onHide, displayModal }) => {
  const [displayCreatePostModal, setCreatePostModalDisplay] = useState(true);
  console.log(displayCreatePostModal);
  const renderFooter = () => {
    return (
      <div>
        <Button label="Post" onClick={onHide} autoFocus />
      </div>
    );
  }
  return (
    <>
      <Dialog header="Create a Post" visible={displayModal} onHide={onHide} breakpoints={{ '960px': '100vw' }} style={{ width: '45vw' }} footer={renderFooter('displayResponsive')}>
        <ToggleButton onLabel="I confirm" offLabel="I reject" onIcon="pi pi-check" offIcon="pi pi-times" checked={displayCreatePostModal} onChange={(e) => setCreatePostModalDisplay(e.value)} />
        {
          displayCreatePostModal &&
          <CreatePostModal
            onHide={onHide}
          />
        }
        {
          !displayCreatePostModal &&
          <PostJobModal
            onHide={onHide}
          />
        }
      </Dialog>
    </>

  );
}

export default ModalMode;
