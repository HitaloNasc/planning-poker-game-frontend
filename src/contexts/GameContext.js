import React, { useReducer, useEffect } from 'react';
import socketClient from 'socket.io-client';
import { PropTypes } from 'prop-types';

const socket = socketClient('http://localhost:8000', {
  transports: ['websocket'],
  autoConnect: false
});

const TYPES = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
  PLAYERS: 'PLAYERS',
  ADD_MESSAGES: 'ADD_MESSAGES'
};

const GameContext = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case TYPES.CONNECTED:
      return {
        ...state,
        isConnected: action.payload
      };

    case TYPES.DISCONNECTED:
      return {
        ...state,
        isConnected: action.payload
      };

    case TYPES.PLAYERS:
      return {
        ...state,
        players: action.payload
      };

    case TYPES.ADD_MESSAGES:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      };

    default:
      return state;
  }
};

const initialState = {
  isConnected: false,
  players: {},
  messages: []
};

const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Conectado!');
      dispatch({ type: TYPES.CONNECTED, payload: true });
    });
    socket.on('disconnect', () => {
      console.log('Desconectado!');
      dispatch({ type: TYPES.DISCONNECTED, payload: false });
    });
    socket.on('PlayersRefresh', players => {
      dispatch({ type: TYPES.PLAYERS, payload: players });
    });
    socket.on('ReceiveMessage', receiveMessage => {
      dispatch({ type: TYPES.ADD_MESSAGES, payload: receiveMessage });
    });
    socket.open();
  }, []);

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
};

const sendMessage = message => {
  socket.emit('SendMessage', message);
};

const createRoom = () => {
  socket.emit('CreateRoom');
};



GameProvider.propTypes = {
  children: PropTypes.any
};

export { GameProvider, GameContext, sendMessage, createRoom };
