import {
  GET_ALL_PRODUCT_START,
  GET_ALL_PRODUCT_SUCCESS,
  GET_ALL_PRODUCT_FAILED
} from '../actions/product';

const initialState = {
  isLoading: false,
  allproducts: []
};

/**
 * product reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function productManagement(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_PRODUCT_START:
      return {
        ...state,
        isLoading: true
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        allproducts: action?.payload,
        isLoading: false
      };
    case GET_ALL_PRODUCT_FAILED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
