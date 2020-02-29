import React, { Component, createRef } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { validateOrderForm } from '../../../utils/validators';
import styles from './OrderForm.module.scss';

class OrderForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: '',
      email: '',
      phone: '',
      country: '',
      address: '',
      postCode: '',
      city: '',
      errors: [],
    }

    this.policyCheck = createRef();
    this.shopTermsCheck = createRef();
  }

  inputChangeHandler = (e) => {
    const input = e.target;

    this.setState(prevState => ({
      [input.id]: input.value,
      errors: prevState.errors.filter(error => error !== input.id),
    }));
  }

  inputPhoneHandler = (e) => {
    const value = e.target.value;
    if(value.length > 0 && !(/[\d+-\s]$/.test(value))) {
      return;
    }

    this.setState(prevState => ({
      phone: value,
      errors: prevState.errors.filter(error => error !== 'phone'),
    }));
  }

  inputPostCodeHandler = (e) => {
    let value = e.target.value;
    const lengthInState = this.state.postCode.length;

    if(value.length > 6) return;
    if(value.length > 0 && value.length !== 3) {
      if(!(/\d$/.test(value))) {
        return;
      }
    }

    if(value.length === 2 && lengthInState  === 1) {
      value += '-';
    }

    if(value.length === 3) {
      if(!(/[\d-]$/.test(value))) {
        return;
      }
    }

    if(value.length === 3 && lengthInState === 2) {
      const charToReplace = value.charAt(2);
      if(charToReplace !== '-') {
        value = `${value.substring(0, 2)}-${charToReplace}`;
      }
    }

    this.setState(prevState => ({
      postCode: value,
      errors: prevState.errors.filter(error => error !== 'postCode'),
    }));
  }

  sendOrderHandler = (e) => {
    e.preventDefault();
    const { policyCheck, shopTermsCheck } = this;
    const { resetCart } = this.props;
    const formOptions = {...this.state};
    delete formOptions.errors;
    const errors = validateOrderForm(formOptions);
    if(!policyCheck.current.checked) {
      errors.push('privacy');
    }

    if(!shopTermsCheck.current.checked) {
      errors.push('shop-terms');
    }

    if(errors.length > 0) {
      this.setState({
        errors,
      });
      return;
    }

    console.log('Send order');

    resetCart();
  }

  resetCheckboxError = (fieldId) => {
    if(!this.state.errors.includes(fieldId)) return;

    this.setState(prevState => ({
      errors: prevState.errors.filter(error => error !== fieldId),
    }));
  }



  render() { 
    
    const { name, email, phone, country, address, postCode, city, errors  } = this.state;
    const { inputChangeHandler, sendOrderHandler, inputPhoneHandler, inputPostCodeHandler, resetCheckboxError } = this;

    return ( 
      <form
        className={styles.root}
        onSubmit={sendOrderHandler}
      >
        <div className={clsx([styles.formItem, errors.includes('name') && styles.error])}>
          <label
            className={styles.label} 
            htmlFor="name">
            Name and surname: *
          </label>
          <input 
            className={styles.input} 
            value={name}
            onChange={inputChangeHandler}
            id="name" 
          />
        </div>
        <div className={clsx([styles.formItem, errors.includes('email') && styles.error])}>
          <label
            className={styles.label} 
            htmlFor="email"
          >
            E-mail: *
          </label>
          <input 
            className={styles.input}
            value={email}
            onChange={inputChangeHandler}
            id="email" 
          />
        </div>
        <div className={clsx([styles.formItem, errors.includes('phone') && styles.error])}>
          <label
            className={styles.label} 
            htmlFor="phone"
          >
            Phone: *
          </label>
          <input 
            className={styles.input}
            value={phone}
            onChange={inputPhoneHandler}
            id="phone" 
          />
        </div>
        <div className={clsx([styles.formItem, errors.includes('country') && styles.error])}>
          <label
            className={styles.label} 
            htmlFor="country"
          >
            Country:*
          </label>
          <input 
            className={styles.input} 
            value={country}
            onChange={inputChangeHandler}
            id="country" 
          />
        </div>
        <div className={clsx([styles.formItem, errors.includes('address') && styles.error])}>
          <label
            className={styles.label} 
            htmlFor="address"
          >
            Address:*
          </label>
          <input 
            className={clsx([styles.input, styles.input__big])} 
            value={address}
            onChange={inputChangeHandler}
            id="address" 
          />
        </div>
        <div className={styles.smallWrapper}>
          <div className={clsx([styles.formItem, styles.formItem__small, errors.includes('postCode') && styles.error])}>
            <label 
              className={clsx([styles.label, styles.label__small])}
              htmlFor="postCode"
            >
              Post code:*
            </label>
            <input 
              className={clsx([styles.input, styles.input__small])} 
              value={postCode}
              onChange={inputPostCodeHandler}
              id="postCode"
            />
          </div>
          <div className={clsx([styles.formItem, styles.formItem__small, errors.includes('city') && styles.error])}>
            <label 
              className={clsx([styles.label, styles.label__small])}
              htmlFor="city"
            >
              City:*
            </label>
            <input 
              className={clsx([styles.input, styles.input__medium])} 
              value={city}
              onChange={inputChangeHandler}
              id="city"
            />
          </div>
        </div>
        <div className={clsx([styles.regulations, errors.includes('privacy') && styles.error])}>
          <input 
            onClick={() => resetCheckboxError('privacy')}
            defaultChecked={true}
            className={styles.checkbox}
            type='checkbox'
            id='privacy'
            ref={this.policyCheck}
          />
          <label 
            className={styles.checkLabel}
            htmlFor="privacy"
          >
            I have read the privacy policy and I agree to the processing of personal data.
          </label>
        </div>
        <div className={clsx([styles.regulations, errors.includes('shop-terms') && styles.error])}>
          <input 
            onClick={() => resetCheckboxError('shop-terms')}
            defaultChecked={true}
            className={styles.checkbox}
            type='checkbox'
            ref={this.shopTermsCheck}
            id="shop-terms"
          />
          <label 
            className={styles.checkLabel}
            htmlFor="shop-terms"
          >
              I agree to GameStore shopping terms and conditions.
          </label>
        </div>
        <div className={styles.submit}>
          <Link 
            to='/cart'
            className={clsx([styles.btn, styles.btn__cancel ])}
          >
            Cancel
          </Link>
          <button className={styles.btn}>
            Confirm Order
          </button>
        </div>
      </form>
     );
  }
}

OrderForm.propTypes = {
  cartProducts: PropTypes.array,
  totalPrice: PropTypes.number,
};
 
export default OrderForm;