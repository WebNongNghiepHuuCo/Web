import { useMemo } from 'react';
import { get } from 'lodash';

import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import themeActions from '../actions';

export const useTheme = () => {
  const data = useSelector((state) => get(state, 'theme'));

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(themeActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
