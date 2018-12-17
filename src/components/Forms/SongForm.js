import React, { Component } from 'react';
import { Row, Col, Layout, Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import reqwest from 'reqwest';


const FormItem = Form.Item;
const Option = Select.Option;

class SongForm extends Component {
  constructor(props){
    super(props)
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {perfomers: []}
  }

  handleSubmit(e){
    if (e) e.preventDefault();
    this.props.form.validateFields((err, values) => {
      values._performers = [values._performer]
      values._albuns = [values._album]
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://kitso-music-api.herokuapp.com/song', values, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
      .then(res => {
        console.log(res);
        this.props.updateCallBack();
        this.props.handleOk();
      })

      }
    });
  }
  toggleShowSignUp(){
    this.props.toggleShowSignUp();
  }
  redirect(){
    this.props.redirect();
  }

  componentDidMount() {
    this.updatePerformers();
    this.updateAlbuns();
    this.props.onRef(this);
  }

  componentWillUnmount() {
    this.props.onRef(undefined)
  }

  getData = (url, callback) => {
    reqwest({
      url: url,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }

  updatePerformers = () => {
    this.getData('https://kitso-music-api.herokuapp.com/performer', (res) => {
      console.log('pegou')
      this.setState({
        initLoading: false,
        performers: res,
      });
    });
  }

  updateAlbuns = () => {
    this.getData('https://kitso-music-api.herokuapp.com/album', (res) => {
      console.log(res)
      this.setState({
        initLoading: false,
        albuns: res,
      });
    });
  }

    render() {
      const { getFieldDecorator } = this.props.form;
      const {performers, albuns} = this.state;

      return (
        <Form onSubmit={this.handleSubmit}>
          <FormItem>
            {getFieldDecorator('spotify_id', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Spotify's ID" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('title', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Album Title" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('image', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Image" />
            )}
          </FormItem>

          <FormItem
            hasFeedback
          >
          {getFieldDecorator('_performer', {
            rules: [{ required: true,}],
          })(
            <Select defaultValue="none">
            {performers &&
              performers.map(item =>
                <Option key={item._id} value={item._id}>{item.name}</Option>
              )
            }
            </Select>
          )}
          </FormItem>

          <FormItem
            hasFeedback
          >
          {getFieldDecorator('_album', {
            rules: [{ required: true,}],
          })(
            <Select>
            {albuns &&
              albuns.map(item =>
                <Option key={item._id} value={item._id}>{item.title}</Option>
              )
            }
            </Select>
          )}
          </FormItem>
        </Form>
      );
    }
  }

export default Form.create()(SongForm);
