// global
import React, { memo } from 'react';
// local fucntions
// import { GameContext, sendMessage, createRoom } from '../contexts/GameContext';
// local components
// import PlayerList from './commons/PlayerList';
// import Chat from './commons/Chat';
// import { Box, Grid } from '@mui/material';
// styles
import './App.css';
import '@fontsource/roboto/300.css';
import Room from './pages/Room';

const App = () => {
  // const { isConnected, players, messages } = useContext(GameContext);

  return (
    <div className='app'>
      <Room />
    </div>
  );
};

export default memo(App);
