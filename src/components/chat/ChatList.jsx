import React from 'react'
import {  Avatar } from 'primereact/avatar'
import chatJSON from './chat.json'

const ChatList = ({ selectedContact, setContact }) => {
    const handleSelected = (contact) => setContact(contact);

    return <>
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
    </>
}
export default ChatList