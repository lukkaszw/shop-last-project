import React from 'react';
import Backdrop from '../../common/Backdrop/Backdrop';
import PropTypes from 'prop-types';
import styles from './Categories.module.scss';
import clsx from 'clsx';

const Categories = ({ allCategories, activeCategories, isActive, toggleCategory, close, isLoading }) => {
  return ( 
    <div className={clsx([styles.root, isActive && styles.active])}>
      {
        isActive && 
        <Backdrop action={close} />
      }

      <form className={styles.categories}>
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

      </form>
    </div>

   );
}

Categories.propTypes = {
  allCategories: PropTypes.array,
  activeCategories: PropTypes.array,
  toggleCategory: PropTypes.func,
  close: PropTypes.func,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
}
 

export default Categories;