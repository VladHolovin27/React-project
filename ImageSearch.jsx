import React from 'react';
import ImageCard from '../ImageCard/ImageCard'; 

const ImageSearch = ({ images, setImage }) => {
  if (!images || images.length === 0) {
    return <div>Немає результатів для відображення.</div>;
  }

  return (
    <div>
      {images.map((image) => (
        <ImageCard key={image.id} image={image} setImage={() => setImage(image)} />
      ))}
    </div>
  );
};

export default ImageSearch;

  