import React, { useEffect } from 'react';

const NaverMap = () => {
  useEffect(() => {
    const initializeMap = () => {
      const mapOptions = {
        center: new window.naver.maps.LatLng(37.3595704, 127.105399),
        zoom: 10,
      };

      const map = new window.naver.maps.Map('map', mapOptions);
    };

    const script = document.createElement('script');
    script.src = 'https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=r2ods5vvmf';
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }} />;
};

export default NaverMap;