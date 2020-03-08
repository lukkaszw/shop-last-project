import{ connect } from 'react-redux';
import CartInStorage from './CartInStorage';

import { getCart, fetchCartFromStorage } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cart: getCart(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchCart: (cart) => dispatch(fetchCartFromStorage(cart)),
}); 

export default connect(mapStateToProps, mapDispatchToProps)(CartInStorage);