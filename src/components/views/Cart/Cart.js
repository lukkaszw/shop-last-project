import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartList from '../../features/CartList/CartList';

import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

class Cart extends Component {
  state = {  }
  render() { 
    const { cartProducts, totalPrice, removeFromCart } = this.props;

    return ( 
      <section 
        className={styles.root}
      >
        <div className="container">
          <h2 className={styles.title}>Chosen products:</h2>
          <div className={styles.content}>
            {
              cartProducts.length > 0 ?
                <CartList   
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                  removeFromCart={removeFromCart}
                />
                :
                <> 
                  <p className={styles.message}>No products in cart! </p>
                  <Link className={styles.link} to='/'>
                    back to shop
                  </Link>
                </>
            }
          </div>
        </div>
      </section>
     );
  }

};

Cart.propTypes = {
  isOpen: PropTypes.bool,
  closeCart: PropTypes.func,
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  removeFromCart: PropTypes.func,
};
 
export default Cart;