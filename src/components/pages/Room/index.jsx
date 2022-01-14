/* eslint-disable */
// global
import React, { memo, useContext, useState } from 'react';
// local fucntions
import { GameContext, sendMessage } from '../../../contexts/GameContext';
// local components
import { Box, Container, Drawer, Grid } from '@mui/material';
import InviteNewPlayer from '../../commons/Buttons/InviteNewPlayer';
import TitlePage from '../../commons/TitlePage';
import Table from '../../commons/Table';
import Card from '../../commons/Card';
import PlayerAvatar from '../../commons/PlayerAvatar';
import PersistentDrawerRight from '../../commons/PersistentDrawerRight';
// styles
import './style.css';

const Room = () => {
  const { isConnected, players, messages } = useContext(GameContext);
  const [cardSelected, setCardSelected] = useState(false);
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
                    {Object.keys(players).map(key => (
                      <PlayerAvatar key={key} name={players[key].name} selected={cardSelected} />
                    ))}
                    {/* <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} /> */}
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={2} className='playersArea'>
                    {/* <PlayerAvatar name='Hítalo' selected={cardSelected} /> */}
                  </Grid>
                  <Grid item xs={8} className='playersArea'>
                    <Table />
                  </Grid>
                  <Grid item xs={2} className='playersArea'>
                    {/* <PlayerAvatar name='Hítalo' selected={cardSelected} /> */}
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={8} className='playersArea'>
                    {/* <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} />
                    <PlayerAvatar name='Hítalo' selected={cardSelected} /> */}
                  </Grid>
                  <Grid item xs={2} className='playersArea'></Grid>
                  <Grid item xs={12} className='cardsTitle'>
                    Escolha uma carta!
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
              </Box>
            </PersistentDrawerRight>
          </>
        )}
      </Container>
    </>
  );
};

export default memo(Room);
