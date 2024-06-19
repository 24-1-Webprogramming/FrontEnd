import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // 로그인 상태를 로컬 스토리지에서 확인

  if (!isLoggedIn) {
    // 로그인 상태가 아니면 홈 페이지로 리다이렉션
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children; // 로그인 상태면 요청한 페이지 렌더링
};
