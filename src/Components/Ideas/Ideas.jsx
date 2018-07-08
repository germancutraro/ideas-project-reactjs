import React from 'react';
import Idea from '../Idea/Idea';

const Ideas = props => {
  const ideas = props.ideas.map( (idea, _) => <Idea key={ _ } { ...idea } />)
  return (
    <div>
      <h1>Ideas</h1>
      { ideas }
    </div>
  );
};

export default Ideas;