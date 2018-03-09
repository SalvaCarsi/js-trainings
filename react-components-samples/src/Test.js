import React, { Component } from 'react';

class Test extends Component {
  render() {
    const foo = this.props.translations('sample.text');
    return <div>{foo}</div>;
  }
}

export default Test;
