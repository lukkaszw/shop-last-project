/* selectors */
export const getPage = ({ queries }) => queries.page;

/* action name creator */
const reducerName = 'queries';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_PAGE = createActionName('CHANGE_PAGE');
const GO_PREV_PAGE = createActionName('GO_PREV_PAGE');
const GO_NEXT_PAGE = createActionName('GO_NEXT_PAGE');

/* action creators */
export const changePage = payload => ({ payload, type: CHANGE_PAGE });
export const goPrevPage = () => ({ type: GO_PREV_PAGE });
export const goNextPage = () => ({ type: GO_NEXT_PAGE });

const queriesProductsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      return {
        ...statePart,
        page: action.payload,
      }
    }
    case GO_NEXT_PAGE: {
      console.log('adding page');
      return {
        ...statePart,
        page: statePart.page + 1,
      }
    }
    case GO_PREV_PAGE: {
      return {
        ...statePart,
        page: statePart.page > 0 ? statePart.page - 1 : 0,
      }
    }
    default:
      return statePart;
  }
};

export default queriesProductsReducer;