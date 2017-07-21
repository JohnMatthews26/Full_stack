import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends Component {
  componentDidMount() {
    this.props.requestAllPhoto();
  }

  render() {
    console.log(this.props);
    const photos  = this.props.photo;
    if (photos){
      return (
        <section className="photos_index">
          <ul className="photos_index">
            {photos.map(photo => <PhotoIndexItem key={photo.id} photo={photo} />)}
          </ul>
        </section>
      );
    }

  }
}

export default PhotoIndex;
