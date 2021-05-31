import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import { Tag } from "primereact/tag";
import { Dropdown } from "primereact/dropdown";
import ModeFooter from "pages/profile/ModeFooter";
import { useDispatch, useSelector } from "react-redux";
import { createSkill, deleteSkill } from "store/modules/userSkill";

const skillsList = [
  { name: "Java", id: "NY" },
  { name: "Javascript", id: "RM" },
  { name: "Python", id: "LDN" },
  { name: "Database", id: "IST" },
  { name: "Graphic Design", id: "PRS" },
  { name: "Web Design", id: "PRS11" },
  { name: "Software Analysis", id: "PRS22" },
];

const SkillForm = ({ data, closeEditMode }) => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.userSkill.loading);
  const { register, handleSubmit, setValue } = useForm();

  const [currentSkill, setCurrentSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const searchObjectArrayValues = (array, value) => {
    const skillExists = array.filter((skill) => skill.id === value);
    return !Boolean(skillExists.length > 0);
  };

  const handleSkillChange = (e) => {
    setCurrentSkill(e.value);
  };

  useEffect(() => {
    if (data?.length > 0) {
      setCurrentSkill();
      setSkills(data);
      register("skills");
      setValue("skills", data);
    }
  }, [data]);

  const handleSkillAdd = () => {
    if (skills.length === 10) {
      setCurrentSkill("");
      return;
    }

    if (currentSkill) {
      if (searchObjectArrayValues(skills, currentSkill.id)) {
        setSkills([...skills, currentSkill]);
        setValue("skills", skills);
        setCurrentSkill("");
      }
    }
  };

  const handleSkillDelete = (skillToDelete) => {
    // if (e.target.className === "p-tag-icon pi pi-times") {

    // dispatch(deleteSkill(skillToDelete.id));
    const newSkillArray = skills.filter(
      (skill) => skill.id !== skillToDelete.id
    );
    setSkills(newSkillArray);
    setValue("skills", newSkillArray);
    // }
  };

  const skillSubmit = (skill) => {
    dispatch(createSkill(skills.map(skill => skill.name)));
  };

  const componentStatus = { skills: "add" };
  if (data?.length > 0) {
    componentStatus.skills = "edit";
  }

  return (
    <>
      <div className="p-card p-mt-2">
        <SectionHeader
          componentStatus={componentStatus}
          icon="tag"
          sectionTitle="Skills"
        />
        <div className="p-card-body">
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
                  value={skill?.name}
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
          </form>
        </div>
      </div>
    </>
  );
};

export default SkillForm;
