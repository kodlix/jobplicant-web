import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatModal } from 'store/modules/chat';

import "./ChatContainer.css"
import ChatList from './ChatList';

const ChatContainer = ({ setContact, selectedContact }) => {
    const show = useSelector(state => state.chat.showChatModal)
    const dispatch = useDispatch()

    return (
        <div className={`chat-container ${show ? 'show' : ''}`}>
            <div className="chat-header">
                <div className="left">
                    <img className="rounded-image" src="https://source.unsplash.com/random/50x50" />
                    <h4>Messaging</h4>
                </div>
                <div className="right">
                    <i onClick={() => dispatch(toggleChatModal())} className={`pi ${!show ? 'pi-chevron-up' : 'pi-chevron-down'} right-caret`}></i>
                </div>
            </div>
            <div className="chat-body">

                <ChatList selectedContact={selectedContact} setContact={setContact} />
            </div>
        </div>
    )
}

export default ChatContainer