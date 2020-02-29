import React from 'react';
import OrderItem from '../../common/OrderItem/OrderItem';
import PropTypes from 'prop-types';

import styles from './OrderList.module.scss';

const OrderList = ({ cartProducts, totalPrice }) => {
  return ( 
    <div className={styles.root}>
      <ul className={styles.list}>
        {
          cartProducts.map(product => ((
            <li 
              key={product._id}
              className={styles.item}
            >
              <OrderItem 
                {...product} 
              />
            </li>
          )))
        }
      </ul>
      <p className={styles.price}>total price: <strong>{totalPrice} zł</strong></p>
    </div>
   );
}

OrderList.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
};
 
export default OrderList;