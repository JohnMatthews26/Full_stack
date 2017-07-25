import React from 'react';
import { Link } from 'react-router-dom';

const PhotoIndexItem = ({ photo }) => (
  <li className="photo-index-item">
    <Link to={`/photos/${photo.id}`}>

      <img src={photo.url} alt={photo.id} className="photo-index-item" />

    </Link>
  </li>
);

export default PhotoIndexItem;
