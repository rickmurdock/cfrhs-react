import React, { Component } from 'react';
import TitleBar from './TitleBar';
import NavBar from './NavBar';
import FooterUpper from './FooterUpper';
import FooterLower from './FooterLower';

class BaseLayout extends Component {
  render() {
    return (
      <div>
        <TitleBar />
        <NavBar />
          {this.props.children}
        <FooterUpper />
        <FooterLower />
      </div>
    );
  }
}

export default BaseLayout;