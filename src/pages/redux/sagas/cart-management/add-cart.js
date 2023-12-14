import { put, takeLatest } from 'redux-saga/effects';
import {
  addCartSuccess,
  addCartFailed,
  ADD_CART_START
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
function* doAddCart(action) {
  try {
    if (action.payload) {
      yield put(addCartSuccess(action.payload));

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess();
      }
    }
  } catch (error) {
    yield put(addCartFailed());
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
export default function* watchAddCart() {
  yield takeLatest(ADD_CART_START, doAddCart);
}
