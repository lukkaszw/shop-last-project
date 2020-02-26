import React from 'react';
import clsx from 'clsx';

import NavDesktop from '../NavDesktop/NavDesktop';
import CartBtn from '../CartBtn/CartBtn';

import styles from './Header.module.scss';

const Header = () => {
  return ( 
    <header className={styles.root}>
      <div className={clsx([styles.headerNav, 'container'])}>
        <NavDesktop />
        <CartBtn/>
      </div>
    </header>
   );
}
 
export default Header;