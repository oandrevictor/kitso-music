import React, { Component } from 'react';
import ListenedActivity from '../../ListenedActivity/ListenedActivity';
import FavoriteAlbuns from '../../FavoriteAlbuns/FavoriteAlbuns';
import SignInForm from '../../Forms/SignInForm';
import SignUpForm from '../../Forms/SignUpForm';
import { Row, Col, Layout } from 'antd';
import './SignIn.css';


class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = { showSignup: false }
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  toggleShowSignUp(){
    this.setState((state)=> ({
      showSignup: !state.showSignup
    }));
  }

  redirect(){
    window.location.replace("/profile")
  }

  render() {
    return (
      <div className="sign-in">
        <div className="sign-in-wrapper">
          <div className="sign-in-title">
            <h1>Sign In</h1>
          </div>
          { !this.state.showSignup &&
          <div className="sign-in-form">
            <SignInForm toggleShowSignUp={this.toggleShowSignUp} redirect={this.redirect}/>
          </div> }
          { this.state.showSignup &&
          <div className="sign-in-form">
            <SignUpForm />
          </div>
          }
       </div>
     </div>
    );
  }
}

export default SignIn;
