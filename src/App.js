import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ListenedActivity from './components/ListenedActivity/ListenedActivity';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Kitso Music
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <ListenedActivity />
      </div>
    );
  }
}

export default App;
