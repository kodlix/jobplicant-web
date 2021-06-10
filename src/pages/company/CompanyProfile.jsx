import AppNavBar from "components/AppNavBar";
import PersonalInfo from "pages/profile/PersonalInfo";
import ProfileTab from "pages/profile/ProfileTab";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadProfileInfo } from "store/modules/account";
import { loadCompanyInfo } from "store/modules/company";
import CompanyEdit from "./CompanyEdit";
import CompanyEditForm from "./CompanyEditForm";

import './CompanyProfile.css';

const CompanyProfile = () => {
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
                <div className="content-body">
                    <CompanyEditForm />
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      );
};

export default CompanyProfile