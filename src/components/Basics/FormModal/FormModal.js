import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import ArtistForm from '../../Forms/ArtistForm';
import AlbumForm from '../../Forms/AlbumForm';
import SongForm from '../../Forms/SongForm';

class FormModal extends React.Component {
  constructor(props){
    super(props);
    this.child = React.createRef();
  }

  state = {
    visible: false,
    confirmLoading: false,
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }

  childSubmit = () => {
    this.child.handleSubmit();
  }

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading} = this.state;
    return (
      <div className="inline-block">
        <Button className="transparent-button" onClick={this.showModal}>
          +
        </Button>
        <Modal
          title={this.props.title}
          visible={visible}
          onOk={this.childSubmit}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          { this.props.isArtistForm && <ArtistForm onRef={ref => (this.child = ref)} updateCallBack={this.props.updateCallBack} handleOk={this.handleOk}/>}
          { this.props.isAlbumForm && <AlbumForm onRef={ref => (this.child = ref)} updateCallBack={this.props.updateCallBack} handleOk={this.handleOk}/>}
          { this.props.isSongForm && <SongForm onRef={ref => (this.child = ref)} updateCallBack={this.props.updateCallBack} handleOk={this.handleOk}/>}

        </Modal>
      </div>
    );
  }
}

export default FormModal;
