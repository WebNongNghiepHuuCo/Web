export const CHECKOUT_START = 'CHECKOUT_START';
export const CHECKOUT_SUCCESS = 'CHECKOUT_SUCCESS';
export const CHECKOUT_FAILED = 'CHECKOUT_FAILED';

//-------------------------checkout------------------------//
/**
 * [1]
 * checkout start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function checkout(payload, onSuccess, onError) {
  return {
    type: CHECKOUT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * checkout success action
 * @param {*} payload
 * @returns {object}
 */
export function checkoutSuccess(payload) {
  return {
    type: CHECKOUT_SUCCESS,
    payload: payload
  };
}

/**
 * checkout failed action
 * @returns {object}
 */
export function checkoutFailed() {
  return {
    type: CHECKOUT_FAILED
  };
}

export default {
  checkout,
  checkoutSuccess,
  checkoutFailed
};
