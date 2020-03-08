import React, { Component } from 'react';

class CartInStorage extends Component {
  componentDidMount() {
    const cart = this.getCartFromStorage();
    if(cart && cart.products.length > 0) {
      this.props.fetchCart(cart);
    }
    window.addEventListener('beforeunload', this.saveCartInStorage);
  }

  getCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    return JSON.parse(cart);
  }

  saveCartInStorage = () => {
    const cart = this.props.cart;
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  render() { 
    return (
      <>
        {this.props.children}
      </>
     );
  }
}
 
export default CartInStorage;