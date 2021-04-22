import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditModeFooter from './EditModeFooter';
import SectionHeader from '../SectionHeader';
import { InputTextarea } from 'primereact/inputtextarea';

const BiographyEdit = ({ componentStatus, biographyFromBack, closeEditMode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const [biography, setBiography] = useState("")
  const handleDelete = (e) => {
    console.log(e.target.id);
  }

  useEffect(() => {
    if (componentStatus?.biographyEdit?.length > 0) {
      if (componentStatus?.biographyEdit !== "add") {
        setValue("biography", biographyFromBack);
        setBiography(biographyFromBack)
      }
      clearErrors();
    }
  }, [componentStatus.biographyEdit]);

  const biographySubmit = (biography) => {
    console.log(biography);
    return;
  }


  return (
    <>
      {componentStatus?.biographyEdit?.length > 0 &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="bookmark" sectionTitle="Biography" deleteButton="true" onDelete={handleDelete} id="biography" />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(biographySubmit)}>
              <label htmlFor="biographyInput" className="inputLabel p-mb-2">Give a short descripiton of your career history
              </label>
              <InputTextarea name="biography" {...register('biography')}
                id="biographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." value={biography} onChange={(e) => {
                  setBiography(e.target.value); setValue("biography", e.target.value)
                }} />
              <EditModeFooter id="biographyEdit" onCancel={closeEditMode} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default BiographyEdit;