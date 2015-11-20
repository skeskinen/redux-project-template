/* @flow */
import { combineReducers } from 'redux';
import { counter, CounterState } from './counter';
import { Action } from '../actions';
import { routerStateReducer as router } from 'redux-router';

export type AppState = { counter: CounterState };

export const rootReducer: (s: AppState, a: Action) => AppState = combineReducers({
  counter,
  router
});
