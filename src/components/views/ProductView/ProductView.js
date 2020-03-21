import React, { Component } from 'react';
import Product from '../../common/Product/Product';
import Loader from '../../common/Loader/Loader';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';
import PropTypes from 'prop-types';
import styles from './ProductView.module.scss';

class ProductView extends Component {
  state = { 
    chosenAmount: 1,
   }

  componentDidMount() {
    window.scrollTo(0, 0);
    const prodId = this.props.match.params.id;
    const { product, fetchProduct } = this.props;
    if(!product || product._id !== prodId) {
      fetchProduct(prodId);
    }
  }

  increaseAmountHandler = () => {
    const maxAmount = this.props.product.amount;
    if(this.setState.chosenAmount >= maxAmount) {
      return;
    }
    this.setState((prevState) => ({
      chosenAmount: ++prevState.chosenAmount,      
    }));
  }

  decreaseAmountHandler = () => {
    if(this.setState.chosenAmount === 1) {
      return;
    }
    this.setState((prevState) => ({
      chosenAmount: --prevState.chosenAmount,      
    }));
  }

  addToCartHandler = (e) => {
    e.preventDefault();
    const { product, addToCart, decreaseProductAmount } = this.props;
    const amount = this.state.chosenAmount;
    const productToCart = {
      _id: product._id,
      title: product.title,
      price: product.price,
      amount,
      maxAmount: product.amount,
    }

    addToCart(productToCart);
    decreaseProductAmount(amount);
    this.setState({
      chosenAmount: 0,
    });
  }

  renderProduct = () => {
    const { isLoading, product } = this.props;
    const { decreaseAmountHandler, increaseAmountHandler, addToCartHandler } = this;
    const { chosenAmount } = this.state;

    if(isLoading) {
      return (
        <div className={styles.loader}>
          <Loader />
        </div>
      );
    }

    if(!product) {
      return ( 
        <div className={styles.notFound}>
          <h2>Product not found!</h2>
          <MessageWithLink 
            message="Problems with server or incorrect page! Please return to the shop page."
          />
        </div>
      );
    }

    return (
      <Product 
        {...product} 
        chosenAmount={chosenAmount}
        decreaseAmount={decreaseAmountHandler}
        increaseAmount={increaseAmountHandler}
        addToCart={addToCartHandler}
      />
    );
  }

  render() { 
   
    return ( 
      <section className="container">
        {this.renderProduct()}
      </section>
     );
  }
}

ProductView.propTypes = {
  product: PropTypes.object,
  isLoading: PropTypes.bool,
  addToCart: PropTypes.func,
  decreaseProductAmount: PropTypes.func,
}
 
export default ProductView;