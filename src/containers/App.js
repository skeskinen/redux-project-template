/* @flow */
import React, { Component, PropTypes } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';

class App extends Component {
  render(): any {
    const { children } = this.props;
    return (
      <div className='container-fluid'>
        <Row>
          <p> Hello </p>
        </Row>
        <Row>
          { children }
        </Row>
      </div>
    );
  }
}

App.propTypes = {
  // Injected by React Redux
  errorMessage: PropTypes.string,
  // Injected by React Router
  children: PropTypes.node
};

export default connect((state) => ({}))(App);
