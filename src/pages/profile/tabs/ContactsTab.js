import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadContacts } from "store/modules/contact";

const ContactsTab = () => {

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contact.contacts);
  const loading = useSelector(state => state.contact.loadingContact);
  let myContacts = contacts.ids;

  const pageLimit = 10;

  useEffect(() => {
    dispatch(loadContacts(1, pageLimit, "loadingContacts"))
  }, [dispatch]);

  return (
    <>
      <div className="p-card p-4 mt-2">
        <h3>Contacts</h3>
      </div>
      <div className="mt-3">
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
                  src="https://source.unsplash.com/random/50x50"
                  className="rounded circle"
                  alt="image"
                />
                <div className="p-2"></div>
                <div>
                  <ul>
                    <li className="d-flex">
                      <h4>{`${contact.firstName}  ${contact.lastName}`}</h4>
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
              <div className="">
                <a href="/" style={{ color: 'black', marginLeft: '5px', }} >Audio Call </a>
                <a href="/" style={{ color: 'black', marginLeft: '5px', }} >Video Call </a>
                <a href="/" style={{ color: 'black', marginLeft: '5px', }} >Message </a>
                <a href="/" style={{ color: 'black', marginLeft: '5px', }} >Delete </a>
              </div>
            </div>
          )
        })}

        {
          myContacts === 0 && <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
            <div className="text-center">
              <span className="p-card-title ">
                Oops. Contact List is Empty
              </span>
            </div>

          </div>
        }
      </div>
    </>
  )
};

export default ContactsTab;
