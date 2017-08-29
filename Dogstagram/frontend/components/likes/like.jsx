import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

class Like extends Component {

  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
  }
  like(e) {
    e.preventDefault();
    this.props.createLike({photo_id: this.props.photoId});
  }

  unlike(e) {
    e.preventDefault();

    this.props.destroyLike(this.props.photoId);
  }

  likeStatus() {
    console.log(this.props);

    return <button onClick={this.like}>Like</button>;

  }
  render()  {

    return (
      <div className="like-div">{this.likeStatus()}</div>
    );
  }

}

export default withRouter(Like);
