import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatModal } from 'store/modules/chat';
import chatJSON from './chat.json'
import "./ChatContainer.css"

const ChatContainer = ({setContact, selectedContact}) => {
    // const [show, setShow] = React.useState(false);

    // const toggleChatShow = () => {
    //     setShow(!show);
    // }

    const show = useSelector(state => state.chat.showChatModal)
    const dispatch = useDispatch()

    const handleSelected = (contact) => setContact(contact);

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
                <div className="searchbox">
                    <input type="text" placeholder="search contact" className="search-input" />
                </div>
                <div className="contact-list">

                    {chatJSON.map(item => (<div key={item.id} onClick={() => handleSelected(item)} className={`contact-item ${selectedContact && item.id === selectedContact.id ? 'selected' : ''}`}>
                        <img src="https://source.unsplash.com/random/70x70"/>
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
        </div>
    )
}

export default ChatContainer