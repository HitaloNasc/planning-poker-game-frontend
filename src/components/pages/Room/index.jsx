// global
import React, { memo, useContext, useState } from 'react';
// local fucntions
import { GameContext, sendMessage } from '../../../contexts/GameContext';
// local components
import PlayerList from '../../commons/PlayerList';
import Chat from '../../commons/Chat';
import { Box, Container, Grid } from '@mui/material';
import InviteNewPlayer from '../../commons/Buttons/InviteNewPlayer';
import TitlePage from '../../commons/TitlePage';
import Table from '../../commons/Table';
import Card from '../../commons/Card';
import PlayerAvatar from '../../commons/PlayerAvatar';
// styles
import './style.css';

const App = () => {
  const { isConnected, players, messages } = useContext(GameContext);
  const [cardSelected, setCardSelected] = useState(false); //eslint-disable-line
  const [valueSelected, setValueSelected] = useState(0);

  const onCardSelected = () => {
    let selected = cardSelected ? true : false;
    setCardSelected(!selected);
  };

  return (
    <Container>
      <Container className='head'>
        {!isConnected ? (
          <h2 className='connecting'>Conectando...</h2>
        ) : (
          <Box className='toolbar'>
            <TitlePage />
            <InviteNewPlayer />
          </Box>
        )}
      </Container>
      <Grid container spacing={0}>
        <Grid item xs={2}>
          <PlayerList players={players} />
        </Grid>
        <Grid item xs={8} className='gameArea'>
          <Box className='tableArea'>
            <Table />
            <PlayerAvatar name='Hítalo' selected={cardSelected} />
            <PlayerAvatar name='Hítalo' />
            <PlayerAvatar name='Hítalo' />
            <PlayerAvatar name='Hítalo' />
            <PlayerAvatar name='Hítalo' />
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Chat sendMessage={sendMessage} messages={messages} />
        </Grid>
        <Grid item xs={12} className='cardsArea'>
          <Card value={1} onClick={onCardSelected} />
          <Card value={2} onClick={onCardSelected} />
          <Card value={3} onClick={onCardSelected} />
          <Card value={5} onClick={onCardSelected} />
          <Card value={8} onClick={onCardSelected} />
          <Card value={13} onClick={onCardSelected} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default memo(App);
