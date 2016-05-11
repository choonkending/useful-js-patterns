import React, { Component } from 'react';

const hOC = Component => class extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null);
    }

  componentDidMount() {
    this.setState({ data: 'Yo Dawg'});
  }

  render() {
    return (
      <Component {...this.props} data={this.state.data} />
    );
  }
}

export default hOC;

