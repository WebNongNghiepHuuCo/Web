export const API_BASE_URL =
  process.env.REACT_APP_BASE_URL || 'http://54.168.156.18/';
export const API_BASE_URL_IMAGE =
  process.env.REACT_APP_BASE_URL + '/assets/uploads/';
export const RESPONSE_STATUS = {
  DONE: 'done!'
};
export const AUTH_TOKEN = 'auth_token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_INFO = 'user';
export const ROLE = {
  ADMIN: 1,
  STAFF: 6,
  MENTOR: 'teacher'
};
export const APP_PREFIX_PATH = '/app';
export const AUTH_PREFIX_PATH = '/auth';
