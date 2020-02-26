import React, { Component } from 'react';
import ProductCart from '../../common/ProductCart/ProductCart';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

class HomePage extends Component {
  state = {  }

  renderProducts = () => {
    const { products } = this.props;
    console.log(products);
    if(products.length === 0) {
      return <h3>No products available! Please try again later!</h3>
    }

    return products.map(product => (
      <div 
        key={product._id}
        className={styles.product}
      >
        <ProductCart {...product} />
      </div>
      
    ));
  }

  render() { 
    return ( 
      <section className={styles.root}>
        {this.renderProducts()}
      </section>
     );
  }
}

HomePage.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
};

HomePage.defaultProps = {
  products: [],
}
 
export default HomePage;