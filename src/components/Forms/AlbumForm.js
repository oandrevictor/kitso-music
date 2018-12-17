import React, { Component } from 'react';
import { Row, Col, Layout, Form, Icon, Input, Button, Checkbox, Select } from 'antd';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'
import reqwest from 'reqwest';


const FormItem = Form.Item;
const Option = Select.Option;

class AlbumForm extends Component {
  constructor(props){
    super(props)
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
    this.state = {perfomers: []}
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://kitso-music-api.herokuapp.com/album', values, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
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
      this.setState({
        initLoading: false,
        performers: res,
      });
    });
  }

    render() {
      const { getFieldDecorator } = this.props.form;
      const {performers} = this.state;

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
          <FormItem>
            {getFieldDecorator('description', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Description" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
          >
          {getFieldDecorator('_artist', {
            rules: [{ required: true,}],
          })(
            <Select defaultValue="none">
            <Option value="none"> none </Option>
            {performers &&
              performers.map(item =>
                <Option key={item._id} value={item._id}>{item.name}</Option>
              )
            }
            </Select>
          )}
          </FormItem>

          <FormItem>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Create
            </Button>
          </FormItem>
        </Form>
      );
    }
  }

export default Form.create()(AlbumForm);
