import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp  } from '@fortawesome/free-solid-svg-icons';
import clsx from 'clsx';

import styles  from './ScrollUpBtn.module.scss';

class ScrollUpBtn extends Component {
  state = {
    isShown: false,
  }

  componentDidMount() {
    this.checkPosition()
    window.addEventListener('scroll', () => this.checkPosition())
  }

  checkPosition = () => {
    const { isShown } = this.state;
    const scrollPos = window.scrollY;
    if(scrollPos > 200 && !isShown) {
      this.showButton();
    } else if (scrollPos < 200 && isShown) {
      this.hideButton();
    }
  }

  showButton = () => {
    this.setState({
      isShown: true,
    });
  }

  hideButton = () => {
    this.setState({
      isShown: false,
    });
  }

  scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }


  render() {
    const { isShown } = this.state;
    const { scrollTop } = this;

    return ( 
      <div className={clsx([styles.root, isShown && styles.active])}>
        <button
          className={styles.btn}
          aria-label="Scroll up"
          onClick={scrollTop}
        >
          <FontAwesomeIcon icon={faCaretUp} />
        </button>
      </div>
     );
  }

}
 
export default ScrollUpBtn;