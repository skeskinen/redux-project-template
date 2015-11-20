/* @flow */
import { Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Counter from './containers/Counter';
import React from 'react';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Counter} />
  </Route>
);

export default routes;
