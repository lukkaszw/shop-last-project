import { connect } from 'react-redux';
import ProductView from './ProductView';
import { getProduct, fetchProduct } from '../../../redux/currentProductRedux';

const mapStateToProps = (state) => ({
  product: getProduct(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (prodId) => dispatch(fetchProduct(prodId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);