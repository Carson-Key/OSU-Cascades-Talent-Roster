import React, { Component } from 'react';
import './App.css';

import Header from './dumb_components/Header/index.js';
import SearchBox from './dumb_components/SearchBox/index.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Carson Key",
      test: "Not a Test"
    };
    console.log(this.state.name)
  }

  componentDidMount() {
    this.nameChange()
  }

  nameChange() {
    this.setState({ name: "Joe Smoch" }, () => { console.log(this.state.name) });
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Header />
        <SearchBox name={this.state.name} />
=======
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

>>>>>>> 3df01a48b242181d7284124b9b06a4c2fcd4e049
      </div>
    );
  }
}

export default App;
