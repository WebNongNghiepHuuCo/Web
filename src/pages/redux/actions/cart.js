export const ADD_CART_START = 'ADD_CART_START';
export const ADD_CART_SUCCESS = 'ADD_CART_SUCCESS';
export const ADD_CART_FAILED = 'ADD_CART_FAILED';

export const UPDATE_CART_START = 'UPDATE_CART_START';
export const UPDATE_CART_SUCCESS = 'UPDATE_CART_SUCCESS';
export const UPDATE_CART_FAILED = 'UPDATE_CART_FAILED';

export const DELETE_CART_START = 'DELETE_CART_START';
export const DELETE_CART_SUCCESS = 'DELETE_CART_SUCCESS';
export const DELETE_CART_FAILED = 'DELETE_CART_FAILED';

//-------------------------Cart------------------------//
/**
 * [1]
 * add cart start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function addCart(payload, onSuccess, onError) {
  return {
    type: ADD_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * add cart success action
 * @param {*} payload
 * @returns {object}
 */
export function addCartSuccess(payload) {
  return {
    type: ADD_CART_SUCCESS,
    payload: payload
  };
}

/**
 * add cart failed action
 * @returns {object}
 */
export function addCartFailed() {
  return {
    type: ADD_CART_FAILED
  };
}

/**
 * [2]
 * UPDATE cart start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function updateCart(payload, onSuccess, onError) {
  return {
    type: UPDATE_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * UPDATE cart success action
 * @param {*} payload
 * @returns {object}
 */
export function updateCartSuccess(payload) {
  return {
    type: UPDATE_CART_SUCCESS,
    payload: payload
  };
}

/**
 * UPDATE cart failed action
 * @returns {object}
 */
export function updateCartFailed() {
  return {
    type: UPDATE_CART_FAILED
  };
}

/**
 * [3]
 * DELETE cart start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function deleteCart(payload, onSuccess, onError) {
  return {
    type: DELETE_CART_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * DELETE cart success action
 * @param {*} payload
 * @returns {object}
 */
export function deleteCartSuccess(payload) {
  return {
    type: DELETE_CART_SUCCESS,
    payload: payload
  };
}

/**
 * DELETE cart failed action
 * @returns {object}
 */
export function deleteCartFailed() {
  return {
    type: DELETE_CART_FAILED
  };
}

export default {
  addCart,
  addCartSuccess,
  addCartFailed,
  updateCart,
  updateCartSuccess,
  updateCartFailed,
  deleteCart,
  deleteCartSuccess,
  deleteCartFailed
};
