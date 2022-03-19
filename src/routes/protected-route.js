import AppNavBar from "components/AppNavBar";
import ChatContainer from "components/chat/ChatContainer";
import ChatContent from "components/chat/ChatContent";
import useWindowSize from "hooks/use-window-size";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import { loadProfileInfo } from "store/modules/account";
import { getConversationList } from "store/modules/chat";
import { loadContacts } from "store/modules/contact";
import AppSideBar from "../components/AppSideBar";

import agent from "../services/agent.service";

const ProtectedRoute = ({ children, ...rest }) => {
  const [c, setContact] = React.useState(null);
  const selectedContact = useSelector((state) => state.chat.selectedContact);
  console.log("contact from protected route", selectedContact);
  const [width, height] = useWindowSize();
  const dispatch = useDispatch();
  const pageLimit = 10;

  useEffect(() => {
    dispatch(loadProfileInfo());
    dispatch(loadContacts(1, pageLimit, "loadingContacts"));
    dispatch(getConversationList());
  }, []);

  if (agent.Auth.isAuth() && !agent.Auth.isAdmin()) {
    return (
      <>
        <div>
          <AppNavBar />
          <Route {...rest}>{children}</Route>
          {width > 800 && (
            <>
              <ChatContainer
              // setContact={setContact}
              // selectedContact={contact}
              />
              {selectedContact !== null ? <ChatContent /> : <div></div>}
            </>
          )}
        </div>
      </>
    );
  } else {
    if (agent.Auth.isAuth() && agent.Auth.isAdmin()) {
      return <Redirect to={{ pathname: "/admin" }} />;
    } else {
      return <Redirect to={{ pathname: "/login" }} />;
    }
  }
};

export default ProtectedRoute;
