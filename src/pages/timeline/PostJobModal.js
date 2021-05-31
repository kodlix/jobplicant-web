import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ToggleButton } from 'primereact/togglebutton';
import "./Timeline.css";

const PostJobModal = ({ visible, onHide, onModalCheckChange, modalJobPostMode }) => {
  const renderFooter = (name) => {
    return (
      <div>
        <Button label="No" icon="pi pi-times" onClick={() => onHide(name)} className="p-button-text" />
        <Button label="Yes" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
      </div>
    );
  }

  return (
    <>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </>
  );
}

export default PostJobModal;