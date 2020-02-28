/* selectors */
export const getCartProducts = ({ cart }) => cart.products;
export const getTotalAmount = ({ cart }) => cart.totalAmount;
export const getTotalPrice = ({ cart }) => cart.totalPrice;

/* action name creator */
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');

/* action creators */
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART })
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART })

const cartReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const product = action.payload;
      const existProductIndex = statePart.products
        .findIndex(productItem => productItem._id === product._id);
      const newProducts = [...statePart.products];
      if(existProductIndex === -1) {
        newProducts.push(product);
      } else {
        newProducts[existProductIndex].maxAmount = newProducts[existProductIndex].amount + product.maxAmount;
        newProducts[existProductIndex].amount += product.amount; 
      }

      return {
        ...statePart,
        products: newProducts,
        totalAmount: statePart.totalAmount + product.amount,
        totalPrice: statePart.totalPrice + (product.amount * product.price),
      }
    }
    case REMOVE_FROM_CART: {
      const prodId = action.payload;
      const productToRemove = statePart.products.find(product => product._id === prodId);
      const priceToRemove = productToRemove.price * productToRemove.amount; 
      const amountToRemove = productToRemove.amount;
      return {
        ...statePart,
        products: statePart.products.filter(product => product._id !== prodId),
        totalPrice: statePart.totalPrice - priceToRemove,
        totalAmount: statePart.totalAmount - amountToRemove,
      }
    }
    default:
      return statePart;
  }
}

export default cartReducer;