export const THEME_CONFIG = {
  locale: sessionStorage.getItem('lang') === 'ja' ? 'ja' : 'en',
  userRegister: null,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null
};
