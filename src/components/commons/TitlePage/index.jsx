import React, { memo } from 'react';
import LocalPlayIcon from '@mui/icons-material/LocalPlay';
// style
import './style.css';

function TitlePage() {
  return (
    <p className='titlePage'>
      <LocalPlayIcon fontSize='large' /> Planning Poker
    </p>
  );
}

export default memo(TitlePage);
