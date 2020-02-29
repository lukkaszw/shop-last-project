import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './MessageWithLink.module.scss';

const MessageWithLink = ({ message, linkTo, linkTitle }) => {
  return ( 
    <div className={styles.root}> 
      <p className={styles.message}>{message}</p>
      <Link className={styles.link} to={linkTo}>
        {linkTitle}
      </Link>
    </div>
   );
}

MessageWithLink.propTypes = {
  message: PropTypes.string,
  linkTo: PropTypes.string,
  linkTitle: PropTypes.string,
}

MessageWithLink.defaultProps = {
  linkTo: '/',
  linkTitle: 'back to shop',
}
 
export default MessageWithLink;