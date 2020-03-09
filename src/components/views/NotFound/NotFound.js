import React from 'react';
import MessageWithLink from '../../common/MessageWithLink/MessageWithLink';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return ( 
    <div className={styles.root}>
      <h2>Page not found!</h2>
      <div className={styles.link}>
        <MessageWithLink 
          message="Please back to shop:"
        />
      </div>
    </div> 
  );
}
 
export default NotFound;