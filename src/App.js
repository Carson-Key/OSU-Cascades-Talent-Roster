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
        <Header />
        <SearchBox name={this.state.name} />
      </div>
    );
  }
}

export default App;
