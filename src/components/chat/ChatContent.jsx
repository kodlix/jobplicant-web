import React from 'react';
import "./ChatContent.css"

const ChatContent = ({setContact, contact}) => {
    const handleClose = () => setContact(null);
    console.log(contact)
    return (
        <div className={`chat-content-container`}>
            <div className="chat-content-header">
                <div className="left">
                <img className="rounded-image" src="https://source.unsplash.com/random/50x50" />
                <h4>{contact.name}</h4>
                </div>
                <div className="right">
                    <i onClick={handleClose} className="pi pi-times"></i>
                </div>
            </div>
            <div className="chat-content-body">
                <div className="chat-content-messages"></div>
                <div className="chat-content-input">
                    <input type="text" />
                    <button>Send</button>
                </div>
            </div>
        </div>
    )
}

export default ChatContent;