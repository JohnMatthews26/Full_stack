import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav>
    <section className="login-signup">
      <Link to="/login" className="login_signup_links">Login/Demo</Link>
      <Link to="/signup" className="login_signup_links">Sign up</Link>
    </section>
    <section className="logo_section">
      <h1 className="logo"><img className="logo"src="http://res.cloudinary.com/roscoe/image/upload/c_scale,w_150/v1500572600/logo_bxburg.jpg" alt="logo"></img></h1>
    </section>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <section className="logo_section">
      <h1 className="logo"><img className="logo"src="http://res.cloudinary.com/roscoe/image/upload/c_scale,w_70/v1500572600/logo_bxburg.jpg" alt="logo"></img></h1>
    </section>
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
    <Link to={`/users/${currentUser.id}`} className="user_profile_link">My Profile</Link>

	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
