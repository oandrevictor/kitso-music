import { Row, Col, Layout, Card } from 'antd';
import React, { Component } from 'react';
import SimpleCard from '../SimpleCard/SimpleCard';

const { Meta } = Card;

class SimpleCardGrid extends Component {
  constructor(props){
    super(props)
  }

  render() {
    var that = this;
    return (
      <div>
      <Row type="flex" justify="left">
          { this.props.data &&
            this.props.data.map(
              function(item) {
                return (
                  <Col key={item._id} span={3}>
                    <SimpleCard type={that.props.type} key={item._id} id={item._id} title={item.name || item.title} subtitle={item.name} image={item.fallback_image || item.image} />
                  </Col>
                )
              }
            )
          }
          </Row>
      </div>

  );
  }
}
export default SimpleCardGrid;
