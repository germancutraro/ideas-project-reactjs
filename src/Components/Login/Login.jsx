import React, { Component } from 'react';
import './Login.css';
import { firebase, googleAuth } from '../../Firebase';
import { withRouter } from 'react-router-dom';

class Login extends Component {

  state = {
    auth: false
  }

  signIn = () => {
   firebase.auth().signInWithPopup(googleAuth)
   this.setState({ auth: true })
  };

  render() {
    return <button onClick={ this.signIn } className="Button-Google">Sign in with Google</button>
  }
};

export default withRouter(Login);