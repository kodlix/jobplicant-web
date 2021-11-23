import React, { useEffect, useState } from 'react'
import './NotificationDropdown.css'
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updateNotification } from 'store/modules/appNotification';

export default ({ showNotification }) => {
  const dispatch = useDispatch()
  // const userNotifications = useSelector(state => state.appNotification.notifications)
  const userNotifications = useSelector(state => state.appNotification.navBarNotifications.data);

  const [userNoti, setUserNoti] = useState([]);
  console.log(userNotifications, "dropdown noti");
  console.log(userNoti, "state noti");
  let history = useHistory();


  const handleSeen = (noti) => {
    dispatch(updateNotification(noti.id));
    history.push(`/${noti.notificationType}/${noti.id}`)
  }

  useEffect(() => {
    if (userNotifications) {
      let reducedNoti = userNotifications.splice(0, 5);
      setUserNoti(reducedNoti);
    }
  }, [userNotifications])



  return (
    <div className={`notification-dropdown__container ${!showNotification && 'hide'}`}>
      <div className="notification-dropdown__header">
        <p>Recent Notification</p>
      </div>
      <div className="notification-dropdown__content">
        <div className="notification-dropdown__list">
          {userNoti && userNoti.length > 0 && userNoti.map((noti, index) =>
            <div key={index} className="notification-dropdown-list__item">
              <div onClick={() => handleSeen(noti)}>  <div style={{ display: 'flex', justifyContent: 'flex-start', padding: '4px' }}>
                <div style={{ width: '30%', paddingRight: '8px' }}>
                  <img src="https://via.placeholder.com/50x50" style={{ borderRadius: '50px' }} />
                </div>
                <div style={{ textAlign: 'left' }}>
                  <p className="text title">{noti.message}</p>
                </div>
              </div> </div>
            </div>)}
          <div style={{ textAlign: 'center', fontSize: '12px', padding: '4px', color: 'black', cursor: 'pointer', fontWeight: 'bold' }}><p><Link to="/notifications" >See All</Link></p></div>
        </div>
      </div>
    </div >
  )
}
