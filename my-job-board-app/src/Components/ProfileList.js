import React, { useState } from 'react';
import axios from 'axios';

const ProfileList = () => {
  const [profiles, setProfiles] = useState([]);
  const [content, setContent] = useState('');

  const fetchProfiles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/profiles');
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching profiles:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/profiles', { content });
      fetchProfiles();
      setContent('');
    } catch (error) {
      console.error('Error creating profile:', error);
    }
  };

  return (
    <div>
      <h2>Profiles</h2>
      <form onSubmit={handleFormSubmit}>
        <textarea
          placeholder="Profile Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Add Profile</button>
      </form>
      <ul>
        {profiles.map(profile => (
          <li key={profile.id}>{profile.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileList;
