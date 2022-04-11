import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadContacts, removeContact } from "../../store/modules/contact";
import { confirmDialog } from "primereact/confirmdialog";
import { formatter } from "../../helpers/converter";
import { Button } from "primereact/button";
import "./Contacts.css";
import ConnectionRequestPanel from "./ConnectionRequestPanel";
import { ACCOUNT_TYPE } from "constants/accountType";
import { actionSetSelectedContact } from "store/modules/chat";

// import './SkeletonDemo.css';

const List = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.contact.loadingContact);
  const error = useSelector((state) => state.contact.error);
  const meta = useSelector((state) => state.contact.contacts.meta);

  console.log(meta, "meta");

  const [selectedId, setSelectedId] = useState(null);

  // for contact list
  const pageLimit = 10;
  const contacts = useSelector((state) => state.contact.contacts);
  const contactContainerClassName =
    contacts.ids.length < 4 ? "containerHeight-contact" : "";
  const [pageNumber, setPageNumber] = useState(1);
  console.log(contacts, "contact-data-shape");

  const loadMoreContacts = () => {
    dispatch(loadContacts(pageNumber + 1, pageLimit, "loadMoreContacts"));
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    dispatch(loadContacts(1, pageLimit, "loadingContacts"));
  }, [dispatch]);

  const getCurrentJobExperience = (experiences) => {
    if (experiences && experiences.length) {
      const experience =
        experiences.find((experience) => experiences.current === true) ||
        experiences[0];
      return (
        <div>
          {experience.jobTitle} at {experience.company}
        </div>
      );
    }
    return <div></div>;
  };

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

  // if (loading) {
  //   return <div className={`contacts-container ${contactContainerClassName}`}>
  //     <div className="custom-skeleton p-p-4">
  //       <ul className="p-m-0 p-p-0">
  //         <li className="p-mb-3">
  //           <div className="p-d-flex">
  //             <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
  //             <div style={{ flex: '1' }}>
  //               <Skeleton width="100%" className="p-mb-2"></Skeleton>
  //               <Skeleton width="75%"></Skeleton>
  //             </div>
  //           </div>
  //         </li>
  //         <li className="p-mb-3">
  //           <div className="p-d-flex">
  //             <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
  //             <div style={{ flex: '1' }}>
  //               <Skeleton width="100%" className="p-mb-2"></Skeleton>
  //               <Skeleton width="75%"></Skeleton>
  //             </div>
  //           </div>
  //         </li>
  //         <li className="p-mb-3">
  //           <div className="p-d-flex">
  //             <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
  //             <div style={{ flex: '1' }}>
  //               <Skeleton width="100%" className="p-mb-2"></Skeleton>
  //               <Skeleton width="75%"></Skeleton>
  //             </div>
  //           </div>
  //         </li>
  //         <li>
  //           <div className="p-d-flex">
  //             <Skeleton shape="circle" size="4rem" className="p-mr-2"></Skeleton>
  //             <div style={{ flex: '1' }}>
  //               <Skeleton width="100%" className="p-mb-2"></Skeleton>
  //               <Skeleton width="75%"></Skeleton>
  //             </div>
  //           </div>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // }

  return (
    <>
      <div className={`contacts-container ${contactContainerClassName}`}>
        <div className="p-grid contacts-content">
          <div className="p-col-12 p-md-9">
            <div className="p-card">
              <div className="p-card-title d-flex justify-content-between align-items-center">
                <span className="contact-cardtitle">
                  <i className="pi pi-book p-pr-2" />
                  Contacts
                </span>
                <span>
                  <Link to="/contacts/create">
                    <Button className="contacts-cardsubtitle p-mr-3">
                      Add New Contact
                    </Button>
                  </Link>
                </span>
              </div>
            </div>
            {contacts.ids?.map((contactId) => {
              const contact = contacts.data[contactId];
              if (!contact) {
                return null;
              }
              return (
                <div
                  className="p-card contact-individualContainer"
                  key={contact.id}
                >
                  <span className="d-flex">
                    {contact.imageUrl && (
                      <img
                        src={contact?.imageUrl}
                        width="85"
                        height="85"
                        alt={`${contact?.firstName}'s profile`}
                        className="rounded-circle contact-profilePicture p-mr-3"
                      />
                    )}
                    {!contact.imageUrl && (
                      <i className="pi pi-user contact-emptyProfilePic p-mr-3"></i>
                    )}
                    <span className="">
                      <span className="p-card-title contacts-contactHeader p-mb-0">
                        <Link to={`/applicant/${contact.id}`}>
                          {" "}
                          <span
                            className="p-mr-2 app-color"
                            title="View user's profile"
                          >
                            {`${formatter.capitalizeFirstLetter(
                              contact?.firstName
                            )} ${formatter.capitalizeFirstLetter(
                              contact?.lastName
                            )}`}
                          </span>{" "}
                        </Link>
                        {contact.accountType === ACCOUNT_TYPE.ARTISAN && (
                          <div
                            className="stars"
                            style={{ "--rating": contact.rating }}
                          />
                        )}
                      </span>
                      <p>{getCurrentJobExperience(contact.experiences)}</p>
                      <small>
                        <b>Email:</b> {contact?.email || "Unavailable"}
                      </small>
                    </span>
                  </span>
                  <div className="contacts-actionIcons">
                    {/* <i className="pi pi-phone p-pr-2" /> */}
                    <i className="pi pi-video p-pr-2" />
                    <i
                      className="pi pi-comments p-pr-2"
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
            {contacts.ids.length > 0 && (
              <Button
                label={
                  loading === "loadMoreContacts" ? "Loading..." : "Load More"
                }
                onClick={loadMoreContacts}
                className="p-mr-2 w-100"
              />
            )}
            {contacts.ids.length === 0 && loading !== "loadingContacts" && (
              <div className="p-card p-p-4 p-mb-2 d-flex justify-content-center">
                <div className="text-center">
                  <span className="p-card-title ">
                    Oops. Contact List is Empty
                  </span>
                  <Link to="/contacts/create">
                    Find users to add to contact list
                  </Link>
                </div>
              </div>
            )}
            {loading === "loadingContacts" && contacts.ids.length === 0 && (
              <div className="p-p-5 d-flex justify-content-center">
                <i
                  className="pi pi-spin pi-spinner"
                  style={{ fontSize: "2em", color: "#5A2846" }}
                />
              </div>
            )}
          </div>
          <ConnectionRequestPanel
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
      </div>
    </>
  );
};

export default List;
