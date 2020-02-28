const initialState = {
  products: {
    data: [],
    loading: {
      active: false,
      error: false,
    },
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
    isOpen: false,
  }
};

export default initialState;