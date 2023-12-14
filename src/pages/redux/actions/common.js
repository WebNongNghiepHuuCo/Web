export const GET_ROLE_START = 'GET_ROLE_START';
export const GET_ROLE_SUCCESS = 'GET_ROLE_SUCCESS';
export const GET_ROLE_FAILED = 'GET_ROLE_FAILED';

//-------------------------Common------------------------//
/**
 * [1]
 * get role start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function getRole(payload, onSuccess, onError) {
  return {
    type: GET_ROLE_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * get role success action
 * @param {*} payload
 * @returns {object}
 */
export function getRoleSuccess(payload) {
  return {
    type: GET_ROLE_SUCCESS,
    payload: payload
  };
}

/**
 * get role failed action
 * @returns {object}
 */
export function getRoleFailed() {
  return {
    type: GET_ROLE_FAILED
  };
}

export default {
  getRole,
  getRoleSuccess,
  getRoleFailed
};
