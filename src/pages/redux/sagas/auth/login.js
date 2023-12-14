import { call, put, takeLatest } from 'redux-saga/effects'

import { api } from '~/services/api'

import { loginFailed, loginSuccess, LOGIN_START } from '../../actions/auth'
import {
  AUTH_TOKEN,
  REFRESH_TOKEN,
  USER_INFO,
} from '~/common/constants/ApiConstant'

/**
 * Login
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const loginApi = (params) => {
  const uri = `/user/auth/login`
  return api.post(uri, params)
}

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doLogin(action) {
  try {
    const response = yield call(loginApi, action?.payload)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      const { content } = response

      // Save token to local storage
      localStorage.setItem(AUTH_TOKEN, content.accessToken)
      // Save refresh token to local storage
      localStorage.setItem(REFRESH_TOKEN, 'REFRESH_TOKEN')
      // Save user infomation to local storage
      localStorage.setItem(USER_INFO, JSON.stringify({ ...content.account }))

      yield put(loginSuccess({ ...content.account }))

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess({ ...content.account })
      }
    } else {
      throw response?.content?.message
    }
  } catch (error) {
    yield put(loginFailed())
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error)
    }
  }
}

/**
 * Watch login
 */
export default function* watchLogin() {
  yield takeLatest(LOGIN_START, doLogin)
}
