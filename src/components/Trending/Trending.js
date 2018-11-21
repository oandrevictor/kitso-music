import React, { Component } from 'react';
import ListenedActivity from '../ListenedActivity/ListenedActivity';
import FavoriteAlbuns from '../FavoriteAlbuns/FavoriteAlbuns';
import ExpandedInfoList from '../ExpandedInfoList/ExpandedInfoList';
import { Row, Col, Layout } from 'antd';


class Trending extends Component {
  constructor(props){
    super(props)
    this.state = props
  }
  render() {
    return (
      <div>
    <Row type="flex">
        <ExpandedInfoList/>
     </Row>
     </div>
    );
  }
}

export default Trending;
