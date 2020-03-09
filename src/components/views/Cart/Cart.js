import React, { Component } from 'react';
import CartList from '../../features/CartList/CartList';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';

import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

class Cart extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.resetCurrentProduct();
  }

  render() { 
    const { 
      cartProducts, 
      totalPrice, 
      removeFromCart,
      increaseAmount,
      decreaseAmount,
      addNoteToProduct } = this.props;

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
                  increaseAmount={increaseAmount}
                  decreaseAmount={decreaseAmount}
                  addNoteToProduct={addNoteToProduct}
                />
                :
                <MessageWithLink 
                  message='No products in cart!'
                />
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
  increaseAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
  resetCurrentProduct: PropTypes.func,
  addNoteToProduct: PropTypes.func,
};
 
export default Cart;