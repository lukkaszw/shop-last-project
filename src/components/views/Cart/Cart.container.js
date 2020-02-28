import { connect } from 'react-redux';
import Cart from './Cart';

import { getCartProducts, getTotalPrice } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);