import React, { useEffect } from 'react';

const NaverMap = () => {
  useEffect(() => {
    const initializeMap = () => {
      const map = new window.naver.maps.Map('map', {
        center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울 중심 좌표
        zoom: 10,
      });

      // 현재 위치 표시
      window.naver.maps.Service.geolocation.getCurrentPosition(function(position) {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;

        const currentLocation = new window.naver.maps.LatLng(lat, lng);
        map.setCenter(currentLocation);

        new window.naver.maps.Marker({
          position: currentLocation,
          map: map,
        });
      });
    };

    const script = document.createElement('script');
    script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=YOUR_CLIENT_ID`;
    script.onload = initializeMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default NaverMap;
