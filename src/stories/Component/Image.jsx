// Image.jsx
import React, { useState } from 'react';

/*
* Component for displaying an image with a loading spinner.
*/

const Image = ({ src, alt, width, height, style, onClick, showLoader = true }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div style={{ position: 'relative', display: 'inline-block', ...style }}>
      {showLoader && isLoading && (
        <div style={{ 
          position: 'absolute', 
          top: '50%', 
          left: '50%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 1 
        }}>
          <div className="loader"></div> {/* 로딩 스피너 */}
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        onLoad={handleImageLoad} 
        onClick={handleClick} 
        style={{ 
          display: isLoading ? 'none' : 'block', 
          cursor: onClick ? 'pointer' : 'default' 
        }} 
      />
    </div>
  );
};

export default Image;
