import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { InputTextarea } from "primereact/inputtextarea";
import ModeFooter from "./ModeFooter";
import { updateBiography } from "../../store/modules/account";
import SectionHeader from "./SectionHeader";

const BiographyForm = ({ data }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const dispatch = useDispatch();
  const loading = useSelector(state => state.account.submitting);
  const [biography, setBiography] = useState("");
  const handleDelete = (e) => {
    console.log(e.target.id);
  };

  useEffect(() => {
    setBiography(data);
  }, [data]);

  const biographySubmit = (biography) => {
    dispatch(updateBiography(biography));
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          id="biography"
          icon="bookmark"
          sectionTitle="Biography"
          onDelete={handleDelete}
        />

        <div className="p-card-body">
          <form onSubmit={handleSubmit(biographySubmit)}>
            <label htmlFor="biographyInput" className="inputLabel p-mb-2">
              Give a short descripiton of your career history
            </label>
            <label htmlFor="biographyInput" className="">
              {errors?.biography?.type === "required" && (
                <span className="text-danger font-weight-bold">
                  {" "}
                  <p> &nbsp;(*{errors.biography.message})</p>
                </span>
              )}
            </label>
            <InputTextarea
              name="profile"
              {...register("profile", { required: "required" })}
              id="biographyInput"
              type="text"
              rows="6"
              className="inputField"
              placeholder="Biography..."
              defaultValue={biography}
            />
            <ModeFooter id="biographyForm" loading={loading} />
          </form>
        </div>
      </div>
    </>
  );
};

export default BiographyForm;
