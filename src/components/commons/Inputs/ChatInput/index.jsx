import React, { memo } from 'react';
import PropTyepes from 'prop-types';
import { TextField } from '@mui/material';
import './style.css'

function ChatInput({ value, onChange, onKeyPress }) {
  return (
    <TextField
      id='input'
      variant='filled'
      placeholder='Messagem'
      value={value}
      onChange={onChange}
      onKeyPress={onKeyPress}
    />
  );
}

ChatInput.propTypes = {
  value: PropTyepes.string,
  onChange: PropTyepes.func,
  onKeyPress: PropTyepes.func
};

export default memo(ChatInput);
