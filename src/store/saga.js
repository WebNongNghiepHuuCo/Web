import { all, fork } from 'redux-saga/effects';
import appSaga from '~/pages/redux/sagas/index';

export default function* rootSaga() {
  yield all([fork(appSaga)]);
}
