import { connect } from 'react-redux';
import Pagination from './Pagination';
import { maxProdsOnPage } from '../../../config/products';
import { getAllDocsAmount, getIsLoading } from '../../../redux/productRedux';
import { getPage, changePage, goPrevPage, goNextPage } from '../../../redux/queriesProductsRedux';

const mapStateToProps = (state) => ({
  page: getPage(state),
  maxPageNr: Math.ceil(getAllDocsAmount(state) / maxProdsOnPage) || 0,
  isLoading: getIsLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  changePageAction: () => dispatch(changePage()),
  goPrevPageAction: () => dispatch(goPrevPage()),
  goNextPageAction: () => dispatch(goNextPage()), 
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);