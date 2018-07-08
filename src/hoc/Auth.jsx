import React, { Component, Fragment } from 'react';
import { firebase } from '../Firebase';

class Auth extends Component {
  
  state = {
    auth: false
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) this.setState({ auth: true })
      else this.setState({ auth: false })
    })
  }

  render() {
    const { auth } = this.state;
    return (
      <Fragment>
        {auth && this.props.children}
      </Fragment>
    );  
  }
}

export default Auth;