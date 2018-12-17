import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import reqwest from 'reqwest';
import {withRouter} from 'react-router';
import Lyrics from './Lyrics';
import HighlightText from '../../Basics/HighlightText';

class SongInfo extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div>
      <HighlightText main={this.props.song.title} sub={"by " + this.props.song._performers[0].name} image={this.props.song.image}/>
      <Lyrics lyrics={this.props.song.lyrics} />
      </div>
    )

  }

}
export default SongInfo;
