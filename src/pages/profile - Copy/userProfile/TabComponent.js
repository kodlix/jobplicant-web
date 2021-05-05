import React from 'react';
import { withRouter } from 'react-router';
import { Switch, Route } from 'react-router-dom';
import InfoComponent from './userInfo/InfoComponent';
import UserContacts from './userContacts/UserContacts';
import UserJobs from './userJobs/UserJobs';
import UserProfileEdit from './userProfileEdit';
import ProtectedRoute from 'routes/protected-route';



const routeMap = {
  1: '/userprofile/userinformation',
  2: '/userprofile/userjobs',
  3: '/userprofile/usercontacts'
}

const TabComponent = (props) => {
  const [active, setActive] = React.useState(1);
  React.useEffect(() => {
    const { path, isExact } = props.match;
    if (path === '/userprofile' && isExact) {
      props.history.push(routeMap[1]);
    }
    // Call profile endpoints
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
    // console.log(tabRoute);
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
        <button className="tab-portfolio">
          <i className="pi pi-images"></i>
          <div className="tab-titles">Portfolio</div>
        </button>
      </div>
      <Switch>
        <ProtectedRoute path="/userprofile/userinformation" component={InfoComponent} />
        <ProtectedRoute path="/userprofile/usercontacts" component={UserContacts} />
        <ProtectedRoute path="/userprofile/userjobs" component={UserJobs} />
        <ProtectedRoute path="/userprofile/edit" component={UserProfileEdit} />
        <ProtectedRoute path="/userprofile/create" component={UserProfileEdit} />
      </Switch>
    </>
  );
}

export default withRouter(TabComponent);