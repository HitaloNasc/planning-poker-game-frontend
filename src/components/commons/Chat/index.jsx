import React, { memo, useState } from 'react';
import { PropTypes } from 'prop-types';

const Chat = ({ sendMessage, messages }) => {
  const [messageToSend, setMessageToSend] = useState('');

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      sendMessage(messageToSend);
      setMessageToSend('');
    }
  };

  const handleOnChange = () => {
    sendMessage(messageToSend);
    setMessageToSend('');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      <div style={{ whiteSpace: 'pre-wrap' }}>{messages.join('\n\n')}</div>

      <input
        type='text'
        value={messageToSend}
        onChange={e => setMessageToSend(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button onClick={handleOnChange}>Enviar</button>
    </div>
  );
};

Chat.propTypes = {
  sendMessage: PropTypes.func,
  messages: PropTypes.array
};

export default memo(Chat);
