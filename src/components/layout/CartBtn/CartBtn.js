import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './CartBtn.module.scss';


const CartBtn = ({ totalAmount }) => {
  return ( 
    <NavLink
      exact
      to='/cart'
      activeClassName={styles.active}
      className={styles.root}
    >
      <span className={clsx([styles.count, totalAmount > 0 && styles.notEmpty])}>{totalAmount}</span>
      <FontAwesomeIcon icon={faShoppingBasket} />
    </NavLink>
   );
}

CartBtn.propTypes = {
  totalAmount: PropTypes.number,
}

CartBtn.defaultProps = {
  totalAmount: 0,
}
 
export default CartBtn;