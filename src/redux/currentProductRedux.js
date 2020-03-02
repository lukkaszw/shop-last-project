import axios from 'axios';
import api from '../config/api';
import products from '../demo/secondaryProducts';
import { getCartProducts } from './cartRedux';
import updateCurrentProductAmount from './reduxUtils/updateCurrentProductAmount';
/* selectors */
export const getProduct = ({ currentProduct }) => currentProduct.data;

/* action name creator */
const reducerName = 'currentProduct';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const DECREASE_AMOUNT = createActionName('DECREASE_AMOUNT');
const RESET_CURRENT_PRODUCT = createActionName('RESET_CURRENT_PRODUCT');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const decreaseProductAmount = payload => ({ payload, type: DECREASE_AMOUNT });
export const resetCurrentProduct = () => ({ type: RESET_CURRENT_PRODUCT });



export const fetchProduct = (productId) => {
  return async (dispatch, getState) => {
    try {
      const url = `${api.url}/${api.endpoints.products}/${productId}`;
      const result = await axios.get(url);
      const cartProducts = getCartProducts(getState());
      if(result.data) {
        const productAfterUpdate = updateCurrentProductAmount(result.data, cartProducts);
        dispatch(fetchSuccess(productAfterUpdate));
        return;
      }
      dispatch(fetchSuccess(null));
    } catch (error) {
      dispatch(fetchError());
    }
  } 
}

const currentProductReducer = (statePart = [], action = {}) => {
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
        data: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case DECREASE_AMOUNT: {
      return {
        ...statePart,
        data: {
          ...statePart.data,
          amount: statePart.data.amount - action.payload,
        }
      }
    }
    case RESET_CURRENT_PRODUCT: {
      return {
        data: null,
        loading: {
          active: false,
          error: false,
        }
      }
    }
    default:
      return statePart;
  }
};

export default currentProductReducer;