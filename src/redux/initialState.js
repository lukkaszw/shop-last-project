const initialState = {
  products: {
    data: [],
    allDocsAmount: 0,
    loading: {
      active: false,
      error: false,
    },
  },
  queries: {
    page: 1,
  },
  currentProduct: {
    data: null,
    loading: {
      active: false,
      error: false,
    }
  },
  cart: {
    products: [],
    totalAmount: 0,
    totalPrice: 0,
  }
};

export default initialState;