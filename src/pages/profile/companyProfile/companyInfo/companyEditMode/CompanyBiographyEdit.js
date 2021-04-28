import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditModeFooter from '../../../EditModeFooter';
import SectionHeader from '../../../SectionHeader';
import { InputTextarea } from 'primereact/inputtextarea';

const CompanyBiographyEdit = ({ data, closeEditMode }) => {
  const { register, handleSubmit, setValue, formState: { } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const [companyBiography, setCompanyBiography] = useState("")
  const handleDelete = (e) => {
    console.log(e.target.id);
  }

  useEffect(() => {
    if (data?.length > 0) {
      setValue("companyBiography", data);
      setCompanyBiography(data)
    }
  }, [data]);

  const companyBiographySubmit = (biography) => {
    console.log(biography);
    return;
  }

  const componentStatus = { companyBiography: 'add' };
  if (data?.length > 0) {
    componentStatus.companyBiography = 'edit';
  }


  return (
    <>
      <div className="p-card p-mt-2">
      <SectionHeader
          id="companyBiography"
          icon="bookmark"
          sectionTitle="Biography"
          onDelete={handleDelete}
          componentStatus={componentStatus}
          deleteButton={Boolean(data?.length)}
        />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(companyBiographySubmit)}>
            <label htmlFor="companyBiography" className="inputLabel p-mb-2">Give a short descripiton of your company</label>
            <InputTextarea name="companyBiography" {...register('companyBiography')}
              id="companyBiographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." value={companyBiography} onChange={(e) => {
                setCompanyBiography(e.target.value); setValue("companyBiography", e.target.value)
              }} />
            <EditModeFooter id="companyBiographyEdit" onCancel={closeEditMode} />
          </form>
        </div>
      </div>
    </>
  );
}

export default CompanyBiographyEdit;