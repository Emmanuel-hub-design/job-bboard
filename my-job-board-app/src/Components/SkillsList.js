import React, { useState } from 'react';
import axios from 'axios';

const SkillsList = () => {
  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');

  const fetchSkills = async () => {
    try {
      const response = await axios.get('http://localhost:5000/skills');
      setSkills(response.data); // Update to set the entire skills data
    } catch (error) {
      console.error('Error fetching skills:', error);
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/skills', { skill_name: skillName });
      fetchSkills();
      setSkillName('');
    } catch (error) {
      console.error('Error creating skill:', error);
    }
  };

  return (
    <div>
      <h2>Skills</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Skill Name"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
        <button type="submit">Add Skill</button>
      </form>
      <ul>
        {skills.map(skill => (
          <li key={skill.id}>{skill.skill_name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsList;

