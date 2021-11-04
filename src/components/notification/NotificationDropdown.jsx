import React from 'react'
import './NotificationDropdown.css'
import { Link } from 'react-router-dom';

export default ({ showNotification }) => {
  return (
    <div className={`notification-dropdown__container ${!showNotification && 'hide'}`}>
      <div className="notification-dropdown__header">
        <p>Recent Notification</p>
      </div>
      <div className="notification-dropdown__content">
        <div className="notification-dropdown__list">
          {[1,2,3,4,5].map((v) => <div className="notification-dropdown-list__item">
            <div style={{display: 'flex', justifyContent: 'flex-start', padding: '4px'}}>
              <div style={{width: '30%',paddingRight: '8px' }}>
                <img src="https://via.placeholder.com/50x50" style={{ borderRadius: '50px'}} />
              </div>
              <div style={{textAlign: 'left'}}>
                <p className="text title">Title</p>
                <p className="text summary">
                  summary look likes summary look
                </p>
              </div>
            </div>
          </div>)}
          <div style={{textAlign: 'center', fontSize: '12px', padding: '4px', color: 'black', cursor: 'pointer', fontWeight: 'bold'}}><p><Link to="/notifications" >See All</Link></p></div>
          
        </div>
      </div>
    </div>
  )
}
