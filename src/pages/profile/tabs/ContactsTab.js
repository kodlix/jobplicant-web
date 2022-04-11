import { formatter } from "helpers/converter";
import { confirmDialog } from "primereact/confirmdialog";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionSetSelectedContact } from "store/modules/chat";
import { loadContacts, removeContact } from "store/modules/contact";

const ContactsTab = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);
  const loading = useSelector((state) => state.contact.loadingContact);

  const [selectedId, setSelectedId] = useState();

  let myContacts = contacts.ids;

  const pageLimit = 10;

  useEffect(() => {
    dispatch(loadContacts(1, pageLimit, "loadingContacts"));
  }, [dispatch]);

  const confirmRemove = (e) => {
    let contactId = e.currentTarget.dataset.id;
    let firstName = e.currentTarget.dataset.firstName;
    let lastName = e.currentTarget.dataset.lastName;
    confirmDialog({
      message: `Are you sure you want to remove ${formatter.capitalizeFirstLetter(
        firstName
      )} ${formatter.capitalizeFirstLetter(lastName)} from your contact list?`,
      header: "Remove from Contact List",
      icon: "pi pi-info-circle",
      acceptClassName: "p-button-danger",
      accept: () => {
        setSelectedId(contactId);
        dispatch(removeContact(contactId));
      },
    });
  };

  const handleOpenChatRoom = (contact) => {
    dispatch(actionSetSelectedContact(contact));
  };

  return (
    <>
      {/* <div className="p-card p-4 mt-1">
        <h3>Contacts</h3>
      </div> */}
      <div className="mt-1">
        {myContacts && myContacts.length > 0 && myContacts.map((contactId, index) => {
          const contact = contacts.data[contactId];
          if (!contact) {
            return null;
          }
          return (
            <div
              className="p-card p-4 mt-2 d-flex justify-content-between"
              key={index}
            >
              <div className="d-flex">
                <img
                  src={contact.imageUrl} width="50px" height="50px"
                  className="rounded-circle"
                  alt="image"
                />
                <div className="p-2"></div>
                <div>
                  <ul>
                    <li className="d-flex">
                      {/* <h4>{`${contact.firstName}  ${contact.lastName}`}</h4> */}
                      <div>
                        <h4 className="p-card-title">{`${contact.firstName}  ${contact.lastName}`}</h4>
                        <p>{contact.email}</p>
                      </div>
                      <span className="p-1"></span>
                      <span>
                        <div
                          className="stars"
                          style={{ "--rating": contact.ratings }}
                        ></div>
                      </span>
                    </li>

                    <li className="d-flex">{contact?.description}</li>
                  </ul>
                </div>
              </div>
              <div className="contacts-actionIcons">
                {/* <i className="pi pi-phone p-pr-2" /> */}
                <i
                  className="pi pi-video p-pr-2 font-weight-bold"
                  style={{ fontSize: "1.5em" }}
                />
                <i
                  className="pi pi-comments p-pr-2 font-weight-bold"
                  style={{ fontSize: "1.5em", cursor: "pointer" }}
                  onClick={() => handleOpenChatRoom(contact)}
                />
                <i
                  data-id={contact.id}
                  onClick={confirmRemove}
                  className="pi pi-trash p-pr-2"
                  data-last-name={contact.lastName}
                  data-first-name={contact.firstName}
                />
              </div>
            </div>
          );
        })}

        {myContacts === 0 && (
          <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
            <div className="text-center">
              <span className="p-card-title ">Oops. Contact List is Empty</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactsTab;
