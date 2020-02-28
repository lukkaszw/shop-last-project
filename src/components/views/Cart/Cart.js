import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Cart.module.scss';

class Cart extends Component {
  state = {  }
  render() { 
    const { cartProducts } = this.props;

    return ( 
      <section 
        className={styles.root}
      >
      </section>
     );
  }

};

Cart.propTypes = {
  isOpen: PropTypes.bool,
  closeCart: PropTypes.func,
  cartProducts: PropTypes.array,
};
 
export default Cart;