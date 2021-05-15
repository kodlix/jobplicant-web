import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import { Tag } from "primereact/tag";
import { Dropdown } from "primereact/dropdown";
import ModeFooter from "pages/profile/ModeFooter";
import { useDispatch } from "react-redux";
import { createSkill } from "store/modules/userSkill";

const skillsList = [
  { name: "New York", id: "NY" },
  { name: "Rome", id: "RM" },
  { name: "London", id: "LDN" },
  { name: "Istanbul", id: "IST" },
  { name: "Paris", id: "PRS" },
  { name: "Paris11", id: "PRS11" },
  { name: "Paris22", id: "PRS22" },
];

const SkillForm = ({ data, closeEditMode }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue } = useForm();

  const [currentSkill, setCurrentSkill] = useState("");
  const [skills, setSkills] = useState([]);

  const searchObjectArrayValues = (array, value) => {
    const skillExists = array.filter((skill) => skill.id === value);
    return !Boolean(skillExists.length > 0);
  };

  const handleSkillChange = (e) => {
    setCurrentSkill(e.target.value.name);
    console.log(e.target.value.name)
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
      if (searchObjectArrayValues(skills, currentSkill)) {
        setSkills([...skills, currentSkill]);
        setValue("skills", [...skills, currentSkill]);
        setCurrentSkill("");
      }
    }
  };


  const handleSkillDelete = (skillToDelete) => {
    // if (e.target.className === "p-tag-icon pi pi-times") {
    const newSkillArray = skills.filter((skill) => skill.name.toLowerCase() !== skillToDelete.toLowerCase());
    setSkills(newSkillArray);
    setValue("skills", newSkillArray);
    // }
  };

  const skillSubmit = (skill) => {
    console.log(skill);
    dispatch(createSkill(skill));
    return;
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
                onClick={(e) => handleSkillDelete(skill.name)}
                type="button"
                className="p-mr-2 p-p-0 p-mb-1 tag-container"
                id={skill}
              >
                <Tag value={skill?.name} icon="pi pi-times" className="p-p-2"></Tag>
              </button>
            ))}
            <span className="skillInput">
              <Dropdown
                value={currentSkill}
                options={skillsList}
                onChange={(e) => handleSkillChange(e)}
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
