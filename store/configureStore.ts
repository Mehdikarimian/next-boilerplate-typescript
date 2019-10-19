import { createStore, applyMiddleware, Store, compose } from 'redux';
import createSagaMiddleware, { Task } from 'redux-saga';
import createReducer from './reducers';
import rootSaga from '../pages/saga';
import state from './initialState';
import { TStore } from './interfaces';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
    __SAGA_MONITOR_EXTENSION__: any;
  }
}

export default function configureStore(initialState = state) {
  let reduxSagaMonitorOptions = {};
  let composeEnhancers = compose;

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        serializeToString: true,
        trace: true,
        stackTraceLimit: 25,
      });
    }

    // Dev Tools once it supports redux-saga version 1.x.x
    // if (window.__SAGA_MONITOR_EXTENSION__) {
    //   reduxSagaMonitorOptions = {
    //     sagaMonitor: window.__SAGA_MONITOR_EXTENSION__,
    //   };
    // }
  }

  const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
  const middlewares = [sagaMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];

  const store: TStore = createStore(
    createReducer,
    initialState,
    composeEnhancers(...enhancers),
  );

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store;
}
