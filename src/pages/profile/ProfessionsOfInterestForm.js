import React, { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import "./UserProfile.css";
import { updateProfessionOfInterest } from "../../store/modules/account";

import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import ModeFooter from "pages/profile/ModeFooter";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";

const ProfessionsOfInterestForm = ({ data, closeEditMode, onClick }) => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  const loading = useSelector((state) => state.account.loading);
  const dispatch = useDispatch();
  const mode = (event) => {
    onClick(event);
  };

  const [interests, setInterests] = useState([]);
  const [interestInputValue, setInterestInputValue] = useState("");

  useEffect(() => {
    setInterests(data);
  }, [data]);

  const handleInterestAdd = () => {
    // const interest = document.getElementById("hobbyInput").value;
    const interest = interestInputValue;
    if (interests?.includes(interest.trim())) {
      return;
    }
    if (interests && interests.length < 5) {
      setInterests([...interests, interest.trim()]);
      setValue("interests", [...interests, interest.trim()]);
      setInterestInputValue("");
    }
  };

  const handleInterestDelete = (interestToRemove) => {
    const newInterestArray = interests.filter(
      (interest) => interest !== interestToRemove
    );
    setInterests(newInterestArray);
    setValue("interests", newInterestArray);
  };

  const interestSubmit = (interest) => {
    console.log(JSON.stringify(interest.interests));

    dispatch(updateProfessionOfInterest(interest.interests));
    return;
  };

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader icon="heart" sectionTitle="Professions of Interest" />
        <div className="p-card-body">
          <form onSubmit={handleSubmit(interestSubmit)}>
            <span className="skillInput p-mb-4">
              <div>
                <label htmlFor="interestInput" className="inputLabel p-pr-3">
                  Add up profession of interest
                </label>
                <InputText
                  id="interestInput"
                  type="text"
                  // name="hobbies"
                  placeholder="Add a interest..."
                  // {...register("hobbies", {})}
                  value={interestInputValue}
                  onChange={(e) => setInterestInputValue(e.target.value)}
                />
                <i className="pi pi-plus" onClick={(e) => handleInterestAdd(e)}>
                  {" "}
                  Add
                </i>
              </div>
            </span>
            <div>
              {interests?.map((interest, index) => (
                <button
                  key={index}
                  onClick={(e) => handleInterestDelete(interest)}
                  type="button"
                  className="p-mr-2 p-p-0 tag-container"
                  id={interest}
                >
                  <Tag
                    value={interest}
                    icon="pi pi-times"
                    className="p-p-2"
                  ></Tag>
                </button>
              ))}
            </div>
            <ModeFooter
              id="interestEdit"
              loading={loading}
              onCancel={closeEditMode}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ProfessionsOfInterestForm;
