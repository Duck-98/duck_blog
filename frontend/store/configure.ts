/* eslint-disable import/no-duplicates */
import { applyMiddleware, compose } from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
/*
import reducer from '../reducers';
import rootSaga from '../sagas';
*/

declare module 'redux' {
  export interface Store {
    sagaTask?: Task;
  }
}

const configureStore = (context) => {
  console.log(context);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer =
    process.env.NODE_ENV === 'production'
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares));
  const store = createStore(reducer, enhancer);
  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === 'development',
});

export default wrapper;
