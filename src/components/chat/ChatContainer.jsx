import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleChatModal } from "../../store/modules/chat";

import "./ChatContainer.css";
import ChatList from "./ChatList";

const ChatContainer = () => {
  const show = useSelector((state) => state.chat.showChatModal);
  const userProfile = useSelector((state) => state.account.profileInfo);

  const dispatch = useDispatch();

  return (
    <div className={`chat-container ${show ? "show" : ""}`}>
      <div className="chat-header">
        <div className="left">
          <img
            style={{ width: "30px", height: "30px" }}
            className="rounded-image"
            src={
              userProfile.imageUrl ?? "https://source.unsplash.com/random/50x50"
            }
          />
          <h4>Messaging</h4>
        </div>
        <div className="right">
          <i
            onClick={() => dispatch(toggleChatModal())}
            className={`pi ${
              !show ? "pi-chevron-up" : "pi-chevron-down"
            } right-caret`}
          ></i>
        </div>
      </div>
      <div className="chat-body">
        <ChatList />
      </div>
    </div>
  );
};

export default ChatContainer;
