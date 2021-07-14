import CorporateJob from 'components/CorporateJob';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadJobs } from 'store/modules/job';

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
const styles = {
  menuItemStyle: {
    display: 'flex',
    flexDirection: 'row', 
    justifyContent: 'flex-start',
    border: "1px solid black"
  }
}
const JobsTab = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadJobs())
  }, []);

  return (
  <>
    <div style={styles.menuItemStyle}>
      <Link
        style={{ color: "black", fontSize: "14px", fontWeight: "bold", textDecoration: 'underline', cursor: 'pointer'}}
      >
        Applied Jobs
      </Link>
      
      <Link
        style={{ color: "black", fontSize: "14px", fontWeight: "bold", textDecoration: 'underline', cursor: 'pointer' }}
      >
        Instant Hires
      </Link>
    </div>
    <div className="mt-3">
      <CorporateJob />
    </div>
  </>
);
}

export default JobsTab;