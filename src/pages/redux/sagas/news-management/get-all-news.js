import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services/api';
import {
  getAllNewsSuccess,
  getAllNewsFailed,
  GET_ALL_NEWS_START
} from '../../actions/news';

/**
 * get new api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getAllNewsApi = (props) => {
  var uri = `/news`;
  return api.get(uri, props);
};

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doGetAllNews(action) {
  try {
    const response = yield call(getAllNewsApi, action?.payload);
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(getAllNewsSuccess(response?.content));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess(response?.content);
      }
    } else {
      throw response?.data?.message;
    }
  } catch (error) {
    yield put(getAllNewsFailed());
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error);
    }
  }
}

/**
 * [Watcher]
 * Watch new api
 */
export default function* watchGetAllNews() {
  yield takeLatest(GET_ALL_NEWS_START, doGetAllNews);
}
