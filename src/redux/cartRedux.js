/* selectors */
export const getCartProducts = ({ cart }) => cart.products;
export const isCartOpen = ({ cart }) => cart.isOpen;
export const getTotalAmount = ({ cart }) => cart.totalAmount;
export const getTotalPrice = ({ cart }) => cart.totalPrice;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CART_OPEN = createActionName('CART_OPEN');
const ADD_TO_CART = createActionName('ADD_TO_CART');

/* action creators */
export const cartOpen = () => ({ type: CART_OPEN });
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART })


const cartReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CART_OPEN: {
      return {
        ...statePart,
        isOpen: true,
      };
    }
    case ADD_TO_CART: {
      const product = action.payload;
      const existProductIndex = statePart.products
        .findIndex(productItem => productItem._id === product._id);
      const newProducts = [...statePart.products];
      if(existProductIndex === -1) {
        newProducts.push(product);
      } else {
        newProducts[existProductIndex].amount += product.amount;
      }

      return {
        ...statePart,
        products: newProducts,
        totalAmount: statePart.totalAmount + product.amount,
        totalPrice: statePart.totalPrice + (product.amount * product.price),
      }
    }
    default:
      return statePart;
  }
}

export default cartReducer;