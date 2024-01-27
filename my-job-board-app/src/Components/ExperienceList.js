import React, { useState } from 'react';
import axios from 'axios';

const ExperienceList = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    position: '',
    company: '',
    start_date: '',
    end_date: '',
    user_id: '' // Assuming you have user_id available
  });

  const fetchExperiences = async () => {
    try {
      const response = await axios.get('http://localhost:5000/experiences');
      setExperiences(response.data.experiences);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching experiences:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/experiences', formData);
      fetchExperiences();
      setFormData({
        position: '',
        company: '',
        start_date: '',
        end_date: '',
        user_id: '' // Reset the form fields
      });
    } catch (error) {
      console.error('Error creating experience:', error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Experience List</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" name="position" placeholder="Position" value={formData.position} onChange={handleInputChange} required />
        <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleInputChange} required />
        <input type="date" name="start_date" placeholder="Start Date" value={formData.start_date} onChange={handleInputChange} required />
        <input type="date" name="end_date" placeholder="End Date" value={formData.end_date} onChange={handleInputChange} />
        <input type="text" name="user_id" placeholder="User ID" value={formData.user_id} onChange={handleInputChange} required />
        <button type="submit">Add Experience</button>
      </form>
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
