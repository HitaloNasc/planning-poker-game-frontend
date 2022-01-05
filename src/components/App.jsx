import React, { useEffect, useState } from 'react'; //eslint-disable-line
import socketClient from 'socket.io-client';
import './App.css';

function App() {
  const [players, setPlayers] = useState({});

  useEffect(() => {
    const socket = socketClient('http://localhost:8000', { transports: ['websocket'] });
    socket.on('connection', () => {
      console.log('Conectado!');
    });

    socket.on('PlayersRefresh', players => {
      setPlayers(players);
    });
  }, []);

  return (
    <div>
      {Object.keys(players).map(key => (
        <div key={key}>{players[key].name}</div>
      ))}
    </div>
  );
}

export default App;
