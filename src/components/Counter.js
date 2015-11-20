/* @flow */
import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
  render(): any {
    const { counter, increment, decrement } = this.props;
    return (
      <p>
        Counter: {counter}
        {' '}
        <button onClick={increment}>+</button>
        {' '}
        <button onClick={decrement}>-</button>
      </p>
    );
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};
