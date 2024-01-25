// src/components/ExperienceList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get('/experiences');
        setExperiences(response.data.experiences);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <div>
      <h2>Experience List</h2>
      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            <strong>{experience.position}</strong> at {experience.company}<br />
            {experience.start_date} - {experience.end_date || 'Present'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceList;
