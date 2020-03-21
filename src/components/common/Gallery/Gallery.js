import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PhotoModal from '../PhotoModal/PhotoModal';
import styles from './Gallery.module.scss';

class Gallery extends Component {
  state = { 
    openPhoto: null,
  }

  setOpenPhotoHandler = (photoIndex) => {
    this.setState({
      openPhoto: photoIndex,
    });
  }

  nextPhotoHandler = () => {
    const maxIndex = this.props.gallery.length - 1;
    const { openPhoto } = this.state;
    if(openPhoto === maxIndex) {
      return;
    }

    this.setState(prevState => ({
      openPhoto: ++prevState.openPhoto,
    }));
  }

  prevPhotoHandler = () => {
    const { openPhoto } = this.state;
    if(openPhoto === 0) {
      return;
    }

    this.setState(prevState => ({
      openPhoto: --prevState.openPhoto,
    }));
  }

  closeModalHandler = () => {
    this.setState({
      openPhoto: null,
    });
  }

  render() {
    const { gallery } = this.props;
    const { setOpenPhotoHandler, nextPhotoHandler, prevPhotoHandler, closeModalHandler } = this;
    const { openPhoto } = this.state;
    
    return ( 
      <div className={styles.root}>
        <ul className={styles.list}>
          {
            gallery.map((item, index) => (
              <li key={item._id}>
                <button
                  className={styles.btn}
                  onClick={() => setOpenPhotoHandler(index)}
                >
                  <img
                    className={styles.photo}
                    src={item.minImg}
                    alt="Fetching error"
                  />
                  <FontAwesomeIcon
                    className={styles.icon} 
                    icon={faSearch} 
                   />
                </button> 
              </li>
            ))
          }
        </ul>
        {
          (openPhoto || openPhoto === 0) &&
            <PhotoModal 
              photoUrl={gallery[openPhoto].img} 
              nextAction={nextPhotoHandler} 
              prevAction={prevPhotoHandler}
              closeAction={closeModalHandler}
              currentNr={openPhoto + 1}
              maxNr={gallery.length} 
            />
        }
      </div>
     );
  }
}

Gallery.propTypes = {
  gallery: PropTypes.array,
}
 
export default Gallery;

