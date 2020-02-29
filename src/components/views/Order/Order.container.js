import { connect } from 'react-redux';
import Order from './Order';

import { 
  getCartProducts, 
  getTotalPrice,
  resetCart } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
  totalPrice: getTotalPrice(state),
});

const mapDispatchToProps = (dispatch) => ({
  resetCart: () => dispatch(resetCart()),
});


export default connect(mapStateToProps, mapDispatchToProps)(Order);