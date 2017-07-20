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
import {AuthRoute} from '../util/route_util';
const App = () => (
  <div className="mainDiv">
    <section className="login-signup_container">
      <header>
        <GreetingContainer />
        <h1 className="logo">Dogstagram</h1>
      </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>
    </section>
    <SignInBorderContainer />
  </div>
);

export default App;
