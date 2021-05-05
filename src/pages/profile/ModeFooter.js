
import React from 'react';
import {useDispatch}  from 'react-redux';
import { Button } from 'primereact/button';

import { closeModal } from 'store/modules/modal';


const ModeFooter = ({ id, onCancel }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="editMode-footer">
        <Button icon="pi pi-times" iconPos="left" label="Cancel" id={id} onClick={() => dispatch(closeModal())} type="button" />
        <Button icon="pi pi-check" iconPos="left" label="Save" id="saveButton" type="submit" />
      </div>
    </>
  );
}

export default ModeFooter;