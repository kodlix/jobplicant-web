import { Button } from 'primereact/button';

const EditModeFooter = ({ id, onCancel }) => {
  return (
    <>
      <div className="editMode-footer">
        <Button icon="pi pi-times" iconPos="left" label="Cancel" id={id} onClick={onCancel} type="button" />
        <Button icon="pi pi-check" iconPos="left" label="Save" id="saveButton" type="submit" />
      </div>
    </>
  );
}

export default EditModeFooter;