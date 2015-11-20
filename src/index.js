/* @flow */
require('./assets/stylesheets/style.styl');
require('es6-promise').polyfill();

import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './stores/store';
import { ReduxRouter } from 'redux-router';
import React from 'react';

const store = configureStore();

render(
  <Provider store={store}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('root')
);
