import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

import PropTypes from 'prop-types';

import styles from './CartBtn.module.scss';


const CartBtn = ({ count }) => {
  return ( 
    <button className={styles.root}>
      <span className={styles.count}>{count}</span>
      <FontAwesomeIcon icon={faShoppingBasket} />
    </button>
   );
}

CartBtn.propTypes = {
  count: PropTypes.number,
}

CartBtn.defaultProps = {
  count: 0,
}
 
export default CartBtn;