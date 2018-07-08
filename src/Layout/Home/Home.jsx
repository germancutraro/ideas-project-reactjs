import React, { Component } from 'react';
import './Home.css';
import PubSub from 'pubsub-js';
import { GridLoader } from 'react-spinners';

import Login from '../../Components/Login/Login';
import Auth from '../../hoc/Auth';

class Home extends Component {

  state = {
    user: {},
    id: null,
    loading: true
  }

  componentDidMount() {
    PubSub.subscribe('userID', (_, id) => {
      this.setState({ id });
    });
    PubSub.subscribe('userInfo', (_, data) => {
      this.setState({ user: { ...data } });
    });
    setTimeout(() => this.setState({ loading: false }), 2500);
  }

  render() {
    if (this.state.loading)
      return <div className="Spinner-Wrapper"><GridLoader color={'#333'} /></div>;
    return (
      <div className="Home-Wrapper">
        <h1 className="Home-Title">A place to expand your next projects</h1>
          { !this.state.id && <Login /> }
        <Auth>
           <a href={`user/${this.state.id}`}>
            <button className="Button-Primary">Go to profile</button>
           </a> 
        </Auth>
      </div>
    );
  }
};

export default Home;