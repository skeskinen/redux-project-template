/* @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer as reducer, AppState } from '../reducers';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import routes from '../routes';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

export default function configureStore(initialState?: AppState) {
  const logger = createLogger();
  const store = compose(
    applyMiddleware(thunkMiddleware, logger),
    reduxReactRouter({ routes, createHistory })
  )(createStore)(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers');
      store.replaceReducer(nextReducer);
    });
  }
  return store;
}
