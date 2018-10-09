import React, { Component } from 'react';
import './index.css';

import { Jumbotron } from 'reactstrap'

class Header extends Component {
  render() {
    const { name, test } = this.props

    return (
      <Jumbotron>
        {name}
      </Jumbotron>
    );
  }
}

export default Header;
