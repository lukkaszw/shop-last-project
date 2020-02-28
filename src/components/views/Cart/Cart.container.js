import { connect } from 'react-redux';
import Cart from './Cart';

import { getCartProducts, getTotalPrice, removeFromCart, increaseAmount, decreaseAmount } from '../../../redux/cartRedux';
import { resetCurrentProduct } from '../../../redux/currentProductRedux';

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: prodId => dispatch(removeFromCart(prodId)),
  increaseAmount: prodId => dispatch(increaseAmount(prodId)),
  decreaseAmount: prodId => dispatch(decreaseAmount(prodId)),
  resetCurrentProduct: () => dispatch(resetCurrentProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);