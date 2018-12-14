import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ListenedActivity from './components/ListenedActivity/ListenedActivity';
import FavoriteAlbuns from './components/FavoriteAlbuns/FavoriteAlbuns';
import Topbar from './components/Topbar/Topbar';
import Profile from './components/Profile/Profile';

import { Row, Col, Layout } from 'antd';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Topbar />
      <Profile />
      </div>
    );
  }
}

export default App;
