import React from 'react';
import "./Idea.css";

const Idea = props => {
  const { displayName, idea, photoURL } = props;
  return (
    <div className="Idea-Wrapper">
      <h3 className="Idea">{ idea }</h3>
      <footer className="Idea-Footer">
        <img src={ photoURL } alt={displayName} className="Idea-User-Avatar" />
        <small className="Idea-User-Name">{ displayName }</small>
      </footer>
    </div>
  );
};

export default Idea;