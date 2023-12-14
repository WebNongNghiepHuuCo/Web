import { put, takeLatest } from 'redux-saga/effects';
import {
  deleteCartSuccess,
  deleteCartFailed,
  DELETE_CART_START
} from '../../actions/cart';

/**
 * get role api
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */

/**
 * [Worker]
 * Handle get data request and response
 * @param {object} action
 */
function* doDeleteCart(action) {
  try {
    if (action.payload) {
      yield put(deleteCartSuccess(action.payload));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    }
  } catch (error) {
    yield put(deleteCartFailed());
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
export default function* watchDeleteCart() {
  yield takeLatest(DELETE_CART_START, doDeleteCart);
}
