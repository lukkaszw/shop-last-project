import React, { useState, useRef } from 'react';
import AmountWidghet from '../AmountWidget/AmountWidget';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import styles from './CartItem.module.scss';

const CartItem = ({ _id, title, price, amount, maxAmount, note, removeFromCart, increaseAmount, decreaseAmount, addNoteToProduct }) => {
  const [isNoteOpen, setNoteApperance] = useState(false);
  const [noteText, setNoteText] = useState(note);
  const noteTextEl = useRef()

  return ( 
    <div className={styles.root}>
      <div className={styles.top}>
        <div>
          <h3>{title}</h3>
        </div>
        <div>
          <h3>{Math.round((price * amount) * 100) / 100} zł</h3>
        </div>
      </div>
      <div className={styles.bottom}>
        <div>
          <button
            onClick={() => {
              setNoteApperance(true);
              noteTextEl.current.focus();
            }} 
            className={clsx([styles.btn, styles.btn__note])}
          >
            Add note
          </button>
          <button 
            onClick={() => removeFromCart(_id)}
            className={clsx([styles.btn, styles.btn__remove])}
          >
            Delete
          </button>
        </div>
        <div>
          <AmountWidghet 
            value={amount}
            maxAmount={maxAmount}
            increaseAction={() => increaseAmount(_id)}
            decreaseAction={() => decreaseAmount(_id)}
          />
        </div>
      </div>
      <div className={clsx([styles.note, isNoteOpen && styles.active])}>
        <textarea 
          ref={noteTextEl}
          className={styles.textarea}
          onChange={(e) => setNoteText(e.target.value)}
        >
          {noteText}
        </textarea>
        <div className={styles.note_btns}>
          <button 
            onClick={() => setNoteApperance(false)}
            className={clsx([styles.btn, styles.btn__remove])}
          >
            Cancel
          </button>
          <button 
            onClick={() => {
              addNoteToProduct(_id, noteText);
              setNoteApperance(false);
            }}
            className={clsx([styles.btn, styles.btn__add])}
          >
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
  removeFromCart: PropTypes.func,
};

CartItem.defaultProps = {
  description: '',
}
 
export default CartItem;