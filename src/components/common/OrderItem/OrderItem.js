import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderItem.module.scss';

const OrderItem = ({ title, price, amount }) => {
  return ( 
    <div className={styles.root}>
      <p className={styles.price}>
        <strong>{Math.round((price * amount) * 100) / 100} zł</strong>
      </p>
      <div className={styles.data}>
        <span className={styles.title}>{title}</span>
        <span>szt. {amount}</span>
      </div>
    </div>
   );
}

OrderItem.propTypes = {
  title: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
};

export default OrderItem;