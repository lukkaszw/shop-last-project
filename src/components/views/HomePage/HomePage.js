import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductCart from '../../common/ProductCart/ProductCart';
import Pagination from '../../features/Pagination/Pagination.container';
import Loader from '../../common/Loader/Loader';

import SearchProducts from '../../features/SearchProducts/SearchProducts.container';
import PropTypes from 'prop-types';
import { categories } from '../../../config/categories';
import { areBasicArraysEqual } from '../../../utils/compareArray';

import styles from './HomePage.module.scss';

const Categories = React.lazy(() => import('../../features/Categories/Categories'));
const ScrollUpBtn = React.lazy(() => import('../../layout/ScrollUpBtn/ScrollUpBtn'));

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
      this.props.searchText !== prevProps.searchText || 
      !areBasicArraysEqual(this.props.activeCategories, prevProps.activeCategories)) {
      this.fetchData();
    }
  }

  fetchData = () => {
    const { page, maxProdsOnPage, searchText, activeCategories } = this.props;
    const limit = maxProdsOnPage;
    const skip = (page - 1) * maxProdsOnPage;
    this.props.fetchProducts({ limit, skip, search: searchText, categories: activeCategories });
  }

  openFilters = () => {
    this.setState({
      isFiltersOpen: true,
    });
  }


  closeFilters = () => {
    this.setState({
      isFiltersOpen: false,
    });
  }

  renderProducts = () => {
    const { products, isLoading, error } = this.props;
    if(isLoading) {
      return (
        <div className={styles.loader}>
          <Loader />
        </div>
      )
    }

    if(error) {
      return (
        <h3 className={styles.noProducts}>No products found! Please <span className={styles.offline}>check your connection</span> and try again later!</h3>
      );
    }

    if(products.length === 0 && !isLoading) {
      return <h3 className={styles.noProducts}>No products found!</h3>
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
    const { renderProducts, openFilters, closeFilters } = this;
    const { isFiltersOpen } = this.state;
    const { activeCategories, toggleCategory, isLoading } = this.props;

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
                aria-label="Filter by categories"
                onClick={openFilters}
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
        { 
        activeCategories.length > 0 &&
            <div className={styles.categories}>
              <p>categories:  <i className={styles.list}>{activeCategories.join(', ')}</i></p>
            </div>
        }
        {renderProducts()}
        <React.Suspense fallback={null}>
          <Categories 
            allCategories={categories}
            isActive={isFiltersOpen}
            close={closeFilters}
            activeCategories={activeCategories}
            toggleCategory={toggleCategory}
            isLoading={isLoading}
          />
        </React.Suspense>
        <React.Suspense fallback={null}>
          <ScrollUpBtn />
        </React.Suspense>
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
  activeCategories: PropTypes.array,
  addCategory: PropTypes.func,
  removeCategory: PropTypes.func,
};

HomePage.defaultProps = {
  products: [],
}
 
export default HomePage;