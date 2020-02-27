import React, { Component } from 'react';
import Product from '../../common/Product/Product';
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

  render() { 
    const { product, loading } = this.props;
    const { chosenAmount } = this.state;
    const { decreaseAmountHandler, increaseAmountHandler } = this;
    return ( 
      <section className="container">
        {
          product && !loading ?
          <Product 
            {...product} 
            chosenAmount={chosenAmount}
            decreaseAmount={decreaseAmountHandler}
            increaseAmount={increaseAmountHandler}
          />
          :
          <p>Product not found!</p>
        }
        
      </section>
     );
  }
}
 
export default ProductView;