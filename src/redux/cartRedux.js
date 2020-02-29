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
const INCREASE_AMOUNT = createActionName('INCREASE_AMOUNT');
const DECREASE_AMOUNT = createActionName('DECREASE_AMOUNT');
const ADD_NOTE = createActionName('ADD_NOTE');
const RESET_CART = createActionName('RESET_CART');

/* action creators */
export const addToCart = (payload) => ({ payload, type: ADD_TO_CART });
export const removeFromCart = (payload) => ({ payload, type: REMOVE_FROM_CART });
export const increaseAmount = (payload) => ({ payload, type: INCREASE_AMOUNT });
export const decreaseAmount = (payload) => ({ payload, type: DECREASE_AMOUNT });
export const addNoteToProduct = (payload) => ({ payload, type: ADD_NOTE });
export const resetCart = () => ({ type: RESET_CART })

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
    case INCREASE_AMOUNT: {
      const prodId = action.payload;
      const productToUpdate = statePart.products.find(product => product._id === prodId);
      return {
        products: statePart.products.map(product => {
            if(product._id === prodId) {
              product.amount++;
            }
            return product;
          }),
        totalPrice: statePart.totalPrice + productToUpdate.price,
        totalAmount: statePart.totalAmount + 1,
      }
    }
    case DECREASE_AMOUNT: {
      const prodId = action.payload;
      const productToUpdate = statePart.products.find(product => product._id === prodId);
      return {
        products: statePart.products.map(product => {
            if(product._id === prodId) {
              product.amount--;
            }
            return product;
          }),
        totalPrice: statePart.totalPrice - productToUpdate.price,
        totalAmount: statePart.totalAmount - 1,
      }
    }
    case ADD_NOTE: {
      const { prodId, note } = action.payload;
      return {
        ...statePart,
        products: statePart.products.map(product => {
          if(product._id === prodId) {
            product.note = note;
          }
          return product;
        }),
      }
    }
    case RESET_CART: {
      return {
        products: [],
        totalPrice: 0,
        totalAmount: 0,
      }
    }
    default:
      return statePart;
  }
}

export default cartReducer;