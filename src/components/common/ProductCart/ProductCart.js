import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getDiscountPercent from '../../../utils/getDiscountPercent';

import styles from './ProductCart.module.scss';

const ProductCart = ({ _id, imageUrl, title, price, oldPrice }) => {
  let oldPriceElement = null;
  let percentageElement = null;
  if(oldPrice) {
    oldPriceElement = (
      <span className={styles.oldPrice}>
        {oldPrice}
      </span>
    );
    const discountPercent = getDiscountPercent(price, oldPrice);
    percentageElement = (
      <span className={styles.percent}>
        - {discountPercent}%
      </span>
    )
  }

  return ( 
    <Link 
      to={`/product/${_id}`} 
      className={styles.root}
    >
      <div className={styles.cartPhoto}>
        <img 
          className={styles.photo} 
          src={imageUrl} 
          alt={title} 
        />
        {percentageElement}
      </div>
      <div className={styles.cartContent}>
        <h3 className={styles.title}>{title}</h3>
      </div>
      <div className={styles.prices}>
        {oldPriceElement}
        <span className={styles.price}>
          {price} zł
        </span>
      </div>
    </Link>
   );
}

ProductCart.propTypes = {
  _id: PropTypes.string,
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  price: PropTypes.number,
  oldPrice: PropTypes.number,
}


 
export default ProductCart;