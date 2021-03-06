import React, { Component } from 'react';
import Modal from 'react-modal';
import {withRouter} from 'react-router';
import { Link } from 'react-router-dom';
import LikesContainer from '../likes/likes_container';
import CommentsContainer from '../comments/comments_container';

class PhotoFeedItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: this.props.photo.url,
      id: this.props.photo.id,
      username: this.props.photo.username,
      description: this.props.photo.description,
      user_id: this.props.photo.user_id
    };

  }







  render(){



    return (
      <div className="photo-feed-div">
        <li className="photo-feed-li">
          <div className="image-show-username">
            <img className="profile-pic-thumbnail"
              src="http://res.cloudinary.com/roscoe/image/upload/v1501008468/bulldog_stock_photo_uwszgt.jpg">
            </img>

            <Link to={`/users/${this.state.user_id}`}>{this.state.username}</Link>

          </div>
          <img src={this.state.url}
            alt={this.state.id}
            className="photo-feed-img" />
          <div className='photo-info-bottom-section'>
              <LikesContainer photo={this.props.photo}/>
                <div className='username-description'>
                  <div className='username-div'>{this.state.username}</div>
                  <div className="description-div">{this.state.description}</div>
                </div>
              <CommentsContainer photo={this.props.photo}/>
          </div>
        </li>
      </div>
    );
  }
}

export default withRouter(PhotoFeedItem);
