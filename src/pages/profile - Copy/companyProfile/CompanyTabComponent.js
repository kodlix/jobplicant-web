import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import CompanyInfoComponent from './companyInfo/CompanyInfoComponent';
import CompanyContacts from './companyContacts/CompanyContacts';
import CompanyJobs from './companyJobs/CompanyJobs';
import CompanyProfileEdit from './companyProfileEdit';
import ProtectedRoute from './../../../routes/protected-route';



const routeMap = {
  1: '/companyprofile/companyinformation',
  2: '/companyprofile/companyjobs',
  3: '/companyprofile/companycontacts'
}

const CompanyTabComponent = (props) => {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    const { path, isExact } = props.match;
    if (path === '/companyprofile' && isExact) {
      console.log(path)
      props.history.push(routeMap[1]);
    }
  }, []);

  const handleSelect = (event) => {
    // dataset will give you an object for every data- attribute.
    // i.e if I added a data attribute of id to a button like:
    // <button data-id="xyz">
    // I will get the id from event.target.dataset.id
    // Dataset can be anything
    const { tab } = event.currentTarget.dataset;
    setActive(Number(tab));
    const tabRoute = routeMap[Number(tab)];
    console.log(tabRoute);
    props.history.push(tabRoute);
  }

  return (
    <>
      <div className="content-tab">
        <button onClick={handleSelect} data-tab="1">
          <i className="pi pi-info-circle"></i>
          <div className="tab-titles">Info</div>
        </button>
        <button onClick={handleSelect} data-tab="2">
          <i className="pi pi-briefcase"></i>
          <div className="tab-titles">Jobs</div>
        </button>
        <button onClick={handleSelect} data-tab="3">
          <i className="pi pi-user"></i>
          <div className="tab-titles">Contacts</div>
        </button>
        <button>
          <i className="pi pi-users"></i>
          <div className="tab-titles">Groups</div>
        </button>
      </div>
      <Switch>
        <ProtectedRoute path="/companyprofile/companyinformation" exact component={CompanyInfoComponent} />
        <ProtectedRoute path="/companyprofile/companycontacts" exact component={CompanyContacts} />
        <ProtectedRoute path="/companyprofile/companyjobs" exact component={CompanyJobs} />
        <ProtectedRoute path="/companyprofile/edit" exact component={CompanyProfileEdit} />
        <ProtectedRoute path="/companyprofile/create" exact component={CompanyProfileEdit} />
      </Switch>
    </>
  );
}

export default withRouter(CompanyTabComponent);