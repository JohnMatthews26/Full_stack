import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexContainer from '../photo/photo_index_container';

class UserProfile extends Component {
  componentDidMount() {

  }

  render() {

      return (
        <div className="user-profile-parent">
          <div className="user-profile-top-section">

          </div>
          <div className="user-profile-photo-section">
            <PhotoIndexContainer />
          </div>

        </div>
      );
  }
}

export default UserProfile;
