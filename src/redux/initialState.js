import products from '../demo/products';

const initialState = {
  products: {
    data: products,
    loading: {
      active: false,
      error: false,
    },
  },
};

export default initialState;