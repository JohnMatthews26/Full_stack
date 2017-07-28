import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

class Follow extends Component {
  constructor(props) {
    super(props);

    this.follow = this.follow.bind(this);
    this.unfollow = this.unfollow.bind(this);
    this.followCondition = this.followCondition.bind(this);

  }

  follow(event) {
    event.preventDefault();
    this.props.createFollow({followee_id: this.props.match.params.user_id, follower_id: this.props.currentUser.id});

  }

  unfollow(event) {
    event.preventDefault();
    this.props.destroyFollow(this.props.match.params.user_id);

  }



  followCondition() {


    if (this.props.currentUser.id !==
      parseInt(this.props.match.params.user_id)) {

      if (this.props.users.entities[this.props.match.params.user_id]
        && this.props.users.followed) {
          console.log(this.props);
        return (
          <button className="follow-button" onClick={this.unfollow}>
            Unfollow
          </button>
        );
      } else {

        return (
          <button className="follow-button" onClick={this.follow}>
            Follow
          </button>
        );
      }
    } else {
      return (
        <button className="edit-profile-button">Edit Profile</button>
      );
    }
  }
  render() {

      return (
        <div className="follow-div">{this.followCondition()}</div>
      );
  }
}

export default withRouter(Follow);
