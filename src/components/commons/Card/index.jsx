import React, { memo } from 'react';
import Button from '@mui/material/Button';
import { PropTypes } from 'prop-types';

// style
import './style.css';

function Card({ value, onClick }) {
  return (
    <Button variant='outlined' className='card' onClick={onClick}>
      {value}
    </Button>
  );
}

Card.propTypes = {
  value: PropTypes.number,
  onClick: PropTypes.func
};
export default memo(Card);
