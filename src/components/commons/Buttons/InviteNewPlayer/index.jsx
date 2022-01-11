import React, { memo } from 'react';
import Button from '@mui/material/Button';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
// style
import './style.css';

function InviteNewPlayer() {
  return (
    <Button variant='outlined' className='inviteNewPlayer-content'>
      <PersonAddAltIcon color='primary' />
      <span>Convide um jogador</span>
    </Button>
  );
}

export default memo(InviteNewPlayer);
