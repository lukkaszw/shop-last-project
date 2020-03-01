import React, { Component } from 'react';
import ProductCart from '../../common/ProductCart/ProductCart';
import PropTypes from 'prop-types';
import { maxProdsOnPage } from '../../../config/products';

import styles from './HomePage.module.scss';

class HomePage extends Component {

  componentDidMount() {
    const page = this.props.page;
    const limit = maxProdsOnPage;
    const skip = (page - 1) * maxProdsOnPage;
    this.props.fetchProducts({ limit, skip });
  }

  renderProducts = () => {
    const { products } = this.props;
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
  page: PropTypes.number,
  changePage: PropTypes.func,
};

HomePage.defaultProps = {
  products: [],
}
 
export default HomePage;