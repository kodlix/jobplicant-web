import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { InputTextarea } from 'primereact/inputtextarea';
import ModeFooter from 'pages/profile/ModeFooter';
import SectionHeader from './SectionHeader';

const BiographyForm = ({ data, closeEditMode, mode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const [biography, setBiography] = useState("")
  const handleDelete = (e) => {
    console.log(e.target.id);
  }

  useEffect(() => {
    if (data?.length > 0) {
      setValue("biography", data);
      setBiography(data)
    }
  }, [data]);

  const biographySubmit = (biography) => {
    console.log(biography);
    return;
  }

  const componentStatus = { biography: 'add' };
  if (data?.length > 0) {
    componentStatus.biography = 'edit';
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          id="biography"
          icon="bookmark"
          sectionTitle="Biography"
          onDelete={handleDelete}
          componentStatus={componentStatus}
          showAddButton={false}
        />

        <div className="p-card-body">
          <form onSubmit={handleSubmit(biographySubmit)}>
            <label htmlFor="biographyInput" className="inputLabel p-mb-2">Give a short descripiton of your career history
            </label>
            <InputTextarea name="biography" {...register('biography')}
              id="biographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." value={data} onChange={(e) => {
                setBiography(e.target.value); setValue("biography", e.target.value)
              }} />
            <ModeFooter id="biographyForm" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>
  );
}

export default BiographyForm;