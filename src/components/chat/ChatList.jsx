import React, { useEffect } from "react";
import { Avatar } from "primereact/avatar";
import chatJSON from "./chat.json";
import { actionSetSelectedContact } from "../../store/modules/chat";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import ChatAvatar from "../../assets/avatar-chat.png";

const ChatList = () => {
  const dispatch = useDispatch();
  const selectedContact = useSelector((state) => state.chat.contact);
  const contact = useSelector((state) => state.contact.contacts);
  const [contacts, setContacts] = React.useState([]);
  const conversationList = useSelector((state) => state.chat.conversationList);
  // console.log("[CHATLIST] trans:", transformObjToList(contact));
  const [recentConversationList, setRecentConversationList] = React.useState(
    []
  );

  const [filteredContacts, setFilteredContact] = React.useState([]);
  const [filteredConversation, setFilteredConversation] = React.useState([]);

  useEffect(() => {
    if (contact) {
      const localContacts = transformObjToList(contact);
      setContacts(localContacts);
      setFilteredContact(localContacts);
    }
  }, [contact]);

  // console.log("converstaion list", conversationList);
  useEffect(() => {
    console.log("conversation list in a useEffect");
    if (conversationList.data && contacts.length) {
      console.log("conversation list data");
      const result = conversationList.data.reduce(function (acc, item) {
        (acc[item["recieverId"]] = acc[item["recieverId"]] || []).push(item);
        return acc;
      }, {});
      console.log("this is a goood place to start");
      const groupedRecentConversations = Object.keys(result).map((key) => {
        let contact = contacts.find((contact) => contact.id === key);
        let messages = result[key];
        if (contact != undefined) {
          return { ...contact, messages };
        }
        return { id: key, messages, firstName: "", lastName: "" };
      });

      setRecentConversationList(groupedRecentConversations);
      setFilteredConversation(groupedRecentConversations);
      // console.log("conversation list loaded", conversationList.data);
    }
  }, [contacts.length, conversationList.data]);

  const transformObjToList = (contact) => {
    return contact.ids.map((id) => contact.data[id]);
  };
  const handleSelected = (contact) =>
    dispatch(actionSetSelectedContact(contact));

  const [toggleContact, setToggleContact] = React.useState(false);

  const handleShowContacts = () => {
    setToggleContact(!toggleContact);
  };

  const handleSearchContactInList = (e) => {
    const query = e.target.value;

    if (query.length) {
      let newContacts = contacts.filter((contact) =>
        contact.firstName.toLowerCase().includes(query)
      );
      setFilteredContact(newContacts);
    } else {
      setFilteredContact(contacts);
    }
  };

  const handleSearchConversationInList = (e) => {
    const query = e.target.value;
    if (query.length) {
      let newRecentConversationList = recentConversationList.filter(
        (conversation) => conversation.firstName.toLowerCase().includes(query)
      );
      setFilteredConversation(newRecentConversationList);
    } else {
      setFilteredConversation(recentConversationList);
    }
  };

  if (!toggleContact)
    return (
      <>
        <div className="p-d-flex p-ai-center searchbox">
          <div className=" " style={{ width: "100%" }}>
            <input
              type="text"
              placeholder="search conversation"
              className="search-input"
              style={{ width: "100%" }}
              onChange={handleSearchConversationInList}
            />
          </div>
          <div
            className="p-2 ml-2"
            style={{ boxShadow: "2px 1px 2px #eee", backgroundColor: "#eee" }}
          >
            <i onClick={handleShowContacts} className="pi pi-plus"></i>
          </div>
        </div>
        <div className="contact-list">
          {filteredConversation.length === 0 && (
            <div className="p-d-flex p-jc-center p-ai-center">
              <p>No recent conversation</p>
            </div>
          )}
          {filteredConversation.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                // console.log("item selected", item);
                handleSelected(item);
              }}
              className={`contact-item ${
                selectedContact && item.id === selectedContact.id
                  ? "selected"
                  : ""
              }`}
            >
              <img
                style={{ width: "30px", height: "30px" }}
                src={item.imageUrl ?? ChatAvatar}
              />
              <div className="contact-detail">
                <h4>
                  {item.firstName} {item.lastName}
                </h4>
                <p>{item.messages[0].message}</p>
              </div>
              <div className="last-seen">
                <small>
                  {moment(item.messages[0]?.createdAt).format("hh:mma")}
                </small>{" "}
              </div>
            </div>
          ))}
        </div>
      </>
    );

  return (
    <>
      <div className="p-d-flex p-ai-center searchbox">
        <div className=" " style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="search contact"
            className="search-input"
            style={{ width: "100%" }}
            onChange={handleSearchContactInList}
          />
        </div>
        <div
          className="p-2 ml-2"
          style={{ boxShadow: "2px 1px 2px #eee", backgroundColor: "#eee" }}
        >
          <i onClick={handleShowContacts} className="pi pi-times"></i>
        </div>
      </div>
      <div className="contact-list">
        {filteredContacts.map((item) => (
          <div
            key={item.id}
            onClick={() => {
              console.log("item seleected", item);
              handleSelected({ ...item, messages: [] });
            }}
            className={`contact-item ${
              selectedContact && item.id === selectedContact.id
                ? "selected"
                : ""
            }`}
          >
            <img
              style={{ width: "40px", height: "40px" }}
              src={item.imageUrl ?? ChatAvatar}
            />
            <div className="contact-detail">
              <h4>
                {item.firstName} {item.lastName}
              </h4>
              <p>{item.email}</p>
            </div>
            <div className="last-seen">
              <p>{item.lastSeen}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ChatList;
/**
 *
 */
