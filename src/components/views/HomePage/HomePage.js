import React, { Component } from 'react';
import ProductCart from '../../common/ProductCart/ProductCart';
import Pagination from '../../features/Pagination/Pagination.container';
import Loader from '../../common/Loader/Loader';
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
    const { products, isLoading } = this.props;
    if(isLoading) {
      return (
        <div className={styles.loader}>
          <Loader />
        </div>
      )
    }

    if(products.length === 0 && !isLoading) {
      return <h3>No products available! Please try again later!</h3>
    }

    return (
      <section className={styles.products}>
      {
        products.map(product => (
          <div 
            key={product._id}
            className={styles.product}
          >
            <ProductCart {...product} />
          </div>
        ))
      }
      </section>
    )
  }

  render() { 
    const { renderProducts } = this;

    return ( 
      <div className={styles.root}>
        <Pagination />
        {renderProducts()}
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