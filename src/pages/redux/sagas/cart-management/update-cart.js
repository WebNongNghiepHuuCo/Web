import { put, takeLatest } from 'redux-saga/effects';
import {
  updateCartSuccess,
  updateCartFailed,
  UPDATE_CART_START
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
function* doUpdateCart(action) {
  try {
    if (action.payload) {
      yield put(updateCartSuccess(action.payload));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    }
  } catch (error) {
    yield put(updateCartFailed());
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
export default function* watchUpdateCart() {
  yield takeLatest(UPDATE_CART_START, doUpdateCart);
}
