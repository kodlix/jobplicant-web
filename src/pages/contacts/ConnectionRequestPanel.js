import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadPendingRequests, acceptRequest, rejectRequest } from "../../store/modules/contact";
import { Button } from 'primereact/button';
import { formatter } from '../../helpers/converter';
import { confirmDialog } from 'primereact/confirmdialog';
import { API_ROOT } from "../../services/agent.service";
import "./Contacts.css";
import { Link } from 'react-router-dom';

const ConnectionRequestPanel = ({ setSelectedId, selectedId }) => {
  const dispatch = useDispatch();
  const requests = useSelector(state => state.contact.pendingRequests);
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const pageLimit = 10;
  const pageToLoad = formatter.getPageToLoad(requests?.ids?.length, pageLimit);

  useEffect(() => {
    dispatch(loadPendingRequests(1, pageLimit, "loadingRequests"));
  }, [dispatch]);

  const loadMoreRequests = () => {
    dispatch(loadPendingRequests(pageToLoad, pageLimit, "loadMoreRequests"));
  };

  const handleAcceptRequest = (e) => {
    const contactId = e.currentTarget.dataset.id;

    //since backend is not giving details of contact in response at accept
    const contactDetails = requests.data[contactId];
    setSelectedId(contactId);
    dispatch(acceptRequest({ contactId: contactId }, "acceptConnectionRequest", contactDetails))
  }

  const confirmRequestRejection = (e) => {
    let contactId = e.currentTarget.dataset.id;
    setSelectedId(contactId);
    confirmDialog({
      message: 'Are you sure you want to reject this connection request?',
      header: 'Reject Connection Request',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(rejectRequest(contactId, "rejectRequest"));
      }
    });
  };

  return (
    <div className="p-col-12 p-md-3 p-p-md-2 p-pt-0">
      <div className="p-card">
        <div className="p-card-title contact-sidepanel-cardtitle p-mb-3">
          Connection Requests
        </div>
        {
          requests.ids.map((requestId) => {
            const contact = requests.data[requestId];
            if (!contact) {
              return null;
            }
            return (
              <div className="p-card-body d-flex justify-content-between">
                <span className="d-flex align-items-center w-100">
                  {
                    contact.imageUrl &&
                    <img
                      src={contact.imageUrl}
                      width="40"
                      height="40"
                      className="rounded-circle contact-requestspicture p-mr-2"
                      alt={`${contact?.firstName}'s profile`}
                    />
                  }
                  {
                    !contact.imageUrl &&
                    <i className="pi pi-user contact-emptyProfilePic-small"></i>
                  }
                  <span className="w-100">
                    <div className="p-card-title contacts-cardsubtitle p-mb-0 d-flex justify-content-between">
                      <Link to={`/applicant/${contact.id}`}> <span className='app-color' title="View user's profile"> {`${formatter.capitalizeFirstLetter(contact?.firstName)} ${formatter.capitalizeFirstLetter(contact?.lastName)}`}
                      </span></Link>
                      <span className="text-right">
                        {
                          loading === "acceptConnectionRequest"
                          && contact.id === selectedId &&
                          <Button className="contacts-accept-button" >
                            <i className="pi pi-spin pi-spinner" />
                          </Button>
                        }
                        {
                          (error === "acceptFail" || contact.id !== selectedId || loading !== "acceptConnectionRequest") &&
                          <Button
                            className="contacts-accept-button"
                            data-id={contact.id}
                            onClick={handleAcceptRequest}>
                            <i className="pi pi-check" />
                          </Button>
                        }
                        {
                          loading === "rejectRequest" && contact.id === selectedId &&
                          <Button className="contacts-reject-button p-ml-2" >
                            <i className="pi pi-spin pi-spinner" />
                          </Button>
                        }
                        {
                          (error === "requestFail" || contact.id !== selectedId || loading !== "rejectRequest") &&
                          <Button className="contacts-reject-button p-ml-2" data-id={contact.id} onClick={confirmRequestRejection}>
                            <i className="pi pi-times" />
                          </Button>

                        }
                      </span>

                    </div>
                    {
                      <p>
                        {contact?.email}
                      </p>
                    }
                    <p className="contacts-jobDescription">
                      Graphic Designer
                    </p>
                  </span>
                </span>
              </div>
            )
          })
        }
        {
          loading === "loadingRequests" &&
          requests.ids.length === 0 &&
          <div className="p-px-3 p-pt-3 p-pb-5 d-flex justify-content-center">
            <i
              className="pi pi-spin pi-spinner p-mr-2"
              style={{ 'fontSize': '1.5em', color: "#5A2846" }} />
          </div>
        }
        {
          requests.ids.length > 0 &&
          <Button label={loading === "loadMoreRequests" ? 'Loading...' : 'Load More'} onClick={loadMoreRequests} className="p-mr-2 w-100" />
        }
        {
          requests.ids.length === 0 &&
          loading !== "loadingRequests" &&
          <div className="p-card-body d-flex justify-content-between">
            No connection request at the moment
          </div>
        }
      </div>
    </div>

  );
}

export default ConnectionRequestPanel;