import { createStore, applyMiddleware, compose } from 'redux';
import rootReducers from './reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const middlewares = [];
const sagaMiddleware = createSagaMiddleware();

function configureStore(preloadedState) {
  const composeEnhancers = compose;
  const store = createStore(
    rootReducers,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware, ...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  return store;
}

const store = configureStore();

export default store;
