import React, { memo } from 'react';
import { PropTypes } from 'prop-types';
// style
import './style.css';

function Table({ children }) {
  return <div className='table'>{children ? children : 'Escolham suas cartas!'}</div>;
}

Table.propTypes = {
  children: PropTypes.any
};

export default memo(Table);
