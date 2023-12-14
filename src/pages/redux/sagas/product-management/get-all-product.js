import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services/api';
import {
  getAllProductSuccess,
  getAllProductFailed,
  GET_ALL_PRODUCT_START
} from '../../actions/product';

/**
 * get role api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const getAllProductApi = (props) => {
  var uri = `/products`;
  return api.get(uri, props);
};

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doGetAllProduct(action) {
  try {
    const response = yield call(getAllProductApi, action?.payload);
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(getAllProductSuccess(response?.content));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess(response?.content);
      }
    } else {
      throw response?.data?.message;
    }
  } catch (error) {
    yield put(getAllProductFailed());
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error);
    }
  }
}

/**
 * [Watcher]
 * Watch get role
 */
export default function* watchGetAllProduct() {
  yield takeLatest(GET_ALL_PRODUCT_START, doGetAllProduct);
}
