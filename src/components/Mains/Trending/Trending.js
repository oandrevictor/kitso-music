import React, { Component } from 'react';
import ListenedActivity from '../../ListenedActivity/ListenedActivity';
import FavoriteAlbuns from '../../FavoriteAlbuns/FavoriteAlbuns';
import ExpandedInfoList from '../../Basics/ExpandedInfoList/ExpandedInfoList';
import FormModal from '../../Basics/FormModal/FormModal';
import SimpleCardGrid from '../../Basics/SimpleCardGrid/SimpleCardGrid';
import SimpleCard from '../../Basics/SimpleCard/SimpleCard';
import './Trending.css';

import reqwest from 'reqwest';
import { Row, Col, Layout, Card } from 'antd';

const { Meta } = Card;


class Trending extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  getData = (url, callback) => {
    reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  componentDidMount() {
    this.updatePerformers();
    this.updateAlbuns();
    this.updateSongs();

  }

  updatePerformers = () => {
    this.getData('https://kitso-music-api.herokuapp.com/performer', (res) => {
      this.setState({
        initLoading: false,
        performer_list: res,
      });
    });
  }

  updateAlbuns = () => {
    this.getData('https://kitso-music-api.herokuapp.com/album', (res) => {
      console.log(res)
      this.setState({
        initLoading: false,
        albuns_list: res,
      });
    });
  }

  updateSongs = () => {
    this.getData('https://kitso-music-api.herokuapp.com/song', (res) => {
      console.log(res)
      this.setState({
        initLoading: false,
        songs_list: res,
      });
    });
  }

  render() {
    const {performer_list, albuns_list, songs_list} = this.state;
    return (
      <div className="trending-wrapper">

    <Row type="flex" >
      <Col span={24} className="card-row" >
        <h1>Top <span className="accent">Artists</span> <FormModal updateCallBack={this.updatePerformers} isArtistForm={true} /></h1>
        <SimpleCardGrid data={performer_list} />
      </Col>
      <Col span={24} className="card-row">
        <h1>Top <span className="accent">Albuns</span> <FormModal updateCallBack={this.updateAlbuns} isAlbumForm={true}/></h1>
        <SimpleCardGrid data={albuns_list} />
      </Col>
      <Col span={24} className="card-row">
        <h1>Top <span className="accent">Songs</span> <FormModal updateCallBack={this.updateSongs} isSongForm={true} /></h1>
        <SimpleCardGrid data={songs_list} />
      </Col>
     </Row>
     </div>
    );
  }
}

export default Trending;
