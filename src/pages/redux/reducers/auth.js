import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_START,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILED
} from '../actions/auth';

const initialState = {
  isLoading: false,
  userInfo: {}
};

/**
 * auth reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
    case LOGOUT_START:
    case REGISTER_START:
      return {
        ...state,
        isLoading: true
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: {}
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false
      };
    case LOGIN_FAILED:
    case LOGOUT_FAILED:
    case REGISTER_FAILED:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
