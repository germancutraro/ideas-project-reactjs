import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
// Components
import Home from '../Layout/Home/Home';
import User from '../Components/User/User';
import AddIdea from '../Components/AddIdea/AddIdea';
import NotFound from '../Layout/NotFound/NotFound';

const Routes = props => (
  <Fragment>
    <Switch>
      <Route path="/" component={ Home } exact />
      <Route path="/user/:id" component={ User } exact />
      <Route path="/add" component={ AddIdea } exact />
      <Route component={ NotFound } />
      {/* <Route path="/ideas"  component={  } exact />
      <Route path="/user:id" component={  } exact /> */}
    </Switch>
  </Fragment>
);

export default Routes;