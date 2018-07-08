import React, { Component } from 'react';
import './AddIdea.css';
import PubSub from "pubsub-js";
import addIdea from '../../Firebase/addIdea'; 

class AddIdea extends Component {
  state = {
    user: {},
    message: ''
  }

  createIdea = e => {
    e.preventDefault();
    addIdea(this.state.user, this.refs.ideaRef.value);
    this.setState({ message: 'Added!' });
  };

  componentDidMount() {
    PubSub.subscribe('userInfo', (msg, data) => {
      this.setState({ user: {...data} })
    });
  }
  
  render() {
    const { message } = this.state;
    const { uid } = this.state.user;
    return (
      <div className="Add-Idea-Wrapper">
        <form onSubmit={ this.createIdea }>
          <input type="text" placeholder="Write your next project..." ref="ideaRef" className="Add-Idea-Input" required minLength="5"/>
          <input type="submit" value="Add" className="Button-Primary Add-Idea-Button"/>
        </form>
        <div className="Output">
         <p>{ message } { message && <a href={`user/${uid}`}>Go to my profile</a> }</p>
        </div>
      </div>
    );
  }
};

export default AddIdea;

