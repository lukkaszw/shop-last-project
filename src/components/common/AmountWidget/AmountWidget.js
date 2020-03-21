import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './AmountWidghet.module.scss';

const AmountWidget = ({ value, decreaseAction, increaseAction, maxAmount }) => {
  return ( 
    <div className={styles.root}>
      <button
        className={clsx([styles.btn, styles.btn__decrease])}
        aria-label="Decrease"
        onClick={decreaseAction}
        disabled={value <= 1}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span 
        className={styles.amount} >
        {value}
      </span>
      <button
        className={clsx([styles.btn, styles.btn__increase])}
        aria-label="Increase"
        onClick={increaseAction}
        disabled={value === maxAmount}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
   );
}

AmountWidget.propTypes = {
  value: PropTypes.number,
  decreaseAction: PropTypes.func,
  increaseAction: PropTypes.func,
  maxAmount: PropTypes.number,
};
 
export default AmountWidget;