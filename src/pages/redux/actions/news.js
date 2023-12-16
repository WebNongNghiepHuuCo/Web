export const GET_ALL_NEWS_START = 'GET_ALL_NEWS_START';
export const GET_ALL_NEWS_SUCCESS = 'GET_ALL_NEWS_SUCCESS';
export const GET_ALL_NEWS_FAILED = 'GET_ALL_NEWS_FAILED';
export const GET_NEWS_DETAIL_START = 'GET_NEWS_DETAIL_START';
export const GET_NEWS_DETAIL_SUCCESS = 'GET_NEWS_DETAIL_SUCCESS';
export const GET_NEWS_DETAIL_FAILED = 'GET_NEWS_DETAIL_FAILED';

//-------------------------News------------------------//
/**
 * [1]
 * get all News start action
 * @param {any} payload
 * @param {function} onSuccess Callback function on success
 * @param {*} onError Callback function on error
 * @returns {object}
 */
export function getAllNews(payload, onSuccess, onError) {
  return {
    type: GET_ALL_NEWS_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}

/**
 * get all News success action
 * @param {*} payload
 * @returns {object}
 */
export function getAllNewsSuccess(payload) {
  return {
    type: GET_ALL_NEWS_SUCCESS,
    payload: payload
  };
}

/**
 * get all News failed action
 * @returns {object}
 */
export function getAllNewsFailed() {
  return {
    type: GET_ALL_NEWS_FAILED
  };
}
export function getDetailNews(payload, onSuccess, onError) {
  return {
    type: GET_NEWS_DETAIL_START,
    payload: payload,
    onSuccess: onSuccess,
    onError: onError
  };
}
export function getDetailNewsSuccess(payload) {
  return {
    type: GET_NEWS_DETAIL_SUCCESS,
    payload: payload
  };
}

/**
 * get all News failed action
 * @returns {object}
 */
export function getDetailNewsFailed() {
  return {
    type: GET_NEWS_DETAIL_FAILED
  };
}
export default {
  getAllNews,
  getAllNewsSuccess,
  getAllNewsFailed,
  getDetailNews,
  getDetailNewsSuccess,
  getDetailNewsFailed,
};
