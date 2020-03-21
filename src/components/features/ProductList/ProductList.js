import React, { PureComponent } from 'react';
import Loader from '../../common/Loader/Loader';
import ProductCart from '../../common/ProductCart/ProductCart';

import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';

class ProductList extends PureComponent {

  renderProducts = () => {
    const { products, isLoading, error } = this.props;
    if(isLoading) {
      return (
        <div className={styles.loader}>
          <Loader />
        </div>
      )
    }

    if(error) {
      return (
        <h3 className={styles.noProducts}>No products found! Please <span className={styles.offline}>check your connection</span> and try again later!</h3>
      );
    }

    if(products.length === 0 && !isLoading) {
      return <h3 className={styles.noProducts}>No products found!</h3>
    }

    return (
      <div className={styles.products}>
        {
          products.map(product => (
            <div 
              key={product._id}
              className={styles.product}
            >
              <ProductCart {...product} />
            </div>
          ))
        }
      </div>
    )
  }

  render() {

    return ( 
      <section className={styles.root}>
        {
          this.renderProducts()
        }
      </section>
    );
  }

}

ProductList.propTypes = {
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.bool,
}

ProductList.defaultProps = {
  products: [],
}
 
export default ProductList;