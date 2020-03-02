import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import initialState from './initialState';

import productReducer from './productRedux';
import currentProductReducer from './currentProductRedux';
import cartReducer from './cartRedux';
import queriesProductsReducer from './queriesProductsRedux';

// define reducers
const reducers = {
  products: productReducer,
  queries: queriesProductsReducer,
  currentProduct: currentProductReducer,
  cart: cartReducer,
};


// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

export const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);
