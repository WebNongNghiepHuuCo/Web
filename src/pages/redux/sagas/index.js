import { all } from 'redux-saga/effects';

//Auth
import watchLogin from './auth/login';
import watchLogout from './auth/logout';
import watchRegister from './auth/register';


//Cart
import watchAddCart from './cart-management/add-cart';
import watchDeleteCart from './cart-management/delete-cart';
import watchUpdateCart from './cart-management/update-cart';

//Products
import watchGetAllProduct from './product-management/get-all-product';

//Checkout
import watchCheckout from './checkout-management/checkout';

/**
 * Root saga
 */
export default function* sagas() {
  yield all([
    //Auth
    watchLogin(),
    watchLogout(),
    watchRegister(),

    //Cart
    watchAddCart(),
    watchUpdateCart(),
    watchDeleteCart(),

    //Products
    watchGetAllProduct(),

    //Checkout
    watchCheckout()
  ]);
}
