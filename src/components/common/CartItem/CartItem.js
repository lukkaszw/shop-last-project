import React, { useState } from 'react';
import AmountWidghet from '../AmountWidget/AmountWidget';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartItem.module.scss';

const CartItem = ({ _id, title, price, amount, maxAmount, note }) => {
  const [isNoteOpen, setNoteApperance] = useState(false);
  const [noteText, setNoteText] = useState(note);

  return ( 
    <div className={styles.root}>
      <div className={styles.top}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h3>{price * amount} zł</h3>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <button
            onClick={() => setNoteApperance(true)} 
            className={clsx([styles.btn, styles.btn__note])}
          >
            Add note
          </button>
          <button className={clsx([styles.btn, styles.btn__remove])}>
            Delete
          </button>
        </div>
        <div>
          <AmountWidghet 
            value={amount}
            maxAmount={maxAmount}
          />
        </div>
      </div>
      <div className={clsx([styles.note, isNoteOpen && styles.active])}>
        <textarea 
          className={styles.textarea}
          value={noteText}
        >
        </textarea>
        <div className={styles.note_btns}>
          <button 
            onClick={() => setNoteApperance(false)}
            className={clsx([styles.btn, styles.btn__remove])}
          >
            Cancel
          </button>
          <button className={clsx([styles.btn, styles.btn__add])}>
            Add
          </button>
        </div>
      </div>
    </div>
   );
}

CartItem.propTypes = {
  _id: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
  maxAmount: PropTypes.number,
  description: PropTypes.string,
};

CartItem.defaultProps = {
  description: '',
}
 
export default CartItem;