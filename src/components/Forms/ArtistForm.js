import React, { Component } from 'react';
import { Form, Input, Button, Select } from 'antd';
import axios from 'axios';
import  { Redirect } from 'react-router-dom'



const FormItem = Form.Item;
const Option = Select.Option;

class ArtistForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
    };
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://kitso-music-api.herokuapp.com/performer', values, {headers: {'Content-Type': 'application/json'}, withCredentials: true})
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

    render() {
      const { getFieldDecorator } = this.props.form;
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
            {getFieldDecorator('name', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Artist/Band Name" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('fallback_image', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Fallback Image" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('bio', {
              rules: [{ required: true}],
            })(
              <Input placeholder="Bio" />
            )}
          </FormItem>
          <FormItem
            hasFeedback
          >
          {getFieldDecorator('_type', {
            rules: [{ required: true,}],
          })(
            <Select defaultValue="1">
              <Option value="person">Person</Option>
              <Option value="group">Group</Option>
            </Select>)}
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

export default Form.create()(ArtistForm);
