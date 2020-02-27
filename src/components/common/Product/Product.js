import React from 'react';
import PropTypes from 'prop-types';
import styles from './Product.module.scss';
import {
  getVersion,
  getCategory,
} from '../../../utils/specification';
import getDiscountPercent from '../../../utils/getDiscountPercent';
import AmountWidget from '../AmountWidget/AmountWidget';

const Product  = ({ 
  _id, chosenAmount, 
  title, 
  categories, 
  imageUrl, 
  gallery, 
  variant, 
  oldPrice, 
  price, 
  description, 
  amount,
  increaseAmount,
  decreaseAmount,  
}) => {
  let promotionEl= null;
  let oldPriceEl = null;
  if(oldPrice) {
    oldPriceEl = (
      <span className={styles.oldPrice}>
        {oldPrice}
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
                increaseAction={increaseAmount}
                decreaseAction={decreaseAmount}
              />
              :
              <p className={styles.outOffStock}>Out of stock!</p>
            }
      
            <form 
              onSubmit={(e) => e.preventDefault()}
            >
              <button
                className={styles.btn}
                disabled={amount <= 0}
              >
                Add to cart
              </button>
            </form>
        </div>
      </div>
    </article>
   );
}

Product.propTypes = {
  _id: PropTypes.string,
  amount: PropTypes.number,
  chosenAmount: PropTypes.number,
  title: PropTypes.string,
  categories: PropTypes.array,
  imageUrl: PropTypes.string,
  gallery: PropTypes.array,
  variant: PropTypes.string,
  oldPrice: PropTypes.number,
  price: PropTypes.number,
  description: PropTypes.string,
  increaseAmount: PropTypes.func,
  decreaseAmount: PropTypes.func,
}
 
export default Product ;