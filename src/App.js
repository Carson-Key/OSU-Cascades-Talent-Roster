import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './dumb_components/Header/index.js';
import Home from './smart_components/Home/index.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          { /* I can Explain during club what routes are */ }
          <Route exact path="/" component={Home} />
        </div>
      </Router>
    );
  }
}

export default App;
