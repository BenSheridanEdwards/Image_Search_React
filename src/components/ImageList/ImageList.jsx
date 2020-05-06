import './ImageList.css';
import React from 'react';
import ImageCard from '../ImageCard/ImageCard'

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />
  });

  return <div className="image-list" data-test="image">{images}</div>;
};

export default ImageList;
