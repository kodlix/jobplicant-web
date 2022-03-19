import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  actionSetSelectedContact,
  createChat,
  getConversationWithPartnerId,
} from "../../store/modules/chat";
import "./ChatContent.css";
import moment from "moment";

const sentStyle = {
  borderRadius: "4px",
  padding: "6px",
  margin: "4px",
  maxWidth: "70%",
  marginLeft: "auto",
  textAlign: "left",
  fontSize: "13px",
  fontWeight: 400,
  boxShadow: "2px 1px 2px #eee",
  backgroundColor: "#fff",
  color: "black",
};
const receivedStyle = {
  justifyContent: "flex-start",
  display: "inline",
  borderRadius: "4px",
  padding: "6px",
  margin: "4px",
  maxWidth: "70%",
  marginRight: "auto",
  textAlign: "left",
  fontSize: "13px",
  fontWeight: 400,
  boxShadow: "2px 1px 2px #eee",
  backgroundColor: "#fff",
  color: "black",
};

const ChatContentItem = ({ conversation, contact }) => {
  if (contact.id === conversation.senderId) {
    return (
      <div style={receivedStyle}>
        <p>{conversation.message}</p>
      </div>
    );
  } else if (contact.id === conversation.recieverId) {
    return (
      <div style={sentStyle}>
        <p>{conversation.message}</p>
      </div>
    );
  }
  return <div></div>;
};

const ChatContent = () => {
  const chatMessageRef = useRef(null);
  const dispatch = useDispatch();
  const contact = useSelector((state) => state.chat.selectedContact);
  const handleClose = () => dispatch(actionSetSelectedContact(null));

  const getName = (contact) => `${contact.firstName} ${contact.lastName}`;

  const [message, setMessage] = React.useState("");
  //   const [conversations, setConversations] = React.useState([]);
  const conversations = useSelector((state) => state.chat.conversations);

  useEffect(() => {
    dispatch(getConversationWithPartnerId(contact.id));
  }, [contact.id]);

  const handleRefreshConversation = () => {
    console.log("refresh");
    dispatch(getConversationWithPartnerId(contact.id));
  };
  const handleSendChat = () => {
    const newConversation = {
      title: "Chat",
      recieverId: contact.id,
      message,
      imageUrl: "",
      audioUrl: "",
      videoUrl: "",
      createdAt: new Date().toISOString(),
    };
    // const reply = {
    //   title: "Chat",
    //   recieverId: "",
    //   message: "Replying your message",
    //   imageUrl: "",
    //   audioUrl: "",
    //   videoUrl: "",
    // };
    dispatch(createChat(newConversation));
    // setConversations([...conversations, newConversation, reply]);
    setMessage("");
  };

  console.log("contact to mess", contact);

  React.useEffect(() => {
    chatMessageRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [contact]);
  React.useEffect(() => {
    if (conversations.length) {
      console.log(conversations);
      chatMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversations.length]);

  return (
    <div className={`chat-content-container`}>
      <div className="chat-content-header">
        <div className="left">
          <img
            className="rounded-image"
            style={{ width: "40px", height: "40px" }}
            src={contact.imageUrl ?? "https://source.unsplash.com/random/50x50"}
          />
          <h4>{getName(contact)}</h4>
        </div>
        <div className="right">
          <i onClick={handleRefreshConversation} className="pi pi-refresh"></i>
          {"   "}
          {/* to be removed */}
          <i onClick={handleClose} className="pi pi-times"></i>
        </div>
      </div>
      <div className="chat-content-body">
        <div className="chat-content-messages" style={{ display: "flex" }}>
          {conversations
            .sort((a, b) =>
              moment(b.createdAt) < moment(a.createdAt) ? 1 : -1
            )
            .map((conversation, index) => (
              <ChatContentItem
                key={index}
                contact={contact}
                conversation={conversation}
              />
            ))}

          <div ref={chatMessageRef}></div>
        </div>
      </div>
      <div className="chat-content-input">
        <input
          type="text"
          placeholder="type your message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <button className="btn-primary" onClick={handleSendChat}>
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatContent;
