import React, { Component } from 'react';
import FilterBtn from '../../features/FilterBtn/FilterBtn';
import ProductList from '../../features/ProductList/ProductList';
import Pagination from '../../features/Pagination/Pagination.container';
import Categories from '../../features/Categories/Categories';
import SearchProducts from '../../features/SearchProducts/SearchProducts.container';
import ScrollUpBtn from '../../layout/ScrollUpBtn/ScrollUpBtn';
import PropTypes from 'prop-types';
import { categories } from '../../../config/categories';
import { areBasicArraysEqual } from '../../../utils/compareArray';

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

  render() { 
    const { openFilters, closeFilters } = this;
    const { isFiltersOpen } = this.state;
    const { activeCategories, toggleCategory, isLoading, products, error, searchText } = this.props;

    return ( 
      <div className={styles.root}>
        <div className={styles.panel}>
          <div className={styles.filters}>
            <div className={styles.filters__item}>
              <SearchProducts />
            </div>
            <div className={styles.filters__item}>
              <FilterBtn 
                openFilters={openFilters}
              />
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
        {
          searchText.length > 0 &&
            <div className={styles.categories}>
              <p>searched in title: <i className={styles.list}>{searchText}</i></p>
            </div>
        }
        <ProductList 
          products={products}
          isLoading={isLoading}
          error={error}
        />
        <Categories 
          allCategories={categories}
          isActive={isFiltersOpen}
          close={closeFilters}
          activeCategories={activeCategories}
          toggleCategory={toggleCategory}
          isLoading={isLoading}
        />
        <ScrollUpBtn />
      </div>
     );
  }
}

HomePage.propTypes = {
  products: PropTypes.array,
  fetchProducts: PropTypes.func,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
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