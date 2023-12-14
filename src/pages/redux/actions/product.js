export const GET_ALL_PRODUCT_START = 'GET_ALL_PRODUCT_START';
export const GET_ALL_PRODUCT_SUCCESS = 'GET_ALL_PRODUCT_SUCCESS';
export const GET_ALL_PRODUCT_FAILED = 'GET_ALL_PRODUCT_FAILED';

//-------------------------Product------------------------//
/**
 * [1]
 * get all Product start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function getAllProduct(payload, onSuccess, onError) {
  return {
    type: GET_ALL_PRODUCT_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * get all Product success action
 * @param {*} payload
 * @returns {object}
 */
export function getAllProductSuccess(payload) {
  return {
    type: GET_ALL_PRODUCT_SUCCESS,
    payload: payload
  };
}

/**
 * get all Product failed action
 * @returns {object}
 */
export function getAllProductFailed() {
  return {
    type: GET_ALL_PRODUCT_FAILED
  };
}

export default {
  getAllProduct,
  getAllProductSuccess,
  getAllProductFailed
};
