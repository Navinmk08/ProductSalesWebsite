import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [user, setUser] = useState(null);
  const [referralUsers, setReferralUsers] = useState([]);

  useEffect(() => {
    fetchProfile();
    fetchReferralUsers();
  }, []);

  const fetchProfile = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/profile');
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchReferralUsers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/user/referralUsers');
      setReferralUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>User Dashboard</h1>
      {user && (
        <div>
          <h2>Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          {/* Add other profile information here */}
        </div>
      )}
      {referralUsers.length > 0 && (
        <div>
          <h2>Referral Users</h2>
          <ul>
            {referralUsers.map((referralUser) => (
              <li key={referralUser._id}>
                {referralUser.username} - {referralUser.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
