import { useMemo } from 'react'

import { get } from 'lodash'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import authActions from '../actions/auth'

export const useAuth = () => {
  const data = useSelector((state) =>
    get(state, 'app.authReducer'),
  )
  const dispatch = useDispatch()
  const actions = useMemo(
    () => bindActionCreators(authActions, dispatch),
    [dispatch],
  )

  return {
    actions,
    data,
  }
}
