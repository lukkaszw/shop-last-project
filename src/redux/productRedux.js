import axios from 'axios';
import api from '../config/api';

/* selectors */
export const getProducts = ({ products }) => products.data;
export const getAllDocsAmount = ({ products }) => products.allDocsAmount;
export const getIsLoading = ({ products }) => products.loading.active;
export const getError = ({ products }) => products.loading.error;

/* action name creator */
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });

export const fetchProducts = ( query = { limit: undefined, skip: 0, search: '', categories: [] }) => {
  const { limit, skip, search, categories } = query;
  const categoriesString = categories.join('_');
  return async (dispatch) => {
    dispatch(fetchStarted());
    try {
      const url = `${api.url}/${api.endpoints.products}`;
      const result = await axios.get(url, {
        params: {
          limit,
          skip,
          search,
          categories: categoriesString,
        }
      });
      const products = result.data.products;
      const allDocsAmount = result.data.allDocsAmount;
      dispatch(fetchSuccess({ products, allDocsAmount  }));
    } catch (error) {
      dispatch(fetchError());
    }
  }
}



const productReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: action.payload.products,
        allDocsAmount: action.payload.allDocsAmount,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: true,
        },
      };
    }
    default:
      return statePart;
  }
};

export default productReducer;