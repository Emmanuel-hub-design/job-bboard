// src/components/SkillsList.jsx
// src/components/SkillsList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillsList = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axios.get('/skills');
        setSkills(response.data.skills);
      } catch (error) {
        console.error('Error fetching skills:', error);
      }
    };

    fetchSkills();
  }, []);

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.skill_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

