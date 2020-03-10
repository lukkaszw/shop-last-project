import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductCart from '../../common/ProductCart/ProductCart';
import Pagination from '../../features/Pagination/Pagination.container';
import Loader from '../../common/Loader/Loader';
import SearchProducts from '../../features/SearchProducts/SearchProducts.container';
import PropTypes from 'prop-types';

import styles from './HomePage.module.scss';

class HomePage extends Component {
  state= {
    isFiltersOpen: false,
  }

  componentDidMount() {
    if(this.props.products.length === 0) {
      this.fetchData();
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.page !== prevProps.page ||
      this.props.searchText !== prevProps.searchText) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { page, maxProdsOnPage, searchText } = this.props;
    const limit = maxProdsOnPage;
    const skip = (page - 1) * maxProdsOnPage;
    this.props.fetchProducts({ limit, skip, search: searchText });
  }

  openFiltersHandler = () => {
    this.setState({
      isFiltersOpen: true,
    });
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
      return <h3 className={styles.noProducts}>No products found! Please try again later!</h3>
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
        <div className={styles.panel}>
          <div className={styles.filters}>
            <div className={styles.filters__item}>
              <SearchProducts />
            </div>
            <div className={styles.filters__item}>
              <button
                className={styles.filter}
              >
                <FontAwesomeIcon
                  className={styles.filter__icon}
                  icon={faFilter} 
                />
              </button>
            </div>
          </div>
          <Pagination />
        </div>
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