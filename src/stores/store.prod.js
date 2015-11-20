/* @flow */
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer as reducer, AppState } from '../reducers';
import { createHistory } from 'history';
import { reduxReactRouter } from 'redux-router';
import routes from '../routes';
import thunkMiddleware from 'redux-thunk';

export default function configureStore(initialState?: AppState) {
  const store = compose(
    applyMiddleware(thunkMiddleware),
    reduxReactRouter({ routes, createHistory })
  )(createStore)(reducer, initialState);

  return store;
}
