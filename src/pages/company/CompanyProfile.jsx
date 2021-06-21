import AppNavBar from "components/AppNavBar";
import PersonalInfo from "pages/profile/PersonalInfo";
import ProfileTab from "pages/profile/ProfileTab";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router";
import { loadProfileInfo } from "store/modules/account";
import { loadCompanyInfo } from "store/modules/company";
import CompanyEdit from "./CompanyEdit";
import CompanyEditForm from "./CompanyEditForm";
import CompanyJob from "./CompanyJob";

import './CompanyProfile.css';

const CompanyProfile = () => {
  const match = useRouteMatch()
  const dispatch = useDispatch();

  useEffect(() => {
    //...
    dispatch(loadProfileInfo())
    // dispatch(loadCompanyInfo())
  }, []);

  return (
    <div className="background">
      <div className="content-container">
        {/*  */}
        <div className="p-grid">
          <div className="p-col-12 p-md-9 content-smallscreen">
            <div className="content-tab">
              {/* ProfileTab */}
              <ProfileTab />
            </div>
            <div className="content-body pt-1">
              {/* <CompanyEditForm /> */}
              <Route path={`${match.path}/`} exact component={CompanyEditForm} />
              <Route path={`${match.path}/info`} component={CompanyEditForm} />
              <Route path={`${match.path}/edit`} component={CompanyEditForm} />
              <Route path={`${match.path}/jobs`} component={CompanyJob} />
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
};

export default CompanyProfile