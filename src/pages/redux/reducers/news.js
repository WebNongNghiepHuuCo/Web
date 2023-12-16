import {
    GET_ALL_NEWS_START,
    GET_ALL_NEWS_SUCCESS,
    GET_ALL_NEWS_FAILED,
    GET_NEWS_DETAIL_SUCCESS
  } from '../actions/news';
  
  const initialState = {
    isLoading: false,
    allnews: [],
    newDetail: []
  };
  
  /**
   * product reducer
   * @param {object} state
   * @param {object} action
   * @returns
   */
  export default function newsManagement(state = initialState, action) {
    switch (action.type) {
      case GET_ALL_NEWS_START:
        return {
          ...state,
          isLoading: true
        };
      case GET_ALL_NEWS_SUCCESS:
        return {
          ...state,
          allnews: action?.payload?.items,
          isLoading: false
        };
      case GET_NEWS_DETAIL_SUCCESS:
        return {
          ...state,
          newDetail: action?.payload,
          isLoading: false
        };
      case GET_ALL_NEWS_FAILED:
        return {
          ...state,
          isLoading: false
        };
      default:
        return state;
    }
  }
  