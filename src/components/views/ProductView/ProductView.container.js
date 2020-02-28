import { connect } from 'react-redux';
import ProductView from './ProductView';
import { getProduct, fetchProduct, decreaseProductAmount } from '../../../redux/currentProductRedux';
import { addToCart } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  product: getProduct(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchProduct: (prodId) => dispatch(fetchProduct(prodId)),
  addToCart: (product) => dispatch(addToCart(product)),
  decreaseProductAmount: (amount) => dispatch(decreaseProductAmount(amount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductView);