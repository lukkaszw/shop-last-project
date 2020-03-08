import { connect } from 'react-redux';
import SearchProducts from './SearchProducts';

import { updateSearchText, getSearchText } from '../../../redux/queriesProductsRedux';

const mapStateToProps = (state) => ({
  searchText: getSearchText(state),
});

const mapDispatchToProps = (dispatch) => ({
  updateInStore: (searchText) => dispatch(updateSearchText(searchText)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchProducts);