import React, { Component } from 'react';
import Stats from './Stats';
import Navbar from './Navbar';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Stats />
        <Main />
      </div>
    );
  }
}

export default App;
