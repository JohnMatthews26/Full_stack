import React from 'react';
import { Provider, Redirect } from 'react-redux';
import {
  Route,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import SignInBorderContainer from './sign_in_border/sign_in_border_container';
import PhotoIndexContainer from './photo/photo_index_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';

const App = () => (
  <div className="mainDiv">
    <section className="login-signup_container">
      <header>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </section>
    <ProtectedRoute path="/photos" component={PhotoIndexContainer} />
    <SignInBorderContainer />
  </div>
);

export default App;
