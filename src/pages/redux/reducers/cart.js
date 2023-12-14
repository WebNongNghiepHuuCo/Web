import {
  ADD_CART_START,
  ADD_CART_SUCCESS,
  ADD_CART_FAILED,
  UPDATE_CART_START,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAILED,
  DELETE_CART_START,
  DELETE_CART_SUCCESS,
  DELETE_CART_FAILED
} from '../actions/cart';

const initialState = {
  isLoading: false,
  cart: [],
  listCarts: []
};

/**
 * Common reducer
 * @param {object} state
 * @param {object} action
 * @returns
 */
export default function cartManagement(state = initialState, action) {
  switch (action.type) {
    case ADD_CART_START:
    case UPDATE_CART_START:
    case DELETE_CART_START:
      return {
        ...state,
        isLoading: true
      };
    case ADD_CART_SUCCESS:
      var data = action?.payload;
      const cartStorage = localStorage.getItem('amorCart');
      if (!cartStorage) {
        localStorage.setItem(
          'amorCart',
          JSON.stringify([{ ...data, total: 1 }])
        );
      } else {
        const parseCart = JSON.parse(cartStorage);

        if (parseCart.length > 0) {
          const result = parseCart.findIndex(({ id }) => id === data?._id);

          if (result !== -1) {
            parseCart[result].total = 1 + parseCart[result].total;

            localStorage.setItem('amorCart', JSON.stringify(parseCart));
          } else {
            parseCart.push({ ...data, total: 1 });
            localStorage.setItem('amorCart', JSON.stringify(parseCart));
          }
        } else {
          parseCart.push({ ...data, total: 1 });
          localStorage.setItem('amorCart', JSON.stringify(parseCart));
        }
      }

      return {
        ...state,
        cart: action?.payload,
        listCarts: JSON.parse(localStorage.getItem('amorCart')),
        isLoading: false
      };
    case UPDATE_CART_SUCCESS:
      const dataUpdate = action?.payload;

      const cartUpdateStorage = localStorage.getItem('amorCart');
      const parseUpdateCart = JSON.parse(cartUpdateStorage);

      const resultUpdate = parseUpdateCart.findIndex(
        ({ _id }) => _id === dataUpdate?._id
      );
      parseUpdateCart[resultUpdate].total = dataUpdate.total;

      localStorage.setItem('amorCart', JSON.stringify(parseUpdateCart));

      return {
        ...state,
        cart: action?.payload,
        listCarts: JSON.parse(localStorage.getItem('amorCart')),
        isLoading: false
      };

    case DELETE_CART_SUCCESS:
      var dataDelete = action?.payload;
      const cartDeleteStorage = localStorage.getItem('amorCart');
      const parseDeleteCart = JSON.parse(cartDeleteStorage);

      const indexDelete = parseDeleteCart
        .map((item) => item._id)
        .indexOf(dataDelete?._id);

      if (indexDelete > -1) {
        parseDeleteCart.splice(indexDelete, 1);
      }
      localStorage.setItem('amorCart', JSON.stringify(parseDeleteCart));

      return {
        ...state,
        cart: JSON.parse(localStorage.getItem('amorCart')),
        listCarts: JSON.parse(localStorage.getItem('amorCart')),
        isLoading: false
      };
    case ADD_CART_FAILED:
    case UPDATE_CART_FAILED:
    case DELETE_CART_FAILED:
      return {
        ...state,
        isLoading: false
      };

    default:
      return state;
  }
}
