import React, { Component } from 'react';
import Product from '../../common/Product/Product';
import Loader from '../../common/Loader/Loader';
import Gallery from '../../common/Gallery/Gallery';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';
import PropTypes from 'prop-types';
import styles from './ProductView.module.scss';

class ProductView extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
    const prodId = this.props.match.params.id;
    const { product, fetchProduct } = this.props;
    if(!product || product._id !== prodId) {
      fetchProduct(prodId);
    }
  }

  renderProduct = () => {
    const { isLoading, product, decreaseProductAmount, addToCart } = this.props;

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
      <>
        <Product 
          {...product} 
          addToCart={addToCart}
          decreaseProductAmount={decreaseProductAmount}
        />
        <Gallery 
          gallery={product.gallery}
        />
      </>

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