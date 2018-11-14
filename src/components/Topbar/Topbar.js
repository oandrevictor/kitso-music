import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './Topbar.css';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Topbar extends Component {
  state = {
    current: 'profile',
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="toolbar">
      <div className="logo"> Kitso <b>Music</b></div>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
      >
        <Menu.Item key="home">
          <Icon type="home" />
        </Menu.Item>
        <Menu.Item key="fire">
          <Icon type="fire" />
        </Menu.Item>
        <Menu.Item key="profile">
          <Icon type="user" />
        </Menu.Item>
      </Menu>
      <div className="logout-area">
        <p>Logout </p>
        <Icon type="logout" />
      </div>
      </div>
    );
  }
}

export default Topbar;
