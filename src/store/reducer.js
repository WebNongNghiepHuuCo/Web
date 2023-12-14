import { combineReducers } from 'redux';
import Theme from '~/common/theme/redux/reducers';
import App from '~/pages/redux/reducers/index';

const rootReducers = combineReducers({
  theme: Theme,
  app: App
});

export default rootReducers;
