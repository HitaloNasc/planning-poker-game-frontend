import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GameProvider } from './contexts/GameContext';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <GameProvider>
      <App />
    </GameProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
