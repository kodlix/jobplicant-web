import React from 'react'
import { Dialog } from "primereact/dialog";
import { useDispatch, useSelector } from 'react-redux';
import { toggleChatModal } from 'store/modules/chat';
import ChatList from './ChatList';
import ChatContent from './ChatContent';

const ChatDialogBox = () => {
    const dispatch = useDispatch()
    const showChatModal = useSelector(state => state.chat.showChatModal)

    const onHide = () => dispatch(toggleChatModal())

    return (
        <Dialog
            visible={showChatModal}
            onHide={onHide}
            breakpoints={{ "960px": "75vw" }}
            style={{ width: "50vw" }}
        >

            <div className="modal-body" onClick={onHide}>
                <div className="p-grid">
                    <div className="p-col-3">
                        <ChatList />
                    </div>
                    <div className="p-col-9">
                        <ChatContent />
                    </div>
                </div>
            </div>
        </Dialog>
    )
}

export default ChatDialogBox