import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

import styles from './FilterBtn.module.scss';

const FilterBtn = React.memo(function FilterBtn ({ openFilters }) {
  return ( 
    <button
      className={styles.root}
      aria-label="Filter by categories"
      onClick={openFilters}
    >
      <FontAwesomeIcon
        className={styles.filter__icon}
        icon={faFilter} 
      />
    </button>
   );
});

FilterBtn.propTypes = {
  openFilters: PropTypes.func,
};
 
export default FilterBtn;