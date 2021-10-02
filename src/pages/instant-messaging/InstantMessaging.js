import ChatList from 'components/chat/ChatList';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import chatJSON from 'components/chat/chat.json'

import './InstantMessaging.css'
import InstantMessagingDetail from './InstantMessagingDetail';


export default ({ setContact }) => {
    // const [contact, setContact] = React.useState(null)
    const [selectedContact, setSelectedContact] = React.useState(null)
    const location = useLocation()

    const handleSelected = (contact) => setSelectedContact(contact);

    return selectedContact === null ? (<div className={`chat-container-01`}>
            <div className="chat-header-01">
                <div className="left">
                    <img className="rounded-image" src="https://source.unsplash.com/random/50x50" />
                    <h4>Instant Messaging</h4>
                </div>
                <div className="right">
                    {/* <i onClick={() => dispatch(toggleChatModal())} className={`pi ${!show ? 'pi-chevron-up' : 'pi-chevron-down'} right-caret`}></i> */}
                </div>
            </div>
            <div className="chat-body-01">

                <div className="searchbox">
                    <input type="text" placeholder="search contact" className="search-input" />
                </div>
                <div className="contact-list">

                    {chatJSON.map(item => (<div key={item.id} onClick={() => handleSelected(item)} className={`contact-item ${selectedContact && item.id === selectedContact.id ? 'selected' : ''}`}>
                        <img src="https://source.unsplash.com/random/70x70" />
                        <div className="contact-detail">
                            <h4>{item.name}</h4>
                            <p>{item.lastMessage}</p>
                        </div>
                        <div className="last-seen">
                            <p>{item.lastSeen}</p>
                        </div>
                    </div>
                    ))}

                </div>
            </div>
        </div>) : <InstantMessagingDetail
        setSelectedContact={setSelectedContact}
        selectedContact={selectedContact}
    />
    
}