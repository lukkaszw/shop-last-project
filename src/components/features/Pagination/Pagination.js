import React, { Component } from 'react';

import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';

class Pagination extends Component {

  render() {
    const { page, maxPageNr, goPrevPageAction, goNextPageAction, isLoading  } = this.props;

    return ( 
      <div className={styles.root}>
        <button 
            onClick={goPrevPageAction}
            className='btnNav'
            disabled={page === 1 || isLoading}
          >
            Prev
          </button>
          <span className={styles.pages}>{page}/{maxPageNr}</span>
          <button 
            onClick={goNextPageAction}
            className='btnNav'
            disabled={page >= maxPageNr || isLoading}
          >
            Next
          </button>
      </div>
     );
  }

}

Pagination.propTypes = {
  page: PropTypes.number,
  maxPageNr: PropTypes.number,
  goPrevPageAction: PropTypes.func,
  goNextPageAction: PropTypes.func,
};
 
export default Pagination;