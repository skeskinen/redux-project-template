/* @flow */
import { Action } from '../actions';
import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';

export type CounterState = number;
//export type CounterReducer = (state: CounterState, action: Action) =>

export function counter(state: CounterState = 0, action: Action): CounterState {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}
