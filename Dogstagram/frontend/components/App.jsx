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
import UserProfileContainer from './user_profile/user_profile_container';
import UploadPhotoContainer from './upload_photo/upload_photo_container';
import {AuthRoute} from '../util/route_util';
import {ProtectedRoute} from '../util/route_util';

import PhotoFeedContainer from './photo_feed/photo_feed_container';



const App = () => (
  <div className="mainDiv">
      <header>
        <GreetingContainer />
      </header>
      <Switch>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </Switch>

    <Switch>
    <ProtectedRoute path="/users/:user_id" component={UserProfileContainer} />
    <ProtectedRoute path="/" component={PhotoFeedContainer} />
    </Switch>
  </div>
);

export default App;
