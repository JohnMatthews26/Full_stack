import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutBorder = () => (
  <nav className="log-out-border-div">
    <section className="picture_of_app">
      
    </section>


  </nav>
);

const loggedInFooter = () => (
  <nav>
    <section className="logged-in-footer">

    </section>
  </nav>
);

const signInBorder = ({ currentUser, logout }) => (
  currentUser ? loggedInFooter() : loggedOutBorder()
);

export default signInBorder;
