import React, { memo } from 'react';
import { Box } from '@mui/material';
import { PropTypes } from 'prop-types';

// style
import './style.css';

function Card({ name, selected }) {
  let className = selected ? 'playerCard-selected' : 'playerCard-noSelected';
  return (
    <div className='playerArea'>
      <Box variant='outlined' className={className} />
      <p className='playerName'>{name}</p>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  selected: PropTypes.bool
};
export default memo(Card);
