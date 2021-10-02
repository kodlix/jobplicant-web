import ChatContainer from 'components/chat/ChatContainer';
import React from 'react'
import { useHistory, useParams } from 'react-router';

export default () => {
    let history = useHistory();
    let { id } = useParams();

  
    let back = e => {
      e.stopPropagation();
      history.goBack();
    };
  
    return (
        <ChatContainer />
    )
}