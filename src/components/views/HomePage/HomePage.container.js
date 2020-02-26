import { connect } from 'react-redux';
import HomePage from './HomePage';

import { getProducts, fetchProducts } from '../../../redux/productRedux';

const mapStateToProps = (state) => ({
  products: getProducts(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);