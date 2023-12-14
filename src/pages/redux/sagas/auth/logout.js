import { put, takeLatest } from 'redux-saga/effects'

import { logoutFailed, logoutSuccess, LOGOUT_START } from '../../actions/auth'
import {
  AUTH_TOKEN,
  REFRESH_TOKEN,
  USER_INFO,
} from '~/common/constants/ApiConstant'

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doLogout(action) {
  try {
    // Remove token from local storage
    localStorage.removeItem(AUTH_TOKEN)

    // Remove refresh token from local storage
    localStorage.removeItem(REFRESH_TOKEN)

    // Remove user infomation from local storage
    localStorage.removeItem(USER_INFO)

    localStorage.removeItem('token')

    yield put(logoutSuccess())
    // Call callback action if provided
    if (action.onSuccess) {
      yield action.onSuccess()
    }

    // const isTrigger = action?.callbackUrl

    // if (!isTrigger) {
    //   window.location.reload()
    // }
  } catch (error) {
    yield put(logoutFailed())
    // Call callback action if provided
    if (action.onError) {
      yield action.onError()
    }
  }
}

/**
 * Watch search users
 */
export default function* watchLogout() {
  yield takeLatest(LOGOUT_START, doLogout)
}
