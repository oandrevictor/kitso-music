import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import reqwest from 'reqwest';
import {withRouter} from 'react-router';
import SongInfo from './SongInfo'

class Song extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: JSON.parse(localStorage.getItem("current_user")),
    };
  }
  componentDidMount() {
    this.updateSong();
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

  updateSong = () => {
    var id = this.props.match.params.id;
    this.getData('https://kitso-music-api.herokuapp.com/song/' + id, (res) => {
      console.log(res)
      res.lyrics = "Open up your eyes \n There's nothing on my body left to see \n I tried a thousand times \n I tried to say 'I love you',\n but you didn't hear me And you're passive-aggressive \nConvinced me other people didn't care about me"
      this.setState({
        initLoading: false,
        song: res,
      });
    });
  }


  render() {
    const { song } = this.state;

    return (
      <div>
    <Row type="flex">
      <Col span={12}>

        {song &&
          <img src={song.image} />
          }
      </Col>
      <Col span={12}>
      {song &&<div>
        <SongInfo song={song} />
        </div>
        }
      </Col>
     </Row>
     </div>
    );
  }
}

export default withRouter(Song);
