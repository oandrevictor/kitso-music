import React, { Component } from 'react';
import ListenedActivity from '../../ListenedActivity/ListenedActivity';
import FavoriteAlbuns from '../../FavoriteAlbuns/FavoriteAlbuns';
import ProfileHeader from './ProfileHeader/ProfileHeader';
import { Row, Col, Layout } from 'antd';


class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: JSON.parse(localStorage.getItem("current_user")),
    };
  }
  render() {
    return (
      <div>
    <ProfileHeader user={this.state.user}/>
    <Row type="flex">
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

export default Profile;
