import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div class="content-container">
          <div class="column-container">

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

            <div class="content-column">
              <p>
              Content
              </p>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
