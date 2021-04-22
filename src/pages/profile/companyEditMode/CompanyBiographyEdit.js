import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import EditModeFooter from '../userEditMode/EditModeFooter';
import SectionHeader from '../SectionHeader';
import { InputTextarea } from 'primereact/inputtextarea';
const CompanyBiographyEdit = ({ componentStatus, companyBiographyFromBack, closeEditMode }) => {
  const { register, handleSubmit, setValue, clearErrors, formState: { } } = useForm({
    mode: "onChange",
    reValidateMode: 'onChange'
  });
  const [companyBiography, setCompanyBiography] = useState("")
  const handleDelete = (e) => {
    console.log(e.target.id);
  }

  useEffect(() => {
    if (componentStatus?.companyBiographyEdit?.length > 0) {
      if (componentStatus?.companyBiographyEdit !== "add") {
        setValue("companyBiography", companyBiographyFromBack);
        setCompanyBiography(companyBiographyFromBack)
      }
      clearErrors();
    }
  }, [componentStatus.companyBiographyEdit]);

  const onEditCancel = (e) => {
    setValue("companyBiography", null);
    setCompanyBiography("");
    clearErrors();
    closeEditMode(e.target.id);
  }

  const companyBiographySubmit = (biography) => {
    console.log(biography);
    return;
  }


  return (
    <>
      {componentStatus.companyBiographyEdit &&
        <div className="p-card p-mt-2">
          <SectionHeader componentStatus={componentStatus} icon="bookmark" sectionTitle="Biography" deleteButton="true" onDelete={handleDelete} />
          <div className="p-card-body">
            <form onSubmit={handleSubmit(companyBiographySubmit)}>
              <label htmlFor="companyBiography" className="inputLabel p-mb-2">Give a short descripiton of your company</label>
              <InputTextarea name="companyBiography" {...register('companyBiography')}
                id="companyBiographyInput" type="text" rows="6" className="inputField" placeholder="Biography..." value={companyBiography} onChange={(e) => {
                  setCompanyBiography(e.target.value); setValue("companyBiography", e.target.value)
                }} />
              <EditModeFooter id="companyBiographyEdit" onCancel={onEditCancel} />
            </form>
          </div>
        </div>
      }
    </>
  );
}

export default CompanyBiographyEdit;