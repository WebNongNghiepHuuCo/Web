import { AUTH_TOKEN, REFRESH_TOKEN } from '~/common/constants/ApiConstant';
/**
 * Check user is logged in
 * @returns {boolean}
 */

export const isAuth = () => {
  let isAuth = false;
  const localToken = localStorage.getItem(AUTH_TOKEN);
  const localRefreshToken = localStorage.getItem(REFRESH_TOKEN);

  if (localToken && localRefreshToken) {
    isAuth = true;
  }
  return isAuth;
};
