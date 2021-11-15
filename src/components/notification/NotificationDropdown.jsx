import React, { useEffect, useState } from 'react'
import './NotificationDropdown.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default ({ showNotification }) => {
  // const userNotifications = useSelector(state => state.appNotification.notifications)
  const userNotifications = useSelector(state => state.appNotification.navBarNotifications.data);

  const [userNoti, setUserNoti] = useState([]);
  console.log(userNotifications, "dropdown noti");
  console.log(userNoti, "state noti");

  useEffect(() => {
    if (userNotifications) {
      setUserNoti(userNotifications);
    }
  }, [userNotifications])


  return (
    <div className={`notification-dropdown__container ${!showNotification && 'hide'}`}>
      <div className="notification-dropdown__header">
        <p>Recent Notification</p>
      </div>
      <div className="notification-dropdown__content">
        <div className="notification-dropdown__list">
          {userNotifications && userNotifications.length > 0 && userNotifications.map((noti, index) =>
            <div key={index} className="notification-dropdown-list__item">
              <Link to={`/${noti.notificationType}/${noti.id}`}>  <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '4px' }}>
                <div style={{ width: '30%', paddingRight: '8px' }}>
                  <img src="https://via.placeholder.com/50x50" style={{ borderRadius: '50px' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p className="text title">{noti.message}</p>
                </div>
              </div> </Link>
            </div>)}
          <div style={{ textAlign: 'center', fontSize: '12px', padding: '4px', color: 'black', cursor: 'pointer', fontWeight: 'bold' }}><p><Link to="/notifications" >See All</Link></p></div>
        </div>
      </div>
    </div >
  )
}
