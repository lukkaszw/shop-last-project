import { connect } from 'react-redux';
import HomePage from './HomePage';
import { maxProdsOnPage } from '../../../config/products';
import { getProducts, fetchProducts, getIsLoading, getError } from '../../../redux/productRedux';
import { getPage, getSearchText, getCategories, toggleCategory } from '../../../redux/queriesProductsRedux';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  page: getPage(state),
  maxProdsOnPage,
  isLoading: getIsLoading(state),
  searchText: getSearchText(state),
  activeCategories: getCategories(state),
  error: getError(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query) => dispatch(fetchProducts(query)), 
  toggleCategory: (category) => dispatch(toggleCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);