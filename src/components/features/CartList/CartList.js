import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import CartItem from '../../common/CartItem/CartItem';

import styles from './CartList.module.scss';

const CartList = ({ cartProducts, totalPrice, removeFromCart, increaseAmount, decreaseAmount, addNoteToProduct }) => {
  return ( 
    <div className={styles.root}>
      <ul className={styles.list}>
        {
          cartProducts.map(product => (
            <li
              key={product._id} 
              className={styles.item}
            >
              <CartItem 
                {...product}
                removeFromCart={removeFromCart} 
                increaseAmount={increaseAmount}
                decreaseAmount={decreaseAmount}
                addNoteToProduct={addNoteToProduct}
              />
            </li>
          ))
        }
      </ul>
      <div className={styles.price}>
        <span>total price: <strong>{Math.round(totalPrice * 100) / 100} zł</strong></span>
      </div>
      <div className={styles.confirm}>
        <Link 
          to="/order"
          className={styles.btn}
        >
          Order now!
        </Link>
      </div>
    </div>
   );
}

CartList.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  removeFromCart: PropTypes.func,
  increaseAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
  addNoteToProduct: PropTypes.func,
};

CartList.defaultProps = {
  totalPrice: 0,
}
 
export default CartList;