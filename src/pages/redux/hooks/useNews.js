import { useMemo } from 'react';

import { get } from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import newsActions from '../actions/news';

export const useNews = () => {
  const data = useSelector((state) => {
    return get(state, 'app.newsManagement');
  });

  const dispatch = useDispatch();
  const actions = useMemo(
    () => bindActionCreators(newsActions, dispatch),
    [dispatch]
  );

  return {
    actions,
    data
  };
};
