import { connect } from 'react-redux';
import HomePage from './HomePage';
import { maxProdsOnPage } from '../../../config/products';
import { getProducts, fetchProducts, getIsLoading } from '../../../redux/productRedux';
import { getPage, getSearchText } from '../../../redux/queriesProductsRedux';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  page: getPage(state),
  maxProdsOnPage,
  isLoading: getIsLoading(state),
  searchText: getSearchText(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query) => dispatch(fetchProducts(query)), 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);