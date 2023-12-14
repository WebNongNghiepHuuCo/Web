export const SEND_FEEDBACK_START = 'SEND_FEEDBACK_START';
export const SEND_FEEDBACK_SUCCESS = 'SEND_FEEDBACK_SUCCESS';
export const SEND_FEEDBACK_FAILED = 'SEND_FEEDBACK_FAILED';

//-------------------------Common------------------------//
/**
 * [1]
 * Send feed back start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function sendFeedBack(payload, onSuccess, onError) {
  return {
    type: SEND_FEEDBACK_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * Send feed back success action
 * @param {*} payload
 * @returns {object}
 */
export function sendFeedBackSuccess(payload) {
  return {
    type: SEND_FEEDBACK_SUCCESS,
    payload: payload
  };
}

/**
 * Send feed back failed action
 * @returns {object}
 */
export function sendFeedBackFailed() {
  return {
    type: SEND_FEEDBACK_FAILED
  };
}

export default {
  sendFeedBack,
  sendFeedBackSuccess,
  sendFeedBackFailed
};
