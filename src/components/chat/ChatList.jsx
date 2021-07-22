import React from 'react'
import {  Avatar } from 'primereact/avatar'

const ChatItem = ({chat}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', padding: '12px'}}>
            <div style={{}}>
            <Avatar image="https://source.unsplash.com/random/150x150" className="p-mr-2" size="large" shape="circle" />
            </div>
            <div className="content" style={{flex: 1,alignSelf: 'center'}}>
                <h4 style={{fontSize: '20px'}}>John Smith</h4>
                <p style={{fontSize: '13px'}}>Job Title</p>
            </div>
        </div>
    )
}

const ChatList = () => {
    return (
        <div style={{height: '400px',width: '100%'}}>
            <div style={{backgroundColor: '#eee', padding: '12px'}}>
                <h4>Contacts</h4>
            </div>
            {[1,2,,3,4].map((chat, index) => <ChatItem key={index} chat={chat} />)}
        </div>
    )
}

export default ChatList