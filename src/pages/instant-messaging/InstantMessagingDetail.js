import React from 'react';
import './InstantMessagingDetail.css'

const InstantMessagingDetail = ({setSelectedContact, selectedContact}) => {
    const handleClose = () => setSelectedContact(null);

    return (
            <div className={`chat-content-01-container`}>
                <div className="chat-content-01-header">
                    <div className="left">
                        <img className="rounded-image" src="https://source.unsplash.com/random/50x50" />
                        <h4>{selectedContact.name}</h4>
                    </div>
                    <div className="right">
                        <i onClick={handleClose} className="pi pi-times"></i>
                    </div>
                </div>
                <div className="chat-content-01-body">
                    <div className="chat-content-01-messages">
                        <div style={{height: '360px', paddingBottom: '15px'}}></div>
                    </div>
                    <div className="chat-content-01-input">
                        <input type="text" />
                        <button>Send</button>
                    </div>
                </div>
            </div>
    )
}

export default InstantMessagingDetail