import { useMemo } from 'react';

import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import productActions from '../actions/product';

export const useProduct = () => {
  const data = useSelector((state) => {
    return get(state, 'app.productManagement');
  });

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(productActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
