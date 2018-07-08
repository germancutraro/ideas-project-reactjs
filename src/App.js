import React, { Component } from 'react';
import Routes from './Routes/Routes';
import PubSub from 'pubsub-js';
import { firebase } from './Firebase';

class App extends Component {

  state = {
    user: {
      uid: '',
      displayName: '',
      email: '',
      photoURL: ''
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        console.log('the info', displayName, email, photoURL)
         // Set the state
        this.setState({user: { uid, displayName, email, photoURL } });
        // Publish the info for other pages
        PubSub.publish('userInfo', this.state.user);
        PubSub.publish('userID', this.state.user.uid);
      } 
    })
  }


  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
