import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import { Tag } from "primereact/tag";
import { Dropdown } from "primereact/dropdown";
import ModeFooter from "./ModeFooter";
import { useDispatch, useSelector } from "react-redux";
import { createSkill, deleteSkill } from "store/modules/userSkill";
import { getSkills } from "store/modules/admin";

// const skillsList = ["Java", "Javascript", "Python", "Database", "Graphic Design", "Web Design", "Software Analysis"];

const SkillForm = ({ data, closeEditMode }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userSkill.loading);
  const skillsList = useSelector((state) => state.admin.skills);
  const { register, handleSubmit, setValue } = useForm();

  const [currentSkill, setCurrentSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [duplicateError, setDuplicateError] = useState(false)

  useEffect(() => {
    dispatch(getSkills())
  }, [])


  useEffect(() => {
    if (data?.length > 0) {
      setCurrentSkill();
      setSkills(data);
      register("skills");
      setValue("skills", data);
    }
  }, [data]);

  const searchObjectArrayValues = (array, object) => {
    const skillExists = array.filter((skill) => skill === object.name);
    return !Boolean(skillExists.length > 0);
  };

  const handleSkillChange = (e) => {
    setCurrentSkill(e.value);
  };



  const handleSkillAdd = () => {
    if (skills.length === 10) {
      setCurrentSkill("");
      return;
    }

    if (currentSkill) {

      if (searchObjectArrayValues(skills, currentSkill)) {
        setSkills([...skills, currentSkill.name]);
        setValue("skills", skills);
        setCurrentSkill("");
        setDuplicateError(false)
      } else {
        setDuplicateError(true)
      }
    }
  }

  const handleSkillDelete = (skillToDelete) => {

    const newSkillArray = skills.filter(
      (skill) => skill !== skillToDelete
    );

    setSkills(newSkillArray);
    setValue("skills", newSkillArray);
  };

  const skillSubmit = (data) => {
    console.log('skills', skills, 'data', data)

    dispatch(createSkill(skills));
  };

  const componentStatus = { skills: "add" };
  if (data?.length > 0) {
    componentStatus.skills = "edit";
  }

  return (
    <>
      <div className="p-mt-2">
        <SectionHeader
          componentStatus={componentStatus}
          icon="tag"
          sectionTitle="Skills"
        />
        <div className="">
          <div>
          </div>
          <form onSubmit={handleSubmit(skillSubmit)}>
            <label htmlFor="skillInput" className="inputLabel p-pr-3">
              Add up to 10 skills
            </label>
            {skills.map((skill, index) => (
              <button
                key={index}
                onClick={(e) => handleSkillDelete(skill)}
                type="button"
                className="p-mr-2 p-p-0 p-mb-1 tag-container"
                id={skill}
              >
                {loading ? (
                  <i className="fa fa-spinner fa-spin"></i>
                ) : (
                  <span></span>
                )}
                <Tag
                  value={skill}
                  icon="pi pi-times"
                  className="p-p-2"
                ></Tag>
              </button>
            ))}
            <span className="skillInput">
              <Dropdown
                value={currentSkill}
                options={skillsList}
                onChange={handleSkillChange}
                optionLabel="name"
                filter
                showClear
                filterBy="name"
                placeholder="Select Skill"
                icon="pi pi-plus"
              />
              <i className="pi pi-plus" onClick={handleSkillAdd}></i>
            </span>

            <ModeFooter id="skillEdit" onCancel={closeEditMode} />
            {duplicateError && <div class="alert alert-danger">Skill already exists</div>}
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillForm;
