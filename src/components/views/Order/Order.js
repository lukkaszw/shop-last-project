import React, { Component } from 'react';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';
import OrderList from '../../features/OrderList/OrderList';
import OrderForm from '../../features/OrderForm/OrderForm';

import PropTypes from 'prop-types';
import styles from './Order.module.scss';

class Order extends Component {
  state = {  }
  render() { 
    const { cartProducts, totalPrice, resetCart } = this.props;
    return ( 
      <div className={styles.root}>
        {
          cartProducts.length === 0 ?
            <MessageWithLink 
              message='No products in cart!'
            />
            :
            <>
              <div>
                <h2>Your order:</h2>
                <OrderList 
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                />
                <OrderForm 
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                  resetCart={resetCart}
                />
              </div>
            </>
        }
      </div>
     );
  }
}

Order.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  resetCart: PropTypes.func,
};
 
export default Order;