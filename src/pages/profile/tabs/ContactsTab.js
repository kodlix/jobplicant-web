import { Button } from 'bootstrap';
import Spinner from 'components/spinner/spinner.component';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadContacts } from 'store/modules/contact';

const ContactsTab = () => {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);

  // for contact list
  const pageLimit = 10;
  const contacts = useSelector(state => state.contact.contacts);
  const contactContainerClassName = contacts.ids.length < 4 ? "containerHeight-contact" : "";
  const [pageNumber, setPageNumber] = useState(1);

  const loadMoreContacts = () => {
    dispatch(loadContacts(pageNumber + 1, pageLimit, "loadMoreContacts"));
    setPageNumber(pageNumber + 1);
  };

  useEffect(() => {
    dispatch(loadContacts(1, pageLimit, "loadingContacts"))
  }, [dispatch]);

  if (loading)
    return <Spinner />


  return (
    <>
      {/* <div className="p-card p-4">
        <h3>Contacts</h3>
      </div> */}
      <div className="mt-3">
        {[].map(({ name, ratings, description }, index) => (
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
                    <h4>{name}</h4>
                    <span className="p-1"></span>
                    <span>
                      <div
                        className="stars"
                        style={{ "--rating": ratings }}
                      ></div>
                    </span>
                  </li>

                  <li className="d-flex">{description}</li>
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
        ))}
      </div>
      {
        contacts.ids.length === 0
        && loading !== "loadingContacts"
        &&
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
      }
      {
        contacts.ids.length > 0 &&
        <Button label={loading === "loadMoreContacts" ? 'Loading...' : 'Load More'} onClick={loadMoreContacts} className="p-mr-2 w-100" />
      }
    </>
  );
}

export default ContactsTab;
