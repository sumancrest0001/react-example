import React, { Component } from 'react';

class ErrorBoundary extends Component {

  state = {
    errorOccured: false,
    errorMessage: ''
  };

  componentDidCatch = (error, info) => {
    this.setState({ errorOccured: true, errorMessage: error });
  };

  render() {
    if (this.state.errorOccured) {
      return <h1>{this.state.errorMessage}</h1>;
    } else
      return this.props.children;
  }
}

export default ErrorBoundary;