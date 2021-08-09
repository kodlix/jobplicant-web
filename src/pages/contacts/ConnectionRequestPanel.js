import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  loadPendingRequests, acceptRequest, rejectRequest } from "../../store/modules/contact";
import { Button } from 'primereact/button';
import { formatter } from '../../helpers/converter';
import { confirmDialog } from 'primereact/confirmdialog';
import { API_ROOT } from "../../services/agent.service";
import "./Contacts.css";

const ConnectionRequestPanel = ({ setSelectedId, selectedId }) => {
  const dispatch = useDispatch();
  const requestsByPage = useSelector(state => state.contact.pendingRequests);
  const loading = useSelector(state => state.contact.loadingContact);
  const error = useSelector(state => state.contact.error);
  const [requestPageNumber, setRequestPageNumber] = useState(1);
  const [requestsLoaded, setRequestsLoaded] = useState([]);
  useEffect(() => {
    dispatch(loadPendingRequests(1, 10, "loadingRequests"));
  }, [dispatch]);

  useEffect(() => {
    if (requestPageNumber === 1) {
      setRequestsLoaded(requestsByPage);
    }
    else {
      setRequestsLoaded([...requestsLoaded, ...requestsByPage])
    }
  }, [requestsByPage]);

  const loadMoreRequests = () => {
    setRequestPageNumber(requestPageNumber + 1)
    dispatch(loadPendingRequests(requestPageNumber + 1, 10, "loadMoreRequests"));
  };

  const handleAcceptRequest = (e) => {
    const contactId = e.currentTarget.dataset.id;
    setSelectedId(contactId);
    dispatch(acceptRequest({ contactId: contactId }, "acceptConnectionRequest"))
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
          requestsLoaded.map((contactRequest) => (
            <div className="p-card-body d-flex justify-content-between">
              <span className="d-flex align-items-end">
                {
                  contactRequest.imageUrl &&
                  <img
                    src={`${API_ROOT}/${contactRequest.imageUrl}`}
                    width="40"
                    height="40"
                    className="rounded-circle contact-requestspicture p-mr-2"
                    alt={`${contactRequest?.firstName}'s profile`}
                  />
                }
                {
                  !contactRequest.imageUrl &&
                  <i className="pi pi-user contact-emptyProfilePic-small"></i>
                }
                <span>
                  <div className="p-card-title contacts-cardsubtitle p-mb-0">
                    {`${formatter.capitalizeFirstLetter(contactRequest?.firstName)} ${formatter.capitalizeFirstLetter(contactRequest?.lastName)}`}
                  </div>
                  <p className="contacts-jobDescription">
                    Graphic Designer
                  </p>
                </span>
              </span>
              <span>
                {
                  loading === "acceptConnectionRequest"
                  && contactRequest.id === selectedId &&
                  <Button className="p-mr-2 contacts-accept-button" >
                    <i className="pi pi-spin pi-spinner" />
                  </Button>
                }
                {
                  (error === "acceptFail" || contactRequest.id !== selectedId || loading !== "acceptConnectionRequest") &&
                  <Button
                    className="p-mr-2 contacts-accept-button"
                    data-id={contactRequest.id}
                    onClick={handleAcceptRequest}>
                    <i className="pi pi-check" />
                  </Button>
                }
                {
                  loading === "rejectRequest" && contactRequest.id === selectedId &&
                  <Button className="contacts-reject-button" >
                    <i className="pi pi-spin pi-spinner" />
                  </Button>
                }
                {
                  (error === "requestFail" || contactRequest.id !== selectedId || loading !== "rejectRequest") &&
                  <Button className="contacts-reject-button" data-id={contactRequest.id} onClick={confirmRequestRejection}>
                    <i className="pi pi-times" />
                  </Button>

                }
              </span>
            </div>
          ))
        }
        {
          loading === "loadingRequests" &&
          requestsLoaded.length === 0 &&
          <div className="p-px-3 p-pt-3 p-pb-5 d-flex justify-content-center">
            <i
              className="pi pi-spin pi-spinner p-mr-2"
              style={{ 'fontSize': '1.5em', color: "#5A2846" }} />
          </div>
        }
        {
          requestsLoaded.length === 0 &&
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