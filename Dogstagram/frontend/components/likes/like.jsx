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
  componentWillMount(){
    this.props.requestAllLikes(this.props.photoId);
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
    if (!this.props.likes.likes){
      return null;
    }

      if (this.props.likes.likes[this.props.currentUser.id]){
        return <button onClick={this.unlike}><img src="http://res.cloudinary.com/roscoe/image/upload/v1504204685/like_red_xbv9jx.png" className='like-button'></img></button>;
      } else {
        return <button onClick={this.like}><img src="http://res.cloudinary.com/roscoe/image/upload/v1504204681/like_white_omu7uz.png" className='like-button'></img></button>;
      }
  }
  render()  {

    return (
      <div className="like-div">{this.likeStatus()} {Object.keys(this.props.likes.likes).length} Likes</div>
    );
  }

}

export default withRouter(Like);
