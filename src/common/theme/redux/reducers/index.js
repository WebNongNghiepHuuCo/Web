import { USER_INFO } from '~/common/constants';
import {
  CHANGE_LOCALE,
  SAVE_USER_REGISTER,
  UPDATE_INFO_USER
} from '~/common/constants/ThemeConstant';
import { THEME_CONFIG } from '~/common/theme/config';

const initTheme = {
  ...THEME_CONFIG
};

const theme = (state = initTheme, action) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return {
        ...state,
        locale: action.locale
      };
    case SAVE_USER_REGISTER:
      return {
        ...state,
        userRegister: action.userRegister
      };
    case UPDATE_INFO_USER:
      localStorage.setItem(
        USER_INFO,
        JSON.stringify({
          ...action?.user
        })
      );
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
};

export default theme;
