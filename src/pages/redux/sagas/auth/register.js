import { call, put, takeLatest } from 'redux-saga/effects'

import { api } from '~/services/api'

import { registerFailed, registerSuccess, REGISTER_START } from '../../actions/auth'

/**
 * register
 * @param {any} params Params will be sent to server
 * @returns {Promise}
 */
const registerApi = (params) => {
  const uri = `/account/register-user`
  return api.post(uri, params)
}

/**
 * Handle get data request and response
 * @param {object} action
 */
function* doRegister(action) {
  try {
    const response = yield call(registerApi, action?.payload)
    if (response?.statusCode === 200 || response?.statusCode === 201) {
      const { content } = response

      yield put(registerSuccess({ ...content }))

      // Call callback action if provided
      if (action.onSuccess) {
        yield action.onSuccess({ ...content })
      }
    } else {
      throw response?.content?.message
    }
  } catch (error) {
    yield put(registerFailed())
    // Call callback action if provided

    if (action.onError) {
      yield action.onError(error)
    }
  }
}

/**
 * Watch register
 */
export default function* watchRegister() {
  yield takeLatest(REGISTER_START, doRegister)
}
