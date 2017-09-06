import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {withRouter} from 'react-router';

class Like extends Component {

  constructor(props) {
    super(props);
    this.like = this.like.bind(this);
    this.unlike = this.unlike.bind(this);
    this.likeStatus = this.likeStatus.bind(this);
    this.likeCheck = this.likeCheck.bind(this);
  }
  componentWillMount(){
    this.props.requestAllLikes(this.props.photo.id);
  }


  like(e) {
    e.preventDefault();
    if (this.props.match.params.user_id) {
      this.props.createLike({photo_id: this.props.photo.id}).then( () => {
        this.props.requestAllPhoto(this.props.match.params.user_id);
      });
    } else {
      this.props.createLike({photo_id: this.props.photo.id}).then( () => {
        this.props.requestAllPhoto();
      });
    }

  }

  unlike(e) {
    e.preventDefault();

    if (this.props.match.params.user_id) {
      this.props.destroyLike(this.props.photo.id).then( () => {
        this.props.requestAllPhoto(this.props.match.params.user_id);
      });
    } else {
      this.props.destroyLike(this.props.photo.id).then( () => {
        this.props.requestAllPhoto();
      });
    }
  }
  likeCheck(el, idx, arr) {
    return el.user_id === this.props.currentUser.id;
  }

  likeStatus() {
    if (this.props.photo.likes.some(this.likeCheck)){
      return <button onClick={this.unlike}><img src="http://res.cloudinary.com/roscoe/image/upload/v1504204685/like_red_xbv9jx.png" className='like-button'></img></button>;
    } else {
      return <button onClick={this.like}><img src="http://res.cloudinary.com/roscoe/image/upload/v1504204681/like_white_omu7uz.png" className='like-button'></img></button>;
    }
  }
  render()  {

    return (
      <div className="like-div">{this.likeStatus()} {this.props.photo.likes.length} Likes</div>
    );
  }

}

export default withRouter(Like);
