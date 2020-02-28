import { connect } from 'react-redux';
import Cart from './Cart';

import { getCartProducts } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  cartProducts: getCartProducts(state),
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);