import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Button } from 'primereact/button';
import { confirmDialog } from 'primereact/confirmdialog';
import { getConnectionStatus } from "../../store/modules/contact";
import { sendContactRequest, cancelContactRequest, removeContact, blockContact, unblockContact, acceptRequest } from "../../store/modules/contact";
import { formatter } from '../../helpers/converter';
import { ACCOUNT_TYPE } from '../../constants/accountType';
import { CONTACT_STATUS } from '../../constants/contactStatus';
import agent from "../../services/agent.service";
import "./ApplicantProfile.css"


const ConnectionButton = ({ viewedProfileAccountType, data }) => {
  const dispatch = useDispatch();
  const currentUserAccountType = agent.Auth.current()?.accountType;
  const currentUserAccountId = agent.Auth.current()?.id;
  const connectionStatus = useSelector(state => state.contact.connectionStatus);


  const confirmRemove = (e) => {
    let contactId = data.id;
    let firstName = data.firstName;
    let lastName = data.lastName;
    confirmDialog({
      message: `Are you sure you want to remove ${formatter.capitalizeFirstLetter(firstName)} ${formatter.capitalizeFirstLetter(lastName)} from your contact list?`,
      header: 'Remove from Contact List',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(removeContact(contactId));
      }
    });
  };

  const confirmBlock = (e) => {
    let contactId = data.id;
    let firstName = data.firstName;
    let lastName = data.lastName;
    confirmDialog({
      message: `Are you sure you want to block ${formatter.capitalizeFirstLetter(firstName)} ${formatter.capitalizeFirstLetter(lastName)}?`,
      header: 'Block contact',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept: () => {
        dispatch(blockContact(contactId));
      }
    });
  };

  const handleAcceptRequest = (e) => {
    const contactId = e.currentTarget.dataset.id;

    //since backend is not giving details of contact in response at accept
    const contactDetails = data;
    dispatch(acceptRequest({ contactId: contactId }, "acceptConnectionRequest", contactDetails))
  }

  console.log("data", data);
  useEffect(() => {
    dispatch(getConnectionStatus(data.id));
  }, [dispatch]);

  const getConnectionButton = () => {
    switch (true) {
      //block contact
      case (connectionStatus.status === CONTACT_STATUS.ACCEPTED && !connectionStatus.isBlocked):
        return <><Button onClick={confirmBlock}>Block Contact</Button><Button className="p-ml-2" onClick={confirmRemove}>Delete Contact</Button></>

      //unblock contact
      case (connectionStatus.status === CONTACT_STATUS.ACCEPTED && connectionStatus.isBlocked && connectionStatus.blockedBy === currentUserAccountId):
        return <Button onClick={() => dispatch(unblockContact(data.id))}>Unblock Contact</Button>

      //cancel connection request
      case (connectionStatus.status === CONTACT_STATUS.PENDING && connectionStatus.accountId === currentUserAccountId):
        return <Button onClick={() => dispatch(cancelContactRequest(data.id))}>Cancel Request</Button>

      //accept or reject connection request
      case (connectionStatus.status === CONTACT_STATUS.PENDING && connectionStatus.accountId !== currentUserAccountId):
        return <><Button>Accept Request</Button><Button className="p-ml-2">Reject Request</Button></>

      //send connection request coprorate to corporate
      case (
        !connectionStatus.status &&
        viewedProfileAccountType === ACCOUNT_TYPE.CORPORATE && currentUserAccountType === ACCOUNT_TYPE.CORPORATE):
        return <Button onClick={() => dispatch(sendContactRequest({ contactId: data.id }))}>Send connection Request</Button>

      //send connection request noncorporate to noncorporate
      case (
        !connectionStatus.status &&
        viewedProfileAccountType !== ACCOUNT_TYPE.CORPORATE):
        return <Button onClick={() => dispatch(sendContactRequest({ contactId: data.id }))}>Send connection Request</Button>
      default:
        return
    }
  }

  return (
    <span className="profile-connectionButtonContainer">
      {getConnectionButton()}
    </span>
  );
}

export default ConnectionButton;