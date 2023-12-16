import { combineReducers } from 'redux';
import cartManagement from './cart';
import authReducer from './auth';
import productManagement from './product';
import checkoutManagement from './checkout';
import newsManagement from './news'
export default combineReducers({
  cartManagement,
  productManagement,
  checkoutManagement,
  newsManagement,
  authReducer
});
