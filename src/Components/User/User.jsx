import React, { Component } from "react";
import "./User.css";
import PubSub from "pubsub-js";
import Ideas from "../Ideas/Ideas";
import { GridLoader } from "react-spinners";
import { firebase, db } from "../../Firebase";

class User extends Component {
  state = {
    user: {},
    ideas: []
  };

  componentDidMount() {
    PubSub.subscribe("userInfo", (msg, data) => {
      this.setState({ user: { ...data } });
      this.getAllIdeas(this.props.match.params.id);
    });
  }

  signOut = () => {
    firebase.auth().signOut();
    this.props.history.replace("/");
  };

  getAllIdeas = userId => {
    db.ref("ideas").on("value", snapshot => {


      if (snapshot.val()) {

      let ideas = Object.values(snapshot.val()).filter(
        idea => idea.uid === userId
      );
      // set the state
      this.setState({ ideas }, () => {
        // We check if the url match the user id
        if (this.props.match.params.id !== this.state.user.uid)
          this.props.history.replace("/ooops");
          
      });
    } else {
      this.setState({ ideas: ['no ideas'] })
    }
    });




  };

  render() {
    if (Object.keys(this.state.user).length === 0 || this.state.ideas.length === 0)
      return <div className="Spinner-Wrapper"><GridLoader color={"#333"} /></div>;

    const { displayName, photoURL } = this.state.user;
    const { ideas } = this.state;

    return (
      <div>
        <nav className="User-Nav">
          <div className="User-Nav-Title">
            <h4 style={{ paddingLeft: '1rem' }}>Your Profile</h4>
          </div>
          <div>
            <a href="/add">
              <button className="Button-Primary">Add new idea</button>
            </a>
            <button onClick={this.signOut} className="Button-Danger">
              Sign Out
            </button>
          </div>
        </nav>
        <div className="User-Info-Wrapper">
          <img src={photoURL} alt={displayName} className="User-Avatar" />
          <h2 className="User-Name">{displayName}</h2>
          { this.state.ideas[0] !== 'no ideas' ? <Ideas ideas={ideas} /> : <p style={{ color: 'red' }}>No ideas</p> }
        </div>
      </div>
    );
  }
}

export default User;
