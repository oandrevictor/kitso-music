import './SignUpForm.css';

import {
  Form, Input, DatePicker, Col, TimePicker, Select, Cascader, InputNumber, Icon, Button
} from 'antd';
import React, { Component } from 'react';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 5 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};


class SignUpForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://kitso-music-api.herokuapp.com/user', values, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

      }
    });
  }

  render(){
    const { getFieldDecorator } = this.props.form;
      return<Form onSubmit={this.handleSubmit} className="login-form">
    <FormItem
      help="Name is a necessary is necessary"
    >
    {getFieldDecorator('name', {
      rules: [{ required: true, message: 'Username is required!' }],
    })(
      <Input placeholder="Name" />)}
    </FormItem>

    <FormItem
      help="Should be combination of numbers & alphabets"
    >
    {getFieldDecorator('email', {
      rules: [{ required: true, message: 'Email required!' }],
    })(
      <Input placeholder="Email" />)}
    </FormItem>

    <FormItem
      id="username"
      help="Should be combination of numbers & alphabets"
    >
    {getFieldDecorator('username', {
      rules: [{ required: true, message: 'Username is required!' }],
    })(
      <Input placeholder="Username" />)}
    </FormItem>


    <FormItem>
      {getFieldDecorator('password', {
        rules: [{ required: true, message: 'Password is required!' }],
      })(
        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
      )}
    </FormItem>


    <FormItem
      hasFeedback
    >
    {getFieldDecorator('birthday', {
      rules: [{ required: true, message: 'Username is required!' }],
    })(
      <DatePicker placeholder="Birthday" style={{ width: '100%' }} />)}
    </FormItem>

    <FormItem
      hasFeedback
    >
    {getFieldDecorator('gender', {
      rules: [{ required: true, message: 'Gender is required!' }],
    })(
      <Select defaultValue="1">
        <Option value="male">Male</Option>
        <Option value="female">Female</Option>
        <Option value="other">Other</Option>
      </Select>)}
    </FormItem>
    <div className="submit-area">
      <FormItem>
        <Button type="primary" htmlType="submit" className="submit-button">Submit</Button>
      </FormItem>
    </div>
  </Form>

  }


}
export default Form.create()(SignUpForm);
