import React, { memo, useState } from 'react';
import { Grid } from '@mui/material';
import ChatInput from '../Inputs/ChatInput';
import { PropTypes } from 'prop-types';
import SendMessage from '../Buttons/SendMessage';

const Chat = ({ sendMessage, messages }) => {
  const [messageToSend, setMessageToSend] = useState('');

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      sendMessage(messageToSend);
      setMessageToSend('');
    }
  };

  const handleDisplayChange = e => {
    setMessageToSend(e.target.value);
  };

  const handleOnClick = () => {
    sendMessage(messageToSend);
    setMessageToSend('');
  };

  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <div
          id='messageArea'
          style={{
            whiteSpace: 'pre-wrap',
            marginTop: '3px',
            position: 'fixed',
            bottom: '35px',
            maxHeight: '70vh'
          }}
        >
          {messages.join('\n')}
        </div>
      </Grid>
      <Grid item xs={12} id='inputArea'>
        <ChatInput
          value={messageToSend}
          onChange={handleDisplayChange}
          onKeyPress={handleKeyPress}
        />
        <SendMessage onClick={handleOnClick} />
      </Grid>
    </Grid>
  );
};

Chat.propTypes = {
  sendMessage: PropTypes.func,
  messages: PropTypes.array
};

export default memo(Chat);
