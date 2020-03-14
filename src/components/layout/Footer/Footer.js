import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone, faCheck, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebookF, faYoutube } from '@fortawesome/free-brands-svg-icons';
import clsx from 'clsx';

import styles from './Footer.module.scss';

const Footer = () => {
  return ( 
    <footer className={styles.root}>
      <section className="container">
        <div className={styles.categories}>
          <div className={styles.category}>
            <h3>Contact</h3>
            <div className={styles.category__item}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faHome}/>
              </span>
              <div>
                <p>
                  XXXX Wilshire Blvd., 
                </p>
                <p>
                  Beverly Hills, CA 90212, USA.
                </p>
              </div>
            </div>
            <div className={styles.category__item}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faEnvelope}/>
              </span>
              <p>example@gmail.com</p>
            </div>
            <div className={styles.category__item}>
              <span className={styles.icon}>
                <FontAwesomeIcon icon={faPhone}/>
              </span>
              <p>+1XXXXXXXXXX</p>
            </div>
          </div>
          <div className={styles.category}>
            <h3>Newsletter</h3>
            <div className={styles.category__item}>
              <p>Every week raports about our promotions:</p>
            </div>
            <form className={styles.newsletter}>
              <input 
                className={styles.newsletter__input} 
                aria-label="Input email for newsletter"
                type="email" 
                placeholder="Your email address"
              />
              <button 
                className={styles.newsletter__btn}
                aria-label="Add newsletter"
                type="submit"
              >
                <FontAwesomeIcon icon={faCheck} />
              </button>
            </form>
          </div>
          <div className={styles.category}>
            <h3>Connect with us</h3>
            <div className={styles.social}>
              <a 
                className={clsx([styles.social__icon, styles.social__facebook])} 
                aria-label="Go to facebook"
                href="https://facebook.com"
                target="__blank"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a 
                className={clsx([styles.social__icon, styles.social__youtube])} 
                aria-label="Go to youtube"
                href="https://youtube.com"
                target="__blank"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a 
                className={clsx([styles.social__icon, styles.social__twitter])} 
                aria-label="Go to twitter"
                href="https:/twitter.com"
                target="__blank"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <p>&copy; 2020 created by Łukasz Wojdat</p>
    </footer>
   );
}
 
export default Footer;