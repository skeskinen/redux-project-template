/* @flow */

import { Action } from '.';

export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export function increment(): Action {
  return {
    type: INCREMENT_COUNTER
  };
}

export function decrement(): Action {
  return {
    type: DECREMENT_COUNTER
  };
}
