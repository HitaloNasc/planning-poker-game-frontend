/* eslint-disable */
// global
import React, { memo, useContext, useState } from 'react';
// local fucntions
import { GameContext, sendMessage } from '../../../contexts/GameContext'; //eslint-disable-line
// local components
// import PlayerList from '../../commons/PlayerList';
// import Chat from '../../commons/Chat';
import { Box, Container, Drawer, Grid } from '@mui/material';
import InviteNewPlayer from '../../commons/Buttons/InviteNewPlayer';
import TitlePage from '../../commons/TitlePage';
import Table from '../../commons/Table';
import Card from '../../commons/Card';
import PlayerAvatar from '../../commons/PlayerAvatar';
import PersistentDrawerRight from '../../commons/PersistentDrawerRight';
// styles
import './style.css';

const App = () => {
  const { isConnected, players, messages } = useContext(GameContext); //eslint-disable-line
  const [cardSelected, setCardSelected] = useState(false); //eslint-disable-line
  const [showChat, setShowChat] = useState(false);
  // const [valueSelected, setValueSelected] = useState(0);

  const onClickShowChat = () => {
    let show = showChat ? false : true;
    setShowChat(show);
  };

  const onCardSelected = () => {
    let selected = cardSelected ? true : false;
    setCardSelected(!selected);
  };

  return (
    <>
      <Container className='head'>
        {!isConnected ? (
          <h2 className='connecting'>Conectando...</h2>
        ) : (
          <>
            <PersistentDrawerRight sendMessage={sendMessage} messages={messages}>
              <Box className='tableArea'>
                <Grid container spacing={2}>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={8} className='playersArea'>
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={2} className='playersArea'>
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                  </Grid>
                  <Grid item xs={8} className='playersArea'>
                    <Table />
                  </Grid>
                  <Grid item xs={2} className='playersArea'>
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={8} className='playersArea'>
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={12} className='cardsTitle'>Escolha uma carta!</Grid>
                  <Grid item xs={12} className='cardsArea'>
                    <Card value={1} onClick={onCardSelected} />
                    <Card value={2} onClick={onCardSelected} />
                    <Card value={3} onClick={onCardSelected} />
                    <Card value={5} onClick={onCardSelected} />
                    <Card value={8} onClick={onCardSelected} />
                    <Card value={13} onClick={onCardSelected} />
                  </Grid>
                </Grid>
              </Box>
            </PersistentDrawerRight>
            {/* <Box className='toolbar'>
              <TitlePage />
              <div>
                <InviteNewPlayer />
                <button onClick={onClickShowChat}>Chat</button>
              </div>
            </Box> */}
          </>
        )}
      </Container>
      {/* <Container className='body'>
        <Grid container spacing={0}>
          <Grid item xs={9}>
          <Grid container spacing={0}>
            <Grid item xs={2}>
              <PlayerList players={players} />
            </Grid>
            <Grid item xs={8} className='gameArea'>
              <Box className='tableArea'>
                <Grid container spacing={2}>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={8} className='playersArea'>
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' />
                    <PlayerAvatar name='Hítalo' />
                    <PlayerAvatar name='Hítalo' />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={2} className='playersArea'>
                    <PlayerAvatar name='Hítalo' />
                  </Grid>
                  <Grid item xs={8} className='playersArea'>
                    <Table />
                  </Grid>
                  <Grid item xs={2} className='playersArea'>
                    <PlayerAvatar name='Hítalo' />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={8} className='playersArea'>
                    <PlayerAvatar name='Hítalo' />
                    <PlayerAvatar name='Hítalo' />
                    <PlayerAvatar name='Hítalo' />
                    <PlayerAvatar name='Hítalo' />
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                </Grid>
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
          <Drawer />
          </Grid> 
          <Grid item xs={3}>
            {showChat && (
              <Grid container spacing={0}>
                <Chat sendMessage={sendMessage} messages={messages} />
              </Grid>
            )}
          </Grid>
        </Grid>
      </Container> */}
    </>
  );
};

export default memo(App);
