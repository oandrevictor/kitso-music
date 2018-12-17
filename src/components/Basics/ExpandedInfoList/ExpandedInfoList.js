import React, { Component } from 'react';
import { List, Avatar, Icon } from 'antd';
import './ExpandedInfoList.css';

class ExpandedList extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }


  state = {
    initLoading: true,
    loading: false,
    listData: [],
    list: [],
  }

  componentDidMount() {
    const data = []
    for (let i = 0; i < 23; i++) {
      data.push({
        href: 'http://ant.design',
        title: `ant design part ${i}`,
        avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
        description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
        content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
      });
    }
    this.setState({
      listData: data
    })
  }


  render(){
    const IconText = ({ type, text }) => (
      <span>
        <Icon type={type} style={{ marginRight: 8 }} />
        {text}
      </span>
    );
    return <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: (page) => {
        console.log(page);
      },
      pageSize: 5,
    }}
    dataSource={this.props.dataSource}
    renderItem={item => (
      <List.Item
        key={item.name}
        extra={<img alt="logo" src={item.fallback_image} />}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.fallback_image} />}
          title={<a href={item.href}>{item.name}</a>}
          description= {item.bio}
        />

          {item.content}
      </List.Item>
    )}
  />
}}

export default ExpandedList;
