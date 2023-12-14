import { call, put, takeLatest } from 'redux-saga/effects';
import { api } from '~/services/api';
import {
  checkoutSuccess,
  checkoutFailed,
  CHECKOUT_START
} from '../../actions/checkout';

/**
 * post checkout api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const checkoutApi = (props) => {
  var uri = `/checkout`;
  return api.post(uri, props);
};

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doCheckout(action) {
  try {
    const response = yield call(checkoutApi, action?.payload);
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      yield put(checkoutSuccess(response?.content));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess(response?.content);
      }
    } else {
      throw response?.content;
    }
  } catch (error) {
    yield put(checkoutFailed());
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error);
    }
  }
}

/**
 * [Watcher]
 * Watch post checkout
 */
export default function* watchCheckout() {
  yield takeLatest(CHECKOUT_START, doCheckout);
}
