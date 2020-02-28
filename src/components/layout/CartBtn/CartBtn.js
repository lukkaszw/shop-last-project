import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './CartBtn.module.scss';


const CartBtn = ({ totalAmount, cartOpen }) => {
  return ( 
    <button
      onClick={cartOpen} 
      className={styles.root}
    >
      <span className={clsx([styles.count, totalAmount > 0 && styles.notEmpty])}>{totalAmount}</span>
      <FontAwesomeIcon icon={faShoppingBasket} />
    </button>
   );
}

CartBtn.propTypes = {
  totalAmount: PropTypes.number,
  cartOpen: PropTypes.func,
}

CartBtn.defaultProps = {
  totalAmount: 0,
}
 
export default CartBtn;