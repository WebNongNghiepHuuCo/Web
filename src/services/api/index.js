import axios from 'axios'
import { notification } from "antd";
import { validateStatus } from '~/helpers/api'
import { API_BASE_URL } from '~/common/constants';

const HEADERS_MULTIPLE_PART = {
  contentType: 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
}

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 60000,
  headers: {
    contentType: 'application/json',
    accept: 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

instance.interceptors.response.use(
  async function (response) {
    // const t = useTranslation()
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response
    const responseTransorm = { ...response.data }

    if (response.status === 200 || response.status === 201 ) {
      return responseTransorm
    } else {
      notification.error({
        message: response?.data?.content?.message || 'something went wrong',
      })
      return responseTransorm
    }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const response = error.response
    if(response?.statusCode === 422 && response?.statusText === "Unprocessable Content"){
      return Promise.reject(error)
    }
    if(response?.statusCode === 404 ){
      return Promise.reject(error)
    }
      notification.error({
        message: response?.statusText || 'Unknow',
      })
      return Promise.reject(error)
  }
)

const api = {
  instance,
  post: (endpoint, params) => {
    return instance
      .post(endpoint, params, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },

  postMultiplePart: (endpoint, params) => {
    return instance
      .post(endpoint, params, {
        headers: HEADERS_MULTIPLE_PART,
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },

  get: (endpoint, params = {}) => {
    return instance
      .get(endpoint, {
        params: params,
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },

  put: (endpoint, params) => {
    return instance
      .put(endpoint, params, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },

  patch: (endpoint, params) => {
    return instance
      .patch(endpoint, params, {
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },

  delete: (endpoint, params) => {
    return instance
      .delete(endpoint, {
        data: params,
        validateStatus: (status) => validateStatus(status),
      })
      .then(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
      .catch(
        (response) => {
          return response
        },
        (err) => {
          return err.response || err
        },
      )
  },
}

export { api }