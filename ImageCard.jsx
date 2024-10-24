import React from 'react';
import styles from './ImageCard.module.css';

const ImageCard = ({ image, setImage }) => {
  return (
    <div className={styles.card} onClick={setImage}>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageCard;
