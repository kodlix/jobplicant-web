import React from "react";
import { Button } from "primereact/button";
import { useDispatch } from "react-redux";
import { toggleChatModal } from "../../store/modules/chat";

import "./ChatFloatingButton.css";

const ChatFloatingButton = () => {
  const dispatch = useDispatch();

  const handleShowChat = () => {
    dispatch(toggleChatModal());
  };
  return (
    <div
      className="chat-floating-button"
      style={{
        boxShadow: `2px 3px 2px #ccc`,
        borderRadius: "50%",
        zIndex: 900,
      }}
    >
      <Button
        onClick={handleShowChat}
        icon="pi pi-comment"
        className="p-button-rounded p-button-info "
      />
    </div>
  );
};

const styles = {
  chatFloatingButton: {},
};

export default ChatFloatingButton;
