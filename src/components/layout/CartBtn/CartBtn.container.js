import { connect } from 'react-redux';
import CartBtn from './CartBtn';

import { getTotalAmount } from '../../../redux/cartRedux';

const mapStateToProps = (state) => ({
  totalAmount: getTotalAmount(state),
});

export default connect(mapStateToProps)(CartBtn);