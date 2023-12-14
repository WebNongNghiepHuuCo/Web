import { useMemo } from 'react';

import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import cartActions from '../actions/cart';

export const useCart = () => {
  const data = useSelector((state) => {
    return get(state, 'app.cartManagement');
  });

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(cartActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
