import React, { Component } from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import reqwest from 'reqwest';
import './ListenedActivity.css';

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&noinfo`;

class ListenedActivity extends Component {
  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
  }

  componentDidMount() {
    this.getData((res) => {
      this.setState({
        initLoading: false,
        data: res.results,
        list: res.results,
      });
    });
  }

  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        list: data,
        loading: false,
      }, () => {
        window.dispatchEvent(new Event('resize'));
      });
    });
  }

  render() {
    const { initLoading, loading, list } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        <Button onClick={this.onLoadMore}>loading more</Button>
      </div>
    ) : null;

    return (
      <div className="listened-activity">
      <h1 className="item-title">Last listened</h1>
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                avatar={<Avatar src="https://images-na.ssl-images-amazon.com/images/I/71eOtvpkeWL.png" />}
                title={<a href="https://ant.design">{item.name.last}</a>}
                description={<p>a song by <a href="https://ant.design">{item.name.first}</a> from <a href="https://ant.design">{item.location.city}</a></p>}
              />
              <List.Item>
              <div>1 minute ago</div>
              </List.Item>
            </Skeleton>
          </List.Item>
        )}
      />
      </div>
    );
  }
}

export default ListenedActivity;
