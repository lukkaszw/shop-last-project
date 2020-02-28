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

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const decreaseProductAmount = payload => ({ payload, type: DECREASE_AMOUNT });



export const fetchProduct = (productId) => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const cartProducts = getCartProducts(getState());
    const product = products.find(product => product._id === productId);
    const productAfterUpdate = updateCurrentProductAmount(product, cartProducts);
    dispatch(fetchSuccess(productAfterUpdate));
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
      console.log('jest i tutaj');
      return {
        ...statePart,
        data: {
          ...statePart.data,
          amount: statePart.data.amount - action.payload,
        }
      }
    }
    default:
      return statePart;
  }
};

export default currentProductReducer;