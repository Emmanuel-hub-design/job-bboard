// src/components/EducationList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EducationList = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await axios.get('/educations');
        setEducations(response.data.educations);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <div>
      <h2>Educations</h2>
      <ul>
        {educations.map(education => (
          <li key={education.id}>
            {education.degree} - {education.institution} ({education.graduation_year})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EducationList;
