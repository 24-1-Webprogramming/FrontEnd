import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ClearUserPage = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (!userEmail) {
        console.error("No user email found in local storage.");
        navigate('/Error'); // Appropriately handling the lack of critical information
        return;
    }


    axios.post('http://soongitglwebp8.site/auth/secession', { user_id: userEmail })
        .then(response => {
            if (response.status === 200) {
                console.log('User data deletion successful:', response.data);
                setUserData(response.data);
                localStorage.clear(); // Clearing local storage is a good touch here
            } else {
                throw new Error('Failed to delete user data');
            }
        })
        .catch(err => {
            console.error('Error deleting user data:', err);
            setError(err.message);
            navigate('/Error'); // Proper error handling and navigation
        });
  }, [navigate]);

  return (
    <div>
      {userData ? (
        <div>
          <h1>User Deletion Successful</h1>
          <p>User ID: {userData.user_id}</p>
          <p>Nickname: {userData.nickname}</p>
          <p>Is Man: {userData.is_man ? 'Yes' : 'No'}</p>
          <p>D-Day: {new Date(userData.d_day).toLocaleDateString()}</p>
          <p>Password: {userData.password}</p>
          <p>First Login: {userData.isFirstLogin}</p>
          <p>Profile: {userData.profile}</p>
        </div>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p>Processing user data deletion...</p>
      )}
    </div>
  );
};

export default ClearUserPage;
