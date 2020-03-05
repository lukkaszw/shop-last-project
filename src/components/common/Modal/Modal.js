import React from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './Modal.module.scss';

const variants = {
  success: styles.success,
  error: styles.error,
};

const Modal = ({ variant, title, message, btnVariant, btnTitle, action, link }) => {
  return ( 
    <div>
      <Backdrop />
      <div className={clsx([styles.root, !!variant && variants[variant]])}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.message}>{message}</p>
        {
          btnVariant === 'link' ?
            <Link 
              className={styles.btn}
              to={link}
            >
              {btnTitle}
            </Link>
            :
            <button
              className={styles.btn}
              onClick={action}
            >
              {btnTitle}
            </button>
        }
      </div> 
    </div>

  );
}

Modal.propTypes = {
  variant: PropTypes.string,
  message: PropTypes.string,
  btnVariant: PropTypes.string,
  btnTitle: PropTypes.string,
  action: PropTypes.func,
  link: PropTypes.string,
};
 
export default Modal;