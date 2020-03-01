import { connect } from 'react-redux';
import HomePage from './HomePage';

import { getProducts, fetchProducts } from '../../../redux/productRedux';
import { getPage, changePage } from '../../../redux/queriesProductsRedux';

const mapStateToProps = (state) => ({
  products: getProducts(state),
  page: getPage(state),
  
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: (query) => dispatch(fetchProducts(query)), 
  changePage: (page) => dispatch(changePage(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);