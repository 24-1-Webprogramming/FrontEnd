// ClearStoragePage.js
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ClearStoragePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
    console.log("Local Storage Cleared!");
    navigate('/'); // Redirect to homepage or any other page after clearing storage
  }, [navigate]);

  return (
    <div>
      Clearing storage...
    </div>
  );
};

export default ClearStoragePage;
