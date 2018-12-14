import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import './Topbar.css';
import { Router, Link } from 'react-router-dom'

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

  logOut = () => {
    localStorage.setItem("current_user", false)
    console.log("aaa")
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
        <Link to="/trending">
          <Icon type="fire" />
        </Link>
        </Menu.Item>
        <Menu.Item key="profile">
        <Link to="/profile">
          <Icon type="user" />
        </Link>
        </Menu.Item>
      </Menu>
      <div className="logout-area" onClick={this.logOut}>
        <p>Logout </p>
        <Icon type="logout" />
      </div>
      </div>
    );
  }
}

export default Topbar;
