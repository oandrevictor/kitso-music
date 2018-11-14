import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ListenedActivity from './components/ListenedActivity/ListenedActivity';
import FavoriteAlbuns from './components/FavoriteAlbuns/FavoriteAlbuns';
import Topbar from './components/Topbar/Topbar';
import ProfileHeader from './components/ProfileHeader/ProfileHeader';
import { Row, Col } from 'antd';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Topbar />
      <ProfileHeader />
      <Row>
       <Col span={12}>
        <ListenedActivity />
      </Col>
      <Col span={12}>
       <FavoriteAlbuns />
     </Col>

      </Row>
      </div>
    );
  }
}

export default App;
