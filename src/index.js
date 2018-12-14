import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Topbar from './components/Topbar/Topbar';
import Profile from './components/Profile/Profile';
import Trending from './components/Trending/Trending';
import SignIn from './components/SignIn/SignIn';

function requireAuth(component){
  if (!JSON.parse(localStorage.getItem("current_user"))){
    return(<Redirect to="/login"/>)
  }else {
    return(component)
  }
}

function notLoggedOnly(component){
  if (JSON.parse(localStorage.getItem("current_user"))){
    return(<Redirect to="/"/>)
  }else {
    return(component)
  }
}

ReactDOM.render(
  <div>
    <BrowserRouter >
    <div>
      <Topbar />
        <Switch>
            <Route path="/login" render={()=> notLoggedOnly(<SignIn />)} />
            <Route path="/profile" render={()=> requireAuth(<Profile />)}/>
            <Route path="/trending" component={Trending} />
        </Switch>
        </div>
    </ BrowserRouter>
    </div>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
