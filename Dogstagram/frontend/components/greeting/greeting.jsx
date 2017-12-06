import React from 'react';
import { Link } from 'react-router-dom';
import UploadPhotoContainer from '../upload_photo/upload_photo_container';
import SearchContainer from '../search/search_container';

const sessionLinks = () => (
  <nav className="login-page-nav">

    <section className="login-signup">
      <Link to="/login" className="login_signup_links">Login</Link>
      <Link to="/signup" className="login_signup_links">Sign up</Link>
    </section>

  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group" >

    <section className="logo_section">
      <Link to="/" className="logo_link_home">
        <h1 className="logo">
          <img className="logo"src="http://res.cloudinary.com/roscoe/image/upload/v1501173784/a1c6256038a53cb2a5055d06a0169b8d-png-150x125_nznv16.png" alt="logo"></img>
        </h1>
      </Link>
    </section>

    <section className="logout-myprofilebuttons">

      <button className="header-button" onClick={logout}>Log Out</button>
      <Link to={`/users/${currentUser.id}`} className="user_profile_link">My Profile</Link>
      <UploadPhotoContainer />
      <SearchContainer />
    </section>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
