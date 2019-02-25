import React, { Component } from 'react';
import TopPanel from './components/TopPanel';
import InputLogin from './components/Input-Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopPanel/>
        <InputLogin/>
      </div>
    );
  }
}

export default App;
