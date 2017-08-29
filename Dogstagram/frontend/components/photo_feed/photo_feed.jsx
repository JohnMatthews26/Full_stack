import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoFeedItem from './photo_feed_item';
import {withRouter} from 'react-router';

class PhotoFeed extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {

    this.props.requestPhotoFeed();
    this.props.requestAllLikes(this.props.photo.id);
  }

  render() {
    const photos = this.props.photo;
      return (
        <section className="photos_feed">
          <ul className="photos_feed">
            {photos.map(photo =>
              <PhotoFeedItem key={photo.id} photo={photo} />)}
          </ul>
        </section>
    );
  }
}

export default withRouter(PhotoFeed);
