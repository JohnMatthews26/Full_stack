import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import {withRouter} from 'react-router';

class PhotoIndex extends Component {
  constructor(props) {
    super(props);

  }
  componentDidMount() {
    
    this.props.requestAllPhoto(this.props.match.params.user_id);
  }
  componentWillReceiveProps(nextProps) {

    if (this.props.match.params.user_id !== nextProps.match.params.user_id) {
      this.props.requestAllPhoto(nextProps.match.params.user_id);
    }
  }

  render() {
    const photos  = this.props.photo;
      return (
        <section className="photos_index">
          <ul className="photos_index">
            {photos.map(photo => <PhotoIndexItem key={photo.id}
              photo={photo} requestAllLikes={this.props.requestAllLikes}
              getLike={this.props.getLike} />)}
          </ul>
        </section>
      );
  }
}

export default withRouter(PhotoIndex);
