import { combineReducers } from 'redux';
import cartManagement from './cart';
import authReducer from './auth';
import productManagement from './product';
import checkoutManagement from './checkout';

export default combineReducers({
  cartManagement,
  productManagement,
  checkoutManagement,
  authReducer
});
