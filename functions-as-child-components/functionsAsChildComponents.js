// From https://medium.com/@iammerrick/function-as-child-components-5f3920a9ace9#.5at7038c2

import React, { Component } from 'react';

class MyComponent extends Component {
  render() {
    return (
      <div>
        { this.props.children('Im the Bauce') }
      </div>
    );
  }
}

...
<MyComponent>
 { name => <div>{name}</div>}
</MyComponent>
