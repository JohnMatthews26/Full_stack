import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexContainer from '../photo/photo_index_container';
import {withRouter} from 'react-router';
import FollowContainer from '../follow/follow_container';

class UserProfile extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {

    this.props.requestSingleUser(this.props.match.params.user_id).then( () => {
      this.props.getFollow(this.props.match.params.user_id);
    } );

  }

  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.requestSingleUser(nextProps.match.params.user_id).then( () => {
        this.props.getFollow(nextProps.match.params.user_id);
      } );
    }
  }

  render() {

  const userId = this.props.match.params.user_id;
  const user = this.props.users.entities[userId];
  const username = user ? user.username : "";
      return (
        <div className="user-profile-parent">
          <div className="user-profile-top-section">
            <div className="user-profile-box">
              <div className="user-profile-photo">
                <img className="profile-pic-photo" src="http://res.cloudinary.com/roscoe/image/upload/v1501008468/bulldog_stock_photo_uwszgt.jpg"></img>

              </div>
              <FollowContainer />
              <div className="user-profile-username">
                {username}
              </div>
            </div>
          </div>
          <div className="user-profile-photo-section">
            <PhotoIndexContainer />
          </div>

        </div>
      );
  }
}

export default withRouter(UserProfile);
