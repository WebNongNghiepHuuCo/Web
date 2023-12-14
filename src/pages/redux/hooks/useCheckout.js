import { useMemo } from 'react';

import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import checkoutActions from '../actions/checkout';

export const useCheckout = () => {
  const data = useSelector((state) => {
    return get(state, 'app.checkoutManagement');
  });

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(checkoutActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
