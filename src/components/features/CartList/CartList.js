import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../../common/CartItem/CartItem';

import styles from './CartList.module.scss';

const CartList = ({ cartProducts, totalPrice }) => {
  return ( 
    <div className={styles.root}>
      <ul className={styles.list}>
        {
          cartProducts.map(product => (
            <li
              key={product._id} 
              className={styles.item}
            >
              <CartItem {...product} />
            </li>
          ))
        }
      </ul>
      <div className={styles.price}>
        <p>total price: <strong>{totalPrice} zł</strong></p>
      </div>
      <div className={styles.confirm}>
        <button className={styles.btn}>
          Order now!
        </button>
      </div>
    </div>
   );
}

CartList.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
};

CartList.defaultProps = {
  totalPrice: 0,
}
 
export default CartList;