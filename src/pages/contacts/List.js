import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import "./Contacts.css"

const List = () => {
  const rating = 4.4;
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(loadContacts)
  // })
  const contacts = [
    {
      name: "Jane Doe",
      ratings: 3,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    },
    {
      name: "Jane Doe",
      ratings: 5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Doe",
      ratings: 4.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    },
    {
      name: "Jane Doe",

      ratings: 3.5,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  ",
    },
    {
      name: "Jane Doe",

      ratings: 4,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <>
      <div className="contacts-container">
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
            {contacts.map((contact) => (
              <div className="p-card p-p-4 d-flex justify-content-between p-mb-2">
                <span>
                  <img src="https://source.unsplash.com/random/80x80" className="rounded circle p-mr-3" />
                  <span className="">
                    <span className="p-card-title contacts-contactHeader p-mb-0">
                      <span className="p-mr-2">
                        Jane Doe
                  </span>
                      <div className="stars" style={{ "--rating": rating }}></div>
                    </span>
                    <p>
                      photographer at photostat
                  </p>
                  </span>
                </span>
                <div className="contacts-actionIcons">
                  <i className="pi pi-phone p-pr-2" />
                  <i className="pi pi-video p-pr-2" />
                  <i className="pi pi-comments p-pr-2" />
                  <i className="pi pi-trash p-pr-2" />
                </div>
              </div>

            ))}
          </div>
          <div className="p-col-12 p-md-3 p-p-2">
            <div className="p-card">
              <div className="p-card-title contact-sidepanel-cardtitle p-mb-0">
                Connection Requests
                  </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-end">
                  <img src="../../assets/logo.png" width="40" height="40" className="rounded-circle contact-requestspicture p-mr-2" />
                  <span>
                    <div className="p-card-title contacts-cardsubtitle p-mb-0">
                      Jane Doe
                      </div>
                    <p className="contacts-jobDescription">
                      Graphic Designer
                      </p>
                  </span>
                </span>
                <Button icon="pi pi-plus" iconPos="left" type="button" className="p-p-0 contacts-accept-button" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default List;