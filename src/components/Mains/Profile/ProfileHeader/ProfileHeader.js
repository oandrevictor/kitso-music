import React, { Component } from 'react';
import { Avatar } from 'antd';
import './ProfileHeader.css';



class ProfileHeader extends Component {
  render() {
    return (
      <div className="profile-header">
        <div className="avatar-wrapper">
          <Avatar size={128} icon="user" src={"https://pbs.twimg.com/profile_images/1059653282874998784/QMeJFmbR_400x400.jpg"} />
        </div>
        <div className="user-info">
        <h1 className="user-name">
          {this.props.user.name}
        </h1>
        <p className="user-username">
        @{this.props.user.username}
        </p>
        </div>
      </div>
    );
  }
}
export default ProfileHeader;
