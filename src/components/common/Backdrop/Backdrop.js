import React from 'react';
import PropTypes from 'prop-types';

import styles from './Backdrop.module.scss';

const Backdrop = ({ action }) => (
  <div 
    onClick={action}
    className={styles.root}
  >
  </div>
);


Backdrop.propTypes = {
  action: PropTypes.func,
};
 
export default Backdrop;