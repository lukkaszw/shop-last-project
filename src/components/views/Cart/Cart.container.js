import { connect } from 'react-redux';
import Cart from './Cart';

import { getCartProducts, getTotalPrice, removeFromCart } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (prodId) => dispatch(removeFromCart(prodId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);