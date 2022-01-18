import React from 'react'
import { Card } from 'primereact/card'
import { Button } from 'primereact/button'
import Spinner from '../../../components/spinner/spinner.component'
import { useSelector, useDispatch } from 'react-redux'

import { acceptRequest, rejectRequest } from "../../../store/modules/contact";
import { confirmDialog } from 'primereact/confirmdialog';

const ConnectionConfirm = ({contactId, contactDetails}) => {
    const loading = useSelector(state => state.contact.loadingContact);
    const dispatch = useDispatch()

    const handleAcceptRequest = (e) => {
        
    
        //since backend is not giving details of contact in response at accept
        dispatch(acceptRequest({ contactId: contactId }, "acceptConnectionRequest", contactDetails))
      }
    
      const confirmRequestRejection = (e) => {
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
        <div className="p-2"  >
            <Card >
            <div className="pd-flex p-flex-column">
                <p>Do you accept connection request?</p>
                {loading ? <Spinner /> : <div className="d-flex p-jc-center p-ai-center ">
                    <Button loading={loading === "acceptConnectionRequest"} label="Accept" icon="pi pi-check" onClick={handleAcceptRequest}  />
                    <Button loading={loading === "rejectRequest"} label="Reject" icon="pi pi-times" className="p-button-danger ml-2" onClick={confirmRequestRejection} />
                </div>}
            </div>
            </Card>
        </div>
    )
}

export default ConnectionConfirm
