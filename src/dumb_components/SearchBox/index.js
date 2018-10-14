import React, { Component } from 'react';
import './index.css';

import { Jumbotron } from 'reactstrap'

class SearchBox extends Component {
  // TODO: clean this up, and use reactstrap - Colin
  render() {
    const { name, test } = this.props

    return (
      <div class="filter-column">
        <div class="filter-container">
        <h3 class="filter-title"> Filter </h3>
          <div class="filter-option">
            <h4 class="filter-item-title"> Option 1 </h4>
            <select class="filter-item-select">
              <option> value 1 </option>
              <option> value 2 </option>
              <option> value 3 </option>
            </select>
          </div>
          <div class="filter-option">
            <h4 class="filter-item-title"> Option 2 </h4>
            <select class="filter-item-select">
              <option> value 1 </option>
              <option> value 2 </option>
              <option> value 3 </option>
            </select>
          </div>
          <div class="filter-option">
            <h4 class="filter-item-title"> Option 3 </h4>
            <select class="filter-item-select">
              <option> value 1 </option>
              <option> value 2 </option>
              <option> value 3 </option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBox;
