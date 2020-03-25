import React from 'react';
import Backdrop from '../../common/Backdrop/Backdrop';
import PropTypes from 'prop-types';
import styles from './Categories.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

const Categories = React.memo(function Categories ({ allCategories, activeCategories, isActive, toggleCategory, close, isLoading }) {
  return ( 
    <div className={clsx([styles.root, isActive && styles.active])}>
      {
        isActive && 
        <Backdrop action={close} />
      }

      <div className={styles.categories}>
        <h3 className={styles.title}>Filter by categories:</h3>
        <ul className={styles.list}>
          {
            allCategories.map(cat => (
              <li
                className={styles.list__item} 
                key={cat.id}
              >
                <input 
                  id={cat.id}
                  className={styles.checkbox} 
                  type="checkbox" 
                  value={cat.value}
                  checked={activeCategories.includes(cat.value)} 
                  disabled={isLoading}
                  onChange={() => toggleCategory(cat.value)}
                />
                <label 
                  className={styles.label}
                  htmlFor={cat.id}
                >
                  {cat.text}
                </label>
              </li>
            ))
          }
        </ul>
        <button 
          className={styles.closeBtn}
          aria-label='Close filters'
          onClick={close}
        >
          <FontAwesomeIcon icon={faLongArrowAltLeft} />
        </button>
      </div>
    </div>

   );
});

Categories.propTypes = {
  allCategories: PropTypes.array,
  activeCategories: PropTypes.array,
  toggleCategory: PropTypes.func,
  close: PropTypes.func,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
}
 

export default Categories;