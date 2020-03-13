/* selectors */
export const getPage = ({ queries }) => queries.page;
export const getSearchText = ({ queries }) => queries.searchText;
export const getCategories = ({ queries }) => queries.categories;

/* action name creator */
const reducerName = 'queries';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const CHANGE_PAGE = createActionName('CHANGE_PAGE');
const GO_PREV_PAGE = createActionName('GO_PREV_PAGE');
const GO_NEXT_PAGE = createActionName('GO_NEXT_PAGE');
const UPDATE_SEARCH_TEXT = createActionName('UPDATE_SEARCH_TEXT');
const TOGGLE_CATEGORY = createActionName('TOGGLE_CATEGORY');

/* action creators */
export const changePage = payload => ({ payload, type: CHANGE_PAGE });
export const goPrevPage = () => ({ type: GO_PREV_PAGE });
export const goNextPage = () => ({ type: GO_NEXT_PAGE });
export const updateSearchText = (payload) => ({ payload, type: UPDATE_SEARCH_TEXT });
export const toggleCategory = (payload) => ({ payload, type: TOGGLE_CATEGORY });

const queriesProductsReducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case CHANGE_PAGE: {
      return {
        ...statePart,
        page: action.payload,
      }
    }
    case GO_NEXT_PAGE: {
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
    case UPDATE_SEARCH_TEXT: {
      return {
        ...statePart,
        page: 1,
        searchText: action.payload,
      }
    }
    case TOGGLE_CATEGORY: {
      console.log(action.payload);
      const category = action.payload;
      let newCategories = [...statePart.categories];
      if(newCategories.includes(category)) {
        newCategories = newCategories.filter(cat => cat !== category);
      } else {
        newCategories.push(category);
      }

      return {
        ...statePart,
        page: 1,
        categories: newCategories,
      }
    }
    default:
      return statePart;
  }
};

export default queriesProductsReducer;