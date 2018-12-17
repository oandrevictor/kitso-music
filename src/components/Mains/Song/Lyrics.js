import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import reqwest from 'reqwest';
import {withRouter} from 'react-router';


class Lyrics extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return(
      <div className="lyrics-wrapper">
        <marquee behavior="scroll" direction="up" scrollamount="3" style={{height: '200px'}}>
        {this.props.lyrics}
     </marquee>
    </div>
  )

  }

}
export default Lyrics;
