import CorporateJob from 'components/CorporateJob';

const jobs = [
  {
    title: "Web Developer",
    type: "Full Time",
    company: "Google Inc.",
    salary: "#120k - #180k",
    skills: ["CSS3", "Photoshop"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis mi sem, sagittis auctor ipsum commodo ac. Aenean massa neque, accumsan in felis vitae, bibendum varius ex. ",
  },
  {
    title: "Web Developer",
    type: "Full Time",
    company: "Google Inc.",
    salary: "#120k - #180k",
    skills: ["CSS3", "Photoshop"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis mi sem, sagittis auctor ipsum commodo ac. Aenean massa neque, accumsan in felis vitae, bibendum varius ex. ",
  },
  {
    title: "Web Developer",
    type: "Full Time",
    company: "Google Inc.",
    salary: "#120k - #180k",
    skills: ["CSS3", "Photoshop"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis mi sem, sagittis auctor ipsum commodo ac. Aenean massa neque, accumsan in felis vitae, bibendum varius ex. ",
  },
  {
    title: "Web Developer",
    type: "Full Time",
    company: "Google Inc.",
    salary: "#120k - #180k",
    skills: ["CSS3", "Photoshop"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis mi sem, sagittis auctor ipsum commodo ac. Aenean massa neque, accumsan in felis vitae, bibendum varius ex. ",
  },
  {
    title: "Web Developer",
    type: "Full Time",
    company: "Google Inc.",
    salary: "#120k - #180k",
    skills: ["CSS3", "Photoshop"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lobortis mi sem, sagittis auctor ipsum commodo ac. Aenean massa neque, accumsan in felis vitae, bibendum varius ex. ",
  },
];

const JobsTab = () => (
  <>
    <div className="d-flex" style={{border: "1px solid black"}}>
      <a
        className="button"
        style={{ color: "black", fontSize: "14px", fontWeight: "bold", textDecoration: 'underline', cursor: 'pointer'}}
      >
        Applied Jobs
      </a>
      <div className="p-2 cursor: 'pointer'"></div>
      <a
        className="button"
        style={{ color: "black", fontSize: "14px", fontWeight: "bold", textDecoration: 'underline', cursor: 'pointer' }}
      >
        Instant Hires
      </a>
    </div>
    <div className="mt-3">
      <CorporateJob jobs={jobs} />
    </div>
  </>
);

export default JobsTab;