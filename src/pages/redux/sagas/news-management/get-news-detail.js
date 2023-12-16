import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services/api';
import {
  GET_NEWS_DETAIL_START,
  getDetailNewsSuccess,
  getDetailNewsFailed
} from '../../actions/news';

/**
 * get new api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getDetailNewsApi = (props) => {
  var uri = `/news/${props}`;
  return api.get(uri);
};

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doGetDetailNews(action) {
  try {
    const response = yield call(getDetailNewsApi, action?.payload);
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(getDetailNewsSuccess(response?.content));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess(response?.content);
      }
    } else {
      throw response?.data?.message;
    }
  } catch (error) {
    yield put(getDetailNewsFailed());
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
export default function* watchGetNewsDetail() {
  yield takeLatest(GET_NEWS_DETAIL_START, doGetDetailNews);
}
