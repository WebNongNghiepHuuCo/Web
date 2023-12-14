export const GET_ALL_SERVICE_START = 'GET_ALL_SERVICE_START';
export const GET_ALL_SERVICE_SUCCESS = 'GET_ALL_SERVICE_SUCCESS';
export const GET_ALL_SERVICE_FAILED = 'GET_ALL_SERVICE_FAILED';

//-------------------------Service------------------------//
/**
 * [1]
 * get all service start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function getAllService(payload, onSuccess, onError) {
  return {
    type: GET_ALL_SERVICE_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * get all service success action
 * @param {*} payload
 * @returns {object}
 */
export function getAllServiceSuccess(payload) {
  return {
    type: GET_ALL_SERVICE_SUCCESS,
    payload: payload
  };
}

/**
 * get all service failed action
 * @returns {object}
 */
export function getAllServiceFailed() {
  return {
    type: GET_ALL_SERVICE_FAILED
  };
}

export default {
  getAllService,
  getAllServiceSuccess,
  getAllServiceFailed
};
