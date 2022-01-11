import React, { memo } from 'react';
import PropTyepes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';
import { Button } from '@mui/material';
import './style.css';

function SendMessage({ onClick }) {
  return (
    <Button variant='contained' onClick={onClick} id='send'>
      <SendIcon fontSize='small' />
    </Button>
  );
}

SendMessage.propTypes = {
  onClick: PropTyepes.func
};

export default memo(SendMessage);
