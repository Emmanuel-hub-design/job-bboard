// src/components/ResumeList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ResumeList = () => {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    const fetchResumes = async () => {
      try {
        const response = await axios.get('/resumes');
        setResumes(response.data.resumes);
      } catch (error) {
        console.error('Error fetching resumes:', error);
      }
    };

    fetchResumes();
  }, []);

  return (
    <div>
      <h2>Resumes</h2>
      <ul>
        {resumes.map(resume => (
          <li key={resume.id}>{resume.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeList;
