import React from 'react';
import { useLocation } from 'react-router-dom';

const Test = () => {
  const location = useLocation();
  const { uploadedImage } = location.state || {};

  return (
    <div>
      {uploadedImage ? (
        <img src={uploadedImage} alt="Uploaded Exercise" />
      ) : (
        <p>No image uploaded</p>
      )}
    </div>
  );
};

export default Test;
