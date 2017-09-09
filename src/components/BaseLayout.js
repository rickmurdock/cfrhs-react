import React, { Component } from 'react';
import Nav from './Nav';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <Nav>
          {this.props.children}
        </Nav>
      </div>
    );
  }
}

export default BaseLayout;