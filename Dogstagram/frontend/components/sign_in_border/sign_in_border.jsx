import React from 'react';
import { Link } from 'react-router-dom';

const loggedOutBorder = () => (
  <nav className="log-out-border-div">
    <section className="logged-out-border">
      <ul className="borderimages">
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0370_woasjv.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0354_p3hunu.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503775/IMG_0368_iwy0b9.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503776/IMG_0352_mnuoym.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503774/IMG_0377_ijtmvv.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0375_vzbmis.jpg"></img>
        </li>
        <li className="borderimage">
          <img src="http://res.cloudinary.com/roscoe/image/upload/v1500503773/IMG_0390_zvtjua.jpg"></img>
        </li>

      </ul>
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
