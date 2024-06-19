import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CheckOnboard = () => {
  const [onboardData, setOnboardData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    console.log(email);
    if (savedEmail) {
        setEmail(savedEmail);
    }
    const fetchOnboardData = async () => {
      try {
        console.log(email);
        const response = await axios.post('http://soongitglwebp8.site/onboard/checkOnboard', {user_id : email});
        setOnboardData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchOnboardData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      {onboardData ? (
        <div>
          <h1>Onboarding Data</h1>
          <p><strong>User ID:</strong> {onboardData.user_id}</p>
          <p><strong>Purpose:</strong> {onboardData.purpose}</p>
          <p><strong>Period:</strong> {onboardData.period}</p>
          <p><strong>Push Ups:</strong> {onboardData.push_up}</p>
          <p><strong>Goal:</strong> {onboardData.goal}</p>
        </div>
      ) : (
        <div>No onboarding data found.</div>
      )}
    </div>
  );
};

export default CheckOnboard;
