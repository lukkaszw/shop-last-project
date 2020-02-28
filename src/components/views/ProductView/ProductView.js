import React, { Component } from 'react';
import Product from '../../common/Product/Product';
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

    console.log(productToCart);

    addToCart(productToCart);
    decreaseProductAmount(amount);
    this.setState({
      chosenAmount: 0,
    })
  }

  render() { 
    const { product, loading } = this.props;
    const { chosenAmount } = this.state;
    const { decreaseAmountHandler, increaseAmountHandler, addToCartHandler } = this;
    return ( 
      <section className="container">
        {
          product && !loading ?
          <Product 
            {...product} 
            chosenAmount={chosenAmount}
            decreaseAmount={decreaseAmountHandler}
            increaseAmount={increaseAmountHandler}
            addToCart={addToCartHandler}
          />
          :
          <p>Product not found!</p>
        }
        
      </section>
     );
  }
}

ProductView.propTypes = {
  product: PropTypes.object,
  loading: PropTypes.bool,
  addToCart: PropTypes.func,
  decreaseProductAmount: PropTypes.func,
}
 
export default ProductView;