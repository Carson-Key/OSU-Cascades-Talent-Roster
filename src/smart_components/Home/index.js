import React, { Component } from 'react';
import './index.css';

import SearchBox from '../../dumb_components/SearchBox/index.js'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div class="content-container">
        <div class="column-container">
          <SearchBox />
          <div class="content-column">
            <p>
            Content
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
