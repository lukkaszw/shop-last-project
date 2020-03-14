import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import styles from './SearchProducts.module.scss';

class SearchProducts extends Component {
  state = {
    searchText: '',
  }

  componentDidMount() {
    this.setState({
      searchText: this.props.searchText,
    })
  }

  onSubmitHandler = (e) => {
    e.preventDefault();
    const { searchText } = this.state;
    this.props.updateInStore(searchText);
  }

  onSearchTextHandler = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  }

  render() {
    const { searchText } = this.state;
    return ( 
      <form 
        onSubmit={this.onSubmitHandler}
        className={styles.root}
      >
        <input
          className={styles.input} 
          type="text"
          value={searchText}
          aria-label="Search product"
          onChange={this.onSearchTextHandler}
          placeholder="Search by title"
        />
        <button
          className={styles.btn}
          aria-label="Input title"
          type="submit"
        >
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    );
  }
}
 
export default SearchProducts;