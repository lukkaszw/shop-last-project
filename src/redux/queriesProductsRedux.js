/* selectors */
export const getPage = ({ queries }) => queries.page;

/* action name creator */
const reducerName = 'queries';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_PAGE = createActionName('CHANGE_PAGE');

/* action creators */
export const changePage = payload => ({ payload, type: CHANGE_PAGE });

const queriesProductsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      return {
        page: action.payload,
      }
    }
    default:
      return statePart;
  }
};

export default queriesProductsReducer;