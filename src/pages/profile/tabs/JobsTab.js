import { Badge } from 'primereact/badge';
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
      {jobs.map(({title, type, company, salary, skills, description},index) => (
        <div className="p-card p-4 mt-2 p-d-flex justify-content-between" key={index}>
          <div className="d-flex">
            <img
              src="https://source.unsplash.com/random/100x100"
              className="rounded circle"
              alt="image"
            />
            <div className="p-2" ></div>
            <div>
                <ul>
                    <li className="p-d-flex p-ai-center p-as-center"><h4>{title}</h4> <Badge value={type} severity="success"></Badge></li>
                    <li>{company}</li>
                    <li className="d-flex">
                        <div className="box">
                            <h6>Salary</h6>
                            <p>{salary}</p>
                        </div>
                        <div className="box">
                            <h6>Skills</h6>
                            <p>{skills.join(", ")}</p>
                        </div>
                    </li>
                </ul>
            </div>
          </div>
          <span className="p-mr-2 p-as-end"> <a href="#"><i className="pi pi-eye" style={{'fontSize': '2em', color: 'black'}}></i></a> </span>
        </div>
      ))}
    </div>
  </>
);

export default JobsTab;