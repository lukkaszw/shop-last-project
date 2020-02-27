import React from 'react';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import styles from './AmountWidghet.module.scss';

const AmountWidget = ({ value, dicreaseAction, increaseAction, maxAmount }) => {
  return ( 
    <div className={styles.root}>
      <button
        className={clsx([styles.btn, styles.btn__decrease])}
        disabled={value === 1}
      >
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <span 
        className={styles.amount} >
        {value}
      </span>
      <button
        className={clsx([styles.btn, styles.btn__increase])}
        disabled={value === maxAmount}
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
   );
}
 
export default AmountWidget;