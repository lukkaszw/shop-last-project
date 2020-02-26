import React from 'react';
import { NavLink } from 'react-router-dom';
import navLinks from '../../../config/nav';

import styles from './NavDesktop.module.scss';



const NavDesktop = () => {
  return ( 
    <nav className={styles.root}>
      <ul className={styles.navList}>
        {
          navLinks.map((linkItem, index) => (
            <li className={styles.navList__Item} key={index}>
              <NavLink 
                className={styles.navList__link}
                to={linkItem.link} 
                activeClassName={styles.active}
              >
                {linkItem.page}
              </NavLink>
            </li>
          ))
        }
      </ul>
    </nav>
   );
}
 
export default NavDesktop;