import {
  CHECKOUT_START,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILED
} from '../actions/checkout';

const initialState = {
  isLoading: false,
};

/**
 * checkout reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function checkoutManagement(state = initialState, action) {
  switch (action.type) {
    case CHECKOUT_START:
      return {
        ...state,
        isLoading: true
      };
    case CHECKOUT_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case CHECKOUT_FAILED:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
}
