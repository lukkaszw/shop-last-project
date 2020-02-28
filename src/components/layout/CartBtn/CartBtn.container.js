import { connect } from 'react-redux';
import CartBtn from './CartBtn';

import { cartOpen, getTotalAmount } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  totalAmount: getTotalAmount(state),
});

const mapDispatchToProps = (dispatch) => ({
  cartOpen: () => dispatch(cartOpen()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartBtn);