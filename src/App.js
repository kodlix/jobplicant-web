import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import io from "socket.io-client";

import agent, { API_ROOT } from "./services/agent.service";
import { UserNotifications } from './store/modules/appNotification';

import './styles/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import './App.css';

import AppLoading from './components/AppLoading';
import AppAlert from 'components/AppAlert';

const AppRouter = React.lazy(() => import("./routes/app-router"));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (agent.Auth.isAuth()) {
      //dispatch(loadApp())
    }
  }, [dispatch])

  const user = agent.Auth.current();
  useEffect(() => {
    const notificationSocket = io(`${API_ROOT}/notigateway`);

    notificationSocket.on('connect', () => {
      if (user && user.id) {
        notificationSocket.emit('notification_msg_to_server', {
          socketId: user.id,
        })
      }

      notificationSocket.on("notification_msg_to_client", (data) => {
        console.log("message sent to clients");
        if (data && data.recieverId === user.id) {
          dispatch(UserNotifications(user.id));
        }
      });
    })

    
    return () => notificationSocket.disconnect();
  }, []);

  return (
    <React.Suspense fallback={<AppLoading />}>
      <AppAlert />
      <AppRouter />
    </React.Suspense>
  )
}

export default App