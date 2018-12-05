import React, { Component } from 'react';
import ListenedActivity from '../ListenedActivity/ListenedActivity';
import FavoriteAlbuns from '../FavoriteAlbuns/FavoriteAlbuns';
import SignInForm from '../SignInForm/SignInForm';
import SignUpForm from '../SignUpForm/SignUpForm';

import { Row, Col, Layout } from 'antd';
import './SignIn.css';


class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = { showSignup: false }
    this.toggleShowSignUp = this.toggleShowSignUp.bind(this);
  }

  toggleShowSignUp(){
    this.setState((state)=> ({
      showSignup: !state.showSignup
    }));
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
            <SignInForm toggleShowSignUp={this.toggleShowSignUp}/>
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
