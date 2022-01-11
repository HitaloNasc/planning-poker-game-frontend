import React, { memo } from 'react';
import { PropTypes } from 'prop-types';

const PlayerList = ({ players }) => {
  return (
    <div>
      {Object.keys(players).map(key => (
        <div key={key}>{players[key].name}</div>
      ))}
    </div>
  );
};

PlayerList.propTypes = {
  players: PropTypes.object
};

export default memo(PlayerList);
