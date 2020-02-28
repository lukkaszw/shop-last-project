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
    products: [
      {_id: "4", 
      title: "Assasin's Creed: Odyssey", 
      price: 129, 
      amount: 1, 
      maxAmount: 15
    },
    {_id: "6", title: "Battlefield 1", price: 69, amount: 1, maxAmount: 12}],
    totalAmount: 2,
    totalPrice: 198,
  }
};

export default initialState;