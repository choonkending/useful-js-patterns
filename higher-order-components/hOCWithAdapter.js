import React, { Component } from 'react';

const defaultAdapter = x => x;

const hOCWithAdapter = (Component, adapter = defaultAdapter) => class extends Component {

  render() {
    const newProps = adapter(this.props);
    return (
      <Component {...newProps} />
    );
  }
}

export default hOCWithAdapter;

