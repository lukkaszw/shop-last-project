import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Backdrop from '../Backdrop/Backdrop';
import clsx from 'clsx';

import styles from './PhotoModal.module.scss';

const PhotoModal = ({ 
  photoUrl, 
  nextAction, 
  prevAction,
  closeAction,
  currentNr, 
  maxNr 
}) => {
  const showPrevBtn = currentNr > 1;
  const showNextBtn = currentNr < maxNr;

  return ( 
    <div>
      <Backdrop action={closeAction} />
      <div className={styles.root}>
        <div className={styles.photoWrapper}>
          <img 
            className={styles.photo}
            src={photoUrl}
            alt="Fetching error..."
          />
        </div>
        <div className={clsx([styles.panel, !showPrevBtn && styles.panel__reverse])}>
          {
            showPrevBtn &&
              <button 
                className='btnNav'
                onClick={prevAction}
              >
                Prev
              </button>
          }
          <span className={styles.numbers}>
            {currentNr}/{maxNr}
          </span>
          {
            showNextBtn &&
              <button 
                className='btnNav'
                onClick={nextAction}
              >
                Next
              </button>
          }
        </div>
        <FontAwesomeIcon 
          className={styles.closeIcon}
          icon={faTimes}
          onClick={closeAction}
        />
      </div>
    </div>

   );
}

PhotoModal.propTypes = {
  photoUrl: PropTypes.string,
  nextAction: PropTypes.func,
  prevAction: PropTypes.func,
  closeAction: PropTypes.func,  
  currentNr: PropTypes.number,
  maxNr: PropTypes.number,
}
 
export default PhotoModal;