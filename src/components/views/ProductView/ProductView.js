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

  render() { 
    const { product, loading } = this.props;
    const { chosenAmount } = this.state;
    console.log(product && !loading);
    return ( 
      <section className="container">
        {
          product && !loading ?
          <Product {...product} chosenAmount={chosenAmount}/>
          :
          <p>Product not found!</p>
        }
        
      </section>
     );
  }
}
 
export default ProductView;