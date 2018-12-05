import './SignInForm.css';
import React, { Component } from 'react';
import { Row, Col, Layout, Form, Icon, Input, Button, Checkbox, } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;

class SignInForm extends Component {
  constructor(props){
    super(props)
    this.state = {
      userName: '',
    };
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        axios.post('https://kitso-music-api.herokuapp.com/auth', values, {headers: {'Content-Type': 'application/json'}})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

      }
    });
  }
  toggleShowSignUp(){
    this.props.toggleShowSignUp();
  }

    render() {
      const { getFieldDecorator } = this.props.form;
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: 'Username is required!' }],
            })(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Password is required!' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(
              <Checkbox>Remember me</Checkbox>
            )}
            <a className="login-form-forgot" href="">Forgot password</a>
            <br />
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <div className="centered">
              Or <a onClick={this.toggleShowSignUp}>register now!</a>
            </div>
          </FormItem>
        </Form>
      );
    }
  }

export default Form.create()(SignInForm);
