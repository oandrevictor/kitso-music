import React, { Component } from 'react';
import { Carousel, Card, Icon, Avatar } from 'antd';
import './FavoriteAlbuns.css';
const { Meta } = Card;


class FavoriteAlbuns extends Component {

  render() {
    return (
      <div className="favorite-albuns">
      <h1 className="item-title">Favorite Albuns</h1>
      <Carousel autoplay>
        <div className="card-wrapper">
          <Card
           style={{ width: 300 }}
           cover={<img alt="example" src="https://images-na.ssl-images-amazon.com/images/I/71q8pClPKNL._SY355_.jpg" />}
         >
           <Meta
             avatar={<Avatar src="https://images-na.ssl-images-amazon.com/images/I/71eOtvpkeWL.png" />}
             title="Electra Heart"
             description="Marina and The Diamonds"
           />
         </Card>
        </div>
        <div className="card-wrapper">
          <Card
           style={{ width: 300 }}
           cover={<img alt="example" src="https://jaansarkija.fi/wp-content/uploads/2017/07/froot.jpg" />}
         >
           <Meta
             avatar={<Avatar src="https://images-na.ssl-images-amazon.com/images/I/71eOtvpkeWL.png" />}
             title="FROOT"
             description="Marina and The Diamonds"
           />
         </Card>
        </div>
        <div className="card-wrapper">
          <Card
           style={{ width: 300 }}
           cover={<img alt="example" src="https://static.spin.com/files/2018/08/download-4-1534364435-640x640.jpeg" />}
         >
           <Meta
             avatar={<Avatar src="https://yt3.ggpht.com/a-/AN66SAzP4mT65hjC6EnKUl7wFx2udw65xLk2dNLbEg=s900-mo-c-c0xffffffff-rj-k-no" />}
             title="Queen"
             description="Nicki Minaj"
           />
         </Card>
        </div>
      </Carousel>
      </div>
    )
  };
};
export default FavoriteAlbuns;
