import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import reqwest from 'reqwest';
import {withRouter} from 'react-router';


class HighlightText extends Component {
  constructor(props){
    super(props)
  }
  render() {

    return(
        <div className="clip-text clip-text_one"
              style={{backgroundImage: "url(" + this.props.image + ")"}} >
              {this.props.main}
              <br />
              <span className="artist-title"> {this.props.sub}</span></div>
  )

  }

}
export default HighlightText;
