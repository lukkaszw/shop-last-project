import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import {
  getVersion,
  getCategory,
} from '../../../utils/specification';
import AmountWidget from '../AmountWidget/AmountWidget';

import getDiscountPercent from '../../../utils/getDiscountPercent';


class Product  extends Component { 
  state = { 
    chosenAmount: 1,
  }

  increaseAmountHandler = () => {
    const maxAmount = this.props.amount;
    if(this.setState.chosenAmount >= maxAmount) {
      return;
    }
    this.setState((prevState) => ({
      chosenAmount: ++prevState.chosenAmount,      
    }));
  }

  decreaseAmountHandler = () => {
    if(this.setState.chosenAmount === 1) {
      return;
    }
    this.setState((prevState) => ({
      chosenAmount: --prevState.chosenAmount,      
    }));
  }

  addToCartHandler = (e) => {
    e.preventDefault();
    const { _id, title, price, amount, addToCart, decreaseProductAmount } = this.props;
    const { chosenAmount } = this.state;
    const productToCart = {
      _id,
      title,
      price,
      amount: chosenAmount,
      maxAmount: amount,
    }

    addToCart(productToCart);
    decreaseProductAmount(chosenAmount);
    this.setState({
      chosenAmount: 0,
    });
  }


  render() {
    const {
      amount, 
      title, 
      categories, 
      imageUrl, 
      variant, 
      oldPrice, 
      price, 
      description, 
    } = this.props;

    const { increaseAmountHandler, decreaseAmountHandler, addToCartHandler } = this;
    const { chosenAmount } = this.state;

    let promotionEl= null;
    let oldPriceEl = null;
    if(oldPrice) {
      oldPriceEl = (
        <span className={styles.oldPrice}>
          {oldPrice} zł
        </span>
      );
      const discountPercent = getDiscountPercent(price, oldPrice);
      promotionEl = (
        <span className={styles.promotion}>
          - {discountPercent}%
        </span>
      )
    }

    return ( 
      <article className={styles.root}>
        <div className={styles.grid}>
          <div className={styles.image}>
            <img 
              className={styles.photo} 
              src={imageUrl}
              alt={title}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.centered}>{title}</h2>
            <div className={styles.specification}>
              <div className={styles.categories}>
                <p className={styles.categories__item}>version:</p>
                <p className={styles.categories__item}>category:</p>
              </div>
              <div className={styles.values}>
                <p className={styles.categories__item}>{getVersion(variant)}</p>
                <p className={styles.categories__item}>{getCategory(categories)}</p>
              </div>
            </div>
            <p className={styles.description}>
              {description}
            </p>
          </div>
          <div className={styles.prices}>
            {
              promotionEl
            }
            <div>
              {
                oldPriceEl
              }
              <span className={styles.price}>{price} zł</span>
            </div>
          </div>
          <div className={styles.form}>
              {
                amount > 0 ?
                <AmountWidget 
                  value={chosenAmount}
                  maxAmount={amount}
                  increaseAction={increaseAmountHandler}
                  decreaseAction={decreaseAmountHandler}
                />
                :
                <p className={styles.outOffStock}>Out of stock!</p>
              }
        
              <form 
                onSubmit={addToCartHandler}
              >
                <button
                  className='btn'
                  disabled={amount <= 0 || chosenAmount === 0}
                >
                  Add to cart
                </button>
              </form>
          </div>
        </div>
      </article>
     );
  }
}

Product.propTypes = {
  _id: PropTypes.string,
  amount: PropTypes.number,
  title: PropTypes.string,
  categories: PropTypes.array,
  imageUrl: PropTypes.string,
  variant: PropTypes.string,
  oldPrice: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  decreaseProductAmount: PropTypes.func,
  addToCart: PropTypes.func,
}
 
export default Product ;