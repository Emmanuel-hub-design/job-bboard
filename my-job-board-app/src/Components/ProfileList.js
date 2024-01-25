// src/components/ProfileList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await axios.get('/profiles');
        setProfiles(response.data.profiles);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      <h2>Profiles</h2>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>{profile.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
