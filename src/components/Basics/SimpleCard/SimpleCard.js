import { Row, Col, Layout, Card, Icon } from 'antd';
import React, { Component } from 'react';
import './SimpleCard.css';
import { Router, Link } from 'react-router-dom'

const { Meta } = Card;

class SimpleCard extends Component {


  render() {
    return (
      <div>
      <Link to={this.props.type + "/" + this.props.id}>
        <Card
          hoverable
          cover={<img alt="example" src={this.props.image} />}
        >
          <Meta
            title={this.props.title}
            description={this.props.subtitle}
          />
        </Card>
        </Link>
      </div>
  );
  }
}
export default SimpleCard;
