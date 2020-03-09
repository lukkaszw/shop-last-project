import React, { Component } from 'react';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';
import OrderList from '../../features/OrderList/OrderList';
import OrderForm from '../../features/OrderForm/OrderForm';
import Spinner from '../../common/Spinner/Spinner';
import Modal from '../../common/Modal/Modal';

import PropTypes from 'prop-types';
import styles from './Order.module.scss';

class Order extends Component {
  state = { 
    isSending: false,
    isError: false,
    isSuccess: false,
    message: '',
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  setSending = () => {
    this.setState({
      isSending: true,
    })
  }

  setError = (message) => {
    this.setState({
      isSending: false,
      isError: true,
      message,
    })
  }

  setSuccess = () => {
    this.setState({
      isSending: false,
      isSuccess: true,
    })
  }

  resetSendingStatus = () => {
    this.setState({
      isSending: false,
      isError: false,
      isSuccess: false,
      message: '',
    })
  } 

  render() { 
    const { cartProducts, totalPrice, resetCart } = this.props;
    const { setSending, setSuccess, setError, resetSendingStatus } = this;
    const { isSending, isError, isSuccess, message } = this.state;
    return ( 
      <div className={styles.root}>
        {
          cartProducts.length === 0 ?
            <MessageWithLink 
              message='No products in cart!'
            />
            :
            <>
              <div>
                <h2>Your order:</h2>
                <OrderList 
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                />
                <OrderForm 
                  cartProducts={cartProducts}
                  totalPrice={totalPrice}
                  resetCart={resetCart}
                  startSending={setSending}
                  setSuccess={setSuccess}
                  setError={setError}
                />
              </div>
            </>
        }
        {
          isSending && <Spinner />
        }
        {
          isSuccess && 
            <Modal 
              variant='success'
              title='Order sent sucessfully!'      
              message='Thank you very much for taking the order in our shop. Please wait for an e-mail with details'
              btnVariant='link'
              btnTitle='Back to shop'
              link='/'
            />
        }
        {
          isError && 
            <Modal
              variant='error'
              title='Order sent failed with Error!'
              message={`${message}. Please try again later.` || "You can't send your order now. Please check every field in form and try again later."}
              btnTitle='OK'
              action={resetSendingStatus}
            />
        }
      </div>
     );
  }
}

Order.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
  resetCart: PropTypes.func,
};
 
export default Order;