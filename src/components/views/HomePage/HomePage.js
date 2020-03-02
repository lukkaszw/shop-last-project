import React, { Component } from 'react';
import ProductCart from '../../common/ProductCart/ProductCart';
import Pagination from '../../features/Pagination/Pagination.container';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

class HomePage extends Component {

  componentDidMount() {
    if(this.props.products.length === 0) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.page !== prevProps.page) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { page, maxProdsOnPage } = this.props;
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
    const { renderProducts } = this;

    return ( 
      <div className={styles.root}>
        <Pagination />
        <section className={styles.products}>
          {renderProducts()}
        </section>
      </div>

     );
  }
}

HomePage.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  page: PropTypes.number,
  allProdsAmount: PropTypes.number,
  changePage: PropTypes.func,
};

HomePage.defaultProps = {
  products: [],
}
 
export default HomePage;