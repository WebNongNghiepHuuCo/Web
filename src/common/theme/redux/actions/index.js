import {
  CHANGE_LOCALE, SAVE_USER_REGISTER, UPDATE_INFO_USER,
} from '~/common/constants/ThemeConstant';

export function onLocaleChange(locale) {
  return {
    type: CHANGE_LOCALE,
    locale
  };
}

export function onSaveUserRegister(userRegister) {
  return {
    type: SAVE_USER_REGISTER,
    userRegister
  };
}

export function updateInfoUser(user) {
  return {
    type: UPDATE_INFO_USER,
    user,
  }
}

export default {
  onLocaleChange,
  onSaveUserRegister,
  updateInfoUser
};
