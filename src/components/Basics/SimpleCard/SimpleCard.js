import { Row, Col, Layout, Card } from 'antd';
import React, { Component } from 'react';
import './SimpleCard.css';

const { Meta } = Card;

class SimpleCard extends Component {

  render() {
    return (
      <div>
        <Card
          hoverable
          cover={<img alt="example" src={this.props.image} />}
        >
          <Meta
            title={this.props.title}
            description={this.props.subtitle}
          />
        </Card>
      </div>
  );
  }
}
export default SimpleCard;
